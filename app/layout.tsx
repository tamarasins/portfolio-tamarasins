import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Tamara Sins",
  description: "Webentwicklerin & UI/UX Designerin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-[#FFF7F5] text-[#3B2E2A]">
        {/* Header auf allen Seiten */}
        <Header />

        {/* Hauptinhalt */}
        <main className="pt-24">{children}</main>

        {/* Footer auf allen Seiten */}
        <Footer />
      </body>
    </html>
  );
}