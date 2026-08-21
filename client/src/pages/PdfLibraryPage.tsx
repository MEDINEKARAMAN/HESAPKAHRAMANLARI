/* Defter-i Neşeli tasarım notu: PDF kütüphanesi, belge türü ve tarih görünür olan referans fişleriyle çalışır. */
import { Files } from "lucide-react";
import { ResourceShelf } from "@/components/ResourceShelf";
import { SectionHeading } from "@/components/SectionHeading";
import { StudyLayout } from "@/components/StudyLayout";
import { pdfLibrary } from "@/data/resourceLibrary";
export default function PdfLibraryPage() { return <StudyLayout page="pdfs" eyebrow="PDF KÜTÜPHANESİ · 07" title={<>Belgeyi aç, <i>notunu</i> düş.</>}><section className="resource-intro pdf"><div><span><Files size={16} /> DIŞ DOSYA & ARŞİV ÇANTASI</span><h2>Soru, not ve resmi metin fişleri.</h2><p>2026 soru PDF’leri, deneme arşivleri, konu notu sayfaları ve resmi metin yönlendirmeleri tek kütüphanede toplandı.</p></div><b>{pdfLibrary.length} kaynak fişi</b></section><SectionHeading eyebrow="DIŞ PDF & NOT ÇANTASI" title="Tarihe bak, türü seç, kaynağı aç." /><ResourceShelf items={pdfLibrary} mode="pdf" /></StudyLayout>; }
