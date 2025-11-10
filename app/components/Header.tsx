import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="font-bold text-xl">Tamara Sins</Link>
        <div className="space-x-6">
          <Link href="/about" className="hover:underline">Über mich</Link>
          <Link href="/portfolio" className="hover:underline">Portfolio</Link>
          <Link href="/contact" className="hover:underline">Kontakt</Link>
        </div>
      </nav>
    </header>
  );
}