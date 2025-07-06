import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RealEstate Pro - Comprehensive Property Management System',
  description: 'Professional real estate management platform for property owners, project managers, accountants, site supervisors, sales agents, HR managers, and auditors. Streamline operations, track finances, manage projects, and optimize your real estate business.',
  keywords: 'real estate management, property management, construction management, financial tracking, project management, property investment, real estate software, property portfolio, construction projects, real estate accounting',
  authors: [{ name: 'RealEstate Pro Team' }],
  creator: 'RealEstate Pro',
  publisher: 'RealEstate Pro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://realestate-pro.com'),
  openGraph: {
    title: 'RealEstate Pro - Comprehensive Property Management System',
    description: 'Professional real estate management platform for property owners, project managers, accountants, site supervisors, sales agents, HR managers, and auditors.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RealEstate Pro - Property Management System',
    description: 'Professional real estate management platform for comprehensive property operations.',
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
