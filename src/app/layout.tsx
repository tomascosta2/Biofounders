import Script from "next/script";
import "./globals.css";
import '@fontsource-variable/league-spartan';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Bio Founders',
  description: 'Ayudamos a yoga teachers a conseguir nuevos clientes con un sistema simple de anuncios'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://dev.visualwebsiteoptimizer.com" />
        {/* Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QK7JFDR95G"></script>
        <Script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-QK7JFDR95G');`}
        </Script>

      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
