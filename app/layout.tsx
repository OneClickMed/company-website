import type { Metadata } from 'next'
import Script from 'next/script'
import { defaultDescription, defaultOgImage, defaultTitle, siteName, siteUrl } from '@/lib/seo'
import './globals.css'
import localFont from 'next/font/local'
import SenderFormRouteRefresh from '@/components/SenderFormRouteRefresh'

const operatta = localFont({
  src: '../public/Operetta Medium/fonnts.com-operetta8-demibolditalic.otf',
  display: 'swap',
  variable: '--font-operatta-8',
})

const disableBrowserConsole = process.env.NEXT_PUBLIC_DISABLE_BROWSER_CONSOLE !== 'false'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  manifest: '/manifest.webmanifest',
  keywords: [
    'OneClickMed',
    'digital health ehr',
    'EHR',
    'telemedicine',
    'healthcare interoperability',
    'Nigeria health tech',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: defaultTitle,
    description: defaultDescription,
    siteName,
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${siteName} logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/ocm-icon.png',
    shortcut: '/ocm-icon.png',
    apple: '/Logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={operatta.variable}>
      <body>
        {disableBrowserConsole ? (
          <Script
            id="disable-browser-console"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function () {
                  var methods = ['log', 'info', 'warn', 'error', 'debug', 'trace'];
                  var noop = function () {};
                  for (var i = 0; i < methods.length; i++) {
                    try { console[methods[i]] = noop; } catch (e) {}
                  }
                })();
              `,
            }}
          />
        ) : null}
        <Script
          id="sender-universal"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function (s, e, n, d, er) {
                s['Sender'] = er;
                s[er] = s[er] || function () {
                  (s[er].q = s[er].q || []).push(arguments)
                }, s[er].l = 1 * new Date();
                s[er].on = function(event, callback) {
                  s[er].listeners = s[er].listeners || {};
                  (s[er].listeners[event] = s[er].listeners[event] || []).push(callback);
                };
                var a = e.createElement(n),
                    m = e.getElementsByTagName(n)[0];
                a.async = 1;
                a.src = d;
                m.parentNode.insertBefore(a, m)
              })(window, document, 'script', 'https://cdn.sender.net/accounts_resources/universal.js', 'sender');
              sender('c7b842368a4574')
            `,
          }}
        />
        <SenderFormRouteRefresh />
        {children}
        <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
              (function(){
                var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = 'https://embed.tawk.to/69d51eee71dd941c37ccfaa2/1jlk81lcr';
                s1.charset = 'UTF-8';
                s1.setAttribute('crossorigin', '*');
                s0.parentNode.insertBefore(s1, s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
