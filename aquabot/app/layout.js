import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AquaBot - AI Powered Maritime Intelligence",
  description: "Harness the power of AI to optimize voyages, match cargo, and gain critical market insights.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      
      </head>
      {/* The body will now render the page content passed as children */}
      <body className={inter.className}>
        {/* header */}
        <main className="min-h-screen">{children}</main>
        {children}
        {/*footer */}
        <footer className="bg-white-50 text-white p-4 text-center">
          <div className="container mx-auto ox-4 text-center text-gray-600">
            <p>Made by team CodeItUp</p>
            </div>
        </footer>
        </body>
    </html>
  );
}

