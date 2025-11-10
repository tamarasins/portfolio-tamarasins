import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  year: number;
  slug?: string; // optional für dynamische Case Studies
}

export default function ProjectCard({ title, year, slug }: ProjectCardProps) {
  return (
    <Link href={slug ? `/portfolio/${slug}` : '#'}>
      <div className="border p-4 rounded hover:shadow-lg transition-shadow bg-white cursor-pointer">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-500">{year}</p>
      </div>
    </Link>
  );
}