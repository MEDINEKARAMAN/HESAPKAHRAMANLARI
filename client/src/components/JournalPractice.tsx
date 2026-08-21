/* Defter-i Neşeli tasarım notu: Yevmiye fişi, oyun odasında belge–kayıt–denge zincirini tek odaklı mürekkep pratiği olarak öğretir. */
import { Check, Lightbulb, RotateCcw, Scale, Shuffle, X } from "lucide-react";
import { useMemo, useState } from "react";
import { journalScenarioAmounts, journalScenarios } from "@/data/learningData";

function parseAmount(value: string | undefined) { return Number((value ?? "0").replaceAll(".", "")); }
function formatAmount(value: number) { return new Intl.NumberFormat("tr-TR").format(value); }

export function JournalPractice({ onAward }: { onAward: (value: number) => void }) {
  const [scenarioId, setScenarioId] = useState("sale");
  const [journal, setJournal] = useState<Record<string, "borç" | "alacak" | undefined>>({});
  const [feedback, setFeedback] = useState<"idle" | "correct" | "wrong">("idle");
  const scenario = useMemo(() => journalScenarios.find((item) => item.id === scenarioId) ?? journalScenarios[0], [scenarioId]);
  const amounts = journalScenarioAmounts[scenario.id];
  const debitTotal = scenario.entries.filter((entry) => journal[entry.code] === "borç").reduce((sum, entry) => sum + parseAmount(amounts.entries[entry.code]), 0);
  const creditTotal = scenario.entries.filter((entry) => journal[entry.code] === "alacak").reduce((sum, entry) => sum + parseAmount(amounts.entries[entry.code]), 0);
  const balanced = debitTotal > 0 && debitTotal === creditTotal;
  const switchScenario = (id: string) => { setScenarioId(id); setJournal({}); setFeedback("idle"); };
  const chooseSide = (code: string, side: "borç" | "alacak") => { setJournal((current) => ({ ...current, [code]: side })); setFeedback("idle"); };
  const clear = () => { setJournal({}); setFeedback("idle"); };
  const randomScenario = () => { const candidates = journalScenarios.filter((item) => item.id !== scenarioId); switchScenario(candidates[Math.floor(Math.random() * candidates.length)].id); };
  const validate = () => { const correct = balanced && scenario.entries.every((entry) => journal[entry.code] === entry.side); setFeedback(correct ? "correct" : "wrong"); if (correct) onAward(16); };

  return <article className="campus-journal-card journal-expanded journal-practice-card">
    <div className="journal-game-top"><div><span className="journal-label">YEVMİYE OYUNU · MÜREKKEP FİŞİ</span><h3>{scenario.title}</h3></div><div className="journal-top-marks"><span className="journal-amount-badge">{amounts.badge}</span><span className="journal-brand-stamp"><Scale size={14} /> DENGE</span></div></div>
    <p className="game-howto journal-howto"><b>Nasıl oynanır?</b> Hesapların tarafını seç; tutarların borç ve alacak toplamlarını dengele. Terazi, seçimlerin finansal olarak eşit olup olmadığını gösterir.</p>
    <div className="journal-cast-note"><span>HESAP KADROSU</span><p>{scenario.entries.map((entry) => `${entry.code} ${entry.label}`).join(" · ")} — “Bizi senaryonun doğru tarafına koy; dengeyi biz taşırız.”</p></div>
    <div className="journal-pool"><span><b>{journalScenarios.length}</b> farklı SGS işlem turu hazır.</span><button onClick={randomScenario}><Shuffle size={13} /> Rastgele senaryo</button></div>
    <div className="scenario-tabs journal-scenario-tabs" role="tablist">{journalScenarios.map((item) => <button key={item.id} role="tab" aria-selected={scenarioId === item.id} className={scenarioId === item.id ? "active" : ""} onClick={() => switchScenario(item.id)}>{item.title}</button>)}</div>
    <p className="scenario-prompt">{scenario.prompt}</p>
    <div className="journal-ledger-head"><span>HESAP / TUTAR</span><span>KAYIT TARAFI</span></div>
    <div className="campus-entries journal-ledger">{scenario.entries.map((entry) => { const correctSide = feedback !== "idle" && journal[entry.code] === entry.side; const wrongSide = feedback !== "idle" && journal[entry.code] !== entry.side; return <div className={`campus-entry ${correctSide ? "entry-confirmed" : ""} ${wrongSide ? "entry-needs-fix" : ""}`} key={entry.code}><div className="ledger-account"><b>{entry.code}</b><div><strong>{entry.label}</strong><span>{amounts.entries[entry.code]} TL</span></div></div><div className="entry-sides"><button className={journal[entry.code] === "borç" ? "active debit" : ""} onClick={() => chooseSide(entry.code, "borç")}>Borç</button><button className={journal[entry.code] === "alacak" ? "active credit" : ""} onClick={() => chooseSide(entry.code, "alacak")}>Alacak</button>{feedback !== "idle" && <i title={correctSide ? "Doğru taraf" : `Doğru yön: ${entry.side}`}>{correctSide ? <Check size={13} /> : <X size={13} />}</i>}</div></div>; })}</div>
    <div className={`journal-balance ${balanced ? "balanced" : ""}`}><button className="journal-clear" onClick={clear}><RotateCcw size={16} /> Temizle</button><div className="journal-totals"><span>Borç <b>{formatAmount(debitTotal)} TL</b></span><Scale size={17} /><span>Alacak <b>{formatAmount(creditTotal)} TL</b></span></div><button className="check-journal" onClick={validate}>Teraziyi dengele <Scale size={16} /></button></div>
    {feedback !== "idle" && <div className={`campus-journal-feedback ${feedback}`}>{feedback === "correct" ? <Check size={17} /> : <Lightbulb size={17} />}<span><b>{feedback === "correct" ? `Defter dengede · ${amounts.total} TL` : "İpucu:"}</b> {scenario.answer}</span></div>}
  </article>;
}
