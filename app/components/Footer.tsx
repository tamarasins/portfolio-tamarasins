export default function Footer() {
  return (
    <footer className="mt-12 py-8 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/tamarasinsE" className="hover:text-highlight transition">GitHub</a>
        <a href="https://www.linkedin.com/in/tamara-sins-62a8a9368" className="hover:text-highlight transition">LinkedIn</a>
        <a href="mailto:hallo@tamarasins.de" className="hover:text-highlight transition">Email</a>
      </div>
      <div className="text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Tamara Sins. Alle Rechte vorbehalten.
      </div>
    </footer>
  )
}
