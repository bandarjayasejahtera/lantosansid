import { FileText, Home, Briefcase, GraduationCap } from "lucide-react";

export const services = [
  {
    id: "sktm",
    title: "Surat Keterangan Tidak Mampu (SKTM)",
    description: "Surat keterangan untuk keperluan beasiswa, kesehatan, atau bantuan sosial.",
    icon: FileText,
    href: "/warga/layanan/sktm",
  },
  {
    id: "domisili",
    title: "Surat Keterangan Domisili",
    description: "Surat keterangan tempat tinggal sementara atau menetap bagi warga.",
    icon: Home,
    href: "/warga/layanan/domisili",
  },
  {
    id: "sku",
    title: "Surat Keterangan Usaha (SKU)",
    description: "Surat keterangan memiliki usaha untuk keperluan perbankan atau izin.",
    icon: Briefcase,
    href: "/warga/layanan/sku",
  },
  {
    id: "kelahiran",
    title: "Surat Keterangan Kelahiran",
    description: "Surat pengantar untuk pembuatan akta kelahiran di Disdukcapil.",
    icon: GraduationCap, // Using a placeholder icon
    href: "/warga/layanan/kelahiran",
  },
];
