/* Defter-i Neşeli tasarım notu: Temel kavramlar, ana defterden ayrı bir başlangıç yaprağında sade ve oyunlu görünür. */
import { Fundamentals } from "@/components/Fundamentals";
import { StudyLayout } from "@/components/StudyLayout";
export default function ConceptsPage() { return <StudyLayout page="concepts" eyebrow="BAŞLANGIÇ DEFTERİ · 01" title={<>Önce <i>kavramı</i> yakala.</>}><Fundamentals /></StudyLayout>; }
