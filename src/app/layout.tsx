import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';

export const metadata: Metadata = {
    title: 'Danish Ahmed | AI Engineer & Problem Solver',
    description: 'Portfolio of Danish Ahmed - AI Engineer passionate about building scalable systems and solving complex problems.',
    keywords: ['Danish Ahmed', 'AI Engineer', 'Portfolio'],
    authors: [{ name: 'Danish Ahmed' }],
    openGraph: {
        title: 'Danish Ahmed | AI Engineer',
        description: 'Portfolio of Danish Ahmed - AI Engineer passionate about building scalable systems.',
        url: 'https://danishahmed.me',
        siteName: 'Danish Ahmed Portfolio',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Analytics />
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
