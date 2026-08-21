/** Defter-i Neşeli notu: haftalık takip, soğuk bir takvim değil; tamamlanan haftalara damga basılan bir sınav ajandasıdır. */
import { useEffect, useMemo, useState } from "react";
import { CalendarDays, Check, ChevronRight, Flag, Sparkles } from "lucide-react";
import { weeklyPlan } from "@/data/learningData";
import { SectionHeading } from "./SectionHeading";

export function WeeklyTracker() {
  const [completeWeeks, setCompleteWeeks] = useState<string[]>([]);
  const [activeWeek, setActiveWeek] = useState("01");
  useEffect(() => { const saved = window.localStorage.getItem("hesap-kahramanlari-week-plan"); if (saved) setCompleteWeeks(JSON.parse(saved)); }, []);
  useEffect(() => { window.localStorage.setItem("hesap-kahramanlari-week-plan", JSON.stringify(completeWeeks)); }, [completeWeeks]);
  const active = useMemo(() => weeklyPlan.find((item) => item.week === activeWeek) ?? weeklyPlan[0], [activeWeek]);
  function toggleWeek(week: string) { setCompleteWeeks((current) => current.includes(week) ? current.filter((item) => item !== week) : [...current, week]); }
  const percentage = Math.round((completeWeeks.length / weeklyPlan.length) * 100);
  return <section id="haftalik-takip" className="weekly-tracker">
    <SectionHeading eyebrow="6 HAFTALIK SGS KAMPI" title="Her hafta bir sayfayı kapat." action={<span className="tracker-score"><Sparkles size={14} /> %{percentage} rota tamam</span>} />
    <div className="weekly-layout"><div className="week-list">{weeklyPlan.map((item) => { const complete = completeWeeks.includes(item.week); return <button key={item.week} className={`week-ticket ${activeWeek === item.week ? "active" : ""} ${complete ? "complete" : ""}`} onClick={() => setActiveWeek(item.week)}><span className="week-number">{complete ? <Check size={15} /> : item.week}</span><span><b>{item.title}</b><small>{item.lessons.join(" · ")}</small></span><ChevronRight size={16} /></button>; })}</div><article className="week-detail"><div className="week-detail-head"><span className="week-stamp"><CalendarDays size={18} /> HAFTA {active.week}</span><span className="week-status">{completeWeeks.includes(active.week) ? "DAMGALANDI" : "AÇIK SAYFA"}</span></div><h3>{active.title}</h3><p>{active.goal}</p><div className="week-lesson-tags">{active.lessons.map((lesson) => <span key={lesson}>{lesson}</span>)}</div><div className="week-detail-bottom"><div><Flag size={16} /><span>Hedefi bitirdiğinde haftayı damgala; durum tarayıcında saklanır.</span></div><button className={completeWeeks.includes(active.week) ? "uncomplete" : "complete-week"} onClick={() => toggleWeek(active.week)}>{completeWeeks.includes(active.week) ? "Damgayı kaldır" : "Haftayı tamamla"}<Check size={16} /></button></div></article></div>
  </section>;
}
