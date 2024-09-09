import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OneClick-Med",
  description: "Transforming healthcare through centralized patient registration and data management, OneClick-Med pioneers with our One-Time Registration (OTR) and Electronic Medical Record (EMR) system. Elevate your healthcare experience with enhanced inter-connectivity, ensuring effortless access for superior patient care across the entire ecosystem. Optimize your journey to wellness with OneClick-Med.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${inter.className} max-w-screen-1500 mx-auto lg:px-8`}>
        {children}
        </body>
    </html>
  );
}
