/* Defter-i Neşeli tasarım notu: Tablolar ve vergi, bir referans dosyası gibi sakin, kaynaklı ve görsel görünür. */
import { FinanceVisuals } from "@/components/FinanceVisuals";
import { RecordRoom } from "@/components/RecordRoom";
import { StudyLayout } from "@/components/StudyLayout";
export default function TablesPage() { return <StudyLayout page="tables" eyebrow="TABLO & VERGİ DOSYASI · 04" title={<>Belgeyi, tabloyu, <i>süreyi</i> ayır.</>}><RecordRoom /><FinanceVisuals /></StudyLayout>; }
