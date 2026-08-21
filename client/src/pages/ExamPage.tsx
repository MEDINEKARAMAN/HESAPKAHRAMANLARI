/* Defter-i Neşeli tasarım notu: Sınav merkezi, rota ve kaynak fişlerini ayrı bir son hazırlık sayfasında toplar. */
import { ArrowRight, Files, PlayCircle } from "lucide-react";
import { Link } from "wouter";
import { SgsAtlas } from "@/components/SgsAtlas";
import { StudyLayout } from "@/components/StudyLayout";
import { WeeklyTracker } from "@/components/WeeklyTracker";
export default function ExamPage() { return <StudyLayout page="exam" eyebrow="SINAV MERKEZİ · 05" title={<>Planla, <i>çöz</i>, tekrar et.</>}><WeeklyTracker /><SgsAtlas /><section className="exam-resource-bridge"><div><span>SINAV ÇANTASI ARTIK İKİ SEKMEDE</span><h2>Videoyu ve PDF’yi ayrı defter yaprağından aç.</h2><p>Kaynaklar artık kalabalık tek bir kart alanı değil: 2026 video çözümleri Video Dersleri’nde; soru, not ve resmi metin yönlendirmeleri PDF Kütüphanesi’nde.</p></div><div><Link href="/video-dersleri"><PlayCircle size={19} /> Video Dersleri <ArrowRight size={15} /></Link><Link href="/pdf-kutuphanesi"><Files size={19} /> PDF Kütüphanesi <ArrowRight size={15} /></Link></div></section></StudyLayout>; }
