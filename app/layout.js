import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { BASE_URL } from '@/lib/constants';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { ViewTransitions } from 'next-view-transitions';
import { Cabin } from 'next/font/google';

import './globals.css';

const cabin = Cabin({
  subsets: ['latin'],
  display: 'swap'
});
export const viewport = {
  colorScheme: 'only dark',
  themeColor: '#1A1F2A'
};
export async function generateMetadata() {
  return {
    referrer: 'origin',
    pageType: 'Portfolio',
    other: {
      'page-type': 'Portfolio',
      copyright: 'Varun Dineshan',
      audience: 'Everyone',
      'itemProp:name': 'Varun Dineshan | AI Engineer',
      'itemProp:description':
        'Varun Dineshan is an AI Engineer & Data Analyst from Canada',
      'itemProp:image': `${BASE_URL}/opengraph-image.png`
    },
    metadataBase: new URL(BASE_URL),

    title: {
      default: 'Varun Dineshan | AI Engineer',
      template: '%s | Varun Dineshan'
    },
    verification: {
      google: 'process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION'
    },

    description:
      'Varun Dineshan is an AI Engineer & Data Analyst from Canada',

    applicationName: 'Varun Dineshan',

    keywords: [
      'Varun',
      'varun dineshan',
      'Varun Dineshan',
      'varun website',
      'dineshan ca',
      'varun portfolio',
      'AI Engineer',
      'Artificial Intelligence',
      'AI',
      'RAG Systems',
      'Augmented Generation',
      'Canada',
      'open source contributor'
    ],
    authors: [{ name: 'Varun Dineshan', url: BASE_URL }],
    creator: 'Varun Dineshan',
    publisher: 'Varun Dineshan',

    openGraph: {
      title: 'Varun Dineshan',
      description:
        'AI Engineer ',
      authors: ['Varun Dineshan'],
      url: BASE_URL,
      siteName: 'Varun Dineshan',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${BASE_URL}/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: 'Varun Dineshan | AI Engineer',
          type: 'image/png'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Varun Dineshan',
      description:
        'Varun Dineshan is an AI Engineer & Data Analyst from Canada',
      images: [`${BASE_URL}/opengraph-image.png`],
      creator: '@connectshafin',
      site: '@connectshafin',
      url: BASE_URL
    },
    icons: {
      icon: '/favicon.ico'
    },
    manifest: `${BASE_URL}/manifest.json`,
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false
      }
    },
    languages: {
      'en-US': '/en-US'
    }
  };
}

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${cabin.className} h-full scroll-smooth`}>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
        <body className="antialiased">
          <Navbar />
          <main className="relative isolate overflow-hidden">
            <div className="mx-auto min-h-svh w-full max-w-[50rem] px-5 py-3 pt-16 md:px-10 lg:px-0">
              {children}
            </div>
          </main>
          <Footer />
        </body>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
      </html>
    </ViewTransitions>
  );
}
