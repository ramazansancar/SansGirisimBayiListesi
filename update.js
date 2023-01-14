String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

String.prototype.turkishUpperCase = function() {
    return this.replace(/Ä|ÄŸ/g, "g")
        .replace(/Ãœ|Ã¼/g, "u")
        .replace(/Å|ÅŸ/g, "s")
        .replace(/Ä±/g, "i")
        .replace(/Ä°/g, "i")
        .replace(/Ã–|Ã¶/g, "o")
        .replace(/Ã‡|Ã§/g, "c")
        .replace(/ÃŸ/g, "s")
        .replace(/Ğ/g, "g")
        .replace(/Ü/g, "u")
        .replace(/Ş/g, "s")
        .replace(/I/g, "i")
        .replace(/İ/g, "i")
        .replace(/Ö/g, "o")
        .replace(/Ç/g, "c")
        .replace(/ /g, "-")
        .replaceAll('ğ','g')
        .replaceAll('ş','s')
        .replaceAll('ı','i')
        .replaceAll('ö','o')
        .replaceAll('ç','c')
        .replaceAll('ü','u')
        .toUpperCase();
};

var cities = [
    {"id":1,"name":"Adana"},{"id":2,"name":"Adıyaman"},{"id":3,"name":"Afyonkarahisar"},{"id":4,"name":"Ağrı"},{"id":5,"name":"Amasya"},{"id":6,"name":"Ankara"},{"id":7,"name":"Antalya"},{"id":8,"name":"Artvin"},{"id":9,"name":"Aydın"},{"id":10,"name":"Balıkesir"},{"id":11,"name":"Bilecik"},{"id":12,"name":"Bingöl"},{"id":13,"name":"Bitlis"},{"id":14,"name":"Bolu"},{"id":15,"name":"Burdur"},{"id":16,"name":"Bursa"},{"id":17,"name":"Çanakkale"},{"id":18,"name":"Çankırı"},{"id":19,"name":"Çorum"},{"id":20,"name":"Denizli"},{"id":21,"name":"Diyarbakır"},{"id":22,"name":"Edirne"},{"id":23,"name":"Elazığ"},{"id":24,"name":"Erzincan"},{"id":25,"name":"Erzurum"},{"id":26,"name":"Eskişehir"},{"id":27,"name":"Gaziantep"},{"id":28,"name":"Giresun"},{"id":29,"name":"Gümüşhane"},{"id":30,"name":"Hakkari"},{"id":31,"name":"Hatay"},{"id":32,"name":"Isparta"},{"id":33,"name":"Mersin"},{"id":34,"name":"İstanbul"},{"id":35,"name":"İzmir"},{"id":36,"name":"Kars"},{"id":37,"name":"Kastamonu"},{"id":38,"name":"Kayseri"},{"id":39,"name":"Kırklareli"},{"id":40,"name":"Kırşehir"},{"id":41,"name":"Kocaeli"},{"id":42,"name":"Konya"},{"id":43,"name":"Kütahya"},{"id":44,"name":"Malatya"},{"id":45,"name":"Manisa"},{"id":46,"name":"Kahramanmaraş"},{"id":47,"name":"Mardin"},{"id":48,"name":"Muğla"},{"id":49,"name":"Muş"},{"id":50,"name":"Nevşehir"},{"id":51,"name":"Niğde"},{"id":52,"name":"Ordu"},{"id":53,"name":"Rize"},{"id":54,"name":"Sakarya"},{"id":55,"name":"Samsun"},{"id":56,"name":"Siirt"},{"id":57,"name":"Sinop"},{"id":58,"name":"Sivas"},{"id":59,"name":"Tekirdağ"},{"id":60,"name":"Tokat"},{"id":61,"name":"Trabzon"},{"id":62,"name":"Tunceli"},{"id":63,"name":"Şanlıurfa"},{"id":64,"name":"Uşak"},{"id":65,"name":"Van"},{"id":66,"name":"Yozgat"},{"id":67,"name":"Zonguldak"},{"id":68,"name":"Aksaray"},{"id":69,"name":"Bayburt"},{"id":70,"name":"Karaman"},{"id":71,"name":"Kırıkkale"},{"id":72,"name":"Batman"},{"id":73,"name":"Şırnak"},{"id":74,"name":"Bartın"},{"id":75,"name":"Ardahan"},{"id":76,"name":"Iğdır"},{"id":77,"name":"Yalova"},{"id":78,"name":"Karabük"},{"id":79,"name":"Kilis"},{"id":80,"name":"Osmaniye"},{"id":81,"name":"Düzce"}
]

var countriesWithDistricts = {
    Adana: [
      "Aladağ",
      "Ceyhan",
      "Çukurova",
      "Feke",
      "İmamoğlu",
      "Karaisalı",
      "Karataş",
      "Kozan",
      "Pozantı",
      "Saimbeyli",
      "Sarıçam",
      "Seyhan",
      "Tufanbeyli",
      "Yumurtalık",
      "Yüreğir"
    ],
    Adıyaman: [
      "Besni",
      "Çelikhan",
      "Gerger",
      "Gölbaşı",
      "Kahta",
      "Merkez",
      "Samsat",
      "Sincik",
      "Tut"
    ],
    Afyonkarahisar: [
      "Başmakçı",
      "Bayat",
      "Bolvadin",
      "Çay",
      "Çobanlar",
      "Dazkırı",
      "Dinar",
      "Emirdağ",
      "Evciler",
      "Hocalar",
      "İhsaniye",
      "İscehisar",
      "Kızılören",
      "Merkez",
      "Sandıklı",
      "Sinanpaşa",
      "Sultandağı",
      "Şuhut"
    ],
    Ağrı: [
      "Diyadin",
      "Doğubayazıt",
      "Eleşkirt",
      "Hamur",
      "Merkez",
      "Patnos",
      "Taşlıçay",
      "Tutak"
    ],
    Amasya: [
      "Göynücek",
      "Gümüşhacıköy",
      "Hamamözü",
      "Merkez",
      "Merzifon",
      "Suluova",
      "Taşova"
    ],
    Ankara: [
      "Altındağ",
      "Ayaş",
      "Bala",
      "Beypazarı",
      "Çamlıdere",
      "Çankaya",
      "Çubuk",
      "Elmadağ",
      "Güdül",
      "Haymana",
      "Kalecik",
      "Kızılcahamam",
      "Nallıhan",
      "Polatlı",
      "Şereflikoçhisar",
      "Yenimahalle",
      "Gölbaşı",
      "Keçiören",
      "Mamak",
      "Sincan",
      "Kazan",
      "Akyurt",
      "Etimesgut",
      "Evren",
      "Pursaklar"
    ],
    Antalya: [
      "Akseki",
      "Alanya",
      "Elmalı",
      "Finike",
      "Gazipaşa",
      "Gündoğmuş",
      "Kaş",
      "Korkuteli",
      "Kumluca",
      "Manavgat",
      "Serik",
      "Demre",
      "İbradı",
      "Kemer",
      "Aksu",
      "Döşemealtı",
      "Kepez",
      "Konyaaltı",
      "Muratpaşa"
    ],
    Artvin: [
      "Ardanuç",
      "Arhavi",
      "Merkez",
      "Borçka",
      "Hopa",
      "Şavşat",
      "Yusufeli",
      "Murgul"
    ],
    Aydın: [
      "Merkez",
      "Bozdoğan",
      "Efeler",
      "Çine",
      "Germencik",
      "Karacasu",
      "Koçarlı",
      "Kuşadası",
      "Kuyucak",
      "Nazilli",
      "Söke",
      "Sultanhisar",
      "Yenipazar",
      "Buharkent",
      "İncirliova",
      "Karpuzlu",
      "Köşk",
      "Didim"
    ],
    Balıkesir: [
      "Altıeylül",
      "Ayvalık",
      "Merkez",
      "Balya",
      "Bandırma",
      "Bigadiç",
      "Burhaniye",
      "Dursunbey",
      "Edremit",
      "Erdek",
      "Gönen",
      "Havran",
      "İvrindi",
      "Karesi",
      "Kepsut",
      "Manyas",
      "Savaştepe",
      "Sındırgı",
      "Gömeç",
      "Susurluk",
      "Marmara"
    ],
    Bilecik: [
      "Merkez",
      "Bozüyük",
      "Gölpazarı",
      "Osmaneli",
      "Pazaryeri",
      "Söğüt",
      "Yenipazar",
      "İnhisar"
    ],
    Bingöl: [
      "Merkez",
      "Genç",
      "Karlıova",
      "Kiğı",
      "Solhan",
      "Adaklı",
      "Yayladere",
      "Yedisu"
    ],
    Bitlis: [
      "Adilcevaz",
      "Ahlat",
      "Merkez",
      "Hizan",
      "Mutki",
      "Tatvan",
      "Güroymak"
    ],
    Bolu: [
      "Merkez",
      "Gerede",
      "Göynük",
      "Kıbrıscık",
      "Mengen",
      "Mudurnu",
      "Seben",
      "Dörtdivan",
      "Yeniçağa"
    ],
    Burdur: [
      "Ağlasun",
      "Bucak",
      "Merkez",
      "Gölhisar",
      "Tefenni",
      "Yeşilova",
      "Karamanlı",
      "Kemer",
      "Altınyayla",
      "Çavdır",
      "Çeltikçi"
    ],
    Bursa: [
      "Gemlik",
      "İnegöl",
      "İznik",
      "Karacabey",
      "Keles",
      "Mudanya",
      "Mustafakemalpaşa",
      "Orhaneli",
      "Orhangazi",
      "Yenişehir",
      "Büyükorhan",
      "Harmancık",
      "Nilüfer",
      "Osmangazi",
      "Yıldırım",
      "Gürsu",
      "Kestel"
    ],
    Çanakkale: [
      "Ayvacık",
      "Bayramiç",
      "Biga",
      "Bozcaada",
      "Çan",
      "Merkez",
      "Eceabat",
      "Ezine",
      "Gelibolu",
      "Gökçeada",
      "Lapseki",
      "Yenice"
    ],
    Çankırı: [
      "Merkez",
      "Çerkeş",
      "Eldivan",
      "Ilgaz",
      "Kurşunlu",
      "Orta",
      "Şabanözü",
      "Yapraklı",
      "Atkaracalar",
      "Kızılırmak",
      "Bayramören",
      "Korgun"
    ],
    Çorum: [
      "Alaca",
      "Bayat",
      "Merkez",
      "İskilip",
      "Kargı",
      "Mecitözü",
      "Ortaköy",
      "Osmancık",
      "Sungurlu",
      "Boğazkale",
      "Uğurludağ",
      "Dodurga",
      "Laçin",
      "Oğuzlar"
    ],
    Denizli: [
      "Acıpayam",
      "Buldan",
      "Çal",
      "Çameli",
      "Çardak",
      "Çivril",
      "Merkez",
      "Merkezefendi",
      "Pamukkale",
      "Güney",
      "Kale",
      "Sarayköy",
      "Tavas",
      "Babadağ",
      "Bekilli",
      "Honaz",
      "Serinhisar",
      "Baklan",
      "Beyağaç",
      "Bozkurt"
    ],
    Diyarbakır: [
      "Kocaköy",
      "Çermik",
      "Çınar",
      "Çüngüş",
      "Dicle",
      "Ergani",
      "Hani",
      "Hazro",
      "Kulp",
      "Lice",
      "Silvan",
      "Eğil",
      "Bağlar",
      "Kayapınar",
      "Sur",
      "Yenişehir",
      "Bismil"
    ],
    Edirne: [
      "Merkez",
      "Enez",
      "Havsa",
      "İpsala",
      "Keşan",
      "Lalapaşa",
      "Meriç",
      "Uzunköprü",
      "Süloğlu"
    ],
    Elazığ: [
      "Ağın",
      "Baskil",
      "Merkez",
      "Karakoçan",
      "Keban",
      "Maden",
      "Palu",
      "Sivrice",
      "Arıcak",
      "Kovancılar",
      "Alacakaya"
    ],
    Erzincan: [
      "Çayırlı",
      "Merkez",
      "İliç",
      "Kemah",
      "Kemaliye",
      "Refahiye",
      "Tercan",
      "Üzümlü",
      "Otlukbeli"
    ],
    Erzurum: [
      "Aşkale",
      "Çat",
      "Hınıs",
      "Horasan",
      "İspir",
      "Karayazı",
      "Narman",
      "Oltu",
      "Olur",
      "Pasinler",
      "Şenkaya",
      "Tekman",
      "Tortum",
      "Karaçoban",
      "Uzundere",
      "Pazaryolu",
      "Köprüköy",
      "Palandöken",
      "Yakutiye",
      "Aziziye"
    ],
    Eskişehir: [
      "Çifteler",
      "Mahmudiye",
      "Mihalıççık",
      "Sarıcakaya",
      "Seyitgazi",
      "Sivrihisar",
      "Alpu",
      "Beylikova",
      "İnönü",
      "Günyüzü",
      "Han",
      "Mihalgazi",
      "Odunpazarı",
      "Tepebaşı"
    ],
    Gaziantep: [
      "Araban",
      "İslahiye",
      "Nizip",
      "Oğuzeli",
      "Yavuzeli",
      "Şahinbey",
      "Şehitkamil",
      "Karkamış",
      "Nurdağı"
    ],
    Giresun: [
      "Alucra",
      "Bulancak",
      "Dereli",
      "Espiye",
      "Eynesil",
      "Merkez",
      "Görele",
      "Keşap",
      "Şebinkarahisar",
      "Tirebolu",
      "Piraziz",
      "Yağlıdere",
      "Çamoluk",
      "Çanakçı",
      "Doğankent",
      "Güce"
    ],
    Gümüşhane: ["Merkez", "Kelkit", "Şiran", "Torul", "Köse", "Kürtün"],
    Hakkari: ["Çukurca", "Merkez", "Şemdinli", "Yüksekova"],
    Hatay: [
      "Altınözü",
      "Arsuz",
      "Defne",
      "Dörtyol",
      "Hassa",
      "Antakya",
      "İskenderun",
      "Kırıkhan",
      "Payas",
      "Reyhanlı",
      "Samandağ",
      "Yayladağı",
      "Erzin",
      "Belen",
      "Kumlu"
    ],
    Isparta: [
      "Atabey",
      "Eğirdir",
      "Gelendost",
      "Merkez",
      "Keçiborlu",
      "Senirkent",
      "Sütçüler",
      "Şarkikaraağaç",
      "Uluborlu",
      "Yalvaç",
      "Aksu",
      "Gönen",
      "Yenişarbademli"
    ],
    Mersin: [
      "Anamur",
      "Erdemli",
      "Gülnar",
      "Mut",
      "Silifke",
      "Tarsus",
      "Aydıncık",
      "Bozyazı",
      "Çamlıyayla",
      "Akdeniz",
      "Mezitli",
      "Toroslar",
      "Yenişehir"
    ],
    İstanbul: [
      "Adalar",
      "Bakırköy",
      "Beşiktaş",
      "Beykoz",
      "Beyoğlu",
      "Çatalca",
      "Eyüp",
      "Fatih",
      "Gaziosmanpaşa",
      "Kadıköy",
      "Kartal",
      "Sarıyer",
      "Silivri",
      "Şile",
      "Şişli",
      "Üsküdar",
      "Zeytinburnu",
      "Büyükçekmece",
      "Kağıthane",
      "Küçükçekmece",
      "Pendik",
      "Ümraniye",
      "Bayrampaşa",
      "Avcılar",
      "Bağcılar",
      "Bahçelievler",
      "Güngören",
      "Maltepe",
      "Sultanbeyli",
      "Tuzla",
      "Esenler",
      "Arnavutköy",
      "Ataşehir",
      "Başakşehir",
      "Beylikdüzü",
      "Çekmeköy",
      "Esenyurt",
      "Sancaktepe",
      "Sultangazi"
    ],
    İzmir: [
      "Aliağa",
      "Bayındır",
      "Bergama",
      "Bornova",
      "Çeşme",
      "Dikili",
      "Foça",
      "Karaburun",
      "Karşıyaka",
      "Kemalpaşa",
      "Kınık",
      "Kiraz",
      "Menemen",
      "Ödemiş",
      "Seferihisar",
      "Selçuk",
      "Tire",
      "Torbalı",
      "Urla",
      "Beydağ",
      "Buca",
      "Konak",
      "Menderes",
      "Balçova",
      "Çiğli",
      "Gaziemir",
      "Narlıdere",
      "Güzelbahçe",
      "Bayraklı",
      "Karabağlar"
    ],
    Kars: [
      "Arpaçay",
      "Digor",
      "Kağızman",
      "Merkez",
      "Sarıkamış",
      "Selim",
      "Susuz",
      "Akyaka"
    ],
    Kastamonu: [
      "Abana",
      "Araç",
      "Azdavay",
      "Bozkurt",
      "Cide",
      "Çatalzeytin",
      "Daday",
      "Devrekani",
      "İnebolu",
      "Merkez",
      "Küre",
      "Taşköprü",
      "Tosya",
      "İhsangazi",
      "Pınarbaşı",
      "Şenpazar",
      "Ağlı",
      "Doğanyurt",
      "Hanönü",
      "Seydiler"
    ],
    Kayseri: [
      "Bünyan",
      "Develi",
      "Felahiye",
      "İncesu",
      "Pınarbaşı",
      "Sarıoğlan",
      "Sarız",
      "Tomarza",
      "Yahyalı",
      "Yeşilhisar",
      "Akkışla",
      "Talas",
      "Kocasinan",
      "Melikgazi",
      "Hacılar",
      "Özvatan"
    ],
    Kırklareli: [
      "Babaeski",
      "Demirköy",
      "Merkez",
      "Kofçaz",
      "Lüleburgaz",
      "Pehlivanköy",
      "Pınarhisar",
      "Vize"
    ],
    Kırşehir: [
      "Çiçekdağı",
      "Kaman",
      "Merkez",
      "Mucur",
      "Akpınar",
      "Akçakent",
      "Boztepe"
    ],
    Kocaeli: [
      "Gebze",
      "Gölcük",
      "Kandıra",
      "Karamürsel",
      "Körfez",
      "Derince",
      "Başiskele",
      "Çayırova",
      "Darıca",
      "Dilovası",
      "İzmit",
      "Kartepe"
    ],
    Konya: [
      "Akşehir",
      "Beyşehir",
      "Bozkır",
      "Cihanbeyli",
      "Çumra",
      "Doğanhisar",
      "Ereğli",
      "Hadim",
      "Ilgın",
      "Kadınhanı",
      "Karapınar",
      "Kulu",
      "Sarayönü",
      "Seydişehir",
      "Yunak",
      "Akören",
      "Altınekin",
      "Derebucak",
      "Hüyük",
      "Karatay",
      "Meram",
      "Selçuklu",
      "Taşkent",
      "Ahırlı",
      "Çeltik",
      "Derbent",
      "Emirgazi",
      "Güneysınır",
      "Halkapınar",
      "Tuzlukçu",
      "Yalıhüyük"
    ],
    Kütahya: [
      "Altıntaş",
      "Domaniç",
      "Emet",
      "Gediz",
      "Merkez",
      "Simav",
      "Tavşanlı",
      "Aslanapa",
      "Dumlupınar",
      "Hisarcık",
      "Şaphane",
      "Çavdarhisar",
      "Pazarlar"
    ],
    Malatya: [
      "Akçadağ",
      "Arapgir",
      "Arguvan",
      "Darende",
      "Doğanşehir",
      "Hekimhan",
      "Merkez",
      "Pütürge",
      "Yeşilyurt",
      "Battalgazi",
      "Doğanyol",
      "Kale",
      "Kuluncak",
      "Yazıhan"
    ],
    Manisa: [
      "Akhisar",
      "Alaşehir",
      "Demirci",
      "Gördes",
      "Kırkağaç",
      "Kula",
      "Merkez",
      "Salihli",
      "Sarıgöl",
      "Saruhanlı",
      "Selendi",
      "Soma",
      "Şehzadeler",
      "Yunusemre",
      "Turgutlu",
      "Ahmetli",
      "Gölmarmara",
      "Köprübaşı"
    ],
    Kahramanmaraş: [
      "Afşin",
      "Andırın",
      "Dulkadiroğlu",
      "Onikişubat",
      "Elbistan",
      "Göksun",
      "Merkez",
      "Pazarcık",
      "Türkoğlu",
      "Çağlayancerit",
      "Ekinözü",
      "Nurhak"
    ],
    Mardin: [
      "Derik",
      "Kızıltepe",
      "Artuklu",
      "Merkez",
      "Mazıdağı",
      "Midyat",
      "Nusaybin",
      "Ömerli",
      "Savur",
      "Dargeçit",
      "Yeşilli"
    ],
    Muğla: [
      "Bodrum",
      "Datça",
      "Fethiye",
      "Köyceğiz",
      "Marmaris",
      "Menteşe",
      "Milas",
      "Ula",
      "Yatağan",
      "Dalaman",
      "Seydikemer",
      "Ortaca",
      "Kavaklıdere"
    ],
    Muş: ["Bulanık", "Malazgirt", "Merkez", "Varto", "Hasköy", "Korkut"],
    Nevşehir: [
      "Avanos",
      "Derinkuyu",
      "Gülşehir",
      "Hacıbektaş",
      "Kozaklı",
      "Merkez",
      "Ürgüp",
      "Acıgöl"
    ],
    Niğde: ["Bor", "Çamardı", "Merkez", "Ulukışla", "Altunhisar", "Çiftlik"],
    Ordu: [
      "Akkuş",
      "Altınordu",
      "Aybastı",
      "Fatsa",
      "Gölköy",
      "Korgan",
      "Kumru",
      "Mesudiye",
      "Perşembe",
      "Ulubey",
      "Ünye",
      "Gülyalı",
      "Gürgentepe",
      "Çamaş",
      "Çatalpınar",
      "Çaybaşı",
      "İkizce",
      "Kabadüz",
      "Kabataş"
    ],
    Rize: [
      "Ardeşen",
      "Çamlıhemşin",
      "Çayeli",
      "Fındıklı",
      "İkizdere",
      "Kalkandere",
      "Pazar",
      "Merkez",
      "Güneysu",
      "Derepazarı",
      "Hemşin",
      "İyidere"
    ],
    Sakarya: [
      "Akyazı",
      "Geyve",
      "Hendek",
      "Karasu",
      "Kaynarca",
      "Sapanca",
      "Kocaali",
      "Pamukova",
      "Taraklı",
      "Ferizli",
      "Karapürçek",
      "Söğütlü",
      "Adapazarı",
      "Arifiye",
      "Erenler",
      "Serdivan"
    ],
    Samsun: [
      "Alaçam",
      "Bafra",
      "Çarşamba",
      "Havza",
      "Kavak",
      "Ladik",
      "Terme",
      "Vezirköprü",
      "Asarcık",
      "Ondokuzmayıs",
      "Salıpazarı",
      "Tekkeköy",
      "Ayvacık",
      "Yakakent",
      "Atakum",
      "Canik",
      "İlkadım"
    ],
    Siirt: ["Baykan", "Eruh", "Kurtalan", "Pervari", "Merkez", "Şirvan", "Tillo"],
    Sinop: [
      "Ayancık",
      "Boyabat",
      "Durağan",
      "Erfelek",
      "Gerze",
      "Merkez",
      "Türkeli",
      "Dikmen",
      "Saraydüzü"
    ],
    Sivas: [
      "Divriği",
      "Gemerek",
      "Gürün",
      "Hafik",
      "İmranlı",
      "Kangal",
      "Koyulhisar",
      "Merkez",
      "Suşehri",
      "Şarkışla",
      "Yıldızeli",
      "Zara",
      "Akıncılar",
      "Altınyayla",
      "Doğanşar",
      "Gölova",
      "Ulaş"
    ],
    Tekirdağ: [
      "Çerkezköy",
      "Çorlu",
      "Ergene",
      "Hayrabolu",
      "Malkara",
      "Muratlı",
      "Saray",
      "Süleymanpaşa",
      "Kapaklı",
      "Şarköy",
      "Marmaraereğlisi"
    ],
    Tokat: [
      "Almus",
      "Artova",
      "Erbaa",
      "Niksar",
      "Reşadiye",
      "Merkez",
      "Turhal",
      "Zile",
      "Pazar",
      "Yeşilyurt",
      "Başçiftlik",
      "Sulusaray"
    ],
    Trabzon: [
      "Akçaabat",
      "Araklı",
      "Arsin",
      "Çaykara",
      "Maçka",
      "Of",
      "Ortahisar",
      "Sürmene",
      "Tonya",
      "Vakfıkebir",
      "Yomra",
      "Beşikdüzü",
      "Şalpazarı",
      "Çarşıbaşı",
      "Dernekpazarı",
      "Düzköy",
      "Hayrat",
      "Köprübaşı"
    ],
    Tunceli: [
      "Çemişgezek",
      "Hozat",
      "Mazgirt",
      "Nazımiye",
      "Ovacık",
      "Pertek",
      "Pülümür",
      "Merkez"
    ],
    Şanlıurfa: [
      "Akçakale",
      "Birecik",
      "Bozova",
      "Ceylanpınar",
      "Eyyübiye",
      "Halfeti",
      "Haliliye",
      "Hilvan",
      "Karaköprü",
      "Siverek",
      "Suruç",
      "Viranşehir",
      "Harran"
    ],
    Uşak: ["Banaz", "Eşme", "Karahallı", "Sivaslı", "Ulubey", "Merkez"],
    Van: [
      "Başkale",
      "Çatak",
      "Erciş",
      "Gevaş",
      "Gürpınar",
      "İpekyolu",
      "Muradiye",
      "Özalp",
      "Tuşba",
      "Bahçesaray",
      "Çaldıran",
      "Edremit",
      "Saray"
    ],
    Yozgat: [
      "Akdağmadeni",
      "Boğazlıyan",
      "Çayıralan",
      "Çekerek",
      "Sarıkaya",
      "Sorgun",
      "Şefaatli",
      "Yerköy",
      "Merkez",
      "Aydıncık",
      "Çandır",
      "Kadışehri",
      "Saraykent",
      "Yenifakılı"
    ],
    Zonguldak: ["Çaycuma", "Devrek", "Ereğli", "Merkez", "Alaplı", "Gökçebey"],
    Aksaray: [
      "Ağaçören",
      "Eskil",
      "Gülağaç",
      "Güzelyurt",
      "Merkez",
      "Ortaköy",
      "Sarıyahşi"
    ],
    Bayburt: ["Merkez", "Aydıntepe", "Demirözü"],
    Karaman: [
      "Ermenek",
      "Merkez",
      "Ayrancı",
      "Kazımkarabekir",
      "Başyayla",
      "Sarıveliler"
    ],
    Kırıkkale: [
      "Delice",
      "Keskin",
      "Merkez",
      "Sulakyurt",
      "Bahşili",
      "Balışeyh",
      "Çelebi",
      "Karakeçili",
      "Yahşihan"
    ],
    Batman: ["Merkez", "Beşiri", "Gercüş", "Kozluk", "Sason", "Hasankeyf"],
    Şırnak: [
      "Beytüşşebap",
      "Cizre",
      "İdil",
      "Silopi",
      "Merkez",
      "Uludere",
      "Güçlükonak"
    ],
    Bartın: ["Merkez", "Kurucaşile", "Ulus", "Amasra"],
    Ardahan: ["Merkez", "Çıldır", "Göle", "Hanak", "Posof", "Damal"],
    Iğdır: ["Aralık", "Merkez", "Tuzluca", "Karakoyunlu"],
    Yalova: ["Merkez", "Altınova", "Armutlu", "Çınarcık", "Çiftlikköy", "Termal"],
    Karabük: ["Eflani", "Eskipazar", "Merkez", "Ovacık", "Safranbolu", "Yenice"],
    Kilis: ["Merkez", "Elbeyli", "Musabeyli", "Polateli"],
    Osmaniye: [
      "Bahçe",
      "Kadirli",
      "Merkez",
      "Düziçi",
      "Hasanbeyli",
      "Sumbas",
      "Toprakkale"
    ],
    Düzce: [
      "Akçakoca",
      "Merkez",
      "Yığılca",
      "Cumayeri",
      "Gölyaka",
      "Çilimli",
      "Gümüşova",
      "Kaynaşlı"
    ]
};

/* Test
var cities = [
  {"id":1,"name":"Adana"}
];
var countriesWithDistricts = {
  Adana: [
    "Aladağ",
    "Ceyhan"
  ],
}
*/

function statPath(path){  
  try {  
    return fs.statSync(path);  
  } catch (ex) {}  
  return false;
}
  
function sleep(ms){
  return Promise((resolve) => {
    setRimeout(resolve,ms);
  });
}

const nowTime = (i = 1) => {
  let dates = new Date();
  let year = dates.getFullYear();
  let month = String([dates.getMonth() + 1]).padStart(2, '0');
  let day = String(dates.getDate()).padStart(2, '0');
  let hour = String(dates.getHours()).padStart(2, '0');
  let minute = String(dates.getMinutes()).padStart(2, '0');
  let second = String(dates.getSeconds()).padStart(2, '0');
  if(i == 1 ) return day + `/` + month + `/` + year + ` ` + hour + `:` + minute + `:` + second
  else if(i == 2 ) return day + `/` + month
  else if(i == 3 ) return year +`_`+ month + `_` + day;
  else return day + "-" + month + "-" + year +"_" + hour + "-" + minute+ "-" + second
};

// Temp Data
let AllData = []
let AllDataCity = {}
let cityname = ''
let count = 0
let counter = setInterval(() => {count++;}, 1000)

let validCounter = 0
let invalidCounter = 0

function stopCounter() {
  clearInterval(counter)
}

const axios = require('axios');
const fs = require('fs');
const path = require('path');

fetchRetail = async (name,cityname) => {
  var exist = statPath(`Datas/${name}.json`)
  if(exist){
    return false
  }else{
    await axios.get(`https://www.sansgirisim.com/data/${name}.json`,{
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.54 Safari/537.36',
        //'User-Agent': 'PostmanRuntime/7.29.2',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Accept-Language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7,zh-CN;q=0.6,zh-TW;q=0.5,zh;q=0.4,ja;q=0.3,ko;q=0.2',
        'Content-Type': 'application/json',
      }
    }).then(result => {
      var data = JSON.stringify(result.data)
              .replaceAll('Retailer Number', 'BayiNo')
              .replaceAll('Branch Name', 'SubeAdi')
              .replaceAll('Address', 'Adres')
              .replaceAll('Province', 'Sehir')
              .replaceAll('District', 'Ilce')
              .replaceAll(',"Y":', ',"Enlem":')
              .replaceAll(',"X":', ',"Boylam":');

      if(result.status == 200){
        var exist = statPath(`Data/${name}.json`); 
        if(exist){
          return false
        }else{
          console.log(`[${nowTime(1)}] ${name} : ${result.status} - Başarıyla kayıt edildi!`);
          fs.writeFileSync(`Data/${name}.json`, data);
          validCounter++

          JSON.parse(data).map( (value,index,array) => {
            if(value != undefined){
              AllData.push(value)
              AllDataCity[cityname].push(value)
            }
          })
        }
      }else if(result.status == 404){
        var exist = statPath(`Data/${name}.json`); 
        if(exist){
          return false
        }else{
          console.log(`[${nowTime(1)}] ${name} : ${result.status} - Error - 72`);
          fs.writeFileSync(`Data/${name}.json`, JSON.stringify(data));
          invalidCounter++
        }
      }else{
        console.log(`[${nowTime(1)}] ${name} : ${result.status} - Error - 76`);
        fs.writeFileSync(`Data/${name}.json`, JSON.stringify(data));
        invalidCounter++
      }
    }).catch(function(error) {
      var exist = statPath(`Data/${name}.json`);
      if(exist){
        return false
      }else{
        console.log(`[${nowTime(1)}] ${name} : ${JSON.stringify(error?.response?.status)} / ${JSON.stringify(error?.response?.statusText)} - Error - Catch`);
        fs.writeFileSync(`Data/${name}.json`, JSON.stringify([]));
        invalidCounter++
      }
    });
  }
}

fetchData = async () => {
  // Data Cleared!
  fs.rmSync('Data',{ recursive: true, force: true }, () => {
    console.log(`[${nowTime(1)}] Data Folder Deleted!`);
  });
  // Check & Create Folder
  var DataFolder = statPath('Data')
  if(!DataFolder){
    await fs.mkdir('Data',{ recursive: true }, (err) => {
      if (err) throw err;
    });
    console.log(`[${nowTime(1)}] Data Folder Created!`);
  }
  console.log(`[${nowTime(1)}] Program Çalışmaya başladı`);
  for(let city in cities){
    cityname = `${cities[city].name.turkishUpperCase()}`
    AllDataCity[cityname] = []
    //console.log(cities[city].name)
    for(let i in countriesWithDistricts[cities[city].name]){
      var url = `https://www.sansgirisim.com/data/${cities[city].name.turkishUpperCase()}-${countriesWithDistricts[cities[city].name.split(',')][i].turkishUpperCase()}.json`
      
      var name = `${cities[city].name.turkishUpperCase()}-${countriesWithDistricts[cities[city].name.split(',')][i].turkishUpperCase()}`
      await fetchRetail(name,cityname)

      //console.log(url)
      //console.log('name : ', name, ' - url:',url)
      //fetchRetail(name);
      /*fs.appendFile(`list.txt`, url+'\n',"utf8", function(err) {
          if(err) {return console.log(err)}
      });*/
    }
  }
  fs.writeFileSync(`Datas.json`, JSON.stringify(AllData))
  fs.writeFileSync(`Datas_filter.json`, JSON.stringify(AllDataCity))
  stopCounter()
  console.log(`[${nowTime(1)}] Program Çalışması bitti - ${Math.floor(count/60)} dakika, ${(count%60)} saniye sürdü!`);
  console.log(`[${nowTime(1)}] ${validCounter} adet başarılı, ${invalidCounter} adet başarısız!`);
}
fetchData()