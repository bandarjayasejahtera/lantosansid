"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, Newspaper } from "lucide-react";
import Link from "next/link";
import { cn } from "../../lib/utils";

interface BentoItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  href: string;
  delay?: number;
}

const BentoItem = ({ title, description, icon, className, href, delay = 0 }: BentoItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={cn(
      "relative group overflow-hidden rounded-3xl bg-white p-8 shadow-sm hover:shadow-md transition-all border border-gray-100",
      className
    )}
  >
    <Link href={href} className="absolute inset-0 z-10">
      <span className="sr-only">View {title}</span>
    </Link>
    <div className="relative z-0">
      <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-sea-green-50 p-3 text-sea-green-600 group-hover:bg-sea-green-500 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-sea-green-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 leading-relaxed">
        {description}
      </p>
    </div>
    <div className="absolute bottom-0 right-0 -mb-8 -mr-8 h-32 w-32 rounded-full bg-sea-green-50/50 transition-transform duration-500 group-hover:scale-150" />
  </motion.div>
);

export function BentoGrid() {
  return (
    <section className="py-20 bg-linen-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          {/* Statistik Penduduk - Large Item */}
          <BentoItem
            title="Statistik Penduduk"
            description="Data demografi terkini Desa Lantosan I, mencakup jumlah penduduk, pendidikan, dan pekerjaan secara real-time."
            icon={<Users className="h-8 w-8" />}
            href="/informasi/statistik"
            className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-white to-sea-green-50/30"
            delay={0.1}
          />

          {/* Program Unggulan */}
          <BentoItem
            title="Program Unggulan"
            description="Inisiatif strategis untuk kemajuan desa, mulai dari pemberdayaan ekonomi hingga infrastruktur."
            icon={<BookOpen className="h-8 w-8" />}
            href="/informasi/program"
            className="md:col-span-1 md:row-span-2 bg-white"
            delay={0.2}
          />

          {/* Berita Terkini */}
          <BentoItem
            title="Berita Terkini"
            description="Informasi terbaru seputar kegiatan desa, pengumuman resmi, dan agenda mendatang."
            icon={<Newspaper className="h-8 w-8" />}
            href="/berita"
            className="md:col-span-2 md:row-span-1 bg-white"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
