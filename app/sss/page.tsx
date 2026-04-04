'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { siteSettings } from '@/lib/mockData';
type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    id: 'q1',
    question: '2 saatlik bir kutlama için bu kadar harcama yapmak mantıklı mı?',
    answer: `Bu soruyu sormak çok dürüst ve çok insani. Gerçekten — "birkaç saat için bu para gidecek mi?" diye düşünmemek elde değil. Tatil de olur, başka bir şey de. Bunu içinden geçirdiysen, yanlış bir şey hissetmedin.

Ama şunu sormak istiyorum sana: O gün sadece 2 saat mi?

Evet, kutlama birkaç saat sürebilir. Ama o birkaç saat içinde olan şey — o bakışlar, o kahkahalar, sevdiklerinin aynı odada olması, o anın tam ortasında durduğunda hissettiklerin — bunlar saatlerle ölçülmüyor. Yıllar sonra hâlâ konuşulan, hâlâ gülümseten şeyler oluyor.

Gelinlik meselesine gelince…

Gelinlik giymek "harcama yapmak" değil aslında. Kendini o günün tam ortasına koymak. "Bu benim hikâyem, ben buradayım" demek. Bir fotoğrafa, bir anıya, bir hisse dönüşen bir an.

"Ama ben sadece kıyafete para vermek istemiyorum" diyorsan — bunu duyuyorum. Ve bu düşünce de geçerli. Ama şunu da bilmeni istiyorum: doğru gelinlik illa abartılı ya da pahalı olmak zorunda değil. Seni harika hissettiren, o gün gerçekten sen gibi hissettiren bir model bulmak — bu, o kutlamayı bambaşka bir yere taşıyor.

Para harcadığın şeylerin bir kısmı zamanla unutuluyor. Ama bazı anlar içinde kalıyor. O sabah hazırlanırken hissettiğin şey, aynaya ilk baktığında içinden geçen o an — bunlar öyle kolay gitmiyor.

2 saatlik bir kutlama olabilir. Ama hatırası ömürlük. ✨`,
  },
  {
    id: 'q2',
    question: 'Gelinlik fiyatları neden bu kadar farklı?',
    answer: `Bu soruyu çok duyuyorum ve anlıyorum — fiyat etiketlerine bakınca insan gerçekten "bu ne demek oluyor?" diye düşünüyor. Seni biraz rahatlatayım.

Aslında fiyatı belirleyen tek bir şey yok. Küçük küçük detaylar bir araya geliyor ve toplam ortaya çıkıyor. Şeffaf olayım:

Model ne kadar detaylıysa, emek de o kadar artıyor. Sade bir kesim ile üstü baştan sona işlemeli bir prenses model aynı fiyatta olmaz. Bu gayet normal — çünkü arkasında çok daha fazla zaman ve el var.

Kumaş ciddi fark yaratıyor. Düz bir saten başka, Fransız danteli başka, el işi taşlar başka bir şey. Ne kadar özel malzeme, o kadar farklı bir his — ve evet, o kadar farklı bir fiyat.

Ama en büyük fark işçilikte. Bunu açıkça söyleyeyim: gelinliği pahalı yapan çoğu zaman kumaş değil, insan emeği. El dikişi, taş işleme, özel detaylar… Bunlar zaman alıyor, ustalık istiyor.

Hazır model mi, sana özel mi? Sıfırdan sana göre dikilen bir gelinlik ile hazır bir model elbette aynı yerde durmaz. Ölçüye göre her düzeltme, ekstra bir özen demek.

Marka ve hizmet de fiyatın bir parçası. Bazen aynı model iki farklı yerde çok farklı fiyatlarda. Çünkü aslında sadece gelinliği değil, o süreci — provaları, danışmanlığı, o günkü deneyimi — de alıyorsun.

Küçük eklemeler toplanıyor. Duvak, kuyruk, kol, ek prova değişiklikleri… Tek tek bakınca önemsiz gibi görünür, ama bir araya gelince fark edilir.

Şimdi sana içtenlikle bir şey söyleyeyim: Sadece etikete bakarsan her şey pahalı gelir. Ama "ben neye para ödüyorum?" diye sorarsan, her şey çok daha mantıklı bir hal alır.

Bazı gelinler aslında kendilerine hiçbir şey ifade etmeyen detaylara para verir. Bazıları ise sade bir model seçer — ama o gelinlik üzerinde o kadar doğru durur ki, sonuç çok daha etkileyici olur.

Biz tam olarak bu dengeyi kurmana yardım ediyoruz. Gereksiz yere para harcatmamak için de, gerçekten fark yaratacak yerde de seni doğru yönlendirmek için de buradayız.`,
  },
  {
    id: 'q3',
    question: 'Bu gelinlik gerçekten ben miyim?',
    answer: `Bu soruyu sorabilmek başlı başına önemli. Çünkü bunu soran her gelin aslında şunu diyor: "O gün sadece güzel görünmek istemiyorum — kendim olmak istiyorum."

Ve bu çok doğru bir istek.

Gelinlik dediğimiz şey, üzerine giydikten sonra kendinizi kaybettiğiniz bir kostüm olmak zorunda değil. Tam tersine — doğru gelinlik, sizi daha çok siz yapan bir şey olabilir.

**Peki nereden başlamalı?**

Kendine şunu sor: "Ben bu günde nasıl hissetmek istiyorum?" Sade ve hafif mi? Güçlü ve göz alıcı mı? Romantik mi, modern mi? Bu sorunun cevabı, seni doğru yöne götürür. Gelinlik kataloğu değil, sen başlangıç noktasısın.

**Gelenek bir çerçeve — ama içini sen dolduruyorsun.**

Uzun kuyruk, tül duvak, beyaz renk… Bunlar zorunluluk değil, seçenekler. Bazen küçük bir dokunuş — farklı bir renk tonu, sade bir kesim, anlamlı bir aksesuar — hem geleneksel hem tamamen sen olan bir şey yaratıyor. İkisi birbirini dışlamıyor.

**Provada aynaya gerçekten bak.**

Gelinliği giydiğinde içinden ne geçiyor? "Çok şık ama ben değil bu" mi hissediyorsun, yoksa "işte bu" mu? O his nadiren yanıltıyor. Eğer aynada kendini görüyorsan — sadece bir gelinliği değil, kendini — o gelinlik senin.

Küçük özelleştirmeler de çok şey değiştirebilir. Kol boyu, bel çizgisi, bir detay… Bazen bir gelinliği "herkesin gelinliği"nden "senin gelinliğin"e dönüştürmek için çok az şey yeterli oluyor.

Şunu söyleyeyim sana açıkça: Eğer o gelinliği giyince "gelenek böyle istiyor" diye katlanıyorsan, bir şeyler yanlış. Ama "bu gün kendimi tam olarak ifade ediyorum" diyorsan — işte o zaman her şey yerli yerine oturmuş demektir.

O gün anlatılacak hikâye senin hikâyen. Gelinlik sadece onu görünür kılsın. 👰✨`,
  },
  {
    id: 'q4',
    question: 'Gelinlik kiralamak mı, satın almak mı?',
    answer: `Doğrusu, bu sorunun cevabı sende saklı. Yani gerçekten — sana ne hissettirdiğine bakman gerekiyor.

Şöyle düşün: O gelinliğe nasıl bakıyorsun? "Sadece o gün giyeceğim, harika görüneceğim, tamam" diyorsan kiralama gayet mantıklı. Depolamak yok, yüksek bütçe yok, ve doğru modeli bulduğunda fark bile anlaşılmaz. Tamamen geçerli bir tercih.

Ama bazı gelinler var ki onlar için gelinlik sadece bir kıyafet değil. Belki yıllar sonra dolabı açıp o gelinliğe bakacaksın. Belki "Bu tamamen benim, başka kimse giymedi" hissi sana bir şey ifade ediyor. Belki sana özel dikilen ya da senin için uyarlanan bir şeyin verdiği o his, seni çok daha farklı bir yere taşıyacak. İşte o zaman satın almak, sadece akılcı bir karar değil — duygusal olarak da doğru olan.

Şunu da söyleyeyim açıkça: "Bir daha giymeyeceğim ki, dolapta durmasın" diyorsan satın almak sana büyük bir mutluluk getirmeyebilir. Ama içinde "Benim olsun, sadece benim" diye bir ses varsa, kiralama seçeneği bir yerlerde küçücük bir eksiklik bırakabilir. Bunu es geçme.

Biz sana "şunu yap" demiyoruz. Seni biraz tanıyıp, bütçeni, hayallerini, düğününü ve hissettiklerini birlikte konuşarak en doğru yere ulaşmanı sağlıyoruz.

Kiralama aklın sesi olabilir. Satın almak ise çoğu zaman kalbin. Hangisi daha çok seninle konuşuyor?`,
  },
  {
    id: 'q5',
    question: 'Prova süreci nasıl ilerliyor?',
    answer: `Önce şunu söyleyeyim: Provaya girmekten çekinen, "nasıl görüneceğim, ne düşünürler" diye içinden geçiren çok gelin var. Bu çok normal. Ama şunu bil — prova odası bir yargılama yeri değil. Tam tersine, o gelinliğin senin bedenine, senin duruşuna göre şekillendiği yer. Kontrolün sende olduğu yer.

**İlk prova — ilk karşılaşma**

Gelinlik ilk kez bedenine oturuyor ve genel hatlarıyla nasıl durduğuna bakılıyor. Ufak tefek ayarlar neredeyse her gelinlikte oluyor — bu tamamen normal, hiç şaşırtmasın. Kimse kusur aramıyor; biz sadece gelinliği sana uygun hale getirmeye başlıyoruz.

**Orta prova — detayların zamanı**

Bel çizgisi, kuyruk, kol boyu, kumaşın düşüşü… Bunların hepsine tek tek bakıyoruz. Çoğunlukla bir ya da iki orta prova yeterli oluyor. Amaç basit: gelinliğin hem rahat olsun, hem üzerinde kusursuz dursun.

**Son prova — artık hazır**

Düğünden 1-2 hafta önce yapılıyor. Aksesuarlarınla, duvakınla, her detayınla birlikte son bir bakış. Buraya geldiğinde gelinlik artık tamamen senin.

Küçük bir not: Provaya rahat bir kıyafetle gel. Hem ölçüler daha doğru çıkar, hem de kendin daha rahat hissedersin.

Genelde 3 prova yeterli oluyor, ama gerekirse bir tane daha eklenebilir — bunda hiçbir sorun yok. Önemli olan sayı değil, o odadan çıkarken "evet, bu ben" diyebilmen.

Biz buradayız. Sen rahat ol, gerisini biz halledelim.`,
  },
  {
    id: 'q6',
    question: 'Gelinlik aramaya ne zaman başlamalısın?',
    answer: `Bunu soran çok insan var ve aslında çok da haklılar — çünkü kimse sana net bir tarih vermiyor. Ama şunu söyleyebilirim: düğününden 6-8 ay önce başlaman, seni ciddi anlamda rahatlatır. Hem düşünmek için zamanın olur, hem de o "acaba bu mu?" hissini üstünden atamazsam ne yaparım diye telaşlanmazsın.

Çünkü gelinlik bulmak, markete gidip bir şey seçmek gibi değil. Giyiyorsun, bakıyorsun, belki beğeniyorsun ama bir şey eksik. Sonra başka bir şey deniyorsun. Bazen içinde bir şeylerin oturması için biraz zamana ihtiyaç duyuyorsun. Bu süreç sana ait — ve güzel olan da tam olarak bu.

Ama diyelim ki biraz geç kaldın. Lütfen kendini strese sokma. Gerçekten. Doğru bir yönlendirmeyle, daha kısa sürede de "işte bu!" dedirten gelinliği bulmak çok mümkün. Bunu yaşayan sayısız gelin var.

Önemli olan erken başlamak değil, doğru başlamak. Seçenekler arasında kaybolmadan, her denemenin bir anlam taşımasını sağlayarak ilerlemek. Biz de tam olarak bunu yapıyoruz — sadece gelinlik seçmene değil, bu süreci gerçekten keyifli hissetmene yardımcı oluyoruz.`,
  },
  {
    id: 'q7',
    question: 'Aile baskısıyla nasıl başa çıkmalı?',
    answer: `Çoğu gelin içinden geçirir bunu — "bir şey söylesem kavga çıkar, susmak daha mı iyi?" diye. Ama şunu bilmeni istiyorum: aileler çoğunlukla kötü niyetle değil, farklı beklentilerle geliyor. Yani problem bazen kişi değil, iletişim.

Sana dürüstçe birkaç şey söyleyeyim.

**Önce onları anlamaya çalış.** Neye önem veriyorlar, nerede hassaslar, neyde esnekler? Bunu erken öğrenmek seni çok rahatlatır. Bazen "problem" dediğin şey, aslında sadece "kimse sormadı" demek oluyor.

**Ama sınırını da koy — nazikçe ama net.** Bu düğün senin ve partnerinin günü. "Bu konuda farklı düşünebiliriz, ama karar bizde" diyebilmek bir saygısızlık değil. Aksine, bunu sakin bir şekilde söyleyebilmek çoğu aileyi yumuşatıyor.

**Küçük şeylerde esnek ol, büyük şeylerde değil.** Masa örtüsünün rengi ya da küçük bir detay — tamam, orta yol bulunabilir. Ama gelinliğin, düğünün genel havası, senin hissetmek istediğin şey — bunlar senin hakkın. Bunu unutma.

**Gerekirse üçüncü bir ses işe yarar.** Bazen tarafsız biri — bir danışman, bir planlayıcı, sakin kafayla konuşabileceğin bir yakın — ortamdaki gerilimi inanılmaz eritebilir. İnsanlar dışarıdan gelen bir sese daha kolay kulak veriyor.

**Ve kendini ihmal etme.** Aile baskısı gerçekten moral bozucu olabiliyor. Bu süreçte kendine zaman ayırmak, nefes almak, küçük şeylerden keyif almak — bunlar lüks değil, zorunluluk.

Şunu söyleyeyim sana: aileler problem çıkarabilir, bu hayatın bir parçası. Ama doğru bir iletişimle, küçük uzlaşmalarla ve sınırlarını bilerek ilerlemek, o problemlerin büyük çoğunluğunu eritiyor.

O gün senin günün. Gerisi detay. 🎀`,
  },
  {
    id: 'q8',
    question: 'Partnerimle anlaşamıyoruz, ne yapmalıyız?',
    answer: `Önce şunu söyleyeyim: "Erkekler Mars'tan, kadınlar Venüs'ten" klişesine inanmak zorunda değiliz. Çoğu anlaşmazlık aslında cinsiyetten değil, farklı iletişim biçimlerinden ve karşılanmayan beklentilerden kaynaklanıyor.

Yani sorun "sen erkeksin, ben kadınım" değil. Sorun çoğunlukla şu: biri "beni anla" diyor, diğeri "tamam sorunu çözelim" diyor. İkisi de iyi niyetle — ama birbirinden habersiz iki farklı kanalda konuşuyor.

Buna bir de yorgunluk, stres ve yanlış zamanlama eklenince küçük bir şey büyüyüveriyor. Tanıdık geldi mi?

**Peki ne yapmalı?**

**Önce bir nefes al.** İlk tepkin neredeyse her zaman en sert tepkin. Öfkeyle ya da savunmayla başlayan bir konuşma, genellikle hiçbir yere varmıyor. Bir an dur, içinden say, sonra konuş.

**Gerçekten dinle.** Yani sadece susup sıranı bekleme — karşındakinin ne hissettiğini, ne istediğini anlamaya çalış. Bazen tek bir "seni duyuyorum" cümlesi, uzun tartışmaların önüne geçiyor.

**"Ben" ile başla, "sen" ile değil.** "Sen hep böyle yapıyorsun" dediğinde karşındaki kapanıyor. "Ben kendimi böyle hissediyorum" dediğinde ise konuşmaya yer açıyorsun. Küçük bir fark, büyük bir etki.

**Kazanmaya değil, anlaşmaya çalış.** Tartışmayı kazanmak bazen ilişkiyi kaybetmek demek. Amaç haklı çıkmak değil, birlikte bir yere varmak.

**Gerekirse ara ver.** Konuşma kontrolden çıkmaya başladıysa, durmak zayıflık değil. "Buna biraz sonra dönelim" demek, her şeyi tırmandırmaktan çok daha akıllıca.

Sana içtenlikle şunu söyleyeyim: anlaşmazlık, ilişkinin bozulduğunun değil, iki farklı insanın aynı hayatı birlikte kurduğunun işareti. Önemli olan kavgayı yaşamamak değil, kavgadan ne çıkardığın.

Doğru yönetildiğinde bir anlaşmazlık, sizi birbirinden uzaklaştırmaz — tam tersine, birbirinizi biraz daha iyi tanıtır. 🔑`,
  },
  {
    id: 'q9',
    question: 'Gelinlik ölçüleri nasıl alınır?',
    answer: `Şunu hemen söyleyeyim: Ölçü almak düşündüğünden çok daha az korkutucu. Aslında bu süreç, gelinliğin "herhangi bir beden" için değil, tam olarak senin bedeni için yapılmasının ilk adımı. Yani bu rakamlar seni bir kalıba sokmak için değil — gelinliği sana uydurmak için var.

**Peki neler ölçülüyor ve neden önemli?**

**Göğüs çevresi**

En geniş noktadan, nefes verirken ölçülür. Gelinliğin göğüs kısmının sıkmadan, ama sarkıp durmadan oturması bu ölçüye bağlı. Küçük bir fark bile büyük bir his farkı yaratıyor.

**Bel çevresi**

Doğal belinin — yani en ince olan noktanın — tam ortasından alınır. Gelinliklerde bel hattı modele göre farklı yerlerde olabilir; doğru ölçü bu çizginin tam oturmasını sağlar. "Bel bende belli değil" diyenlere not: bu ölçü yine de alınır ve gelinlik ona göre şekillendirilir.

**Kalça çevresi**

Kalçanın en geniş noktasından ölçülür. Özellikle balık ya da prenses kesimlerde bu ölçü çok kritik — gelinliğin hem rahat hem de akıcı durması buraya bağlı.

**Omuz ve boyun ölçüleri**

Omuz genişliği ve boyun çevresi, gelinliğin üst kısmının nasıl oturacağını belirliyor. Straplez ya da düşük omuzlu modeller seçiyorsan bu ölçüler özellikle önem kazanıyor.

**Boy — topuklu ayakkabıyla**

Evet, topuklu ayakkabınla ölçülüyorsun. Çünkü gelinliğin etek ve kuyruk uzunluğu buna göre ayarlanıyor. Düğün günü farklı bir topuk boyu kullanmayı düşünüyorsan bunu söylemen yeterli.

**Kol ve kol altı çevresi**

Uzun kollu ya da askılı bir model düşünüyorsan bu ölçüler de devreye giriyor. Kolun rahatça hareket etmesi, o gün kendini sıkışmış hissettirmemen için bu detay önemli.

**Ekstra ölçüler**

Bazı modeller için göğüs altı, omuzdan bele mesafe, belden kalçaya uzunluk gibi ek ölçüler de alınabiliyor. Bunlar seni şaşırtmasın — ne kadar hassas alınırsa, gelinlik o kadar "üstüne yapılmış gibi" duruyor.

Küçük bir not: Provaya rahat bir iç çamaşırıyla ve mümkünse düğün günü giyeceğin topukla gel. Bu, ölçülerin gerçeği tam yansıtmasını sağlar.

Ve şunu unutma — ölçüler bir kez alınıp bırakılmıyor. Provalar boyunca kontrol ediliyor, gerekirse düzeltiliyor. Yani hiçbir şey "bu kadar, tamam" diye kapanmıyor; gelinlik üzerinde doğru durana kadar süreç devam ediyor.

Bu rakamlar seni tanımlamıyor. Sadece gelinliğin seni tanımasına yardımcı oluyor. 👗✨`,
  },
];

function GoldDivider() {
  return (
    <div className="flex items-center gap-4 my-2">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9a869]/40 to-transparent" />
      <span className="text-[#c9a869]/50 text-xs">✦</span>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9a869]/40 to-transparent" />
    </div>
  );
}

export default function SSSPage() {
  return (
    <div className="min-h-screen bg-[#150b01] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <GoldDivider />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-4"
        >
          <p className="font-allura text-[#c9a869] text-3xl mb-2">Merak ettikleriniz</p>
          <h1 className="font-allura text-4xl md:text-5xl lg:text-6xl text-[#c9a869] mb-6">
            Sıkça Sorulan Sorular
          </h1>
          <p className="text-gray-300 tracking-wide max-w-xl mx-auto leading-relaxed">
            Cemre Bridal hakkında sıkça sorulan soruları aşağıda bulabilirsiniz.
            Aklınızdaki soruyu bulamazsanız bize doğrudan ulaşabilirsiniz.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="my-8"
        >
          <GoldDivider />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <Accordion type="single" collapsible className="space-y-0">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <AccordionItem
                  value={item.id}
                  className="border-0 border-b border-[#c9a869]/20 group"
                >
                  <AccordionTrigger
                    className="
                      py-6 text-left text-white font-light tracking-wide
                      text-base md:text-lg no-underline hover:no-underline
                      hover:text-[#c9a869] transition-colors duration-300
                      [&>svg]:text-[#c9a869]/60 [&>svg]:w-5 [&>svg]:h-5
                      [&[data-state=open]]:text-[#c9a869]
                      [&[data-state=open]>svg]:text-[#c9a869]
                    "
                  >
                    <span className="flex items-start gap-3 pr-4">
                      <span className="text-[#c9a869]/50 mt-1 text-sm leading-none select-none">✦</span>
                      <span>{item.question}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-7">
                    <div className="text-gray-300 leading-relaxed text-base border-l-2 border-[#c9a869]/30 pl-4 space-y-4">
                      {item.answer.split('\n\n').map((paragraph, idx) => {
                        const trimmed = paragraph.trim();
                        const isHeading = trimmed.length < 80 && (
                          trimmed.includes('çevresi') || 
                          trimmed.includes('ölçüleri') || 
                          trimmed.includes('Ölçüler') ||
                          trimmed.includes('Boy —') ||
                          trimmed.includes('İlk prova') ||
                          trimmed.includes('Orta prova') ||
                          trimmed.includes('Son prova') ||
                          trimmed.endsWith('?') && trimmed.length < 60 ||
                          trimmed.startsWith('Peki') && trimmed.length < 60 ||
                          trimmed.includes('meselesine gelince') ||
                          trimmed.includes('ne yapmalı?') ||
                          trimmed.includes('nereden başlamalı?') ||
                          trimmed.includes('bir çerçeve') ||
                          trimmed.includes('gerçekten bak') ||
                          (trimmed.startsWith('**') && trimmed.endsWith('**'))
                        );
                        
                        if (isHeading) {
                          const cleanText = trimmed.replace(/\*\*/g, '');
                          return (
                            <p key={idx} className="text-[#c9a869] font-medium tracking-wide">
                              {cleanText}
                            </p>
                          );
                        }
                        
                        const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                        return (
                          <p key={idx}>
                            {parts.map((part, i) => {
                              if (part.startsWith('**') && part.endsWith('**')) {
                                return (
                                  <strong key={i} className="text-white font-medium">
                                    {part.replace(/\*\*/g, '')}
                                  </strong>
                                );
                              }
                              return part;
                            })}
                          </p>
                        );
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          {faqItems.length === 0 && (
            <div className="text-center py-16 text-gray-500">
              Henüz soru eklenmemiş.
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 mb-16"
        >
          <GoldDivider />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-[#251605]/60 border border-[#c9a869]/20 p-12 lg:p-16"
        >
          <p className="font-allura text-[#c9a869] text-2xl mb-2">Hâlâ sorunuz mu var?</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wider text-white mb-4">
            Size yardımcı olmaktan mutluluk duyarız
          </h2>
          <p className="text-gray-400 mb-10 max-w-md mx-auto leading-relaxed">
            Aklınızdaki soruyu bulamadıysanız WhatsApp üzerinden ya da
            iletişim formumuzu kullanarak bize ulaşabilirsiniz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/90${siteSettings.contactPhone.replace(/\D/g, '').replace(/^0/, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-10 py-4 bg-[#c9a869] text-[#150b01] tracking-widest uppercase text-sm font-medium hover:bg-[#f4c542] transition-all duration-300 shadow-[0_0_20px_rgba(201,168,105,0.3)] hover:shadow-[0_0_30px_rgba(244,197,66,0.4)]"
            >
              <motion.span
                className="flex items-center gap-2.5 relative z-10"
                initial={false}
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </motion.span>
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)',
                }}
              />
            </a>
            <Link
              href="/contact"
              className="group relative overflow-hidden inline-flex items-center justify-center px-10 py-4 border border-[#c9a869]/60 text-white tracking-widest uppercase text-sm hover:bg-[#c9a869]/10 hover:border-[#c9a869] transition-all duration-300"
            >
              <motion.span
                className="relative z-10"
                initial={false}
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                İletişim Formu
              </motion.span>
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,105,0.2) 50%, transparent 100%)',
                }}
              />
            </Link>
            <Link
              href="/appointments"
              className="group relative overflow-hidden inline-flex items-center justify-center px-10 py-4 border border-white/20 text-white tracking-widest uppercase text-sm hover:bg-white/5 hover:border-white/40 transition-all duration-300"
            >
              <motion.span
                className="relative z-10"
                initial={false}
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                Randevu Al
              </motion.span>
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                }}
              />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <GoldDivider />
        </motion.div>

      </div>
    </div>
  );
}
