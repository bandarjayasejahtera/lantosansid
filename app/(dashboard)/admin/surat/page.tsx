"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Printer, CheckCircle, XCircle, Eye } from "lucide-react";

// Mock Data
const initialApplications = [
  {
    id: "REQ-001",
    date: "2023-10-25",
    name: "Budi Santoso",
    type: "Surat Keterangan Domisili",
    status: "Pending",
  },
  {
    id: "REQ-002",
    date: "2023-10-24",
    name: "Siti Aminah",
    type: "Surat Keterangan Tidak Mampu",
    status: "Selesai",
  },
  {
    id: "REQ-003",
    date: "2023-10-23",
    name: "Ahmad Rizky",
    type: "Surat Keterangan Usaha",
    status: "Ditolak",
  },
  {
    id: "REQ-004",
    date: "2023-10-26",
    name: "Dewi Lestari",
    type: "Surat Keterangan Kelahiran",
    status: "Pending",
  },
];

export default function AdminSuratPage() {
  const [applications, setApplications] = useState(initialApplications);

  const handleStatusChange = (id: string, newStatus: string) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
    );
  };

  const handlePrint = (id: string) => {
    // In a real app, this would generate a PDF
    alert(`Mencetak dokumen untuk pengajuan ${id}...`);
    window.print();
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Manajemen Surat
          </h1>
          <p className="text-muted-foreground mt-2">
            Kelola pengajuan surat dari warga desa.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Daftar Pengajuan Terbaru</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>List pengajuan surat warga.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Nama Pemohon</TableHead>
                <TableHead>Jenis Surat</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((app) => (
                <TableRow key={app.id}>
                  <TableCell className="font-medium">{app.id}</TableCell>
                  <TableCell>{app.date}</TableCell>
                  <TableCell>{app.name}</TableCell>
                  <TableCell>{app.type}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        app.status === "Selesai"
                          ? "success"
                          : app.status === "Pending"
                          ? "warning"
                          : app.status === "Ditolak"
                          ? "destructive"
                          : "default"
                      }
                      className={
                        app.status === "Pending"
                          ? "bg-bright-amber text-black hover:bg-bright-amber/80"
                          : ""
                      }
                    >
                      {app.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        title="Lihat Detail"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      {app.status === "Pending" && (
                        <>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-sea-green-600 hover:text-sea-green-700 hover:bg-sea-green-50"
                            onClick={() => handleStatusChange(app.id, "Selesai")}
                            title="Setujui"
                          >
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-cayenne-red hover:text-red-700 hover:bg-red-50"
                            onClick={() => handleStatusChange(app.id, "Ditolak")}
                            title="Tolak"
                          >
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                      {app.status === "Selesai" && (
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handlePrint(app.id)}
                          title="Cetak PDF"
                        >
                          <Printer className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
