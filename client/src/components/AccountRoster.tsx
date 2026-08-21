/** Defter-i Neşeli notu: Renkli sekmeler hafızaya yardım eder; espri her zaman normal bakiye ve kuralla yan yanadır. */
import { Lightbulb } from "lucide-react";
import { accounts, type Account } from "@/data/learningData";
import { SectionHeading } from "./SectionHeading";

const accountMotions: Record<string, { from: string; through: string; to: string; start: string; settle: string; token: string }> = {
  "100": { from: "İşlem", through: "100 Kasa", to: "Nakit akışı", start: "Tahsilatta borç yönünde artar.", settle: "Ödemede alacak yönünde azalır.", token: "NAKİT" },
  "120": { from: "Müşteri", through: "120 Alıcılar", to: "100 / 102", start: "Kredili satış: 120 borç.", settle: "Tahsilat: 100/102 borç · 120 alacak.", token: "ALACAK" },
  "153": { from: "Satıcı", through: "153 Mallar", to: "Stok rafı", start: "Alışta borç yönünde artar.", settle: "Satışta maliyet hesabına doğru yol alır.", token: "MAL" },
  "191": { from: "Alış faturası", through: "191 İnd. KDV", to: "KDV mahsup", start: "Alıştaki indirilecek KDV borçta doğar.", settle: "Dönemde hesaplanan KDV ile mahsuplaşır.", token: "KDV" },
  "320": { from: "153 + 191", through: "320 Satıcılar", to: "100 / 102", start: "Kredili alış: 320 alacak.", settle: "Ödeme: 320 borç · 100/102 alacak.", token: "BORÇ" },
  "391": { from: "Satış faturası", through: "391 Hes. KDV", to: "KDV mahsup", start: "Satışta alacak yönünde doğar.", settle: "Dönemde 191 ile mahsuplaşma rotasına girer.", token: "KDV" },
  "600": { from: "Satış", through: "600 Gelir", to: "690 Sonuç", start: "Satış geliri alacakta oluşur.", settle: "Dönem sonunda 690’a aktarılır.", token: "GELİR" },
  "690": { from: "Gelir + gider", through: "690 Sonuç", to: "Dönem kapanışı", start: "Gelir ve giderler burada buluşur.", settle: "Kâr ya da zarar bakiyesi kapanışa gider.", token: "SONUÇ" },
};

const accountVoices: Record<string, string> = {
  "100": "100 kasada: para geldiyse borçta görünür, çıkınca makbuzunu da alır gider.",
  "120": "120 beklemede: mal gitti, müşteri borcunu ödeyene kadar alacak sırası onda.",
  "153": "153 rafta: mal alışta borçta büyür, satılınca maliyet sahnesine yürür.",
  "191": "191 not alıyor: alıştaki indirilecek KDV’yi mahsup gününe saklar.",
  "320": "320 kapıda: mal geldi, söz hâlâ sende; ödeme olana kadar alacak yönünde bekler.",
  "391": "391 hesapta: satıştaki KDV’yi toplar, mahsup gününde 191 ile buluşur.",
  "600": "600 sahnede: satış geliri alacakta parlar, dönem sonunda 690’a selam verir.",
  "690": "690 finalde: gelirle gideri toplar, dönemin kâr mı zarar mı bittiğini söyler.",
};

function AccountTab({ account, onClick, active }: { account: Account; onClick: () => void; active: boolean }) {
  return (
    <button className={`account-tab tab-${account.color} ${active ? "is-active" : ""}`} onClick={onClick} aria-pressed={active}>
      <span className="account-code">{account.code}</span>
      <span className="account-mini-name">{account.name}</span>
      <span className="account-balance">{account.normal}</span>
    </button>
  );
}

export function AccountRoster({ selectedCode, onSelect }: { selectedCode: string; onSelect: (code: string) => void }) {
  const selected = accounts.find((account) => account.code === selectedCode) ?? accounts[1];
  const motion = accountMotions[selected.code];
  return (
    <section id="hesap-kadro" className="account-section">
      <SectionHeading eyebrow="HESAP KADROSU" title="Kodunu seç, karakterini dinle." action={<span className="subtle-count">8 hesaplık başlangıç seti</span>} />
      <div className="account-layout">
        <div className="account-grid">
          {accounts.map((account) => <AccountTab key={account.code} account={account} active={selected.code === account.code} onClick={() => onSelect(account.code)} />)}
        </div>
        <article className={`character-card character-${selected.color}`}>
          <div className="character-top"><span className="tiny-label">{selected.category.toUpperCase()}</span><span className="normal-tag">Normal: {selected.normal}</span></div>
          <div className="character-code">{selected.code}</div>
          <h3>{selected.name}</h3>
          <p className="character-line">“{selected.line}”</p>
          <p className="character-mnemonic"><b>{selected.code} ses veriyor:</b> {accountVoices[selected.code]}</p>
          <div className="rule-note"><Lightbulb size={17} /><span>{selected.rule}</span></div>
          <div className={`account-motion motion-${selected.code}`} aria-live="polite">
            <div className="motion-caption"><span>İŞLEM HAREKETİ</span><b>{motion.token}</b></div>
            <div className="motion-track"><span className="motion-stop"><b>{motion.from}</b><small>{motion.start}</small></span><span className="motion-rail"><i>{selected.code}</i></span><span className="motion-stop"><b>{motion.to}</b><small>{motion.settle}</small></span></div>
            <p><strong>{motion.through}</strong> rotanın orta durağıdır; hareketi senaryonun yönü belirler.</p>
          </div>
        </article>
      </div>
    </section>
  );
}
