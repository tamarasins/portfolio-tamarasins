export default function ContactPage() {
  return (
    <section className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Kontakt</h1>
      <p className="mb-4 text-lg">
        Du kannst mich über folgende Wege erreichen:
      </p>
      <ul className="list-disc list-inside text-lg">
        <li>Email: <a href="mailto:kontakt@tamarasins.de" className="text-blue-600 hover:underline">kontakt@tamarasins.de</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/tamara-sins-62a8a9368" className="text-blue-600 hover:underline">https://www.linkedin.com/in/tamara-sins-62a8a9368</a></li>
      </ul>
    </section>
  );
}