import ProjectCard from '../components/ProjectCard';

export default function PortfolioPage() {
  return (
    <section className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Meine Projekte</h1>

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