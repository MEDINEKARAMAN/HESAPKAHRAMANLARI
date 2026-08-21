/* Defter-i Neşeli tasarım notu: Hesap planı atlası, resmi sınıfları ders kitabı sayfası ritminde filtrelenebilir bir defter eki olarak sunar. */
import { useMemo, useState } from "react";
import { BookOpenCheck, ExternalLink, Search, Scale } from "lucide-react";
import { accountPlanSections } from "@/data/learningData";
import { SectionHeading } from "./SectionHeading";

export function AccountPlanAtlas() {
  const [activeId, setActiveId] = useState("1");
  const [query, setQuery] = useState("");
  const active = accountPlanSections.find((section) => section.id === activeId) ?? accountPlanSections[0];
  const rows = useMemo(() => active.accounts.filter((account) => `${account.code} ${account.name} ${account.note}`.toLocaleLowerCase("tr").includes(query.toLocaleLowerCase("tr"))), [active, query]);

  return (
    <section id="hesap-plani" className="account-plan-atlas">
      <SectionHeading eyebrow="HESAP PLANI ATLASI" title="Kodun adresini, görevin mantığını öğren." action={<a className="atlas-source" href="https://ismmmo.org.tr/dosya/415/Mevzuat-Dosya/tekduzhesapplani.pdf" target="_blank" rel="noreferrer"><BookOpenCheck size={14} /> İSMMMO metni <ExternalLink size={12} /></a>} />
      <p className="section-margin-note"><b>Nasıl kullanılır?</b> Önce hesap sınıfını seç; sonra kod ya da hesap adını filtrele. Bu atlas sınavda “hangi hikâye hangi sınıfta yaşar?” sorusunu daha çabuk çözmen içindir.</p>
      <div className="plan-layout">
        <div className="plan-tabs" role="tablist" aria-label="Tekdüzen Hesap Planı sınıfları">
          {accountPlanSections.map((section) => <button key={section.id} role="tab" aria-selected={section.id === active.id} className={section.id === active.id ? "active" : ""} onClick={() => { setActiveId(section.id); setQuery(""); }}><b>{section.code}</b><span>{section.title}</span></button>)}
        </div>
        <article className="plan-sheet">
          <div className="plan-sheet-head"><div><span>{active.code}. HESAP SINIFI</span><h3>{active.title}</h3><p>{active.cue}</p></div><div className="plan-normal"><Scale size={15} /><span>Normal yön</span><b>{active.normal}</b></div></div>
          <label className="plan-search"><Search size={15} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={`${active.code}. sınıfta kod veya ad ara`} aria-label="Hesap kodu veya adı ara" /></label>
          <div className="plan-rows">{rows.map((account) => <div key={account.code} className="plan-row"><b>{account.code}</b><div><strong>{account.name}</strong><span>{account.note}</span></div>{account.name.includes("(-)") && <em>TERS KARAKTER</em>}</div>)}{rows.length === 0 && <p className="plan-empty">Bu sınıfta bu aramayla eşleşen hesap bulunmadı. Kodu ya da hesabın bir kelimesini dene.</p>}</div>
        </article>
      </div>
    </section>
  );
}
