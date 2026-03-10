import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { services } from "../../../../data/services";

export default function LayananPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Layanan Publik</h1>
        <p className="text-muted-foreground mt-2">
          Pilih layanan administrasi yang Anda butuhkan. Pengajuan dapat dilakukan secara online.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card key={service.id} className="hover:shadow-lg transition-shadow border-sea-green-100">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-sea-green-50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-sea-green-600" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild className="w-full bg-sea-green-500 hover:bg-sea-green-600">
                  <Link href={service.href}>Ajukan Sekarang</Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
