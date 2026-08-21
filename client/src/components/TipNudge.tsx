/* Defter-i Neşeli tasarım notu: Bu nazik bilgi kutusu, çalışma akışını bölmeden beş dakikada bir karikatürlü küçük bir defter kenarı notu sunar. */
import { useEffect, useState } from "react";
import { BellRing, Clock3, X } from "lucide-react";
import { learningTipCards } from "@/data/learningData";

export function TipNudge() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const tip = learningTipCards[index];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % learningTipCards.length);
      setOpen(true);
    }, 5 * 60 * 1000);
    return () => window.clearInterval(timer);
  }, []);

  return <><button className="tip-dock" onClick={() => setOpen(true)} aria-label="Mini bilgi kutusunu aç"><BellRing size={17} /><span>5 dk notu</span></button>{open && <aside className="tip-nudge" aria-live="polite" aria-label="Karikatürlü çalışma ipucu"><button className="tip-close" onClick={() => setOpen(false)} aria-label="Bilgi kutusunu kapat"><X size={15} /></button><img src={tip.image} alt="Muhasebe çalışma ipucunu destekleyen karikatür" /><div className="tip-copy"><span><Clock3 size={12} /> {tip.kicker}</span><h3>{tip.title}</h3><p>{tip.text}</p><small>Sayfa açıkken 5 dakikada bir yeni not gelir.</small></div></aside>}</>;
}
