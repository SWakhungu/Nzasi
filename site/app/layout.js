import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Nzasi Ventures",
  description: "Governance, Risk & Compliance for Healthcare",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
