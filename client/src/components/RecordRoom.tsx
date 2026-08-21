/* Defter-i Neşeli tasarım notu: Bu alan, ticari defter ve vergi süreçlerini klipsli referans fişleri ile kısa, pratik bir iş akışına çevirir. */
import { BookOpenCheck, CalendarClock, FileCheck2, FileText, ReceiptText, Scale, WalletCards } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const books = [
  { icon: ReceiptText, title: "Yevmiye Defteri", label: "Tarih sırası", cue: "Belge gelir → tarih, borç, alacak ve tutar fişe yazılır.", note: "Her işlem ayrı madde olur; kaydın dayandığı belge bilgisi görünür kalır." },
  { icon: BookOpenCheck, title: "Büyük Defter / Defter-i Kebir", label: "Hesap sırası", cue: "Yevmiye maddeleri hesap hesap toplanır.", note: "Aynı hesabın hareketleri yan yana görünür; bakiye ve mizan buradan daha rahat okunur." },
  { icon: Scale, title: "Envanter Defteri", label: "Dönem fotoğrafı", cue: "Varlıklar ve borçlar tek tek sayılır, değerlenir ve kayda alınır.", note: "Dönem sonu fotoğrafı için kasa, stok, alacak ve borçların kontrol noktasıdır." },
];
const documents = [
  { title: "Fatura", use: "Mal veya hizmet tesliminin/satışının belgesi", trail: "Belge → 120/100 → 600 + 391" },
  { title: "Perakende satış fişi / ÖKC fişi", use: "Perakende nitelikte satışın pratik belgesi", trail: "Belge → 100/102 → 600 + 391" },
  { title: "Serbest meslek makbuzu", use: "Serbest meslek faaliyetinden doğan tahsilat belgesi", trail: "Belge → tahsilat + gelir/tevkifat kontrolü" },
  { title: "Gider pusulası", use: "Belge düzenleme yükümlülüğü olmayan kişiden alımda kullanılan belge", trail: "Belge → gider/maliyet + ödeme/borç" },
  { title: "Müstahsil makbuzu", use: "Belirli üreticiden yapılan alımın belgesi", trail: "Belge → stok/maliyet + kesinti kontrolü" },
];
const taxes = [
  { code: "KDV", detail: "Alışta 191, satışta 391; dönem sonunda mahsup mantığına bak.", stamp: "KDV TERAZİSİ" },
  { code: "Muhtasar / Stopaj", detail: "Kesinti doğuran ödemeyi, beyanname ve ödeme adımıyla birlikte düşün.", stamp: "KESİNTİ SAATİ" },
  { code: "Kurumlar Vergisi", detail: "Dönem kârı vergi karşılığı örneğinde 691 → 370 ilişkisinin rolünü yakala.", stamp: "KÂR KARŞILIĞI" },
  { code: "Damga Vergisi", detail: "Belge/işlem niteliğini kontrol et; tahakkuk ve son günü resmi takvimden teyit et.", stamp: "BELGE DAMGASI" },
  { code: "SGK", detail: "Vergi değil, sosyal güvenlik yükümlülüğüdür; 361 ve ücret tahakkuku ile birlikte hatırla.", stamp: "BORDRO DOSYASI" },
];

export function RecordRoom() {
  return <section id="defter-rehberi" className="record-room"><SectionHeading eyebrow="DEFTER & VERGİ MASASI" title="Belgeyi yakala, deftere koy, süreyi kaçırma." action={<span className="record-caption"><FileCheck2 size={14} /> Eğitim amaçlı pratik</span>} /><p className="section-margin-note"><b>Kısa rota:</b> Belgeyi tanı → yevmiye maddesini kur → defteri kebirde hesabı izle → mizanı kontrol et → ilgili beyanname/tahakkuk saatini resmî takvimden teyit et.</p><div className="book-grid">{books.map((book) => { const Icon = book.icon; return <article className="book-slip" key={book.title}><div className="slip-icon"><Icon size={19} /></div><span>{book.label}</span><h3>{book.title}</h3><p className="slip-cue">{book.cue}</p><p>{book.note}</p></article>; })}</div><div className="document-tax-layout"><article className="document-board"><div className="board-heading"><ReceiptText size={18} /><div><span>BELGE ÇEKMECESİ</span><h3>Makbuz değil, işlem izi.</h3></div></div><div className="document-list">{documents.map((item) => <div className="document-row" key={item.title}><div><b>{item.title}</b><span>{item.use}</span></div><em>{item.trail}</em></div>)}</div><p className="record-disclaimer">Belge düzeni, e-belge kapsamı ve işlem detayları değişebilir; gerçek işlemde güncel GİB kurallarını kontrol et.</p></article><article className="tax-board"><div className="board-heading"><WalletCards size={18} /><div><span>BEYANNAME SAATİ</span><h3>Tahakkuk, beyan, ödeme.</h3></div></div><ol className="declaration-steps"><li><b>Belgeyi topla</b><span>Fatura, fiş, makbuz ve bordroyu işlem türüne göre ayır.</span></li><li><b>Kaydı kur</b><span>Hesapları ve KDV/kesinti etkisini yevmiye fişinde göster.</span></li><li><b>Beyannameyi hazırla</b><span>Vergi türü ve dönemi seç; tahakkuk sonucunu kayıtla ilişkilendir.</span></li><li><b>Son günü teyit et</b><span>Takvimde vergi türü + dönem filtresini kullan; beyan ve ödeme tarihini ayrı oku.</span></li></ol><a className="tax-calendar-link" href="https://gib.gov.tr/vergi-takvimi" target="_blank" rel="noreferrer"><CalendarClock size={16} /> 2026 GİB Vergi Takvimi <span>↗</span></a></article></div><div className="tax-ribbon">{taxes.map((tax) => <article key={tax.code}><span>{tax.stamp}</span><h3>{tax.code}</h3><p>{tax.detail}</p></article>)}</div></section>;
}
