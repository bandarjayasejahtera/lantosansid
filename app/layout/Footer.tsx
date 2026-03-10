import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 text-gray-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-sea-green-950 flex items-center gap-2 mb-4">
              <span className="bg-sea-green-500 text-white p-1 rounded-lg">SID</span>
              Lantosan I
            </Link>
            <p className="text-sm leading-relaxed max-w-sm">
              Sistem Informasi Desa Lantosan I yang modern dan futuristik, memudahkan warga dalam mengakses layanan dan informasi desa secara digital.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Menu</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-base hover:text-sea-green-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/berita" className="text-base hover:text-sea-green-600 transition-colors">
                  Berita
                </Link>
              </li>
              <li>
                <Link href="/informasi" className="text-base hover:text-sea-green-600 transition-colors">
                  Informasi
                </Link>
              </li>
              <li>
                <Link href="/warga" className="text-base hover:text-sea-green-600 transition-colors">
                  Layanan Mandiri
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm">
              <li>Jl. Raya Lantosan I, No. 123</li>
              <li>Kecamatan Portibi</li>
              <li>Kabupaten Padang Lawas Utara</li>
              <li>Sumatera Utara</li>
              <li className="pt-2">Email: info@lantosan1.desa.id</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} SID Lantosan I. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
