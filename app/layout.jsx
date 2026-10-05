import './globals.css';

export const metadata = {
  title: 'منصة التوصيل المتكاملة - عميل، سائق، ومطعم',
  description: 'تطبيق توصيل متكامل يربط بين العملاء، السائقين، وأصحاب المطاعم بكفاءة عالية.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}