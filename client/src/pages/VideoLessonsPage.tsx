/* Defter-i Neşeli tasarım notu: Video dersleri, 2026 etiketli çözüm fişleri ve ders filtreleriyle ayrı bir medya defteri olarak sunulur. */
import { PlayCircle } from "lucide-react";
import { ResourceShelf } from "@/components/ResourceShelf";
import { SectionHeading } from "@/components/SectionHeading";
import { StudyLayout } from "@/components/StudyLayout";
import { videoLessons } from "@/data/resourceLibrary";
export default function VideoLessonsPage() { return <StudyLayout page="videos" eyebrow="VIDEO DERSLERİ · 06" title={<>Çözümü izle, <i>mantığı</i> durdur.</>}><section className="resource-intro video"><div><span><PlayCircle size={16} /> SGS ÇÖZÜMLERİ + TEMEL ANLATIM</span><h2>Ders ders video fişleri.</h2><p>2026 SGS soru çözümleri ile Emrah Hoca’nın yıl etiketi açık temel muhasebe anlatımları aynı çantada; karttaki döneme bakarak seçimini yap.</p></div><b>{videoLessons.length} video fişi</b></section><SectionHeading eyebrow="DIŞ VİDEO ÇANTASI" title="Önce konu seç, sonra çözümü aç." /><ResourceShelf items={videoLessons} mode="video" /></StudyLayout>; }
