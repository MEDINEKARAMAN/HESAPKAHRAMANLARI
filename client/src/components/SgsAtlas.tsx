/** Defter-i Neşeli notu: SGS atlası kart yığını değil, konu sekmeleri ve her dersin bir çalışma cümlesiyle ilerleyen bir sınav ajandasıdır. */
import { useMemo, useState } from "react";
import { ArrowUpRight, BookOpenCheck, BriefcaseBusiness, Calculator, Gavel, Play, Scale } from "lucide-react";
import { sgsTopics2026, type SgsTopic } from "@/data/learningData";
import { SectionHeading } from "./SectionHeading";

const groups = ["Tümü", "Genel Kültür", "Muhasebe & Denetim", "Ekonomi & Maliye", "Hukuk"] as const;
const groupIcons = { "Genel Kültür": BookOpenCheck, "Muhasebe & Denetim": Calculator, "Ekonomi & Maliye": Scale, "Hukuk": Gavel };

function TopicRow({ topic, active, onSelect }: { topic: SgsTopic; active: boolean; onSelect: () => void }) {
  const Icon = groupIcons[topic.group];
  return <button className={`sgs-topic-row ${active ? "active" : ""}`} onClick={onSelect}><span className="topic-icon"><Icon size={16} /></span><span className="topic-main"><b>{topic.title}</b><small>{topic.cue}</small></span><span className="topic-count">{topic.questionCount}</span><ArrowUpRight size={15} /></button>;
}

export function SgsAtlas() {
  const [group, setGroup] = useState<(typeof groups)[number]>("Tümü");
  const [activeId, setActiveId] = useState("finansal-muhasebe");
  const displayed = useMemo(() => group === "Tümü" ? sgsTopics2026 : sgsTopics2026.filter((topic) => topic.group === group), [group]);
  const active = sgsTopics2026.find((topic) => topic.id === activeId) ?? sgsTopics2026[4];
  const ActiveIcon = groupIcons[active.group];

  return (
    <section id="sgs-atlasi" className="sgs-atlas">
      <SectionHeading eyebrow="2026 SGS KONU ATLASI" title="Bütün dersler, tek çalışma rotası." action={<span className="atlas-note"><BriefcaseBusiness size={14} /> 15 ders · 130 soru yapısı</span>} />
      <p className="section-margin-note"><b>Çalışma şifresi:</b> Konuyu isimle değil, sorunun hangi kuralı sınadığını anlayarak hatırla. Her sekmede kısa rota ve 2026 video erişimi var.</p>
      <div className="atlas-filter" role="tablist" aria-label="SGS ders grupları">{groups.map((item) => <button key={item} role="tab" aria-selected={group === item} className={group === item ? "active" : ""} onClick={() => setGroup(item)}>{item}</button>)}</div>
      <div className="atlas-board">
        <div className="atlas-list" aria-label="SGS dersleri">{displayed.map((topic) => <TopicRow key={topic.id} topic={topic} active={active.id === topic.id} onSelect={() => setActiveId(topic.id)} />)}</div>
        <article className="atlas-detail">
          <div className="atlas-detail-header"><span className="atlas-icon"><ActiveIcon size={23} /></span><div><span className="atlas-kicker">{active.group.toUpperCase()}</span><h3>{active.title}</h3></div><span className="detail-count">{active.questionCount}</span></div>
          <div className="atlas-cue"><span>ÇALIŞMA İŞARETİ</span><b>{active.cue}</b></div>
          <p>{active.note}</p>
          <div className="atlas-video-note"><Play size={17} fill="currentColor" /><span>Bağlantı, başlığında <b>2026</b> bulunan ilgili video veya 2026 çözüm listesini açar.</span></div>
          <a className="atlas-video-link" href={active.videoUrl} target="_blank" rel="noreferrer">{active.videoLabel} <ArrowUpRight size={16} /></a>
        </article>
      </div>
    </section>
  );
}
