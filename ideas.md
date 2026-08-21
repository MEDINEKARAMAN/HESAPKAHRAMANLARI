# Hesap Kahramanları — Tasarım Fikirleri

## Yaklaşım 1 — Defter-i Neşeli

**Tema Adı:** Defter-i Neşeli

**Çok Kısa Giriş:** Tekdüzen Hesap Planı’nı renkli bir çalışma defteri ve çağdaş editoryal tasarım diliyle bir maceraya çevirir. Ciddi sınav konularını yormadan, kararlı ve rafine bir oyunculuk hissiyle anlatır.

**Olasılık:** 0.07

## Yaklaşım 2 — Denetim Atölyesi

**Tema Adı:** Denetim Atölyesi

**Çok Kısa Giriş:** Dosya klasörleri, makbuz etiketleri ve inceleme masası estetiğinden beslenen sakin bir araştırma alanı. Bilgi yoğunluğunu düzenli bilgi blokları ve dar bir renk paletiyle yönetir.

**Olasılık:** 0.04

## Yaklaşım 3 — Mizan Karnavalı

**Tema Adı:** Mizan Karnavalı

**Çok Kısa Giriş:** Hesapları sahne karakterlerine dönüştüren, enerjik ve yüksek kontrastlı bir oyun dünyası. Hızlı ödül döngüleriyle tekrar çalışmayı teşvik eder.

**Olasılık:** 0.08

---

# Seçilen Yön: Defter-i Neşeli

## Tasarım Hareketi

**Çağdaş editoryal kırtasiye tasarımı** ile hafif oyunlaştırılmış eğitim arayüzünün birleşimi. Eski bir genel muhasebe defterinin güven duygusu; renkli sekmeler, damgalar ve canlı hesap karakterleriyle güncel bir dijital çalışma deneyimine dönüşür.

## Temel İlkeler

1. Her eğlenceli unsur mutlaka görünür bir muhasebe kuralına bağlanır: Kod, hesap adı, normal bakiye ve işlem gerekçesi bir aradadır.
2. Uygulama bir kontrol paneli değil, kullanıcının açıp karıştırdığı kişisel çalışma defteri gibi davranır; içerik katmanları sekmeler, yapışkan notlar ve damgalarla ayrışır.
3. Renk yalnızca süs değildir; hesap sınıflarını ve geri bildirim durumlarını ayırt etmek için sistematik biçimde kullanılır.
4. Yanlış cevap cezaya değil, kısa bir gerekçeye ve anında yeniden denemeye dönüşür.

## Renk Felsefesi

Arka plan, uzun çalışma oturumlarında gözü yormayan **fildişi kâğıt** tonudur. Lacivert mürekkep otorite ve okunurluk sağlar; canlı vurgu renkleri hesap karakterlerinin hafızada kalmasını destekler. Bu canlı renkler ayrı ayrı kullanılır, böylece yüzey gereksiz bir gökkuşağına dönüşmez.

## Yerleşim Paradigması

Masaüstünde sol kenara cilt kapağı gibi duran dar bir gezinme bandı, sağda ise birbirinden hafifçe taşan çalışma sayfaları yer alır. Mobilde aynı hiyerarşi üstte kısa bir “bugünün defteri” başlığı ve altta başparmak erişimli bölüm çubuğuna dönüşür. Hesap haritası, klasik bir merkezî grafik yerine işlem senaryosunun kıvrımlı takip rotası olarak kurgulanır.

## İmza Öğeleri

1. Hesap kodları için renkli, kavisli köşeli “defter sekmesi” kartları.
2. Doğru cevapta görünen lacivert onay damgası ve küçük denge terazisi hareketi.
3. Haritada işlemlerin “mürekkep yolu” olarak hesaplar arasında akması; ilgili hesabın kısa karakter cümlesinin açılması.

## Etkileşim Felsefesi

Etkileşimler kısa, hedefe dönük ve dersin mantığını görünür kılar. Kullanıcı yanıt verdiğinde ekran yalnızca doğru/yanlış demek yerine hesabın neden o tarafta olduğuna dair bir “defter kenarı notu” sunar. Zamanlanmış ya da cezalandırıcı akışlar yoktur; yeniden deneme ve ipucu her zaman erişilebilirdir.

## Animasyon

Kartlar sayfa üzerinde 30–80 ms aralıklı, aşağıdan çok hafif bir akışla belirir. Kart üzerine gelindiğinde yalnızca gölge ve 2–4 px hareket uygulanır. Doğru cevaplarda terazi kolu kısa süre dengelenir ve damga 0.95 ölçekten görünür hâle gelir. Tüm hareketler 300 ms altında tutulur; `prefers-reduced-motion` tercihine saygı duyulur.

## Tipografi Sistemi

Başlıklar **DM Serif Display** ile defter kapağı hissi verir; arayüz, sayılar ve soru metinleri **Manrope** ile temiz ve güvenilir kalır. Hesap kodları, hizayı güçlendirmek için tabular sayı özellikli Manrope kullanır. Büyük başlıklar 700–900 ağırlıkta, açıklamalar 400–600 aralığında; metin blokları gereksiz yere ortalanmaz.

## Marka Özü

**Hesap Kahramanları, staj başlangıç sınavı için hesap mantığını ezber yerine oyun, hikâye ve işlem akışıyla öğreten çalışma defteridir.** Kişilik: zeki, sıcak, düzenli.

## Marka Sesi

Başlıklar kendinden emin, net ve hafif muzip; çağrı metinleri ise öğretici ama baskısızdır. Genel, boş vaatli ifadeler kullanılmaz.

Örnek satırlar:

> “320 kapıda: Malı aldın, sözün hâlâ bende.”

> “Mizan dengedeyse, zihnin de rahat eder.”

## Kelime Markası ve Logo

Logo, üç satırlı bir büyük defter biçiminden çıkan küçük bir denge terazisi işaretidir. Metinsiz işaret, kalın lacivert çizgiler ve **Mizan Mercanı** vurgusuyla çalışır; uygulama ikonunda da net biçimde seçilir.

## İmza Marka Rengi

**Mizan Mercanı — #FF6B4A.** Çalışma defterindeki kritik notu, doğru yönlendirmeyi ve markanın sıcak mizahını temsil eder.

## Style Decisions

1. **Renk kuralı:** Mizan Mercanı `#FF6B4A` yalnızca birincil vurgu, aktif yönlendirme, kritik not ve marka mizahı için kullanılacaktır. Diğer tonlar hesap sınıflarına atanmış, düz renkli defter sekmeleri olarak kalacak; dekoratif gökkuşağı gradyanlarına dönüşmeyecektir.
2. **Yüzey kuralı:** Ana alanlar modern kontrol paneli kartlarından çok fildişi çalışma sayfaları, renkli ayraçlar, kenar notları, damgalar ve hafif kâğıt katmanları gibi davranacaktır.
3. **Marka sesi kuralı:** Her ana bölüm, genel vaat yerine hesap kodu, olay ve gerekçe ilişkisini anlatan kısa; muzip ancak öğretici bir satır taşıyacaktır.
4. **Kampüs genişlemesi:** Yeni tablo laboratuvarı, oyun salonu ve haftalık rota; mevcut defter cildi, fildişi sayfa, lacivert mürekkep ve Mizan Mercanı hiyerarşisini koruyacak; mobilde tek sütunlu, okunaklı akışla devam edecektir.
5. **Uyarı hareketi:** Özel bakiye ve dönem sonu kartlarındaki oklar, normal bakiye yönünü öğretmek için kısa, döngüsel ve azaltılmış hareket tercihine saygılı mikro animasyonlarla çalışacaktır.
6. **Eser kuralı:** Her ana bölüm görünür bir defter nesnesi rolü alacaktır: tablo laboratuvarı yevmiye/defter sayfası, oyun salonu alıştırma kâğıdı, haftalık rota ajanda sayfası, kaynak alanı klipsli başvuru fişleri olarak davranacaktır.
7. **İmza kuralı:** Lacivert denge damgası, defter kenarı notu ve Mizan Mercanı; bölüm başı, ilerleme anı ve kritik düzeltmelerde tekrar eden, ancak yalnızca önemli anlarda görünen marka dili olacaktır.
8. **Karakter kuralı:** Her hesap karakterinde kod + rol + işlem mantığını bir araya getiren kısa bir ses satırı bulunacaktır; sayı, yalnızca etiket değil, hafıza çağrıştırıcısı olacaktır.
9. **Mürekkep odağı:** Lacivert zemin yalnızca aktif pratik ve kesin geri bildirim alanlarında kullanılacak; referans, anlatım ve liste yüzeyleri fildişi sayfa olarak kalacaktır.
10. **Yevmiye fişi:** Aktif yevmiye oyunu; kâğıt kenarı, damga, hesap kadrosu notu ve denge terazisiyle “mürekkep alıştırma fişi” rolünü taşır; koyu zemin bu odak anının istisnasıdır.
11. **Uzun açıklama kuralı:** Üç paragrafı aşan bilgi alanı düz metin bloğu olarak kalmaz; kenar notu, klipsli fiş, yevmiye satırı, damga veya ajanda maddelerine bölünerek görünür bir defter nesnesine dönüşür.
12. **Rota kuralı:** Her işlem senaryosu; görünür mürekkep yolu, hesap durağı ve her durakta “kod + rol + gerekçe” satırıyla anlatılır. Düz metin zincirleri rota yerine geçmez.
13. **Bölüm ritmi kuralı:** Uzun akışta pratik, rota, rehber ve kaynak modları büyük bölüm kapağı/etiketiyle ayrılır; hiçbir kart dizisi tek tip dashboard yoğunluğuna dönüşmez.
14. **Ana defter kuralı:** Kapak sayfasının alt bölümü düz bağlantı listesi değil, numaralı ayraçlar ve klipsli kartlarla tasarlanmış fiziksel bir içindekiler yaprağı gibi davranır.
15. **Karakter birimi kuralı:** Birincil hesap kodu yüzeyinde; kod, rol, normal bakiye ve kısa karakter sesi birlikte görünür. Bu not, rota dışındaki sayfalarda da defter kenarı hatırlatıcısı olarak tekrarlanır.
16. **Nesne ritmi kuralı:** Arka arkaya gelen bölümler aynı kart ızgarasıyla çözülmez; her ana alan görünür biçimde fiş, ajanda, rota, atlas, damga veya klipsli kaynak nesnesine dönüşür.

## Görsel Doğrulama Notu

Masaüstü doğrulamasında defter cildi, fildişi sayfa, lacivert mürekkep ve Mizan Mercanı hiyerarşisi; tablo laboratuvarı, oyun salonu, ajanda ve kaynak fişlerinde tutarlı biçimde görünür durumdadır. Yeni eklenen bölüm damgaları; kaynak alanını klipsli fiş, oyun alanını alıştırma kâğıdı ve tablo alanını yevmiye sayfası gibi ayırarak uzun sayfa akışındaki görsel ritmi güçlendirmiştir.

Hesap planı atlası, ayrıntılı kod listesini çizgili defter sayfası içinde sınıf ayraçlarıyla ayırmaktadır. Harita rehberi, mevcut rota görünümünü kalabalıklaştırmadan açılır not olarak çalışır; manuel açılan beş dakika notu ise sabit köşe düğmesiyle, ana çalışma yüzeyini kapatmadan görünür kalır.
