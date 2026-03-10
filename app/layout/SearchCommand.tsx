"use client"

import * as React from "react"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  FileText,
  Home,
  Briefcase,
  GraduationCap,
  Newspaper,
  Info
} from "lucide-react"
import { useRouter } from "next/navigation"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../../components/ui/command"
import { Button } from "../../components/ui/button"

export function SearchCommand() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className={
          "relative h-9 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
        }
        onClick={() => setOpen(true)}
      >
        <span className="hidden lg:inline-flex">Cari layanan...</span>
        <span className="inline-flex lg:hidden">Cari...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Ketik perintah atau pencarian..." />
        <CommandList>
          <CommandEmpty>Tidak ada hasil ditemukan.</CommandEmpty>
          <CommandGroup heading="Layanan">
            <CommandItem
              onSelect={() => runCommand(() => router.push("/warga/layanan/sktm"))}
            >
              <FileText className="mr-2 h-4 w-4" />
              <span>Surat Keterangan Tidak Mampu</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/warga/layanan/domisili"))}
            >
              <Home className="mr-2 h-4 w-4" />
              <span>Surat Keterangan Domisili</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/warga/layanan/sku"))}
            >
              <Briefcase className="mr-2 h-4 w-4" />
              <span>Surat Keterangan Usaha</span>
            </CommandItem>
             <CommandItem
              onSelect={() => runCommand(() => router.push("/warga/layanan/kelahiran"))}
            >
              <GraduationCap className="mr-2 h-4 w-4" />
              <span>Surat Keterangan Kelahiran</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Halaman">
            <CommandItem
              onSelect={() => runCommand(() => router.push("/berita"))}
            >
              <Newspaper className="mr-2 h-4 w-4" />
              <span>Berita Desa</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/informasi"))}
            >
              <Info className="mr-2 h-4 w-4" />
              <span>Informasi Desa</span>
            </CommandItem>
             <CommandItem
              onSelect={() => runCommand(() => router.push("/warga/status"))}
            >
              <User className="mr-2 h-4 w-4" />
              <span>Cek Status Dokumen</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
