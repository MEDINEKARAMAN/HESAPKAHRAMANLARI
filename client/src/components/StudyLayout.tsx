import { BookOpenText, ClipboardCheck, Files, Gamepad2, Landmark, MapPinned, PlayCircle, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { ASSETS } from "@/data/learningData";
import { TipNudge } from "./TipNudge";
import type { ReactNode } from "react";

const pages = [
  { id: "home", href: "/", label: "Ana defter", icon: BookOpenText },
  { id: "concepts", href: "/temel-kavramlar", label: "Temel kavramlar", icon: Sparkles },
  { id: "games", href: "/oyunlar", label: "Oyunlar", icon: Gamepad2 },
  { id: "routes", href: "/hesap-rotasi", label: "Hesap rotası", icon: MapPinned },
  { id: "tables", href: "/tablolar-vergi", label: "Tablolar & vergi", icon: Landmark },
  { id: "exam", href: "/sinav-merkezi", label: "Sınav merkezi", icon: ClipboardCheck },
  { id: "videos", href: "/video-dersleri", label: "Video dersleri", icon: PlayCircle },
  { id: "pdfs", href: "/pdf-kutuphanesi", label: "PDF kütüphanesi", icon: Files },
];

export function StudyLayout({ page, eyebrow, title, children }: { page: string; eyebrow: string; title: ReactNode; children: ReactNode }) {
  return <div className="app-shell tabbed-campus"><aside className="side-rail"><Link href="/" className="brand-lockup" aria-label="Hesap Kahramanları ana sayfası"><img src={ASSETS.logo} alt="" className="brand-mark" /><span><strong>Hesap</strong><em>Kahramanları</em></span></Link><div className="side-label">ÇALIŞMA SAYFALARI</div><nav className="rail-nav" aria-label="Çalışma sayfaları">{pages.map((item) => { const Icon = item.icon; return <Link key={item.id} href={item.href} className={page === item.id ? "rail-link active" : "rail-link"}><Icon size={18} strokeWidth={2.2} />{item.label}</Link>; })}</nav><div className="rail-progress"><div className="rail-progress-top"><span>Bugünkü rota</span><strong>%62</strong></div><div className="progress-track"><span style={{ width: "62%" }} /></div><p><Sparkles size={14} /> Sayfa sayfa ilerle; mizan seni tanır.</p></div><div className="side-note"><div className="stamp-mini">DEFTER KURALI</div><p>“Bir sayfa, bir fikir; sonra sıradaki kayıt.”</p><span>— Hesap Kahramanları</span></div></aside><main className="main-sheet page-sheet"><header className="page-topbar"><div><p className="kicker">{eyebrow}</p><h1>{title}</h1></div><span className="page-stamp">ÇALIŞMA YAPRAĞI</span></header><nav className="page-tabbar" aria-label="Hızlı sayfa sekmeleri">{pages.map((item) => <Link key={item.id} href={item.href} className={page === item.id ? "active" : ""}>{item.label}</Link>)}</nav><div className="page-content">{children}</div><footer className="footer"><span>Hesap Kahramanları · eğitim amaçlı çalışma defteri</span><span>“Doğru kayıt, sakin zihin.”</span></footer></main><TipNudge /></div>;
}
