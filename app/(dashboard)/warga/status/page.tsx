"use client";

import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Timeline, TimelineEvent } from "../../../../components/ui/timeline";
import { Search } from "lucide-react";

// Mock Data
const mockTimelineData: Record<string, TimelineEvent[]> = {
  "REQ-001": [
    {
      id: "1",
      title: "Pengajuan Diterima",
      description: "Dokumen pengajuan telah diterima oleh sistem.",
      date: "25 Okt 2023, 09:00",
      status: "completed",
    },
    {
      id: "2",
      title: "Verifikasi Admin",
      description: "Admin desa sedang memeriksa kelengkapan berkas.",
      date: "25 Okt 2023, 10:30",
      status: "completed",
    },
    {
      id: "3",
      title: "Tanda Tangan Kepala Desa",
      description: "Menunggu persetujuan dan tanda tangan digital Kepala Desa.",
      date: "25 Okt 2023, 14:00",
      status: "current",
    },
    {
      id: "4",
      title: "Dokumen Siap",
      description: "Surat dapat diunduh atau diambil di kantor desa.",
      date: "-",
      status: "upcoming",
    },
  ],
};

export default function StatusPage() {
  const [searchId, setSearchId] = useState("");
  const [timeline, setTimeline] = useState<TimelineEvent[] | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    // Simulate API lookup
    const data = mockTimelineData[searchId];
    setTimeline(data || null);
  };

  return (
    <div className="container mx-auto p-6 space-y-8 max-w-3xl">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Lacak Status Dokumen
        </h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Masukkan ID Pengajuan Anda untuk melihat posisi dokumen secara real-time.
        </p>
      </div>

      <Card className="border-sea-green-100 shadow-lg">
        <CardHeader>
          <CardTitle>Cari Pengajuan</CardTitle>
          <CardDescription>
            Contoh ID: REQ-001
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Masukkan ID Pengajuan (misal: REQ-001)"
                className="pl-9"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
              />
            </div>
            <Button type="submit" className="bg-sea-green-500 hover:bg-sea-green-600">
              Lacak
            </Button>
          </form>
        </CardContent>
      </Card>

      {hasSearched && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {timeline ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-sea-green-600">
                  Riwayat Perjalanan Dokumen
                </CardTitle>
                <CardDescription>
                  ID Pengajuan: <span className="font-mono font-bold text-gray-900">{searchId}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Timeline events={timeline} />
              </CardContent>
            </Card>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-300">
              <p className="text-gray-500">
                Data pengajuan dengan ID <span className="font-bold">"{searchId}"</span> tidak ditemukan.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
