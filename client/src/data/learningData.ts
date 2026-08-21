/** Defter-i Neşeli notu: Bu veri setindeki espri, hesap kodu ve normal bakiye bilgisi ile birlikte sunulur. */
export type Account = {
  code: string;
  name: string;
  category: string;
  normal: string;
  color: "orange" | "blue" | "pink" | "green" | "purple" | "red" | "yellow";
  line: string;
  rule: string;
};

export const ASSETS = {
  logo: "/manus-storage/hesap-kahramanlari-logo_f1eb2270.png",
  hero: "/manus-storage/hesap-kahramanlari-hero_0dab37fd.jpg",
  map: "/manus-storage/hesap-kahramanlari-map_608f3996.jpg",
  desk: "/manus-storage/hesap-kahramanlari-desk_297c9845.jpg",
  mascot: "/manus-storage/hesap-kahramanlari-mascot-reference_edda6367.png",
  tipMizan: "/manus-storage/hesap-kahramanlari-tip-mizan_10f9ca86.png",
  tipCari: "/manus-storage/hesap-kahramanlari-tip-120-320_c23f692d.png",
  tipKdv: "/manus-storage/hesap-kahramanlari-tip-kdv_27fe96c1.png",
};

export const accounts: Account[] = [
  { code: "100", name: "Kasa", category: "Varlık", normal: "Borç", color: "blue", line: "Nakit içeri girdi mi, ben şişerim. Çıkınca da sessizce zayıflarım.", rule: "Varlık hesabıdır; normal bakiye yönü borçtur." },
  { code: "120", name: "Alıcılar", category: "Ticari alacak", normal: "Borç", color: "blue", line: "Malı teslim ettim ya; iyi hoş da param nerede, sevgili alıcım?", rule: "Kredili satıştan doğan ticari alacakları izler; normal bakiye yönü borçtur." },
  { code: "153", name: "Ticari Mallar", category: "Stok", normal: "Borç", color: "green", line: "Depoya geldim. Satılana kadar düzenli raf insanıyım.", rule: "Satış amacıyla elde tutulan malları izler; normal bakiye yönü borçtur." },
  { code: "191", name: "İndirilecek KDV", category: "Vergi", normal: "Borç", color: "purple", line: "Alıştaki KDV benim; hesaplaşma vaktinde elimizi rahatlatırım.", rule: "Alışlarda indirilebilecek KDV’yi izler; normal bakiye yönü borçtur." },
  { code: "320", name: "Satıcılar", category: "Ticari borç", normal: "Alacak", color: "orange", line: "Malı aldın, ödeyeceksin canım. Alacağımı da unutmadım.", rule: "Kredili alıştan doğan ticari borçları izler; normal bakiye yönü alacaktır." },
  { code: "391", name: "Hesaplanan KDV", category: "Vergi", normal: "Alacak", color: "orange", line: "Satış varsa ben de varım; çıkışa yazılırım, sonra beyanname konuşur.", rule: "Satışlarda hesaplanan KDV’yi izler; normal bakiye yönü alacaktır." },
  { code: "600", name: "Yurtiçi Satışlar", category: "Gelir", normal: "Alacak", color: "red", line: "Satışın sesi benden gelir; dönem sonunda 690’a doğru yol alırım.", rule: "Yurtiçi satış gelirlerini izler; dönem sonunda sonuç hesaplarına aktarılır." },
  { code: "690", name: "Dönem Kârı / Zararı", category: "Sonuç", normal: "Bağlama göre", color: "yellow", line: "Gelirler ve giderler buluşunca son sözü ben söylerim.", rule: "Dönem sonunda gelir ve gider hesaplarının sonuçlarını toplar." },
];

export type AccountPlanSection = { id: string; code: string; title: string; cue: string; normal: string; accounts: { code: string; name: string; note: string }[] };

export const accountPlanSections: AccountPlanSection[] = [
  { id: "1", code: "1", title: "Dönen Varlıklar", cue: "Bir yıl içinde nakde dönecek veya tükenecek değerler", normal: "Genellikle borç", accounts: [{ code: "100", name: "Kasa", note: "Eldeki para; normalde borç veya sıfır bakiye." }, { code: "102", name: "Bankalar", note: "Banka hesaplarındaki para hareketleri." }, { code: "120", name: "Alıcılar", note: "Vadeli satıştan doğan senetsiz ticari alacak." }, { code: "121", name: "Alacak Senetleri", note: "Senede bağlanmış ticari alacak." }, { code: "128", name: "Şüpheli Ticari Alacaklar", note: "Tahsil kabiliyeti şüpheli ticari alacak." }, { code: "129", name: "Şüpheli Ticari Alacaklar Karşılığı (-)", note: "128 için ayrılan karşılık; eksi karakterli hesap." }, { code: "153", name: "Ticari Mallar", note: "Satış amacıyla elde tutulan mallar." }, { code: "159", name: "Verilen Sipariş Avansları", note: "Mal/hizmet siparişi için peşin verilen tutar." }, { code: "180", name: "Gelecek Aylara Ait Giderler", note: "Peşin ödenmiş, sonraki aylara ait giderler." }, { code: "191", name: "İndirilecek KDV", note: "Alış ve giderlerde indirime konu KDV." }] },
  { id: "2", code: "2", title: "Duran Varlıklar", cue: "Bir yıldan uzun kullanılan veya elde tutulan değerler", normal: "Genellikle borç", accounts: [{ code: "250", name: "Arazi ve Arsalar", note: "İşletmenin arazi ve arsa yatırımları." }, { code: "252", name: "Binalar", note: "İşletmenin bina varlıkları." }, { code: "253", name: "Tesis, Makine ve Cihazlar", note: "Üretim/işletme makineleri." }, { code: "254", name: "Taşıtlar", note: "İşletme taşıtları." }, { code: "255", name: "Demirbaşlar", note: "Ofis ve kullanım eşyaları." }, { code: "257", name: "Birikmiş Amortismanlar (-)", note: "Maddi duran varlığın değer azaltıcı birikimi." }, { code: "260", name: "Haklar", note: "Patent, lisans ve benzeri haklar." }, { code: "268", name: "Birikmiş Amortismanlar (-)", note: "Maddi olmayan duran varlıklar için birikmiş pay." }, { code: "280", name: "Gelecek Yıllara Ait Giderler", note: "Bir yıldan uzun döneme yayılacak peşin gider." }] },
  { id: "3", code: "3", title: "Kısa Vadeli Yabancı Kaynaklar", cue: "Bir yıl içinde ödenecek borçlar ve yükümlülükler", normal: "Genellikle alacak", accounts: [{ code: "300", name: "Banka Kredileri", note: "Kısa vadeli banka kredileri." }, { code: "320", name: "Satıcılar", note: "Vadeli alıştan doğan senetsiz ticari borç." }, { code: "321", name: "Borç Senetleri", note: "Senede bağlanmış ticari borç." }, { code: "340", name: "Alınan Sipariş Avansları", note: "Müşteriden peşin alınan sipariş avansı." }, { code: "360", name: "Ödenecek Vergi ve Fonlar", note: "Beyan/ödeme sürecindeki vergi ve fon yükümlülükleri." }, { code: "361", name: "Ödenecek Sosyal Güvenlik Kesintileri", note: "SGK kesintileri ve yükümlülükleri." }, { code: "370", name: "Dönem Kârı Vergi Karşılığı", note: "Dönem kârı üzerinden ayrılan yasal yükümlülük karşılığı." }, { code: "381", name: "Gider Tahakkukları", note: "Henüz ödenmemiş ancak döneme ait giderler." }, { code: "391", name: "Hesaplanan KDV", note: "Satışlarda hesaplanan KDV." }] },
  { id: "4", code: "4", title: "Uzun Vadeli Yabancı Kaynaklar", cue: "Bir yıldan uzun vadede ödenecek borçlar", normal: "Genellikle alacak", accounts: [{ code: "400", name: "Banka Kredileri", note: "Uzun vadeli banka kredileri." }, { code: "420", name: "Satıcılar", note: "Uzun vadeli ticari borçlar." }, { code: "440", name: "Alınan Sipariş Avansları", note: "Uzun vadeli teslimata ilişkin müşteri avansları." }, { code: "472", name: "Kıdem Tazminatı Karşılığı", note: "Uzun vadeli kıdem tazminatı yükümlülüğü." }, { code: "480", name: "Gelecek Yıllara Ait Gelirler", note: "Peşin alınmış, sonraki yıllara ait gelirler." }] },
  { id: "5", code: "5", title: "Özkaynaklar", cue: "İşletme sahibinin payı ve kâr/zarar birikimleri", normal: "Genellikle alacak", accounts: [{ code: "500", name: "Sermaye", note: "İşletmeye tahsis edilen sermaye." }, { code: "501", name: "Ödenmemiş Sermaye (-)", note: "Taahhüt edilip henüz ödenmemiş sermaye; eksi karakterli." }, { code: "520", name: "Hisse Senedi İhraç Primleri", note: "Sermaye yedeği örneği." }, { code: "540", name: "Yasal Yedekler", note: "Kâr yedekleri içinde yasal yedek." }, { code: "570", name: "Geçmiş Yıllar Kârları", note: "Dağıtılmamış geçmiş dönem kârları." }, { code: "580", name: "Geçmiş Yıllar Zararları (-)", note: "Geçmiş dönem zararları; eksi karakterli." }, { code: "590", name: "Dönem Net Kârı", note: "Dönemin net kâr sonucu." }, { code: "591", name: "Dönem Net Zararı (-)", note: "Dönemin net zarar sonucu; eksi karakterli." }] },
  { id: "6", code: "6", title: "Gelir Tablosu Hesapları", cue: "Dönemin gelir, maliyet ve sonuç hikâyesi", normal: "Gelir alacak · gider borç", accounts: [{ code: "600", name: "Yurtiçi Satışlar", note: "Yurtiçindeki mal/hizmet satış gelirleri." }, { code: "610", name: "Satıştan İadeler (-)", note: "Brüt satışları azaltan iade hesabı." }, { code: "621", name: "Satılan Ticari Mallar Maliyeti (-)", note: "Satılan ticari malların maliyeti." }, { code: "630", name: "Araştırma ve Geliştirme Giderleri (-)", note: "Faaliyet gideri alt hesabı." }, { code: "631", name: "Pazarlama, Satış ve Dağıtım Giderleri (-)", note: "Fonksiyon esaslı gider hesabı." }, { code: "632", name: "Genel Yönetim Giderleri (-)", note: "Yönetim fonksiyonuna ait giderler." }, { code: "640", name: "İştiraklerden Temettü Gelirleri", note: "Olağan gelir/kar hesabı." }, { code: "642", name: "Faiz Gelirleri", note: "Olağan gelir/kar hesabı." }, { code: "646", name: "Kambiyo Kârları", note: "Kur farkı kaynaklı olağan gelir/kar." }, { code: "656", name: "Kambiyo Zararları (-)", note: "Kur farkı kaynaklı olağan gider/zarar." }, { code: "660", name: "Kısa Vadeli Borçlanma Giderleri (-)", note: "Kısa vadeli borçların finansman gideri." }, { code: "690", name: "Dönem Kârı veya Zararı", note: "Gelir ve giderlerin dönem sonu buluşma noktası." }] },
  { id: "7", code: "7", title: "Maliyet Hesapları", cue: "Giderin nerede oluştuğunu ve nereye yüklendiğini izler", normal: "Genellikle borç", accounts: [{ code: "710", name: "Direkt İlk Madde ve Malzeme Giderleri", note: "Ürüne doğrudan yüklenen ilk madde/malzeme." }, { code: "720", name: "Direkt İşçilik Giderleri", note: "Ürüne doğrudan yüklenen işçilik." }, { code: "730", name: "Genel Üretim Giderleri", note: "Üretime ilişkin endirekt giderler." }, { code: "740", name: "Hizmet Üretim Maliyeti", note: "Hizmet üretimine ait maliyetler." }, { code: "750", name: "Araştırma ve Geliştirme Giderleri", note: "7/A maliyet hesaplarında Ar-Ge gideri." }, { code: "760", name: "Pazarlama, Satış ve Dağıtım Giderleri", note: "Satışa götüren faaliyetlerin fonksiyon gideri." }, { code: "770", name: "Genel Yönetim Giderleri", note: "Yönetim fonksiyonuna ait giderler." }, { code: "780", name: "Finansman Giderleri", note: "Borçlanma ve finansman kaynaklı giderler." }, { code: "790", name: "İlk Madde ve Malzeme Giderleri", note: "7/B gider çeşidi hesabı." }, { code: "797", name: "Finansman Giderleri", note: "7/B gider çeşidi hesabı." }] },
  { id: "8", code: "8", title: "Serbest Hesaplar", cue: "Hesap planında işletme ihtiyacı için serbest bırakılan alan", normal: "İşletme politikasına bağlı", accounts: [{ code: "80", name: "Serbest grup", note: "Kullanımı, plan ve mevzuat çerçevesinde işletme ihtiyacına göre değerlendirilir." }] },
  { id: "9", code: "9", title: "Nazım Hesaplar", cue: "Ana tabloların dışında izleme ve bilgi alanı", normal: "Karşılıklı izleme", accounts: [{ code: "900", name: "Nazım Hesaplara Ait Borçlu Hesaplar", note: "Nazım izleme alanının borç tarafı." }, { code: "901", name: "Nazım Hesaplara Ait Alacaklı Hesaplar", note: "Nazım izleme alanının alacak tarafı." }] },
];

export const learningTipCards = [
  { id: "mizan", image: ASSETS.tipMizan, kicker: "MİZAN MOLASI", title: "Denk mizan, doğru hesap seçimi demek değildir.", text: "Borç ve alacak toplamını denkleştir; sonra belgeyi, hesap adını ve işlem nedenini ayrıca kontrol et." },
  { id: "cari", image: ASSETS.tipCari, kicker: "CARİ DÜNYA", title: "120 bekler, 320 hatırlatır.", text: "120’de müşteri işletmeye borçlu; 320’de işletme satıcıya borçludur. Senaryoyu önce bu cümleyle kur." },
  { id: "kdv", image: ASSETS.tipKdv, kicker: "KDV AYRIMI", title: "Alıştaki ve satıştaki KDV’yi ayrı sahnelere koy.", text: "İndirilecek KDV ile hesaplanan KDV aynı hikâyede buluşabilir; ama aynı görevde değillerdir." },
];

export const quizQuestions = [
  {
    topic: "Finansal Muhasebe",
    question: "İşletmenin müşterisine vadeli mal satmasıyla doğan ticari alacak ilk olarak hangi hesapta izlenir?",
    choices: [{ code: "120", text: "120 Alıcılar" }, { code: "153", text: "153 Ticari Mallar" }, { code: "320", text: "320 Satıcılar" }, { code: "600", text: "600 Yurtiçi Satışlar" }],
    correct: "120",
    explanation: "Kredili satışta müşteriden bir alacak doğar. Bu alacak 120 Alıcılar hesabında borçta izlenir; satış geliri ise 600 Yurtiçi Satışlar hesabına alacak yazılır.",
  },
  {
    topic: "Mizan Mantığı",
    question: "Bir yevmiye kaydının temel denge kontrolü aşağıdakilerden hangisidir?",
    choices: [{ code: "A", text: "Borç toplamı = Alacak toplamı" }, { code: "B", text: "Varlıklar = Giderler" }, { code: "C", text: "Gelirler = Kasa" }, { code: "D", text: "Borçlar = Satışlar" }],
    correct: "A",
    explanation: "Çift taraflı kayıt sisteminde her yevmiye maddesinde borç toplamı ile alacak toplamı eşit olmalıdır. Bu, kaydın biçimsel denge kontrolüdür.",
  },
  {
    topic: "Denetim",
    question: "Denetçinin yeterli ve uygun kanıt toplamasının ana amacı nedir?",
    choices: [{ code: "A", text: "Görüşünü destekleyecek makul dayanak oluşturmak" }, { code: "B", text: "İşletme adına ödeme yapmak" }, { code: "C", text: "Tüm hataları sıfırlamak" }, { code: "D", text: "Yevmiye defterini yeniden yazmak" }],
    correct: "A",
    explanation: "Denetim kanıtı, denetçinin görüşünü destekleyecek yeterli ve uygun dayanağı sağlar. Denetçi işletmenin yerine işlem yapmaz; inceleme ve değerlendirme yapar.",
  },
];

export const lessonCards = [
  { title: "Bilanço", tag: "Fotoğraf karesi", kind: "landmark", summary: "İşletmenin belirli bir gündeki fotoğrafıdır: elindekiler, borçları ve özkaynakları aynı kareye sığar.", detail: "Bir dükkânı kapıdan girdiğin anda görür gibisin: kasada para, rafta mal, bankada bakiye; karşı tarafta satıcıya borç ve işletme sahibinin payı. Varlıklar = Kaynaklar dengesi bu fotoğrafın omurgasıdır." },
  { title: "Mizan", tag: "Denge provası", kind: "scale", summary: "Hesapların borç ve alacak toplamlarını yan yana çağıran kontrol listesidir.", detail: "Sahneye tüm hesaplar sırayla çıkar. Her biri borç ve alacak toplamını söyler. Toplamlar eşitse perde henüz kapanmaz ama kayıtların biçimsel dengesi alkış alır; yine de içerik kontrolü gerekir." },
  { title: "Gelir tablosu", tag: "Dönemin hikâyesi", kind: "file", summary: "Bir dönemde kazanılanlarla katlanılan giderlerin hikâyesini anlatır.", detail: "600 satış gelirini anlatır, 621 maliyetin peşinden gelir, 632 masaya oturur. Dönem sonunda hepsi 690’ın odasında buluşur; hikâye kârla mı bitti, zararla mı, orada anlaşılır." },
  { title: "Nazım hesaplar", tag: "Kulis notu", kind: "book", summary: "Bilanço ve gelir tablosunda yer almayan, bilgi ve izleme amaçlı hatırlatıcılardır.", detail: "Kulis listesi gibidir: ana oyunun içinde para ya da varlık gibi görünmez ama taahhüt, teminat veya emanet bilgisi için önemlidir. Nazım hesaplar bilgi verir; finansal tabloların ana yüzünü doğrudan oluşturmaz." },
];

export const matchPairs = [
  { code: "120", text: "Kredili satıştan doğan ticari alacak" },
  { code: "320", text: "Kredili alıştan doğan ticari borç" },
  { code: "191", text: "Alışlarda indirilebilecek KDV" },
];

export type BalanceWatch = { code: string; name: string; normal: "Borç" | "Alacak" | "Bağlama göre"; state: "Dikkat" | "Dönem sonu" | "Özel durum"; arrow: "up" | "down"; note: string; fix: string };

export const balanceWatches: BalanceWatch[] = [
  { code: "100", name: "Kasa", normal: "Borç", state: "Dikkat", arrow: "up", note: "Kasa normalde borç bakiye verir. Alacak bakiye görünüyorsa önce kayıt zamanını, mahsupları ve kasa sayımını kontrol et.", fix: "Kural: Nakit varlık arttığında borç, azaldığında alacak yönünde hareket eder." },
  { code: "120", name: "Alıcılar", normal: "Borç", state: "Özel durum", arrow: "up", note: "120’nin alacak bakiyesi, müşteriden alacağın değil müşteriye karşı yükümlülüğün doğduğu bir avans/mahsup ihtimalini düşündürür.", fix: "Kural: Müşteri işletmeye borçluysa 120 borç bakiyelidir; müşteri avansını uygun avans hesabıyla ayrıca izle." },
  { code: "320", name: "Satıcılar", normal: "Alacak", state: "Özel durum", arrow: "down", note: "320’nin borç bakiyesi, satıcıya avans veya fazla ödeme gibi özel bir durumu işaret edebilir; alış borcu gibi yorumlama.", fix: "Kural: İşletme satıcıya borçluysa 320 alacak bakiyelidir; sipariş avansı ve fazla ödeme için uygun hesabı ayır." },
  { code: "600", name: "Yurtiçi Satışlar", normal: "Alacak", state: "Dönem sonu", arrow: "down", note: "600 gelir hesabıdır; normalde alacak bakiye verir ve dönem sonunda sonuç hesaplarına aktarılır.", fix: "Kural: Satış iadesini satış hesabını tersine çevirerek değil, ilgili indirim/iade hesabı ile düşün." },
  { code: "640", name: "İştiraklerden Temettü Gelirleri", normal: "Alacak", state: "Dönem sonu", arrow: "down", note: "640 gelir niteliğindedir; dönem sonunda 690 Dönem Kârı veya Zararı hesabına aktarılacak bir sonuç hesabıdır.", fix: "Kural: Gelir doğduğunda alacak yönünü, tahsilat olduğunda varlık hesabının borç yönünü birlikte gör." },
  { code: "760", name: "Pazarlama Satış ve Dağıtım Giderleri", normal: "Borç", state: "Dönem sonu", arrow: "up", note: "760 gider hesabıdır; dönem boyunca borçta birikir ve dönem sonunda 690’a aktarılır.", fix: "Kural: Harcamanın pazarlama/satış-dağıtım amacı taşıyıp taşımadığını önce sınıflandır." },
  { code: "770", name: "Genel Yönetim Giderleri", normal: "Borç", state: "Dönem sonu", arrow: "up", note: "770, işletmenin yönetim fonksiyonuna ait giderleri izler; gelir hesabı gibi alacak bakiyesi beklenmez.", fix: "Kural: Yönetimle ilgili gideri önce doğru fonksiyon hesabına al, sonra dönem sonunda sonuç hesabına aktar." },
  { code: "780", name: "Finansman Giderleri", normal: "Borç", state: "Dönem sonu", arrow: "up", note: "780 borçlanma maliyetleri ve finansmanla ilişkili giderler için borç yönünde izlenir; dönem sonunda 690’a gider.", fix: "Kural: Finansman giderini faaliyet gideriyle karıştırma; işlem nedenini etiketle." },
];

export const mizanRows = [
  { code: "100", label: "Kasa", debit: "40", credit: "—" },
  { code: "120", label: "Alıcılar", debit: "50", credit: "—" },
  { code: "153", label: "Ticari Mallar", debit: "60", credit: "—" },
  { code: "191", label: "İndirilecek KDV", debit: "12", credit: "—" },
  { code: "320", label: "Satıcılar", debit: "—", credit: "122" },
  { code: "500", label: "Sermaye", debit: "—", credit: "20" },
  { code: "600", label: "Yurtiçi Satışlar", debit: "—", credit: "100" },
  { code: "621", label: "STMM", debit: "60", credit: "—" },
  { code: "770", label: "Genel Yönetim Gid.", debit: "15", credit: "—" },
  { code: "780", label: "Finansman Gid.", debit: "5", credit: "—" },
];

export const journalScenarios = [
  { id: "purchase", tag: "FİNANSAL MUHASEBE", title: "Vadeli mal alışı", prompt: "100.000 TL + KDV tutarında ticari mal vadeli alındı.", entries: [{ code: "153", label: "Ticari Mallar", side: "borç" }, { code: "191", label: "İndirilecek KDV", side: "borç" }, { code: "320", label: "Satıcılar", side: "alacak" }], answer: "Mal ve indirilecek KDV artar; satıcıya borç 320 Satıcılar hesabının alacak tarafında doğar." },
  { id: "sale", tag: "FİNANSAL MUHASEBE", title: "Kredili satış", prompt: "120.000 TL + KDV tutarında mal müşteriye vadeli satıldı.", entries: [{ code: "120", label: "Alıcılar", side: "borç" }, { code: "600", label: "Yurtiçi Satışlar", side: "alacak" }, { code: "391", label: "Hesaplanan KDV", side: "alacak" }], answer: "Müşteri işletmeye borçlanır; satış geliri ve hesaplanan KDV alacak yönünde doğar." },
  { id: "cash-sale", tag: "FİNANSAL MUHASEBE", title: "Peşin satış", prompt: "Mal peşin satıldı ve satış bedeli kasaya alındı; hesaplanan KDV de vardır.", entries: [{ code: "100", label: "Kasa", side: "borç" }, { code: "600", label: "Yurtiçi Satışlar", side: "alacak" }, { code: "391", label: "Hesaplanan KDV", side: "alacak" }], answer: "Kasa varlığı borçta artar; satış geliri ve hesaplanan KDV alacak yönünde izlenir." },
  { id: "collection", tag: "FİNANSAL MUHASEBE", title: "Tahsilat turu", prompt: "Müşteriden banka aracılığıyla alacak tahsil edildi.", entries: [{ code: "102", label: "Bankalar", side: "borç" }, { code: "120", label: "Alıcılar", side: "alacak" }], answer: "Banka varlığı artar; müşteriden olan ticari alacak azalır." },
  { id: "supplier-payment", tag: "FİNANSAL MUHASEBE", title: "Satıcı ödemesi", prompt: "Satıcıya olan ticari borç banka aracılığıyla ödendi.", entries: [{ code: "320", label: "Satıcılar", side: "borç" }, { code: "102", label: "Bankalar", side: "alacak" }], answer: "Satıcıya olan borç azalırken 320 borçta çalışır; bankadan çıkan tutar 102’nin alacak tarafına yazılır." },
  { id: "admin", tag: "GİDER TABLOSU", title: "Yönetim gideri", prompt: "Yönetim birimine ait fatura vadeli alındı; indirilebilir KDV de vardır.", entries: [{ code: "770", label: "Genel Yönetim Giderleri", side: "borç" }, { code: "191", label: "İndirilecek KDV", side: "borç" }, { code: "320", label: "Satıcılar", side: "alacak" }], answer: "Yönetim gideri ve indirilecek KDV artar; satıcıya borç doğar." },
  { id: "marketing", tag: "GİDER TABLOSU", title: "Reklam gideri", prompt: "Pazarlama faaliyeti için yapılan reklam harcaması kasadan ödendi; indirilebilir KDV de vardır.", entries: [{ code: "760", label: "Pazarlama Satış ve Dağıtım Giderleri", side: "borç" }, { code: "191", label: "İndirilecek KDV", side: "borç" }, { code: "100", label: "Kasa", side: "alacak" }], answer: "Pazarlama gideri 760’ta ve indirilecek KDV 191’de borçta izlenir; kasadan ödeme 100’ü alacaklandırır." },
  { id: "finance", tag: "FİNANSMAN", title: "Faiz ödemesi", prompt: "Banka hesabından finansman gideri ödendi.", entries: [{ code: "780", label: "Finansman Giderleri", side: "borç" }, { code: "102", label: "Bankalar", side: "alacak" }], answer: "Finansman gideri borçta, bankadan çıkan para alacakta izlenir." },
  { id: "income", tag: "GELİR TABLOSU", title: "Temettü geliri", prompt: "İştirakten temettü geliri bankaya tahsil edildi.", entries: [{ code: "102", label: "Bankalar", side: "borç" }, { code: "640", label: "İştiraklerden Temettü Gelirleri", side: "alacak" }], answer: "Tahsilat varlığı artırır; temettü geliri gelir hesabında alacak yönünde doğar." },
  { id: "return", tag: "SATIŞ İADESİ", title: "Satıştan iade", prompt: "Müşteri, kredili satışın bir kısmını iade etti. Satış bedeli ve hesaplanan KDV tutarı müşterinin borcundan düşüldü.", entries: [{ code: "610", label: "Satıştan İadeler", side: "borç" }, { code: "391", label: "Hesaplanan KDV", side: "borç" }, { code: "120", label: "Alıcılar", side: "alacak" }], answer: "Satıştan iade ve KDV düzeltmesi borçta; müşteriden olan alacağın azalması ise 120’nin alacak tarafında izlenir." },
  { id: "cost-sale", tag: "STOK MALİYETİ", title: "Satılan malın maliyeti", prompt: "Satılan ticari malların maliyeti stoktan çıkarıldı.", entries: [{ code: "621", label: "Satılan Ticari Mallar Maliyeti", side: "borç" }, { code: "153", label: "Ticari Mallar", side: "alacak" }], answer: "Satış gelirinin yanında maliyet hikâyesi de vardır: 621 borçta maliyetleşir, 153 stoktan alacakta düşer." },
  { id: "check-collection", tag: "ÇEK / SENET", title: "Çekli tahsilat", prompt: "Müşteriden olan alacak, çek alınarak tahsil edildi.", entries: [{ code: "101", label: "Alınan Çekler", side: "borç" }, { code: "120", label: "Alıcılar", side: "alacak" }], answer: "Alacak artık müşteride değil, alınan çekte izlenir: 101 borç, 120 alacak." },
  { id: "note-collection", tag: "ÇEK / SENET", title: "Senetli alacağa dönüş", prompt: "Müşteriden olan açık hesap alacağı senede bağlandı.", entries: [{ code: "121", label: "Alacak Senetleri", side: "borç" }, { code: "120", label: "Alıcılar", side: "alacak" }], answer: "Alacağın niteliği değişir: açık hesap 120 azalır, senede bağlanan alacak 121’de borçta izlenir." },
  { id: "cheque-payment", tag: "ÇEK / SENET", title: "Çekle satıcı ödemesi", prompt: "Satıcıya olan borç için çek düzenlendi ve verildi.", entries: [{ code: "320", label: "Satıcılar", side: "borç" }, { code: "103", label: "Verilen Çekler ve Ödeme Emirleri (-)", side: "alacak" }], answer: "Satıcı borcu 320’de borçla azalır; verilen çek 103’ün alacak tarafında izlenir." },
  { id: "discount", tag: "SATIŞ İSKONTOSU", title: "Sonradan satış iskontosu", prompt: "Müşteriye kredili satış için sonradan iskonto yapıldı; KDV farkı da alacaktan düşüldü.", entries: [{ code: "611", label: "Satış İskontoları", side: "borç" }, { code: "391", label: "Hesaplanan KDV", side: "borç" }, { code: "120", label: "Alıcılar", side: "alacak" }], answer: "İskonto brüt satışı azaltan bir hesapta borçlanır; KDV düzelir ve müşteriden olan alacak azalır." },
  { id: "depreciation", tag: "DÖNEM SONU", title: "Demirbaş amortismanı", prompt: "Yönetimde kullanılan demirbaş için dönem amortismanı ayrıldı.", entries: [{ code: "770", label: "Genel Yönetim Giderleri", side: "borç" }, { code: "257", label: "Birikmiş Amortismanlar (-)", side: "alacak" }], answer: "Gider 770’te borçta izlenir; varlığın birikmiş amortismanı 257’de alacakta artar." },
  { id: "wage-accrual", tag: "ÜCRET / SGK", title: "Ücret tahakkuku", prompt: "Yönetim personelinin ücretleri tahakkuk ettirildi; net ücret, vergi ve SGK kesintileri ayrıldı.", entries: [{ code: "770", label: "Genel Yönetim Giderleri", side: "borç" }, { code: "335", label: "Personele Borçlar", side: "alacak" }, { code: "360", label: "Ödenecek Vergi ve Fonlar", side: "alacak" }, { code: "361", label: "Ödenecek Sosyal Güvenlik Kesintileri", side: "alacak" }], answer: "Toplam personel gideri 770’te borçta; net ücret ve kesintiler ilgili yükümlülük hesaplarında alacakta toplanır." },
  { id: "employer-sgk", tag: "ÜCRET / SGK", title: "İşveren payı", prompt: "İşveren payı sosyal güvenlik kesintisi tahakkuk ettirildi.", entries: [{ code: "770", label: "Genel Yönetim Giderleri", side: "borç" }, { code: "361", label: "Ödenecek Sosyal Güvenlik Kesintileri", side: "alacak" }], answer: "İşveren payı da giderdir: 770 borçta, ödenecek SGK yükümlülüğü 361 alacakta izlenir." },
  { id: "loan", tag: "FİNANSMAN", title: "Banka kredisi kullanımı", prompt: "İşletme kısa vadeli banka kredisi kullandı ve tutar bankaya geçti.", entries: [{ code: "102", label: "Bankalar", side: "borç" }, { code: "300", label: "Banka Kredileri", side: "alacak" }], answer: "Bankadaki varlık artarken 102 borçlanır; kredi borcu 300’de alacak yönünde doğar." },
  { id: "vat-close", tag: "KDV MAHSUBU", title: "KDV mahsup adımı", prompt: "Dönem sonunda indirilecek KDV, hesaplanan KDV ile mahsuplaştırıldı; kalan ödenecek tutar 360’a aktarıldı.", entries: [{ code: "391", label: "Hesaplanan KDV", side: "borç" }, { code: "191", label: "İndirilecek KDV", side: "alacak" }, { code: "360", label: "Ödenecek Vergi ve Fonlar", side: "alacak" }], answer: "Mahsup sahnesinde 391 borçta kapanmaya gider; 191 alacakta kapanır; kalan borç 360’ta alacak olarak izlenir." },
  { id: "tax-provision", tag: "VERGİ TAHAKKUKU", title: "Dönem kârı vergi karşılığı", prompt: "Dönem kârı üzerinden vergi karşılığı ayrıldı.", entries: [{ code: "691", label: "Dönem Kârı Vergi ve Diğer Yasal Yükümlülük Karşılıkları", side: "borç" }, { code: "370", label: "Dönem Kârı Vergi ve Diğer Yasal Yükümlülük Karşılıkları", side: "alacak" }], answer: "Vergi karşılığı gideri 691’de borçta; karşılık yükümlülüğü 370’te alacakta izlenir." },
  { id: "prepaid", tag: "DÖNEMSELLEŞTİRME", title: "Peşin sigorta", prompt: "Gelecek aylara ait sigorta primi kasadan peşin ödendi.", entries: [{ code: "180", label: "Gelecek Aylara Ait Giderler", side: "borç" }, { code: "100", label: "Kasa", side: "alacak" }], answer: "Gider henüz bu dönemin tamamına ait değildir; 180’de borçta bekler, kasadan ödeme 100’ü alacaklandırır." },
  { id: "memo-guarantee", tag: "NAZIM HESAPLAR", title: "Teminat kulisi", prompt: "İzleme amacıyla alınan teminata ilişkin nazım hesap kaydı yapıldı.", entries: [{ code: "900", label: "Nazım Hesaplara Ait Borçlu Hesaplar", side: "borç" }, { code: "901", label: "Nazım Hesaplara Ait Alacaklı Hesaplar", side: "alacak" }], answer: "Nazım hesaplar bilgi ve izleme içindir: 900 ve 901 karşılıklı çalışır; ana finansal tablo kalemi gibi düşünülmez." },
  { id: "note-payment", tag: "ÇEK / SENET", title: "Borç senedi ödemesi", prompt: "Vadesi gelen borç senedi banka aracılığıyla ödendi.", entries: [{ code: "321", label: "Borç Senetleri", side: "borç" }, { code: "102", label: "Bankalar", side: "alacak" }], answer: "Senede bağlanmış ticari borç, ödeme anında 321’in borç tarafıyla azalır; bankadan çıkış 102’nin alacak tarafında izlenir." },
  { id: "close-revenue", tag: "DÖNEM SONU", title: "Gelir hesabı kapanışı", prompt: "Yurtiçi satışlar hesabı dönem sonunda dönem kârı veya zararı hesabına devredildi.", entries: [{ code: "600", label: "Yurtiçi Satışlar", side: "borç" }, { code: "690", label: "Dönem Kârı veya Zararı", side: "alacak" }], answer: "Gelir hesabı 600, alacak bakiyesini kapatmak için borçlanır; sonuç 690’un alacak tarafına taşınır." },
];

export const journalScenarioAmounts: Record<string, { badge: string; total: string; entries: Record<string, string> }> = {
  purchase: { badge: "100.000 + KDV", total: "120.000", entries: { "153": "100.000", "191": "20.000", "320": "120.000" } },
  sale: { badge: "120.000 + KDV", total: "144.000", entries: { "120": "144.000", "600": "120.000", "391": "24.000" } },
  "cash-sale": { badge: "50.000 + KDV", total: "60.000", entries: { "100": "60.000", "600": "50.000", "391": "10.000" } },
  collection: { badge: "BANKA TAHSİLATI", total: "72.000", entries: { "102": "72.000", "120": "72.000" } },
  "supplier-payment": { badge: "BANKA ÖDEMESİ", total: "90.000", entries: { "320": "90.000", "102": "90.000" } },
  admin: { badge: "20.000 + KDV", total: "24.000", entries: { "770": "20.000", "191": "4.000", "320": "24.000" } },
  marketing: { badge: "12.000 + KDV", total: "14.400", entries: { "760": "12.000", "191": "2.400", "100": "14.400" } },
  finance: { badge: "FAİZ ÖDEMESİ", total: "8.000", entries: { "780": "8.000", "102": "8.000" } },
  income: { badge: "TEMETTÜ TAHSİLATI", total: "15.000", entries: { "102": "15.000", "640": "15.000" } },
  return: { badge: "10.000 + KDV", total: "12.000", entries: { "610": "10.000", "391": "2.000", "120": "12.000" } },
  "cost-sale": { badge: "STOK MALİYETİ", total: "60.000", entries: { "621": "60.000", "153": "60.000" } },
  "check-collection": { badge: "ALINAN ÇEK", total: "35.000", entries: { "101": "35.000", "120": "35.000" } },
  "note-collection": { badge: "ALACAK SENEDİ", total: "44.000", entries: { "121": "44.000", "120": "44.000" } },
  "cheque-payment": { badge: "VERİLEN ÇEK", total: "38.000", entries: { "320": "38.000", "103": "38.000" } },
  discount: { badge: "5.000 + KDV", total: "6.000", entries: { "611": "5.000", "391": "1.000", "120": "6.000" } },
  depreciation: { badge: "AMORTİSMAN", total: "7.500", entries: { "770": "7.500", "257": "7.500" } },
  "wage-accrual": { badge: "ÜCRET TAHAKKUKU", total: "50.000", entries: { "770": "50.000", "335": "34.000", "360": "7.000", "361": "9.000" } },
  "employer-sgk": { badge: "İŞVEREN SGK", total: "11.000", entries: { "770": "11.000", "361": "11.000" } },
  loan: { badge: "KREDİ KULLANIMI", total: "200.000", entries: { "102": "200.000", "300": "200.000" } },
  "vat-close": { badge: "KDV MAHSUBU", total: "70.000", entries: { "391": "70.000", "191": "40.000", "360": "30.000" } },
  "tax-provision": { badge: "VERGİ KARŞILIĞI", total: "45.000", entries: { "691": "45.000", "370": "45.000" } },
  prepaid: { badge: "PEŞİN GİDER", total: "18.000", entries: { "180": "18.000", "100": "18.000" } },
  "memo-guarantee": { badge: "TEMİNAT İZLEME", total: "100.000", entries: { "900": "100.000", "901": "100.000" } },
  "note-payment": { badge: "SENET ÖDEMESİ", total: "55.000", entries: { "321": "55.000", "102": "55.000" } },
  "close-revenue": { badge: "KAPANIŞ FİŞİ", total: "280.000", entries: { "600": "280.000", "690": "280.000" } },
};

export const extendedMatchPairs = [
  { code: "640", text: "İştiraklerden temettü gelirleri" },
  { code: "760", text: "Pazarlama, satış ve dağıtım giderleri" },
  { code: "770", text: "Genel yönetim fonksiyonuna ait giderler" },
  { code: "780", text: "Finansman işlemlerinden kaynaklanan giderler" },
  { code: "900", text: "Nazım hesaplara ait borçlu izleme alanı" },
  { code: "901", text: "Nazım hesaplara ait alacaklı izleme alanı" },
];

export const runnerPrompts = [
  { topic: "Mizan", statement: "Borç toplamı alacak toplamına eşitse kayıtların içerik doğruluğu otomatik olarak kanıtlanır.", correct: false, reason: "Mizan denkliği biçimsel kontrol sağlar; yanlış hesaba doğru tarafla kayıt da dengeli olabilir." },
  { topic: "Vergi Hukuku", statement: "Vergilendirme aşamalarını sıralı düşünmek, süre sorularında hatayı azaltır.", correct: true, reason: "Tarh, tebliğ, tahakkuk ve tahsil süreçlerini ilişki içinde okumak soru kökünü kolaylaştırır." },
  { topic: "Denetim", statement: "Denetçi, görüşünü desteklemek için yeterli ve uygun kanıt toplamaya çalışır.", correct: true, reason: "Kanıt; risk değerlendirmesi, denetim prosedürleri ve görüş arasındaki temel köprüdür." },
  { topic: "Maliyet", statement: "760 ve 770 her zaman aynı fonksiyonu izler.", correct: false, reason: "760 pazarlama-satış-dağıtım, 770 ise genel yönetim fonksiyonunu izler." },
  { topic: "Ticaret Hukuku", statement: "Tacir ve ticari iş kavramlarını işlem bağlamıyla birlikte okumak daha kalıcıdır.", correct: true, reason: "Hukuk sorularında kavramın tanımı kadar olay içindeki yeri de belirleyicidir." },
  { topic: "Nazım Hesaplar", statement: "Nazım hesaplar, bilanço ve gelir tablosunun ana kalemleri gibi kârı doğrudan değiştirir.", correct: false, reason: "Nazım hesaplar izleme ve bilgi amacı taşır; ana finansal tablo kalemleri gibi düşünülmez." },
];

export const visualQuestionDeck = [
  { topic: "Finansal Muhasebe", question: "Vadeli mal satışında müşteriden doğan ticari alacak ilk anda hangi hesapta izlenir?", choices: [{ key: "A", text: "120 Alıcılar" }, { key: "B", text: "320 Satıcılar" }, { key: "C", text: "153 Ticari Mallar" }], correct: "A", answer: "Kredili satışta müşteri işletmeye borçlanır; 120 Alıcılar borç yönünde çalışır." },
  { topic: "Mali Tablolar Analizi", question: "Dönen varlıklar ile kısa vadeli borçların birlikte okunması en çok hangi değerlendirmeye hizmet eder?", choices: [{ key: "A", text: "Likidite görünümüne" }, { key: "B", text: "Satış iadesine" }, { key: "C", text: "Nazım hesap eşleştirmesine" }], correct: "A", answer: "Kısa vadeli borçları karşılama gücü, likidite analiziyle ilişkilidir." },
  { topic: "Denetim", question: "Denetçinin görüşünü destekleyen temel çalışma çıktısı hangisidir?", choices: [{ key: "A", text: "Yeterli ve uygun denetim kanıtı" }, { key: "B", text: "İşletme adına ödeme emri" }, { key: "C", text: "Yeni satış faturası" }], correct: "A", answer: "Denetçi işletmenin işlemini yürütmez; görüşü için kanıt değerlendirir." },
  { topic: "Meslek Hukuku", question: "Mesleki etik sorusunda ilk bakılacak ortak eksen hangisidir?", choices: [{ key: "A", text: "Dürüstlük ve mesleki sorumluluk" }, { key: "B", text: "Mizan toplamı" }, { key: "C", text: "Kasa sayımı" }], correct: "A", answer: "Etik sorularında ilke, güven ve sorumluluk kavramlarını olayın bağlamıyla eşleştir." },
  { topic: "Ticaret Hukuku", question: "Ticaret hukuku sorusunda olayın ticari niteliğini çözmek için önce neyi netleştirmek yararlıdır?", choices: [{ key: "A", text: "Tarafların ve işlemin ticari bağlamını" }, { key: "B", text: "KDV mahsup tutarını" }, { key: "C", text: "Mizan borç toplamını" }], correct: "A", answer: "Tacir, ticari iş ve şirket kavramları olayın aktörleriyle birlikte okunur." },
  { topic: "Vergi Hukuku", question: "Süre ağırlıklı vergi sorularında hangi yöntem hatayı azaltır?", choices: [{ key: "A", text: "Aşamaları ve süreleri sıraya koymak" }, { key: "B", text: "Sadece hesabın kodunu ezberlemek" }, { key: "C", text: "Gelir tablosuna bakmak" }], correct: "A", answer: "Tarh, tebliğ, tahakkuk ve tahsil bağlantısını sıra halinde hatırla." },
  { topic: "İş Hukuku", question: "İş hukuku sorularında süre içeren olaylarda en güvenli ilk adım hangisidir?", choices: [{ key: "A", text: "Süreyi ve olay türünü ayrı not etmek" }, { key: "B", text: "320 Satıcılar hesabını seçmek" }, { key: "C", text: "Nazım hesap açmak" }], correct: "A", answer: "Bildirim, izin ve sigortalılık başlıklarında olay türü ile süreyi birlikte takip et." },
  { topic: "Maliyet Muhasebesi", question: "760 hesabı hangi fonksiyonla ilişkilidir?", choices: [{ key: "A", text: "Pazarlama, satış ve dağıtım" }, { key: "B", text: "Genel yönetim" }, { key: "C", text: "Temettü geliri" }], correct: "A", answer: "760 ile 770’i ayırmanın kısa yolu: satışa götüren faaliyet mi, yönetim faaliyeti mi?" },
  { topic: "Ekonomi", question: "Piyasa sorularında dengeyi yorumlarken birlikte bakılan iki temel kuvvet hangisidir?", choices: [{ key: "A", text: "Arz ve talep" }, { key: "B", text: "Borç ve alacak" }, { key: "C", text: "900 ve 901" }], correct: "A", answer: "Ekonomi rotasında değişkenlerin yönünü, arz-talep dengesinin etkisiyle düşün." },
  { topic: "Maliye", question: "Kamu maliyesi sorularında temel çerçeve hangi üçlüyle kurulabilir?", choices: [{ key: "A", text: "Kamu geliri, kamu gideri, bütçe" }, { key: "B", text: "Satış, maliyet, KDV" }, { key: "C", text: "Alıcı, satıcı, banka" }], correct: "A", answer: "Maliye başlıklarını kamu geliri–gideri ve bütçe ilişkisiyle haritalandır." },
  { topic: "Borçlar Hukuku", question: "Borçlar hukuku olayında çözüm için en başta hangi zincir izlenir?", choices: [{ key: "A", text: "Taraflar, borç ilişkisi ve ifa durumu" }, { key: "B", text: "Mizan alacak toplamı" }, { key: "C", text: "Stok sayım fişi" }], correct: "A", answer: "Sözleşme, ifa, temerrüt ve sona erme hâllerini olayın sırasına göre ayır." },
];

export const weeklyPlan = [
  { week: "01", title: "Kayıt ritmi", lessons: ["Finansal Muhasebe", "Maliyet Muhasebesi"], goal: "120–320–600 zinciri ve iki yevmiye turu" },
  { week: "02", title: "Tablo merceği", lessons: ["Mali Tablolar Analizi", "Maliye"], goal: "Mizan, bilanço ve oran okuma" },
  { week: "03", title: "Vergi saati", lessons: ["Vergi Hukuku", "Meslek Hukuku"], goal: "Süre rotası ve etik kartları" },
  { week: "04", title: "Hukuk sahnesi", lessons: ["İş Hukuku", "Ticaret Hukuku", "Borçlar Hukuku"], goal: "Kavram–olay eşleştirmesi" },
  { week: "05", title: "Kanıt ve denge", lessons: ["Denetim", "Ekonomi"], goal: "Kanıt klasörü ve piyasa dengesi" },
  { week: "06", title: "Dönem sonu", lessons: ["Gelir/Gider Tabloları", "Nazım Hesaplar"], goal: "640–760–770–780 kapanış provası" },
];

export type SgsTopic = {
  id: string;
  title: string;
  group: "Genel Kültür" | "Muhasebe & Denetim" | "Ekonomi & Maliye" | "Hukuk";
  questionCount: string;
  cue: string;
  note: string;
  videoUrl: string;
  videoLabel: string;
};

export const sgsTopics2026: SgsTopic[] = [
  { id: "turkce", title: "Türkçe", group: "Genel Kültür", questionCount: "7 soru", cue: "Paragraf pusulası", note: "Soruyu önce anla; uzun şıkta ana yargıyı yakala.", videoUrl: "https://www.youtube.com/results?search_query=2026+SGS+Türkçe+soru+çözümü", videoLabel: "2026 video ara" },
  { id: "matematik", title: "Matematik", group: "Genel Kültür", questionCount: "8 soru", cue: "İşlem adımı", note: "Hız değil, net işlem sırası; birim ve işaret kontrolü yap.", videoUrl: "https://www.youtube.com/results?search_query=2026+SGS+matematik+soru+çözümü", videoLabel: "2026 video ara" },
  { id: "inkilap", title: "Atatürk İlkeleri ve İnkılap Tarihi", group: "Genel Kültür", questionCount: "5 soru", cue: "Zaman şeridi", note: "Olay–tarih–ilke üçlüsünü kısa zincirlerle tekrar et.", videoUrl: "https://www.youtube.com/results?search_query=2026+SGS+inkılap+tarihi+soru+çözümü", videoLabel: "2026 video ara" },
  { id: "yabanci-dil", title: "Yabancı Dil", group: "Genel Kültür", questionCount: "10 soru", cue: "Bağlam avı", note: "Cümledeki bağlaçlar ve zaman ifadeleri anlamın rotasıdır.", videoUrl: "https://www.youtube.com/results?search_query=2026+SGS+yabancı+dil+soru+çözümü", videoLabel: "2026 video ara" },
  { id: "finansal-muhasebe", title: "Finansal Muhasebe", group: "Muhasebe & Denetim", questionCount: "26 soru", cue: "Kayıt motoru", note: "Hesap planı, standartlar, bilgi sistemi ve uluslararası kuruluşlar bu rotada birlikte tekrar edilir.", videoUrl: "https://www.youtube.com/watch?v=gC55mUyFodM", videoLabel: "2026/2 çözümü izle" },
  { id: "maliyet", title: "Maliyet Muhasebesi", group: "Muhasebe & Denetim", questionCount: "8 soru", cue: "Maliyet izi", note: "Giderin nerede oluştuğunu ve nereye yüklendiğini izlemeyi öğren.", videoUrl: "https://www.youtube.com/watch?v=GqEjdkRQjnc", videoLabel: "2026/1 çözümü izle" },
  { id: "mali-analiz", title: "Mali Tablolar Analizi", group: "Muhasebe & Denetim", questionCount: "8 soru", cue: "Oran merceği", note: "Likidite, faaliyet, mali yapı ve kârlılık oranlarını hikâyeye bağla.", videoUrl: "https://www.youtube.com/playlist?list=PLKi6DBKRE9mivc5tAk-45IN0ntDGh4SXb", videoLabel: "2026/1 video listesi" },
  { id: "denetim", title: "Denetim", group: "Muhasebe & Denetim", questionCount: "16 soru", cue: "Kanıt klasörü", note: "Risk, iç kontrol, kanıt ve görüş zincirini birbirinden ayır.", videoUrl: "https://www.youtube.com/watch?v=95gdLB0d53k", videoLabel: "2026/2 çözümü izle" },
  { id: "ekonomi", title: "Ekonomi", group: "Ekonomi & Maliye", questionCount: "6 soru", cue: "Piyasa dengesi", note: "Talep, arz, esneklik ve makro göstergeleri neden–sonuçla eşleştir.", videoUrl: "https://www.youtube.com/@dehaegitimkurumlari/videos", videoLabel: "2026 çözümlerini aç" },
  { id: "maliye", title: "Maliye", group: "Ekonomi & Maliye", questionCount: "6 soru", cue: "Kamu bütçesi", note: "Kamu gelirleri, giderleri ve bütçe ilkelerini şemayla tekrar et.", videoUrl: "https://www.youtube.com/@dehaegitimkurumlari/videos", videoLabel: "2026 çözümlerini aç" },
  { id: "meslek-hukuku", title: "Meslek Hukuku", group: "Hukuk", questionCount: "6 soru", cue: "Etik dosyası", note: "3568 sayılı Kanun, etik ve disiplin başlıklarını kısa kural kartlarıyla çalış.", videoUrl: "https://www.youtube.com/watch?v=QHVW-Wnws8o", videoLabel: "2026/1 çözümü izle" },
  { id: "is-hukuku", title: "İş ve Sosyal Güvenlik Hukuku", group: "Hukuk", questionCount: "6 soru", cue: "Süre alarmı", note: "Fesih, izin, bildirim ve sigortalılıkta süreleri ayrı bir rota olarak tut.", videoUrl: "https://www.youtube.com/watch?v=IetoXatohFY", videoLabel: "2026/1 çözümü izle" },
  { id: "vergi", title: "Vergi Hukuku", group: "Hukuk", questionCount: "6 soru", cue: "Tarh–tebliğ–tahakkuk", note: "Vergilendirme aşamalarını sıralı bir hikâye gibi kur; süreleri ayrıca not al.", videoUrl: "https://www.youtube.com/watch?v=vItJVQqoUlo", videoLabel: "2026/1 çözümü izle" },
  { id: "ticaret", title: "Ticaret Hukuku", group: "Hukuk", questionCount: "6 soru", cue: "Tacir sahnesi", note: "Tacir, ticari iş, şirket ve kıymetli evrak kavramlarını bağlamıyla hatırla.", videoUrl: "https://www.youtube.com/watch?v=ZL7mYlTywLU", videoLabel: "2026/1 çözümü izle" },
  { id: "borclar", title: "Borçlar Hukuku", group: "Hukuk", questionCount: "6 soru", cue: "Sözleşme zinciri", note: "Borç ilişkisi, ifa, temerrüt ve sona erme hâllerini adım adım düşün.", videoUrl: "https://www.youtube.com/watch?v=GcvOsYCb6R0", videoLabel: "2026/1 çözümü izle" },
];
