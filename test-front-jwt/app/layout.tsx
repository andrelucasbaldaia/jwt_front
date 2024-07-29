'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from 'next/navigation';
import { checkIsPublicRoute } from './functions/check-is-public-route';
import PrivateRoute from './components/PrivateRoute';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  const pathname = usePathname();
 
  const isPublicPage = checkIsPublicRoute(pathname!);

  console.log(isPublicPage);

  return (
    <html lang="en">
      <body className={inter.className}>
        {isPublicPage && children}
        {!isPublicPage&& <PrivateRoute>{children}</PrivateRoute>}
      </body>
    </html>
  );
}
