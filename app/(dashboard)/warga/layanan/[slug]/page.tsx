"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ProgressTracker } from "../../../../../components/ui/progress-tracker";
import { Button } from "../../../../../components/ui/button";
import { Input } from "../../../../../components/ui/input";
import { Label } from "../../../../../components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../../components/ui/card";
import { services } from "../../../../../persuratan/persuratan"; // We might need to adjust this if we want to fetch by slug

const steps = ["Pengajuan", "Verifikasi", "Tanda Tangan", "Selesai"];

export default function ServiceFormPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Find service details (mock)
  const service = services.find((s) => s.href.endsWith(slug));

  if (!service) {
    return <div className="p-8 text-center">Layanan tidak ditemukan</div>;
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
        setIsSubmitting(false);
      }, 1000);
    } else {
        router.push("/warga/layanan");
    }
  };

  return (
    <div className="container mx-auto max-w-2xl p-6 space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold text-gray-900">{service.title}</h1>
        <p className="text-muted-foreground">{service.description}</p>
      </div>

      <ProgressTracker currentStep={currentStep} steps={steps} />

      <Card>
        <CardHeader>
          <CardTitle>Formulir Pengajuan</CardTitle>
          <CardDescription>
            Lengkapi data berikut untuk memproses surat Anda.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {currentStep === 0 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="nik">NIK</Label>
                <Input id="nik" placeholder="Masukkan NIK Anda" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nama">Nama Lengkap</Label>
                <Input id="nama" placeholder="Masukkan Nama Lengkap" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="keperluan">Keperluan</Label>
                <Input id="keperluan" placeholder="Contoh: Persyaratan Beasiswa" />
              </div>
            </>
          )}

          {currentStep === 1 && (
            <div className="text-center py-8 space-y-4">
              <div className="text-4xl">🔍</div>
              <h3 className="text-lg font-medium">Sedang Diverifikasi</h3>
              <p className="text-muted-foreground">
                Data Anda sedang diperiksa oleh petugas desa. Mohon tunggu sebentar.
              </p>
            </div>
          )}

          {currentStep === 2 && (
            <div className="text-center py-8 space-y-4">
               <div className="text-4xl">✍️</div>
              <h3 className="text-lg font-medium">Menunggu Tanda Tangan</h3>
              <p className="text-muted-foreground">
                Dokumen sedang dalam proses penandatanganan oleh Kepala Desa.
              </p>
            </div>
          )}

          {currentStep === 3 && (
             <div className="text-center py-8 space-y-4">
               <div className="text-4xl">✅</div>
              <h3 className="text-lg font-medium text-sea-green-600">Selesai!</h3>
              <p className="text-muted-foreground">
                Surat Anda telah terbit. Silakan unduh atau ambil di kantor desa.
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => router.back()}
            disabled={currentStep > 0}
          >
            Batal
          </Button>
          <Button
            onClick={handleNext}
            disabled={isSubmitting}
            className="bg-sea-green-500 hover:bg-sea-green-600"
          >
            {isSubmitting ? "Memproses..." : currentStep === 3 ? "Kembali ke Layanan" : "Lanjut"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
