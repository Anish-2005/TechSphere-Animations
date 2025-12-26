import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechSphere Animations - Interactive 3D Tech Visualizations",
  description: "Explore interactive 3D animations showcasing Full Stack Development, AI/ML, DevOps, Mobile Development, and more. Professional visualizations for modern technology concepts with real-time rendering.",
  keywords: ["3D animations", "tech visualizations", "interactive demos", "full stack development", "AI machine learning", "DevOps", "mobile development", "web development", "technology education"],
  authors: [{ name: "TechSphere" }],
  creator: "TechSphere",
  publisher: "TechSphere",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://techsphere-animations.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "TechSphere Animations - Interactive 3D Tech Visualizations",
    description: "Explore interactive 3D animations showcasing modern technology concepts. Real-time rendering with professional visualizations.",
    url: 'https://techsphere-animations.com',
    siteName: 'TechSphere Animations',
    images: [
      {
        url: '/logoan.png',
        width: 1200,
        height: 630,
        alt: 'TechSphere Animations Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "TechSphere Animations - Interactive 3D Tech Visualizations",
    description: "Explore interactive 3D animations showcasing modern technology concepts.",
    images: ['/logoan.png'],
    creator: '@techsphere',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logoan.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "TechSphere Animations",
              "description": "Interactive 3D animations showcasing modern technology concepts",
              "url": "https://techsphere-animations.com",
              "publisher": {
                "@type": "Organization",
                "name": "TechSphere",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://techsphere-animations.com/logoan.png"
                }
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://techsphere-animations.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-white/10 shadow-lg">
          <div className="container mx-auto px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Image
                  src="/logoan.png"
                  alt="TechSphere Animations Logo"
                  width={40}
                  height={40}
                  className="rounded-lg shadow-md ring-1 ring-white/20"
                  priority
                />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  TechSphere
                </h1>
                <p className="text-xs text-gray-400 -mt-1">Animations</p>
              </div>
            </div>

            <div className="hidden md:block">
              <p className="text-sm text-gray-300 font-medium">
                Interactive 3D Tech Visualizations
              </p>
            </div>
          </div>
        </header>
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
