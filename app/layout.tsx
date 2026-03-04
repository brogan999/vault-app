import { JetBrains_Mono, Playfair_Display } from "next/font/google";
import { routing } from "@/i18n/routing";
import { CrispChat } from "@/components/providers/crisp-chat";
import { cookies } from "next/headers";
import "./globals.css";

const RTL_LOCALES = new Set(["ar", "he", "fa"]);

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "greek", "vietnamese"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext", "cyrillic", "vietnamese"],
  display: "swap",
});

export default async function RootLayout({
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

  const cookieStore = await cookies();
  const locale =
    cookieStore.get("NEXT_LOCALE")?.value || routing.defaultLocale;
  const dir = RTL_LOCALES.has(locale) ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <head />
      <body
        className={`${jetbrainsMono.variable} ${playfairDisplay.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:text-sm focus:font-medium focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Skip to content
        </a>
        {children}
        <CrispChat />
        <script dangerouslySetInnerHTML={{ __html: stripCursorRefsScript }} />
      </body>
    </html>
  );
}
