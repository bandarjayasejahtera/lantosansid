import { Hero } from "../home/Hero";
import { BentoGrid } from "../home/BentoGrid";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <BentoGrid />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Layanan Digital Desa
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Akses layanan administrasi kependudukan dan perizinan dengan mudah, cepat, dan transparan melalui portal SID Lantosan I.
          </p>
          {/* Placeholder for future services grid */}
        </div>
      </section>
    </div>
  );
}
