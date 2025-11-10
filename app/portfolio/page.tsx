import ProjectCard from '../components/ProjectCard';

export default function PortfolioPage() {
  return (
    <section className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Meine Projekte</h1>

      <h2 className="text-2xl font-semibold mb-4">Webentwicklungsprojekte</h2>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <ProjectCard title="JGA Buddies Redesign" year={2020} slug="jga-buddies" />
        <ProjectCard title="Adventure Buddies Web Design" year={2022} slug="adventure-buddies" />
        <ProjectCard title="MyWeinwanderung Web Design" year={2024} slug="myweinwanderung" />
      </div>

      <h2 className="text-2xl font-semibold mb-4">UI/UX Design Beispiele</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <ProjectCard title="UI/UX Projekt 1" year={2020} />
        <ProjectCard title="UI/UX Projekt 2" year={2025} />
      </div>
    </section>
  );
}