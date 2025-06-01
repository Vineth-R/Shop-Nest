import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AppContextProvider } from "@/context/AppContext";
import ClerkProviderWrapper from "../components/ClerkProviderWrapper";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata = {
  title: "QuickCart - GreatStack",
  description: "E-Commerce with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" style={{ colorScheme: "light" }}>
      <body className={`${outfit.className} antialiased text-gray-700`}>
        <ClerkProviderWrapper>
          <Toaster />
          <AppContextProvider>{children}</AppContextProvider>
        </ClerkProviderWrapper>
      </body>
    </html>
  );
}