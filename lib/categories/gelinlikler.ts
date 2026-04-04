import { Category, Product } from '../mockData';

export const gelinliklerCategory: Category = {
  _id: 'cat-1',
  title: 'Gelinlikler',
  slug: 'gelinlikler',
  description: 'Hayalinizdeki gelinliği bulun. Zarif ve şık tasarımlarımızla özel gününüzü unutulmaz kılın.',
  coverImage: {
    url: '/images/gelinlikler/cover.jpg',
    alt: 'Gelinlikler Koleksiyonu',
  },
  order: 1,
};

export const gelinliklerProducts: Product[] = [
  {
    
        _id: 'prod-petra',
        title: 'Petra',
        subtitle: 'Transparan Korseli, Jakar Dokulu ve Chokerlı Tasarım',
        code: 'Gelinlik Petra',
        slug: 'petra',
        categorySlug: 'gelinlikler',
    
        meta_description: 'Modern transparan korse modasını Viktoryen asaletle birleştiren Petra; kendinden desenli dokulu eteği, belirgin balen detayları ve dantel boyunluğu ile sezonun en iddialı tasarımı.',
    
        description: `
            <blockquote>
                "Geleneksel kalıpların dışına çıkmak, düğün gününde hem kışkırtıcı hem de asil bir duruş sergilemek isteyen modern gelinler için: Petra."
            </blockquote>
    
            <h3>Modern Mimari: Transparan Korse</h3>
            <p>Tasarımın kalbi, son yılların en güçlü trendi olan <strong>Transparan Korse (Bustier)</strong> gövdesinde atıyor. Belirgin balen işçiliği, belinizi bir heykel gibi kusursuzca sararak inceltirken; göğüs kupalarındaki yoğun kristal ve inci işlemeler, tüm ışığı üzerinize çeken bir odak noktası oluşturur.</p>
    
            <h3>Kumaşın Farkı: Jakar Dokusu</h3>
            <p>Petra'yı sıradan tül gelinliklerden ayıran en özel detay etek kumaşıdır. Düz zemin yerine kullanılan <strong>kendinden desenli, kabartmalı orijinal Fransız güpürü ve Amerikan sateni kumaş</strong>, gelinliğe ağır, zengin ve "couture" bir hava katar.</p>
    
            <h3>İmza Detaylar</h3>
            <ul>
                <li><strong>Gotik Romantizm:</strong> Boynu saran dantel Choker ve eldiven kollar, tasarıma dramatik bir hava katar.</li>
                <li><strong>Lingerie Look:</strong> İç giyim modasından ilham alan balenli yapı, modern ve cesur bir stil sunar.</li>
                <li><strong>Eşsiz Doku:</strong> Kabartmalı kumaşı sayesinde hem gündüz hem gece çekimlerinde 3 boyutlu bir derinlik sağlar.</li>
            </ul>
        `,
    
        details: [
            { label: 'Siluet', value: 'A Kesim / Kabarık Prenses' },
            { label: 'Gövde', value: 'Transparan, Balenli Korse' },
            { label: 'Yaka', value: 'Straplez Kalp + Dantel Choker' },
            { label: 'Kol', value: 'Çıkarılabilir Dantel Eldiven' },
            { label: 'Kumaş', value: 'Orijinal Fransız Güpürü & Amerikan Sateni' },
            { label: 'İşleme', value: 'Kristal Taş & İnci' },
            { label: 'Tarz', value: 'Modern / Gotik-Romantik' }
        ],
    
        tags: ['Korseli Gelinlik', 'Transparan Gelinlik', 'Jakar Gelinlik', 'Chokerlı Gelinlik', 'Balenli Gelinlik', 'Tasarım Gelinlik', 'Petra Gelinlik'],
    
        images: [
          { url: '/images/gelinlikler/petra/1.webp', alt: 'Petra - Transparan Korseli Ön Görünüm' },
          { url: '/images/gelinlikler/petra/2.webp', alt: 'Petra - Yan Görünüm' },
          { url: '/images/gelinlikler/petra/3.webp', alt: 'Petra - Detay Görünüm' },
          { url: '/images/gelinlikler/petra/4.webp', alt: 'Petra - Detay Görünüm' },
          { url: '/images/gelinlikler/petra/5.webp', alt: 'Petra - Detay Görünüm' },
          { url: '/images/gelinlikler/petra/6.webp', alt: 'Petra - Detay Görünüm' },
        ],
    
        featured: true,
  },
  {
    _id: 'prod-helena',
    title: 'Helena',
    subtitle: 'Helena: Katedral Duvaklı, Tam İşlemeli Prenses Model',
    code: 'Gelinlik Helena',
    slug: 'helena',
    categorySlug: 'gelinlikler',

    meta_description: 'Görkemli duruşu ve ince el işçiliği dantel detaylarıyla Helena Prenses Gelinlik, masalsı bir düğün hayal eden gelinler için tasarlandı. Katedral duvağı ile sezonun en göz alıcısı.',

    description: `
        <blockquote>
            "Sadece bir gelinlik değil, bir miras. Helena, klasik saray düğünlerinin asaletini ve 'Royal' duruşu günümüze taşıyor."
        </blockquote>

        <h3>Zamanın Ötesinde: Klasik Prenses Silueti</h3>
        <p>Hayatınızın en özel gününde, tüm bakışları üzerinizde toplayacak zamansız bir zarafet arıyorsanız; <strong>Helena</strong> tam size göre. Kalın askılı <strong>Kare Yaka (Square Neck)</strong> tasarımı, boynunuzu ve omuzlarınızı zarifçe çerçevelerken, belden oturan ve genişleyen etek formu kusursuz bir kum saati görünümü yaratır.</p>

        <h3>İmza Dokunuş: Katedral Duvak</h3>
        <p>Bu tasarımı eşsiz kılan en önemli detay, şüphesiz tamamlayıcısı olan <strong>Katedral Tipi Duvağıdır</strong>. Gelinliğin dantel işlemeleriyle birebir uyumlu, yerlere kadar uzanan bu duvak, koridorda yürürken ardınızda unutulmaz, masalsı bir iz bırakmanızı sağlar.</p>

        <h3>Neden Helena?</h3>
        <ul>
            <li><strong>Işıltı Şelalesi:</strong> Gövdeden etek uçlarına süzülen 3 boyutlu dantel aplikler ve kristal işlemeler, her adımda ışığı yansıtır.</li>
            <li><strong>Saray Konsepti:</strong> Otel, yalı ve balo salonu düğünlerinin ağır atmosferini kaldırabilecek grandiyöz bir duruşa sahiptir.</li>
            <li><strong>Fotojenik Yapı:</strong> Tok kumaşı ve işlemeli duvağı ile hem portre hem de boy çekimlerinde kusursuz kareler verir.</li>
        </ul>
    `,

    details: [
        { label: 'Siluet', value: 'Prenses Kesim / Ballgown' },
        { label: 'Yaka', value: 'Kalın Askılı, Kare/U Yaka' },
        { label: 'Kumaş', value: 'Yüksek Kalite Saten üzerine Tül & Güpür' },
        { label: 'İşleme', value: 'Kristal Boncuk, Payet, 3D Aplik' },
        { label: 'Duvak', value: 'Özel Tasarım Uzun Katedral Duvak' },
        { label: 'Renk', value: 'Kırık Beyaz / İnci Beyazı' },
        { label: 'Konsept', value: 'Saray, Otel, Salon Düğünü' }
    ],

    tags: ['prenses gelinlik', 'dantelli gelinlik', 'katedral duvak', 'işlemeli gelinlik', 'lüks gelinlik', 'ballgown', 'saten', 'kristal boncuk', 'salon düğünü'],
    images: [
      { url: '/images/gelinlikler/helena/1.webp', alt: 'Helena - Ön Görünüm' },
      { url: '/images/gelinlikler/helena/2.webp', alt: 'Helena - Yan Görünüm' },
      { url: '/images/gelinlikler/helena/3.webp', alt: 'Helena - Detay Görünüm' },
      { url: '/images/gelinlikler/helena/4.webp', alt: 'Helena - Detay Görünüm' },
      { url: '/images/gelinlikler/helena/5.webp', alt: 'Helena - Detay Görünüm' },
      { url: '/images/gelinlikler/helena/6.webp', alt: 'Helena - Detay Görünüm' },
    ],
    featured: true,
  },
  {
    _id: 'prod-hera',
    title: 'Hera',
    subtitle: 'Hera: İnci Salkım Detaylı ve Dantel Chokerlı Vintage Tasarım',
    code: 'Gelinlik Hera',
    slug: 'hera',
    categorySlug: 'gelinlikler',

    meta_description: 'Viktoryen dönemin zarafetini modern kalıplarla buluşturan Hera; göğüs dekoltesindeki inci salkımları, özel tasarım dantel boyunluğu ve komple dantel dokusuyla eşsiz bir vintage tasarım.',

    description: `
        <blockquote>
            "Zaman yolculuğuna hazır olun. Hera, Viktoryen dönemin asaletini modern dünyanın cesur detaylarıyla harmanlayarak sıradan gelinlik algısını yıkıyor."
        </blockquote>

        <h3>İnci Salkımların Dansı</h3>
        <p>Hera’nın en büyüleyici imzası, transparan korse gövdesinden aşağıya doğru zarifçe süzülen <strong>İnci Salkım (Drape)</strong> detaylarıdır. Bu el işçiliği inciler, siz hareket ettikçe hafifçe salınarak hipnotik bir ışıltı yaratır.</p>

        <h3>Karakteristik Aksesuar: Dantel Choker</h3>
        <p>Gelinliğin ruhunu tamamlayan <strong>Dantel Boyunluk (Choker)</strong>, klasik takı ihtiyacını ortadan kaldırır. Düşük omuzlu (off-shoulder) tasarım ve uzun dantel kollarla birleştiğinde, boynunuzu zarifçe vurgulayan aristokrat bir siluet ortaya çıkar.</p>

        <h3>Neden Hera?</h3>
        <ul>
            <li><strong>Vintage Ruh:</strong> Tarihi yalılar ve nostaljik konseptli düğünler için nokta atışı bir seçimdir.</li>
            <li><strong>Dokusal Zenginlik:</strong> Etek uçlarına kadar inen yoğun Fransız danteli, fotoğraflarda zengin bir doku sunar.</li>
            <li><strong>Korse Etkisi:</strong> Balenli yapı beli inceltirken, inci detaylar dikkati dekolte bölgesine çeker.</li>
        </ul>
    `,

    details: [
        { label: 'Siluet', value: 'A Kesim / Yarım Prenses' },
        { label: 'Yaka', value: 'Düşük Omuz (Off-Shoulder)' },
        { label: 'Kumaş', value: 'Komple Fransız Dantel & Tül' },
        { label: 'Özel Detay', value: 'Gövdede İnci Salkım (Beadwork)' },
        { label: 'Aksesuar', value: 'Dantel Choker (Boyunluk)' },
        { label: 'Kol', value: 'Uzun Transparan Dantel' },
        { label: 'Konsept', value: 'Vintage, Tarihi Mekan, Salon' }
    ],

    tags: ['İnci Detaylı Gelinlik', 'Vintage Gelinlik', 'Dantel Kollu Gelinlik', 'Chokerlı Gelinlik', 'Korseli Gelinlik', 'Viktoryen Gelinlik'],
    images: [
      { url: '/images/gelinlikler/hera/1.webp', alt: 'Hera - Ön Görünüm' },
      { url: '/images/gelinlikler/hera/2.webp', alt: 'Hera - Yan Görünüm' },
      { url: '/images/gelinlikler/hera/3.webp', alt: 'Hera - Detay Görünüm' },
      { url: '/images/gelinlikler/hera/4.webp', alt: 'Hera - Detay Görünüm' },
      { url: '/images/gelinlikler/hera/5.webp', alt: 'Hera - Detay Görünüm' },
      { url: '/images/gelinlikler/hera/6.webp', alt: 'Hera - Detay Görünüm' },
      { url: '/images/gelinlikler/hera/7.webp', alt: 'Hera - Detay Görünüm' },
    ],
    featured: true,
  },
  {
    _id: 'prod-alya',
    title: 'Alya',
    subtitle: 'Drapeli Göğüs Detaylı, Kristal İşlemeli ve Tül Etekli Prenses Tasarım',
    code: 'Gelinlik Alya',
    slug: 'alya',
    categorySlug: 'gelinlikler',

    meta_description: 'Romantik kalp yakayı modern drapelerle buluşturan Alya; kristal taş işlemeli ışıltılı gövdesi ve dantel apliklerle hareketlendirilen helenistik etek formu ile masalsı bir görünüm sunuyor.',

    description: `
        <blockquote>
            "Klasik prenses masalını modern dokunuşlarla yeniden yazmak isteyen, ışıltıdan vazgeçemeyen romantik gelinler için: Alya."
        </blockquote>

        <h3>Işıltılı Mimari: Dantel ve ışığın buluşması</h3>
        <p>Tasarımın odak noktası, ustalıkla işlenmiş üst bedenidir. Straplez kalp yaka üzerine uygulanan <strong>zarif saten drapeler</strong>, göğüs formuna modern ve hacimli bir duruş kazandırır. Korsaj boyunca uzanan yoğun <strong>kristal taş, boncuk ve payet işlemeler</strong>, belinizi sararak tüm bakışları üzerinize çeken bir ışıltı şöleni yaratır.</p>

        <h3>Eteğin Büyüsü: Romantik Görünüm</h3>
        <p>Bel hattından aşağıya doğru nazikçe süzülen <strong>çiçek motifli dantel aplikler</strong>, angelika kumaş eteğin hafifliğiyle birleşir. Eteğin katmanlı ve geniş formu, her adımda uçuşan, rüya gibi bir siluet oluştururken; aralara serpiştirilen ışıltılar ışık altında büyülü bir yansıma sağlar.</p>

        <h3>İmza Detaylar</h3>
        <ul>
            <li><strong>Romantik Siluet:</strong> Zamansız A kesim ve prenses formun en zarif hali.</li>
            <li><strong>Drapeli Göğüs Sanatı:</strong> Kalp yakayı çevreleyen pilili saten detayları, tasarıma derinlik ve modern bir hava katar.</li>
            <li><strong>El İşçiliği Işıltı:</strong> Gövdeden eteğe doğru akan el işlemeleri, gelinliğin bütünlüğünü "couture" bir seviyeye taşır.</li>
        </ul>
    `,

    details: [
        { label: 'Siluet', value: 'A Kesim / Prenses' },
        { label: 'Gövde', value: 'Drapeli, İşlemeli Korse' },
        { label: 'Yaka', value: 'Straplez Kalp Yaka' },
        { label: 'Kol', value: 'Kolsuz' },
        { label: 'Kumaş', value: 'Angelika Saten & Fransız Dantel Aplik' },
        { label: 'İşleme', value: 'Kristal Taş, Boncuk & Payet' },
        { label: 'Tarz', value: 'Romantik / Klasik / Masalsı' }
    ],

    tags: ['Prenses Gelinlik', 'Drapeli Gelinlik', 'Taşlı Gelinlik', 'Tül Gelinlik', 'Kalp Yaka Gelinlik', 'Alya Gelinlik', 'A Kesim Gelinlik'],

    images: [
    { url: '/images/gelinlikler/alya/1.webp', alt: 'Alya - Drapeli Göğüs Detaylı Ön Görünüm' },
    { url: '/images/gelinlikler/alya/2.webp', alt: 'Alya - Yan Görünüm' },
    { url: '/images/gelinlikler/alya/3.webp', alt: 'Alya - Detay Görünüm' },
    { url: '/images/gelinlikler/alya/4.webp', alt: 'Alya - Detay Görünüm' },
    { url: '/images/gelinlikler/alya/5.webp', alt: 'Alya - Detay Görünüm' },
    { url: '/images/gelinlikler/alya/6.webp', alt: 'Alya - Detay Görünüm' },
    ],

    featured: true,
},
{
    _id: 'prod-silva',
    title: 'Silva',
    subtitle: 'Drapeli Tül Korseli, Kristal İşlemeli ve Dantel Eldivenli Tasarım',
    code: 'Gelinlik Silva',
    slug: 'silva',
    categorySlug: 'gelinlikler',

    meta_description: 'Romantik üç boyutlu çiçek ve yaprakları ışıltılı kristal işlemelerle buluşturan Silva; vintage dantel eldivenleri ve dantel kenarlı duvağı ile klasik prenses stilini modern bir zarafetle sunuyor.',

    description: `
        <blockquote>
        "Zamanın ötesinde bir romantizm arayan, vintage dokunuşları modern kalıplarla harmanlayan gelinler için tasarlandı: Silva."
        </blockquote>

        <h3>Sanatsal Dokunuş: Üç Boyutlu İşlemeli Gövde</h3>
        <p>Silva'nın en çarpıcı özelliği, göğüs formunu kusursuzca saran <strong>el işçiliği 3 boyutlu yaprak ve çiçeklerdir</strong>. Straplez kedi yaka üzerine uygulanan üç boyutlu çiçek ve yapraklar, tasarıma derinlik ve modern bir doku kazandırırken; gövdenin merkezinden bel hattına uzanan <strong>kristal taş ve boncuk işlemeler</strong> ışıltılı bir odak noktası yaratır.</p>

        <h3>Bütünleyici Zarafet: Aksesuar Uyumu</h3>
        <p>Tasarım, sadece bir gelinlik değil, bir stil bütünü sunar. Görünümü tamamlayan <strong>dantel eldivenler</strong> ve kenarları <strong>güpür dantel işlemeli uzun duvak</strong>, gelinliğe nostaljik ve asil bir hava katarak sizi adeta bir dönem filminin başrolü gibi hissettirir.</p>

        <h3>İmza Detaylar</h3>
        <ul>
        <li><strong>Vintage Romantizm:</strong> Dantel eldiven ve işlemeli duvak kombinasyonu, düğün konseptleri için kusursuz bir uyum sağlar.</li>
        <li><strong>Masalsı Siluet:</strong> Belden genişleyerek inen A kesim prenses etek, üzerindeki üç boyutlu çiçek ve yapraklarla her adımda uçuşan rüya gibi bir form sunar.</li>
        <li><strong>İnce İşçilik:</strong> Gövdedeki drapelerin ve işlemelerin simetrisi, tasarımın mimari yönünü ortaya çıkarır.</li>
</ul>
`,

details: [
{ label: 'Siluet', value: 'A Kesim / Helen' },
{ label: 'Gövde', value: 'Üç  Boyutlu & İşlemeli Korse' },
{ label: 'Yaka', value: 'Straplez Kedi Yaka' },
{ label: 'Aksesuar', value: 'Dantel Eldiven & Dantel Kenarlı Duvak' },
{ label: 'Kumaş', value: 'Lez Dantel Tül & Fransız Dantel Aplik' },
{ label: 'İşleme', value: 'Kristal Taş & İnci' },
{ label: 'Tarz', value: 'Romantik / Vintage / Klasik' }
],

tags: ['Drapeli Gelinlik', 'Eldivenli Gelinlik', 'Prenses Gelinlik', 'Taşlı Gelinlik', 'Duvaklı Gelinlik', 'Silva Gelinlik', 'Vintage Gelinlik'],

images: [
{ url: '/images/gelinlikler/silva/1.webp', alt: 'Silva - Drapeli Tül Korseli Ön Görünüm' },
{ url: '/images/gelinlikler/silva/2.webp', alt: 'Silva - Yan Görünüm' },
{ url: '/images/gelinlikler/silva/3.webp', alt: 'Silva - Detay Görünüm' },
{ url: '/images/gelinlikler/silva/4.webp', alt: 'Silva - Detay Görünüm' },
{ url: '/images/gelinlikler/silva/5.webp', alt: 'Silva - Detay Görünüm' },
{ url: '/images/gelinlikler/silva/6.webp', alt: 'Silva - Detay Görünüm' },
],

featured: true,
},
{
    _id: 'prod-lidya',
    title: 'Lidya',
    subtitle: 'Kayık Yaka, Fransız Dantelli ve İnci İşlemeli Helen Tasarım',
    code: 'Gelinlik Lidya',
    slug: 'lidya',
    categorySlug: 'gelinlikler',

    meta_description: 'Fransız dantelinin asaletini inci ve kristal ışıltısıyla buluşturan Lidya; zarif kayık yakası, şeffaf uzun kolları ve helen etek formuyla sofistike bir görünüm vadediyor.',

    description: `
        <blockquote>
            "Zarafetin en saf hali: Fransız dantelinin romantizmini, incinin asil dokunuşuyla teninde hissetmek isteyen gelinler için Lidya."
        </blockquote>

        <h3>Dantel Sanatı: Fransız Zarafeti</h3>
        <p>Lidya modelinin kalbinde, tüm gövdeyi ve kolları saran <strong>premium Fransız danteli</strong> yer alıyor. Kayık yaka formundaki yaka hattı, zarif <strong>kirpik dantel</strong> detaylarıyla omuzlara yumuşak bir geçiş sağlarken; şeffaf kollar dantelin tüm işçiliğini teninize yansıtır.</p>

        <h3>İnci ve Kristal: Işığın Dansı</h3>
        <p>Gövde üzerinde titizlikle işlenen <strong>kristal taşlar ve gerçek inci detayları</strong>, tasarıma derinlikli bir ışıltı katar. Her hareketinizde ışığı farklı açılardan yakalayan bu el işçiliği, klasik gelinlik formuna lüks bir "couture" dokunuşu getirir.</p>

        <h3>İmza Detaylar</h3>
        <ul>
            <li><strong>Helen Siluet:</strong> Belden itibaren nazikçe açılan Helen etek formu, özgürce hareket etmenizi sağlayan hafif bir yapı sunar.</li>
            <li><strong>Şeffaf Kol Detayı:</strong> Bileklere kadar uzanan işlemeli Fransız danteli kollar, modele asil bir duruş kazandırır.</li>
            <li><strong>Zarif Kayık Yaka:</strong> Köprücük kemiklerini ön plana çıkaran, zamansız ve romantik bir yaka tasarımı.</li>
        </ul>
    `,

    details: [
        { label: 'Siluet', value: 'Helen / A Kesim' },
        { label: 'Gövde', value: 'İnci ve Kristal İşlemeli Fransız Dantel' },
        { label: 'Yaka', value: 'Kayık Yaka (Off-Shoulder Etkili)' },
        { label: 'Kol', value: 'Uzun Fransız Dantel Kol' },
        { label: 'Kumaş', value: 'Fransız Danteli & Tül' },
        { label: 'İşleme', value: 'Gerçek İnci ve Kristal Taş' },
        { label: 'Tarz', value: 'Bohem / Romantik / Sofistike' }
    ],

    tags: ['Helen Gelinlik', 'Kayık Yaka Gelinlik', 'Fransız Dantelli Gelinlik', 'İncili Gelinlik', 'Dantel Kollu Gelinlik', 'Lidya Gelinlik', 'A Kesim Gelinlik'],

    images: [
        { url: '/images/gelinlikler/lidya/1.webp', alt: 'Lidya - Kayık Yaka Ön Görünüm' },
        { url: '/images/gelinlikler/lidya/2.webp', alt: 'Lidya - Yan Görünüm' },
        { url: '/images/gelinlikler/lidya/3.webp', alt: 'Lidya - Detay Görünüm' },
        { url: '/images/gelinlikler/lidya/4.webp', alt: 'Lidya - Detay Görünüm' },
        { url: '/images/gelinlikler/lidya/5.webp', alt: 'Lidya - Detay Görünüm' },
        { url: '/images/gelinlikler/lidya/6.webp', alt: 'Lidya - Detay Görünüm' },
    ],

    featured: true,
},
{
    _id: 'prod-isabella',
    title: 'Isabella',
    subtitle: 'Swarovski Işıltılı, İllüzyon V Yaka ve Fransız Dantelli Görkemli Prenses',
    code: 'Gelinlik Isabella',
    slug: 'isabella',
    categorySlug: 'gelinlikler',

    meta_description: 'Orijinal Fransız dantelinin Swarovski kristallerle buluştuğu Isabella; V korsajlı gövdesi, illüzyon V yakası ve piksel ışıltılı prenses eteğiyle görkemli bir şıklık sunuyor.',

    description: `
        <blockquote>
            "Bir peri masalının başrolü için tasarlanan Isabella; Swarovski kristallerin zamansız ışıltısını, Fransız dantelinin asaletiyle tek bir formda birleştiriyor."
        </blockquote>

        <h3>Mimari Gövde: İllüzyon ve Sanat</h3>
        <p>Isabella'nın üst bedeni, straplez kalp yaka üzerine ustalıkla yerleştirilen <strong>orijinal Fransız danteli</strong> ile V yaka formuna dönüştürülmüştür. Bedeni kusursuzca saran <strong>V-corsage (balenli korse)</strong> yapısı, dantel üzerine tek tek işlenen <strong>minik Swarovski kristaller, pullar ve incilerle</strong> zenginleştirilmiştir.</p>

        <h3>Piksel Işıltısı: Dijital Parıltı Etkisi</h3>
        <p>Tasarıma modern bir dokunuş katan <strong>piksel prenses etek</strong>, modelin tamamını kaplayan Fransız dantelinin altında her adımda yanıp sönen bir ışık şöleni yaratır. Eteğin hacimli formu, dantelin ağırbaşlı duruşunu modern bir "glamour" etkisiyle dengeler.</p>

        <h3>İmza Detaylar</h3>
        <ul>
            <li><strong>Transparan Zarafet:</strong> Omuzları ve kolları saran ince Fransız danteli, ten üzerinde "tattoo" (dövme) etkisi yaratarak asil bir görünüm sağlar.</li>
            <li><strong>Lüks İşçilik:</strong> Her biri elde işlenen Swarovski taşlar ve inciler, gelinliğin bütününe derinlikli bir parıltı kazandırır.</li>
            <li><strong>V-Korsaj Formu:</strong> Bel hattını keskinleştirerek ortaya çıkaran ve silueti uzatan özel korse kesimi.</li>
        </ul>
    `,

    details: [
        { label: 'Siluet', value: 'Görkemli Prenses / Ballgown' },
        { label: 'Gövde', value: 'Balenli V-Korsaj, Fransız Dantel Kaplama' },
        { label: 'Yaka', value: 'İllüzyon V Yaka (Kalp Yaka Üstü)' },
        { label: 'Kol', value: 'Uzun Fransız Dantel Kol' },
        { label: 'Kumaş', value: 'Orijinal Fransız Danteli & Piksel Işıltılı Tül' },
        { label: 'İşleme', value: 'Swarovski Kristal, İnci & Pul' },
        { label: 'Tarz', value: 'Kraliyet / Görkemli / Klasik Lüks' }
    ],

    tags: ['Prenses Gelinlik', 'Swarovski Gelinlik', 'Fransız Dantelli Gelinlik', 'V Yaka Gelinlik', 'İşlemeli Gelinlik', 'Isabella Gelinlik', 'V Korsaj Gelinlik'],

    images: [
        { url: '/images/gelinlikler/isabella/1.webp', alt: 'Isabella - Swarovski Işıltılı Ön Görünüm' },
        { url: '/images/gelinlikler/isabella/2.webp', alt: 'Isabella - Yan Görünüm' },
        { url: '/images/gelinlikler/isabella/3.webp', alt: 'Isabella - Detay Görünüm' },
        { url: '/images/gelinlikler/isabella/4.webp', alt: 'Isabella - Detay Görünüm' },
        { url: '/images/gelinlikler/isabella/5.webp', alt: 'Isabella - Detay Görünüm' },
        { url: '/images/gelinlikler/isabella/6.webp', alt: 'Isabella - Detay Görünüm' },
    ],

    featured: true,
},
{
    _id: 'prod-eleni',
    title: 'Eleni',
    subtitle: 'Mikado Saten, Drapeli Kayık Yaka ve V-Korsajlı Pileli A Kesim',
    code: 'Gelinlik Eleni',
    slug: 'eleni',
    categorySlug: 'gelinlikler',

    meta_description: 'Mikado satenin mimari duruşunu modern drapelerle buluşturan Eleni; V kesim bel hattı, kayık yakası ve görkemli pileli eteğiyle minimalist bir asalet sunuyor.',

    description: `
        <blockquote>
            "Sadelikten gelen görkem: Mikado satenin yapısal formuyla şekillenen Eleni, klasik siluetleri modern bir asaletle yeniden yorumluyor."
        </blockquote>

        <h3>Minimalist Mimari: Mikado Satenin Gücü</h3>
        <p>Eleni modelinin en karakteristik özelliği, kumaşın kendi dokusunda saklıdır. <strong>Orijinal Mikado saten</strong> kullanılarak tasarlanan bu parça, keskin hatları ve parlaklığıyla heykelvari bir siluet sunar. Üst bedendeki <strong>saten drapeler</strong>, kayık yaka formuyla birleşerek omuzları zarifçe çerçeveler.</p>

        <h3>V-Korsaj: İnce Bel Hattı</h3>
        <p>Tasarımın odağında yer alan <strong>V-korsaj kesimi</strong>, bel hattını olduğundan daha ince gösteren profesyonel bir tekniktir. Belden aşağıya doğru genişleyen <strong>kutu pileler (box pleats)</strong>, eteğe hacim kazandırırken modern ve vakur bir duruş sergiler.</p>

        <h3>İmza Detaylar</h3>
        <ul>
            <li><strong>Zamansız A Kesim:</strong> Klasik gelinlik formunun en modern ve sade haliyle buluşması.</li>
            <li><strong>Drapeli Kayık Yaka:</strong> Göğüs ve omuz hattına hareket katan, el işçiliği drapeler.</li>
            <li><strong>Mimari Pileler:</strong> Etek boyunca uzanan derin pileler, tasarıma dramatik bir yürüyüş etkisi katar.</li>
        </ul>
    `,

    details: [
        { label: 'Siluet', value: 'A Kesim / Modern Klasik' },
        { label: 'Gövde', value: 'Drapeli Kayık Yaka, V-Korsaj' },
        { label: 'Yaka', value: 'Kayık Yaka (Boat Neck)' },
        { label: 'Kol', value: 'Düşük Omuz Detaylı' },
        { label: 'Kumaş', value: 'Orijinal Mikado Saten' },
        { label: 'İşleme', value: 'İşlemesiz / Saf Saten Doku' },
        { label: 'Tarz', value: 'Minimalist / Aristokrat / Modern' }
    ],

    tags: ['Mikado Saten Gelinlik', 'Saten Gelinlik', 'Kayık Yaka Gelinlik', 'Pileli Gelinlik', 'A Kesim Gelinlik', 'Eleni Gelinlik', 'Sade Gelinlik'],

    images: [
        { url: '/images/gelinlikler/eleni/1.webp', alt: 'Eleni - Mikado Saten Ön Görünüm' },
        { url: '/images/gelinlikler/eleni/2.webp', alt: 'Eleni - Yan Görünüm' },
        { url: '/images/gelinlikler/eleni/3.webp', alt: 'Eleni - Detay Görünüm' },
        { url: '/images/gelinlikler/eleni/4.webp', alt: 'Eleni - Detay Görünüm' },
        { url: '/images/gelinlikler/eleni/5.webp', alt: 'Eleni - Detay Görünüm' },
        { url: '/images/gelinlikler/eleni/6.webp', alt: 'Eleni - Detay Görünüm' },
    ],

    featured: true,
},
{
    _id: 'prod-alessia',
    title: 'Alessia',
    subtitle: 'Taç Yaka, Yoğun İnci İşlemeli Işık Saten ve Korsajlı Couture Tasarım',
    code: 'Gelinlik Alessia',
    slug: 'alessia',
    categorySlug: 'gelinlikler',

    meta_description: 'Işık satenin asaletini yoğun inci ve kristal işlemelerle buluşturan Alessia; taç yaka formu, korsajlı bedeni ve serpme dantelli eteğiyle krallara layık bir şıklık sunuyor.',

    description: `
        <blockquote>
            "Zarafetin zirvesi: Taç yakanın iddialı duruşu ve incinin zamansız romantizmi Alessia ile modern bir başyapıta dönüşüyor."
        </blockquote>

        <h3>Taç Yaka: Kraliçelere Layık Bir Form</h3>
        <p>Alessia modelinin karakterini belirleyen <strong>özel taç yaka kesimi</strong>, omuz ve boyun hattını bir kraliçe asaletiyle öne çıkarır. Bedenin tamamını kusursuzca saran <strong>korsaj yapı</strong>, üzerine yoğun şekilde işlenen <strong>kristal taşlar ve incilerle</strong> adeta parlayan bir zırh gibi tasarlanmıştır.</p>

        <h3>Işık Saten: Parlak ve Akışkan</h3>
        <p>Tasarımda kullanılan yüksek kaliteli <strong>Işık Saten</strong>, eteğin hacimli formuna pürüzsüz bir derinlik katar. Etek uçlarına ve genelinde <strong>serpme şeklinde yerleştirilen yoğun incili danteller</strong>, satenin sade şıklığını romantik bir detayla zenginleştirir.</p>

        <h3>İmza Detaylar</h3>
        <ul>
            <li><strong>Heykelvari Korsaj:</strong> Bel hattını mükemmel bir şekilde belirleyen ve üst bedeni yeniden şekillendiren profesyonel korse yapısı.</li>
            <li><strong>İnci Yağmuru:</strong> Gövdeden eteğe doğru süzülen el işçiliği inci ve kristal detayları, tasarıma "Couture" bir değer katar.</li>
            <li><strong>Işıltılı Kontrast:</strong> Parlak saten yüzeyi ile mat inci dokusunun yarattığı lüks görsel denge.</li>
        </ul>
    `,

    details: [
        { label: 'Siluet', value: 'Görkemli Prenses / A Kesim' },
        { label: 'Gövde', value: 'Yoğun İnci ve Kristal İşlemeli Korsaj' },
        { label: 'Yaka', value: 'Taç Yaka (Peak Neckline)' },
        { label: 'Kol', value: 'Kolsuz / Straplez Form' },
        { label: 'Kumaş', value: 'Işık Saten & İncili Fransız Dantel' },
        { label: 'İşleme', value: 'Yoğun İnci, Kristal Taş ve Markiz Kesim Taşlar' },
        { label: 'Tarz', value: 'Kraliyet / Elegant / İddialı' }
    ],

    tags: ['Saten Gelinlik', 'İncili Gelinlik', 'Taç Yaka Gelinlik', 'Korsajlı Gelinlik', 'Prenses Gelinlik', 'Alessia Gelinlik', 'Taşlı Gelinlik'],

    images: [
        { url: '/images/gelinlikler/alessia/1.webp', alt: 'Alessia - Taç Yaka Ön Görünüm' },
        { url: '/images/gelinlikler/alessia/2.webp', alt: 'Alessia - Yan Görünüm' },
        { url: '/images/gelinlikler/alessia/3.webp', alt: 'Alessia - Korsaj Detay Görünüm' },
        { url: '/images/gelinlikler/alessia/4.webp', alt: 'Alessia - İnci İşleme Detay Görünüm' },
        { url: '/images/gelinlikler/alessia/5.webp', alt: 'Alessia - Etek Dantel Detay Görünüm' },
        { url: '/images/gelinlikler/alessia/6.webp', alt: 'Alessia - Genel Görünüm' },
    ],

    featured: true,
},
{
    _id: 'prod-celina',
    title: 'Celina',
    subtitle: 'Kristal Kasnak İşlemeli, Derin V Yaka ve Işıltılı A Kesim Tasarım',
    code: 'Gelinlik Celina',
    slug: 'celina',
    categorySlug: 'gelinlikler',

    meta_description: 'Geleneksel kasnak işçiliğini modern kristal boncuklarla buluşturan Celina; derin V dekoltesi, kalın askıları ve ışıltılı hatlara sahip A kesim eteğiyle göz alıcı bir şıklık sunuyor.',

    description: `
        <blockquote>
            "Işığın her açısında yeni bir hikaye: Kristal kasnak işlemenin geometrik zarafeti, Celina ile modern bir ikona dönüşüyor."
        </blockquote>

        <h3>Işıltılı Geometri: Kasnak İşleme Sanatı</h3>
        <p>Celina modelinin ruhunu, el işçiliğiyle hazırlanan <strong>özel kasnak nakışları</strong> oluşturur. Bedenin tamamını saran ve stratejik bir formla eteğe doğru süzülen <strong>kristal boncuk işlemeler</strong>, ışığı her hareketinizde yeniden kırarak tüm bakışları üzerinize çeker.</p>

        <h3>Modern Dekolte: İddialı ve Dengeli</h3>
        <p>Tasarımın üst bedeni, cesur bir <strong>derin V göğüs dekoltesi</strong> ile şekillenmiştir. Bu iddialı kesimi dengeleyen <strong>kalın askı formu</strong>, hem omuz hattını vurgular hem de düğün boyunca konforlu bir hareket alanı sağlar. V formundaki sırt dekoltesi, tasarımdaki bütünlüğü tamamlar.</p>

        <h3>İmza Detaylar</h3>
        <ul>
            <li><strong>Lineer Işıltı:</strong> Etek boyunca uzanan dikey kristal hatlar, silueti uzatan ve daha ince bir görünüm sağlayan bir estetik sunar.</li>
            <li><strong>Görkemli A Kesim:</strong> Bel hattını vurgulayan ve aşağıya doğru hacimle açılan, her mekana uyum sağlayan modern kesim.</li>
            <li><strong>Lüks İşçilik:</strong> Kristal boncukların tül üzerine yoğun bir şekilde işlenmesiyle elde edilen "glamour" etkisi.</li>
        </ul>
    `,

    details: [
        { label: 'Siluet', value: 'A Kesim / Modern Prenses' },
        { label: 'Gövde', value: 'Derin V Dekolte, Kalın Askılı' },
        { label: 'Yaka', value: 'Derin V Yaka' },
        { label: 'Kol', value: 'Kolsuz / Kalın Askılı' },
        { label: 'Kumaş', value: 'Kristal İşlemeli Grek Tül' },
        { label: 'İşleme', value: 'Yoğun Kristal Boncuk ve Kasnak Nakışı' },
        { label: 'Tarz', value: 'Glamorous / Lüks / Işıltılı' }
    ],

    tags: ['Kasnak İşlemeli Gelinlik', 'Kristal Taşlı Gelinlik', 'V Yaka Gelinlik', 'A Kesim Gelinlik', 'Işıltılı Gelinlik', 'Celina Gelinlik', 'Kalın Askılı Gelinlik'],

    images: [
        { url: '/images/gelinlikler/celina/1.webp', alt: 'Celina - Derin V Yaka Ön Görünüm' },
        { url: '/images/gelinlikler/celina/2.webp', alt: 'Celina - Yan Görünüm' },
        { url: '/images/gelinlikler/celina/3.webp', alt: 'Celina - Kasnak İşleme Detay Görünüm' },
        { url: '/images/gelinlikler/celina/4.webp', alt: 'Celina - Kristal Boncuk Detay Görünüm' },
        { url: '/images/gelinlikler/celina/5.webp', alt: 'Celina - A Kesim Etek Görünüm' },
        { url: '/images/gelinlikler/celina/6.webp', alt: 'Celina - Genel Görünüm' },
    ],

    featured: true,
},
{
    _id: 'prod-diana',
    title: 'Diana',
    subtitle: 'Diana: Fransız Dantelli, Straplez Balık Model',
    code: 'Gelinlik Diana',
    slug: 'diana',
    categorySlug: 'gelinlikler',

    meta_description: 'Tamamı Fransız dantelinden tasarlanmış balık form straplez Diana gelinlik, zarif dantel eldiven kolları ve yoğun dantel duvağıyla romantik bir şıklık sunuyor.',

    description: `
        <blockquote>
            "Zarafetin en doğal hali. Diana, nostaljik dokunuşları modern ve iddialı bir siluetle buluşturuyor."
        </blockquote>

        <h3>Göz Alıcı Siluet: Romantik Balık Form</h3>
        <p>Hayatınızın en özel gününde feminen duruşunuzu ön plana çıkarmak istiyorsanız; <strong>Diana</strong> kusursuz bir tercih. Vücut hatlarını zarifçe saran balık (mermaid) formu ve <strong>straplez</strong> tasarımı, modern ve çekici bir görünüm sunar.</p>

        <h3>İmza Detaylar: Eldiven Kollar ve Yoğun Duvak</h3>
        <p>Bu tasarımı eşsiz kılan en önemli detaylar, omuzları açıkta bırakan zarif <strong>dantelden eldiven kolları</strong> ve boynu ince bir şekilde saran choker detayıdır. Görünümü görkemli bir şekilde tamamlayan <strong>yoğun dantel duvağı</strong> ile koridorda yürürken ardınızda unutulmaz bir iz bırakmanızı sağlar.</p>

        <h3>Neden Diana?</h3>
        <ul>
            <li><strong>Dantel Büyüsü:</strong> Baştan aşağıya kullanılan yüksek kaliteli Fransız danteli, her adımda masalsı bir atmosfer yaratır.</li>
            <li><strong>Doğal Konsept:</strong> Kır düğünleri, tarihi mekanlar ve açık hava bahçe konseptleri ile kusursuz bir uyum sağlar.</li>
            <li><strong>Çok Yönlü Şıklık:</strong> Bağımsız dantel eldiven kolları sayesinde gecenin ilerleyen saatlerinde, after party için daha rahat bir görünüme kolayca geçiş yapabilirsiniz.</li>
        </ul>
    `,

    details: [
        { label: 'Siluet', value: 'Balık Form / Mermaid Kesim' },
        { label: 'Yaka', value: 'Straplez' },
        { label: 'Kumaş', value: 'Fransız Danteli' },
        { label: 'Kol Detayı', value: 'Dantelden Eldiven Kollar' },
        { label: 'Duvak', value: 'Yoğun Dantel Duvağı' },
        { label: 'Renk', value: 'Kırık Beyaz / Fildişi' },
        { label: 'Konsept', value: 'Kır Düğünü, Tarihi Mekan, Bahçe Konsepti' }
    ],

    tags: ['balık gelinlik', 'fransız danteli', 'straplez gelinlik', 'dantel eldiven kollu gelinlik', 'yoğun dantel duvak', 'bohem gelinlik', 'kır düğünü', 'mermaid'],

    images: [
        { url: '/images/gelinlikler/diana/1.webp', alt: 'Diana - Straplez Balık Form Ön Görünüm' },
        { url: '/images/gelinlikler/diana/2.webp', alt: 'Diana - Yan Görünüm' },
        { url: '/images/gelinlikler/diana/3.webp', alt: 'Diana - Eldiven Kol Detay Görünüm' },
        { url: '/images/gelinlikler/diana/4.webp', alt: 'Diana - Dantel Duvak Detay Görünüm' },
        { url: '/images/gelinlikler/diana/5.webp', alt: 'Diana - Fransız Danteli Detay Görünüm' },
        { url: '/images/gelinlikler/diana/6.webp', alt: 'Diana - Genel Görünüm' },
    ],

    featured: true,
},
{
    _id: 'prod-bianca',
    title: 'Bianca',
    subtitle: 'Saten, Straplez Kabarık Model ve Eldiven Detaylı',
    code: 'Gelinlik Bianca',
    slug: 'bianca',
    categorySlug: 'gelinlikler',

    meta_description: 'Lüks saten kumaştan tasarlanmış kabarık etekli straplez Bianca gelinlik, korse yapısı, boncuk işlemeleri, pürüzsüz saten eldiven kolları ve şerit boncuklu duvağıyla zamansız bir şıklık sunuyor.',

    description: `
        <blockquote>
            "Zarafetin en asil hali. Bianca, klasik saten dokusunu modern korse detayı ve imza aksesuarlarla buluşturuyor."
        </blockquote>

        <h3>Görkemli Siluet: Saten ve Kabarık Etek</h3>
        <p>Hayatınızın en özel gününde prenses gibi hissetmek istiyorsanız; <strong>Bianca</strong> kusursuz bir tercih. Belden itibaren hacimlenen A-kesim eteği ve pürüzsüz <strong>saten kumaşıyla</strong> klasik ve görkemli bir duruş sergiler.</p>

        <h3>İmza Detaylar: Korse ve Saten Eldivenler</h3>
        <p>Bu tasarımı eşsiz kılan en önemli detaylar, boncuk ve kristal işlemeli, belirgin balenli <strong>korse yapısı</strong> ile pürüzsüz <strong>saten eldiven kollardır</strong>. Omuzları açıkta bırakan <strong>straplez</strong> tasarım ve yoğun boncuklu <strong>saç tacı</strong> ile görünümü görkemli bir şekilde tamamlar. Şerit boncuk işlemeli <strong>uzun duvağı</strong> ile koridorda yürürken ardınızda unutulmaz bir iz bırakmanızı sağlar. Ayrıca, eldivenleri çıkararak geceye daha rahat bir <strong>after party</strong> görünümüyle devam edebilirsiniz.</p>

        <h3>Neden Bianca?</h3>
        <ul>
            <li><strong>Saten Asaleti:</strong> Pürüzsüz Mikado saten kumaş, zamansız bir lüks hissi yaratır.</li>
            <li><strong>Korse Etkisi:</strong> Vücut hatlarını belirginleştiren balenli korse, mükemmel bir form sağlar.</li>
            <li><strong>Lüks Detaylar:</strong> Yoğun boncuk işlemeleri, imza eldivenler ve gösterişli duvak ile her detay özenle tasarlanmıştır.</li>
            <li><strong>Klasik Konsept:</strong> Lüks otel düğünleri, tarihi mekanlar ve balo salonu konseptleri ile kusursuz bir uyum sağlar.</li>
            <li><strong>Çok Yönlü Şıklık:</strong> Eldivenli ve eldivensiz kullanım, inci kolye ve farklı duvak seçenekleriyle kişiselleştirilebilir.</li>
        </ul>
    `,

    details: [
        { label: 'Siluet', value: 'A-kesim / Prenses Model' },
        { label: 'Yaka', value: 'Straplez / Kalp Yaka (Sweetheart)' },
        { label: 'Kumaş', value: 'Saten / Mikado Saten' },
        { label: 'Üst Gövde', value: 'Balenli Korse, Boncuk İşlemeli' },
        { label: 'Kol Detayı', value: 'Saten Eldiven Kollar (Bağımsız)' },
        { label: 'Duvak', value: 'Şerit Boncuk İşlemeli Uzun Tül Duvak' },
        { label: 'Aksesuarlar', value: 'Boncuklu Saç Tacı, İnci Kolye' },
        { label: 'Renk', value: 'Kırık Beyaz / Fildişi' },
        { label: 'Konsept', value: 'Lüks Otel, Tarihi Mekan, Balo Salonu' }
    ],

    tags: ['saten gelinlik', 'prenses model gelinlik', 'a-kesim gelinlik', 'straplez gelinlik', 'eldivenli gelinlik', 'korse gelinlik', 'boncuk işlemeli gelinlik', 'uzun duvaklı gelinlik', 'lüks gelinlik', 'gelinlik modelleri'],

    images: [
        { url: '/images/gelinlikler/bianca/1.webp', alt: 'Bianca - Straplez Saten Ön Görünüm' },
        { url: '/images/gelinlikler/bianca/2.webp', alt: 'Bianca - Yan Görünüm' },
        { url: '/images/gelinlikler/bianca/3.webp', alt: 'Bianca - Korse Detay Görünüm' },
        { url: '/images/gelinlikler/bianca/4.webp', alt: 'Bianca - Eldiven Detay Görünüm' },
        { url: '/images/gelinlikler/bianca/5.webp', alt: 'Bianca - Duvak Detay Görünüm' },
        { url: '/images/gelinlikler/bianca/6.webp', alt: 'Bianca - Genel Görünüm' },
    ],

    featured: true,
},
{
    _id: 'prod-larissa',
    title: 'Larissa',
    subtitle: 'Komple Fransız Dantelli, Düşük Omuz ve İnci Detaylı',
    code: 'Gelinlik Larissa',
    slug: 'larissa',
    categorySlug: 'gelinlikler',

    meta_description: 'Floral Fransız danteliyle bezeli A-kesim Larissa gelinlik; tak-çıkar düşük omuz kolları, inci detaylı choker kolyesi ve romantik dantel duvağıyla büyüleyici bir vintage şıklık sunuyor.',

    description: `
        <blockquote>
            "Zamansız bir aşk masalı. Larissa, geleneksel dantel sanatını modern ve romantik aksesuarlarla yeniden yorumluyor."
        </blockquote>

        <h3>Zarif Siluet: Floral Dantel ve A-Kesim</h3>
        <p>Romantik bir bahçe düğünü veya tarihi bir mekanda ihtişamlı bir giriş hayal eden gelinler için; <strong>Larissa</strong> ideal bir seçim. Vücudu nazikçe kavrayan üst bedeni ve belden itibaren zarifçe açılan <strong>A-kesim</strong> formu, boydan boya floral dantel motifleriyle işlenmiştir.</p>

        <h3>İmza Detaylar: Tak-Çıkar Kollar ve İnci Şıklığı</h3>
        <p>Bu tasarımı özgün kılan en dikkat çekici özellik, gelinliğe hem bohem hem de klasik bir hava katan <strong>düşük omuzlu dantel kollardır</strong>. Boynu zarifçe süsleyen <strong>dantel choker</strong> ve inci detayları, görünümü tamamlayan inci işlemeli saç tacıyla kusursuz bir uyum yakalar. Kenarları dantel işlemeli <strong>katedral tipi uzun duvak</strong>, her adımda masalsı bir derinlik katar.</p>

        <h3>Neden Larissa?</h3>
        <ul>
            <li><strong>Dantel Zenginliği:</strong> Yüksek kaliteli floral dantel dokusu, gelinliğin her noktasında zengin bir görsel derinlik sunar.</li>
            <li><strong>Vintage Esintisi:</strong> İnci kolyeli choker ve taç detayıyla 19. yüzyıl romantizmini modern düğünlere taşır.</li>
            <li><strong>Fonksiyonel Tasarım:</strong> Bağımsız dantel kolları çıkararak düğünün ilerleyen saatlerinde daha hareketli ve farklı bir tarza bürünebilirsiniz.</li>
            <li><strong>Doğal Konsept:</strong> Kır düğünleri, malikane bahçeleri ve vintage temalı düğün organizasyonları için eşsiz bir tercihtir.</li>
        </ul>
    `,

    details: [
        { label: 'Siluet', value: 'A-Kesim' },
        { label: 'Yaka', value: 'Straplez / Kalp Yaka' },
        { label: 'Kumaş', value: 'Fransız Danteli / Floral Güpür' },
        { label: 'Kol Detayı', value: 'Düşük Omuz Tak-Çıkar Dantel Kollar' },
        { label: 'Duvak', value: 'Kenarları Geniş Dantel İşlemeli Uzun Duvak' },
        { label: 'Aksesuarlar', value: 'İnci Detaylı Dantel Choker ve İnci Taç' },
        { label: 'Renk', value: 'Fildişi / Ekru' },
        { label: 'Konsept', value: 'Kır Düğünü, Vintage Düğün, Tarihi Köşk' }
    ],

    tags: ['dantelli gelinlik', 'a-kesim gelinlik', 'romantik gelinlik', 'vintage gelinlik', 'düşük omuz gelinlik', 'choker detaylı gelinlik', 'fransız danteli gelinlik', 'bohem şıklık', 'inci detaylı gelinlik'],

    images: [
        { url: '/images/gelinlikler/larissa/1.webp', alt: 'Larissa - Fransız Dantelli Ön Görünüm' },
        { url: '/images/gelinlikler/larissa/2.webp', alt: 'Larissa - Yan Görünüm' },
        { url: '/images/gelinlikler/larissa/3.webp', alt: 'Larissa - Düşük Omuz Kol Detay Görünüm' },
        { url: '/images/gelinlikler/larissa/4.webp', alt: 'Larissa - Choker Detay Görünüm' },
        { url: '/images/gelinlikler/larissa/5.webp', alt: 'Larissa - Dantel Duvak Detay Görünüm' },
        { url: '/images/gelinlikler/larissa/6.webp', alt: 'Larissa - Genel Görünüm' },
    ],

    featured: true,
},
{
    _id: 'prod-elysia',
    title: 'Elysia',
    subtitle: 'Floral Dantelli, Askılı A-Kesim Model ve Romantik Kollar',
    code: 'Gelinlik Elysia',
    slug: 'elysia',
    categorySlug: 'gelinlikler',

    meta_description: 'Floral dantel aplikeleriyle bezeli soft A-kesim etekli, zarif askılı ve tak-çıkar romantik kol detaylarıyla masalsı bir şıklık sunan Elysia gelinlik, bohem ve kır düğünü konseptlerine uygun bir tasarımdır.',

    description: `
        <blockquote>
            "Doğanın kalbinde bir rüya. Elysia, floral dokuları bohem ve feminen bir siluetle buluşturuyor."
        </blockquote>

        <h3>Görkemli Siluet: Romantik A-Kesim</h3>
        <p>Hayatınızın en özel gününde masalsı ve narin bir duruş sergilemek istiyorsanız; <strong>Elysia</strong> kusursuz bir tercih. Belden itibaren zarifçe açılan soft <strong>A-kesim</strong> formu ve narin askıları, modern ve iddialı bir siluet sunar.</p>

        <h3>İmza Detaylar: Tak-Çıkar Kollar ve Aplikeli Duvak</h3>
        <p>Bu tasarımı eşsiz kılan en önemli detaylar, omuzları nazikçe saran ve <strong>çiçekli dantel aplike detaylı tak-çıkar kol detaylarıdır</strong>. Bu kollar, gelinliğe hem bohem hem de vintage bir hava katar. Görünümü görkemli bir şekilde tamamlayan <strong>aplik dantelli uzun duvağı</strong> ile koridorda yürürken ardınızda unutulmaz bir iz bırakmanızı sağlar.</p>

        <h3>Neden Elysia?</h3>
        <ul>
            <li><strong>Floral Büyü:</strong> Baştan aşağıya kullanılan yüksek kaliteli floral dantel aplikeleri, her adımda doğal ve masalsı bir atmosfer yaratır.</li>
            <li><strong>Bohem Şık Konsept:</strong> Kır düğünleri, sahil düğünleri, malikane bahçeleri ve açık hava bahçe konseptleri ile kusursuz bir uyum sağlar.</li>
            <li><strong>Çok Yönlü Şıklık:</strong> Bağımsız aplik dantel kol detayları sayesinde gecenin ilerleyen saatlerinde, after party için daha rahat bir görünüme kolayca geçiş yapabilirsiniz.</li>
            <li><strong>Rahat ve Hafif:</strong> Tül ve dantelin birleşimi, hafifliğiyle size gün boyu hareket özgürlüğü sunar.</li>
        </ul>
    `,

    details: [
        { label: 'Siluet', value: 'A-Kesim' },
        { label: 'Yaka', value: 'V-Yaka (V-Plunge / Narin Askılı)' },
        { label: 'Kumaş', value: 'Floral Dantel Aplike, Tül' },
        { label: 'Kol Detayı', value: 'Çiçekli Aplik Dantel Detaylı Tak-Çıkar Kollar' },
        { label: 'Duvak', value: 'Aplik Dantelli Uzun Duvak' },
        { label: 'Renk', value: 'Kırık Beyaz / Fildişi' },
        { label: 'Konsept', value: 'Kır Düğünü, Bohem Şık, Sahil Düğünü, Bahçe' }
    ],

    tags: ['a-kesim gelinlik', 'bohem gelinlik', 'romantik gelinlik', 'floral dantel gelinlik', 'tak-çıkar kol gelinlik', 'aplik dantelli duvak', 'kır düğünü gelinlik', 'narin askılı gelinlik'],

    images: [
        { url: '/images/gelinlikler/elysia/1.webp', alt: 'Elysia - Floral Dantelli Ön Görünüm' },
        { url: '/images/gelinlikler/elysia/2.webp', alt: 'Elysia - Yan Görünüm' },
        { url: '/images/gelinlikler/elysia/3.webp', alt: 'Elysia - Tak-Çıkar Kol Detay Görünüm' },
        { url: '/images/gelinlikler/elysia/4.webp', alt: 'Elysia - Floral Aplike Detay Görünüm' },
        { url: '/images/gelinlikler/elysia/5.webp', alt: 'Elysia - Duvak Detay Görünüm' },
        { url: '/images/gelinlikler/elysia/6.webp', alt: 'Elysia - Genel Görünüm' },
    ],

    featured: true,
},
{
    _id: 'prod-sienna',
    title: 'Sienna',
    subtitle: 'Modern Minimalist, Saten, Pelerin Detaylı A-Kesim Model',
    code: 'Gelinlik Sienna',
    slug: 'sienna',
    categorySlug: 'gelinlikler',

    meta_description: 'Lüks saten kumaştan tasarlanmış minimalist A-kesim Sienna gelinlik, straplez yaka ve omuzlardan sarkan minimalist pelerin panelleriyle sofistike bir modern şıklık sunuyor.',

    description: `
        <blockquote>
            "Duru zarafetin modern tanımı. Sienna, minimal çizgileri sofistike bir dokunuşla buluşturuyor."
        </blockquote>

        <h3>Sofistike Siluet: Saten ve Akıcı Kesim</h3>
        <p>Hayatınızın en özel gününde modern ve asil bir duruş sergilemek istiyorsanız; <strong>Sienna</strong> kusursuz bir tercih. Pürüzsüz <strong>saten kumaşı</strong> ve belden itibaren zarifçe dökülen soft <strong>A-kesim</strong> eteğiyle zamansız bir lüks hissi yaratır.</p>

        <h3>İmza Detaylar: Pelerin Panelleri ve Straplez Zarafet</h3>
        <p>Bu tasarımı eşsiz kılan en önemli detaylar, omuzlardan arkaya doğru uzanan minimalist <strong>pelerin panelleridir</strong>. Straplez yakanın temiz duruşu, minimal takılar ve pürüzsüz sırt detayıyla birleşerek modern ve duru bir güzellik sunar. Arka plandaki minimal mimari ile harika bir uyum yakalayan bu tasarım, koridorda yürürken ardınızda unutulmaz ve modern bir iz bırakmanızı sağlar.</p>

        <h3>Neden Sienna?</h3>
        <ul>
            <li><strong>Lüks Saten:</strong> Pürüzsüz Mikado saten kumaş, her adımda asil bir parlaklık sunar.</li>
            <li><strong>Modern Konsept:</strong> Modern otel düğünleri, şehir konseptleri, çağdaş sanat müzeleri ve lüks restoranlar ile kusursuz bir uyum sağlar.</li>
            <li><strong>Minimalist Şıklık:</strong> Fazlalıklardan arındırılmış, çist çizgili tasarımıyla modern ve "cool" bir gelin görünümü sunar.</li>
            <li><strong>After Party Uyumu:</strong> Pelerin panellerinin minimalizmi sayesinde düğünün ilerleyen saatlerinde, after party için farklı bir görünüme kolayca geçiş yapabilirsiniz.</li>
        </ul>
    `,

    details: [
        { label: 'Siluet', value: 'A-kesim / Soft Kabarık Model' },
        { label: 'Yaka', value: 'Straplez / Kare-Straplez Karışımı' },
        { label: 'Kumaş', value: 'Saten / Mikado Saten' },
        { label: 'Üst Gövde', value: 'Balenli Minimal Korse' },
        { label: 'Omuz/Kol Detayı', value: 'Omuzlardan sarkan Minimal Pelerin Panelleri' },
        { label: 'Kuyruk', value: 'Minimalist, Pelerin Panelleriyle Entegre' },
        { label: 'Aksesuarlar', value: 'İnci Küpeler, Minimal Saç' },
        { label: 'Renk', value: 'Kırık Beyaz / Fildişi' },
        { label: 'Konsept', value: 'Modern Minimalist, Şehir Düğünü, Modern Otel' }
    ],

    tags: ['saten gelinlik', 'minimalist gelinlik', 'a-kesim gelinlik', 'pelerinli gelinlik', 'straplez gelinlik', 'modern gelinlik', 'lüks saten', 'şehir düğünü gelinlik', 'cool gelin'],

    images: [
        { url: '/images/gelinlikler/sienna/1.webp', alt: 'Sienna - Minimalist Saten Ön Görünüm' },
        { url: '/images/gelinlikler/sienna/2.webp', alt: 'Sienna - Yan Görünüm' },
        { url: '/images/gelinlikler/sienna/3.webp', alt: 'Sienna - Pelerin Panel Detay Görünüm' },
        { url: '/images/gelinlikler/sienna/4.webp', alt: 'Sienna - Arka Görünüm' },
        { url: '/images/gelinlikler/sienna/5.webp', alt: 'Sienna - Straplez Yaka Detay Görünüm' },
        { url: '/images/gelinlikler/sienna/6.webp', alt: 'Sienna - Genel Görünüm' },
    ],

    featured: true,
}

];

