import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Nzasi Ventures",
  description: "Nzasi Ventures — AfyaNumeriq: GRC for healthcare (ISO 7101:2023)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#edf3f6] text-[#1f3a60] min-h-screen">
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}

