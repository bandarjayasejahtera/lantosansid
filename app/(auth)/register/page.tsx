import Link from "next/link";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card";
import { ArrowLeft } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-sea-green-950 to-black p-4">
      <div className="absolute top-4 left-4 md:top-8 md:left-8">
        <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Kembali ke Beranda</span>
        </Link>
      </div>

      <Card className="w-full max-w-md border-sea-green-500/20 bg-black/40 backdrop-blur-xl text-white shadow-2xl shadow-sea-green-500/10">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-sea-green-500 p-2 rounded-xl">
              <span className="text-2xl font-bold text-black">SID</span>
            </div>
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight">Buat Akun Baru</CardTitle>
          <CardDescription className="text-gray-400">
            Daftar untuk menjadi bagian dari Desa Digital Lantosan I
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Nama Depan</Label>
              <Input 
                id="firstName" 
                placeholder="Budi" 
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-sea-green-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Nama Belakang</Label>
              <Input 
                id="lastName" 
                placeholder="Santoso" 
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-sea-green-500"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="nik">NIK</Label>
            <Input 
              id="nik" 
              placeholder="1234567890123456" 
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-sea-green-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="nama@contoh.com" 
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-sea-green-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Kata Sandi</Label>
            <Input 
              id="password" 
              type="password" 
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-sea-green-500"
            />
          </div>
          <Button className="w-full bg-sea-green-500 hover:bg-sea-green-600 text-black font-bold mt-4">
            Daftar
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 text-center text-sm text-gray-400">
          <div>
            Sudah punya akun?{" "}
            <Link href="/login" className="text-sea-green-400 hover:text-sea-green-300 font-medium hover:underline">
              Masuk disini
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
