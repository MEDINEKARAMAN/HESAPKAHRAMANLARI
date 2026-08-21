/** Defter-i Neşeli notu: tablolar bir rapor ekranı değil, sayfaya yayılmış renkli muhasebe kanıtları ve kenar notları gibi görünür. */
import { useMemo, useState } from "react";
import { AlertTriangle, ArrowDownRight, ArrowUpRight, BadgeAlert, BookOpenCheck, CircleCheck, Landmark, Scale, TableProperties } from "lucide-react";
import { balanceWatches, mizanRows } from "@/data/learningData";
import { SectionHeading } from "./SectionHeading";

export function FinanceVisuals() {
  const [activeCode, setActiveCode] = useState("120");
  const selected = useMemo(() => balanceWatches.find((watch) => watch.code === activeCode) ?? balanceWatches[0], [activeCode]);
  return (
    <section id="finansal-panolar" className="finance-campus">
      <SectionHeading eyebrow="TABLO LABORATUVARI" title="Tabloyu ezberleme; içindeki trafiği gör." action={<span className="campus-legend"><CircleCheck size={14} /> Eğitim amaçlı örnek</span>} />
      <p className="section-margin-note"><b>Önce iskelet:</b> Mizan borç ve alacak toplamlarını kontrol eder; bilanço belirli günün fotoğrafıdır; gelir tablosu dönemin performansını anlatır. Aynı defter, üç farklı kamera açısı.</p>
      <div className="statement-grid">
        <article className="statement-card balance-card">
          <div className="statement-top"><span className="statement-icon"><Landmark size={18} /></span><div><small>BİLANÇO · FOTOĞRAF KARESİ</small><h3>Varlıklar = Kaynaklar</h3></div><span className="statement-total">162 = 162</span></div>
          <div className="balance-columns"><div><b>VARLIKLAR</b><p><span>100</span> Kasa <strong>40</strong></p><p><span>120</span> Alıcılar <strong>50</strong></p><p><span>153</span> Ticari Mallar <strong>60</strong></p><p><span>191</span> İnd. KDV <strong>12</strong></p></div><div><b>KAYNAKLAR</b><p><span>320</span> Satıcılar <strong>122</strong></p><p><span>500</span> Sermaye <strong>20</strong></p><p><span>590</span> Dönem sonucu <strong>20</strong></p><em>“Elindekiler ile bunların kaynağı aynı kadrajda.”</em></div></div>
        </article>
        <article className="statement-card income-card">
          <div className="statement-top"><span className="statement-icon"><TableProperties size={18} /></span><div><small>GELİR / GİDER TABLOSU</small><h3>Dönemin sahne arkası</h3></div><span className="statement-total gain">+20</span></div>
          <div className="income-track"><div className="income-line income"><span><b>600</b> Yurtiçi Satışlar</span><strong>100</strong></div><div className="income-line cost"><span><b>621</b> Satılan Ticari Mallar Maliyeti</span><strong>−60</strong></div><div className="income-line expense"><span><b>760</b> Pazarlama + <b>770</b> Yönetim</span><strong>−15</strong></div><div className="income-line expense"><span><b>780</b> Finansman Giderleri</span><strong>−5</strong></div><div className="income-result"><span>690’a gidecek dönem sonucu</span><b>20</b></div></div>
          <p className="table-tip"><BadgeAlert size={14} /> <b>Dikkat:</b> 600, 640 gelir; 760, 770, 780 gider hesaplarıdır. Dönem sonunda sonuç hesaplarına aktarım mantığını ayrıca kontrol et.</p>
        </article>
        <article className="statement-card trial-card">
          <div className="statement-top"><span className="statement-icon"><Scale size={18} /></span><div><small>MİZAN · DENGE PROVASI</small><h3>Borç ve alacak çağrısı</h3></div><span className="statement-total">242 = 242</span></div>
          <div className="mizan-table"><div className="mizan-head"><span>HESAP</span><b>BORÇ</b><b>ALACAK</b></div>{mizanRows.map((row) => <div key={row.code} className="mizan-row"><span><b>{row.code}</b> {row.label}</span><em>{row.debit}</em><em>{row.credit}</em></div>)}</div>
          <p className="table-tip"><AlertTriangle size={14} /> <b>Dikkat:</b> Mizan denk diye her hesap doğru sınıflanmış olmayabilir; hesap adı, işlem belgesi ve kayıt tarafını da kontrol et.</p>
        </article>
        <article className="statement-card memo-card">
          <div className="statement-top"><span className="statement-icon"><BookOpenCheck size={18} /></span><div><small>NAZIM HESAPLAR · KULİS DEFTERİ</small><h3>900 ↔ 901 aynası</h3></div><span className="statement-total memo">İzleme</span></div>
          <div className="memo-stage"><div className="memo-account"><b>900</b><span>Nazım hesaplara ait borçlu hesap</span></div><div className="memo-arrow">⇄</div><div className="memo-account"><b>901</b><span>Nazım hesaplara ait alacaklı hesap</span></div></div>
          <p className="table-tip"><BookOpenCheck size={14} /> <b>Hatırla:</b> Nazım hesaplar bilgi ve izleme amacı taşır. Ana bilanço ya da gelir tablosu kalemi gibi kârı doğrudan değiştirir diye düşünme.</p>
        </article>
      </div>

      <div className="mizan-mini-guide"><div className="mizan-guide-title"><Scale size={19} /><div><span>MİNİ MİZAN REHBERİ</span><h3>Doğru mizanı 3 adımda oku.</h3></div></div><div className="mizan-guide-steps"><article><b>01</b><div><strong>Toplamlara bak</strong><span>Borç toplamı ile alacak toplamı eşit mi? Örnek mizanda 242 = 242.</span></div><CircleCheck size={17} /></article><article><b>02</b><div><strong>Yönü kontrol et</strong><span>Varlık ve gider hesapları genellikle borç; kaynak ve gelir hesapları genellikle alacak yönündedir.</span></div><ArrowUpRight size={17} /></article><article><b>03</b><div><strong>Belgeyi unutma</strong><span>Mizan denk olsa da işlem belgesi, hesap seçimi ve KDV ayrımı ayrıca kontrol edilir.</span></div><AlertTriangle size={17} /></article></div></div>

      <div className="balance-watch-zone">
        <div className="watch-heading"><div><span>HESAP NÖBETİ</span><h3>Normal bakiye yönünü izle.</h3></div><p>Ok hareket ediyorsa bir hikâye var: ya dönem sonu aktarımı ya da ayrıca sınıflandırılması gereken özel bir durum.</p></div>
        <div className="watch-layout"><div className="watch-list">{balanceWatches.map((watch) => <button key={watch.code} className={`watch-chip ${activeCode === watch.code ? "active" : ""} ${watch.state === "Dikkat" ? "is-alert" : ""}`} onClick={() => setActiveCode(watch.code)}><span className={`watch-arrow ${watch.arrow}`}><ArrowUpRight size={15} /></span><b>{watch.code}</b><span>{watch.name}</span><small>{watch.normal}</small></button>)}</div><article className={`watch-detail state-${selected.state.toLowerCase().replace(" ", "-")}`}><div className="watch-detail-top"><span className="detail-alert"><AlertTriangle size={18} /></span><div><small>{selected.state.toUpperCase()}</small><h4>{selected.code} {selected.name}</h4></div><span className="normal-chip">Normal: {selected.normal}</span></div><p>{selected.note}</p><div className="watch-fix"><span className={`big-arrow ${selected.arrow}`}>{selected.arrow === "up" ? <ArrowUpRight size={22} /> : <ArrowDownRight size={22} />}</span><div><b>Öğretici açıklama</b><span>{selected.fix}</span></div></div></article></div>
      </div>
    </section>
  );
}
