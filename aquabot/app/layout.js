import { Inter } from "next/font/google";
import "./globals.css";
import Authprovider from "../components/Authprovider/Authprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AquaBot - AI Powered Maritime Intelligence",
  description:
    "Harness the power of AI to optimize voyages, match cargo, and gain critical market insights.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Authprovider>
          {/* header (if you add later) */}
          <main className="min-h-screen">{children}</main>
          {/* footer */}
          <footer className="bg-gray-50 text-gray-600 p-4 text-center">
            <div className="container mx-auto px-4">
              <p>Made by team CodeItUp</p>
            </div>
          </footer>
        </Authprovider>
      </body>
    </html>
  );
}
