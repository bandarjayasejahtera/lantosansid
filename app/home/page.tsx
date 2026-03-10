// app/home/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText, Activity } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-sea-green-500/10 via-linen-50 to-linen-500/10 animate-gradient-xy" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sea-green-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sea-green-500/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-sea-green-100 text-sea-green-800 text-sm font-semibold mb-6 border border-sea-green-200">
            Selamat Datang di SID Lantosan I
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
            Membangun Desa <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sea-green-500 to-sea-green-700">
              Modern & Futuristik
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Platform digital terpadu untuk pelayanan administrasi, informasi publik, dan transparansi pemerintahan Desa Lantosan I.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/warga/surat">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 bg-sea-green-500 text-white rounded-full font-bold text-lg shadow-lg shadow-sea-green-500/30 hover:bg-sea-green-600 transition-all"
              >
                <FileText className="w-5 h-5" />
                Ajukan Surat
              </motion.button>
            </Link>
            <Link href="/warga/status">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-full font-bold text-lg border border-gray-200 shadow-sm hover:bg-gray-50 transition-all"
              >
                <Activity className="w-5 h-5 text-sea-green-500" />
                Cek Status
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-sea-green-300/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-bright-amber/10 rounded-full blur-3xl -z-10 animate-pulse delay-700" />
    </section>
  );
}
