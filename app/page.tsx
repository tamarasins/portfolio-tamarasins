import ProjectCard from './components/ProjectCard';

export default function HomePage() {
  return (
    <section className="container mx-auto p-8 space-y-12">

      <div>
        <h1 className="text-4xl font-bold mb-6">Hi, ich bin Tamara Sins</h1>
        <p className="mb-4 text-lg">
          Ich bin Webentwicklerin und angehende UI/UX Designerin. Auf dieser Website zeige ich
          meine bisherigen Webprojekte und erste Designkonzepte im Bereich User Interface & Experience.
        </p>
        <p className="mb-6 text-lg">
          Mein Ziel ist es, technische Umsetzung und nutzerfreundliches Design zu verbinden,
          um digitale Produkte zu schaffen, die sowohl funktional als auch ansprechend sind.
        </p>
      </div>

      {/* Web Design */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Web Design Projekte</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ProjectCard title="JGA Buddies Redesign" year={2023} slug="jga-buddies" />
          <ProjectCard title="Adventure Buddies" year={2023} slug="adventure-buddies" />
          <ProjectCard title="MyWeinwanderung" year={2024} slug="myweinwanderung" />
        </div>
      </div>

      {/* UI/UX Design */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">UI/UX Design Projekte</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ProjectCard title="Mobile App Redesign (Platzhalter)" year={2025} slug="mobile-app-redesign" />
          <ProjectCard title="Dashboard UI Konzept (Platzhalter)" year={2025} slug="dashboard-ui-konzept" />
          <ProjectCard title="Website UX Studie (Platzhalter)" year={2025} slug="website-ux-studie" />
        </div>
      </div>

    </section>
  );
}