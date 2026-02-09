import { JetBrains_Mono } from "next/font/google";
import { routing } from "@/i18n/routing";
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

  return (
    <html lang={routing.defaultLocale} suppressHydrationWarning>
      <body
        className={`${jetbrainsMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        <script dangerouslySetInnerHTML={{ __html: stripCursorRefsScript }} />
      </body>
    </html>
  );
}
