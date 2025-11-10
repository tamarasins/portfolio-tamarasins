import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  year: number;
  slug?: string;
}

export default function ProjectCard({ title, year, slug }: ProjectCardProps) {
  return (
    <Link href={slug ? `/portfolio/${slug}` : '#'}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border p-4 rounded hover:shadow-lg transition-shadow bg-white cursor-pointer"
      >
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-500">{year}</p>
      </motion.div>
    </Link>
  );
}