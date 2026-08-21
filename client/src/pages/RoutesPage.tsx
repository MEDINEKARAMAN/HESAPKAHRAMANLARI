/* Defter-i Neşeli tasarım notu: Hesap rotası, hesap karakterleri ve işlem zincirlerini aynı keşif sayfasında birleştirir. */
import { useState } from "react";
import { AccountPlanAtlas } from "@/components/AccountPlanAtlas";
import { AccountRoster } from "@/components/AccountRoster";
import { FlowAndLessons } from "@/components/FlowAndLessons";
import { StudyLayout } from "@/components/StudyLayout";
export default function RoutesPage() { const [selected, setSelected] = useState("120"); return <StudyLayout page="routes" eyebrow="ROTA DEFTERİ · 03" title={<>İşlemin <i>yolunu</i> oku.</>}><AccountRoster selectedCode={selected} onSelect={setSelected} /><FlowAndLessons selectedCode={selected} onSelect={setSelected} /><AccountPlanAtlas /></StudyLayout>; }
