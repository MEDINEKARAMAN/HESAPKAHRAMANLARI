/* Defter-i Neşeli tasarım notu: Oyunlar, kendi alıştırma sayfasında odaklı pratik için toplanır. */
import { useState } from "react";
import { CampusGames } from "@/components/CampusGames";
import { StudyGames } from "@/components/StudyGames";
import { StudyLayout } from "@/components/StudyLayout";
export default function GamesPage() { const [xp, setXp] = useState(0); return <StudyLayout page="games" eyebrow="ALIŞTIRMA SAYFASI · 02" title={<>Oyna, <i>dengeyi</i> kur.</>}><p className="page-lead">Yevmiye fişinden soru koşusuna; burada amaç hızı değil, her seçimin gerekçesini yakalamak. Bu sayfada <b>{xp} XP</b> topladın.</p><StudyGames onAward={(value) => setXp((current) => current + value)} onSurprise={() => undefined} /><CampusGames onAward={(value) => setXp((current) => current + value)} /></StudyLayout>; }
