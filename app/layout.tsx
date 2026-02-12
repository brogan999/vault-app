import { JetBrains_Mono } from "next/font/google";
import { routing } from "@/i18n/routing";
import { CrispChat } from "@/components/providers/crisp-chat";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Strip data-cursor-ref injected by Cursor's browser/extension so server HTML matches client and React doesn't hydration-warn.
  const stripCursorRefsScript = `
(function(){
  function strip(el){
    if (!el) return;
    if (el.removeAttribute) el.removeAttribute('data-cursor-ref');
    if (el.childNodes) for (var i = 0; i < el.childNodes.length; i++) strip(el.childNodes[i]);
  }
  function run(){
    strip(document.body);
    var obs = new MutationObserver(function(mutations){
      for (var i = 0; i < mutations.length; i++) {
        var m = mutations[i];
        if (m.type === 'attributes' && m.attributeName === 'data-cursor-ref' && m.target.removeAttribute)
          m.target.removeAttribute('data-cursor-ref');
        for (var j = 0; j < (m.addedNodes && m.addedNodes.length) || 0; j++) {
          var n = m.addedNodes[j];
          if (n.nodeType === 1) { n.removeAttribute('data-cursor-ref'); strip(n); }
        }
      }
    });
    obs.observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-cursor-ref'] });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();
`.replace(/\n/g, " ");

  // Blocking script to apply dark mode before first paint (prevents flash of light mode).
  // Reads from Zustand persisted store in localStorage; falls back to "dark".
  const themeScript = `
(function(){
  try {
    var stored = localStorage.getItem('theme-storage');
    var theme = 'dark';
    if (stored) {
      var parsed = JSON.parse(stored);
      if (parsed && parsed.state && parsed.state.theme) theme = parsed.state.theme;
    }
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  } catch(e) {
    document.documentElement.classList.add('dark');
  }
})();
`.replace(/\n/g, " ");

  return (
    <html lang={routing.defaultLocale} className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${jetbrainsMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        <CrispChat />
        <script dangerouslySetInnerHTML={{ __html: stripCursorRefsScript }} />
      </body>
    </html>
  );
}
