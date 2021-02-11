const cities = [
  {
    "id": 1,
    "name": "Adana",
    "region": "Akdeniz"
  },
  {
    "id": 2,
    "name": "Adıyaman",
    "region": "Güneydoğu Anadolu"
  },
  {
    "id": 3,
    "name": "Afyonkarahisar",
    "region": "Ege"
  },
  {
    "id": 4,
    "name": "Ağrı",
    "latitude": "39.7191",
    "longitude": "43.0503",
    "population": 547210,
    "region": "Doğu Anadolu"
  },
  {
    "id": 5,
    "name": "Amasya",
    "region": "Karadeniz"
  },
  {
    "id": 6,
    "name": "Ankara",
    "region": "İç Anadolu"
  },
  {
    "id": 7,
    "name": "Antalya",
    "region": "Akdeniz"
  },
  {
    "id": 8,
    "name": "Artvin",
    "region": "Karadeniz"
  },
  {
    "id": 9,
    "name": "Aydın",
    "region": "Ege"
  },
  {
    "id": 10,
    "name": "Balıkesir",
    "region": "Ege"
  },
  {
    "id": 11,
    "name": "Bilecik",
    "region": "Marmara"
  },
  {
    "id": 12,
    "name": "Bingöl",
    "region": "Doğu Anadolu"
  },
  {
    "id": 13,
    "name": "Bitlis",
    "region": "Doğu Anadolu"
  },
  {
    "id": 14,
    "name": "Bolu",
    "region": "Karadeniz"
  },
  {
    "id": 15,
    "name": "Burdur",
    "region": "Akdeniz"
  },
  {
    "id": 16,
    "name": "Bursa",
    "region": "Marmara"
  },
  {
    "id": 17,
    "name": "Çanakkale",
    "region": "Marmara"
  },
  {
    "id": 18,
    "name": "Çankırı",
    "region": "İç Anadolu"
  },
  {
    "id": 19,
    "name": "Çorum",
    "region": "Karadeniz"
  },
  {
    "id": 20,
    "name": "Denizli",
    "region": "Ege"
  },
  {
    "id": 21,
    "name": "Diyarbakır",
    "region": "Güneydoğu Anadolu"
  },
  {
    "id": 22,
    "name": "Edirne",
    "region": "Marmara"
  },
  {
    "id": 23,
    "name": "Elâzığ",
    "region": "Doğu Anadolu"
  },
  {
    "id": 24,
    "name": "Erzincan",
    "region": "Doğu Anadolu"
  },
  {
    "id": 25,
    "name": "Erzurum",
    "region": "Doğu Anadolu"
  },
  {
    "id": 26,
    "name": "Eskişehir",
    "region": "İç Anadolu"
  },
  {
    "id": 27,
    "name": "Gaziantep",
    "region": "Güneydoğu Anadolu"
  },
  {
    "id": 28,
    "name": "Giresun",
    "region": "Karadeniz"
  },
  {
    "id": 29,
    "name": "Gümüşhane",
    "region": "Karadeniz"
  },
  {
    "id": 30,
    "name": "Hakkâri",
    "region": "Doğu Anadolu"
  },
  {
    "id": 31,
    "name": "Hatay",
    "region": "Akdeniz"
  },
  {
    "id": 32,
    "name": "Isparta",
    "region": "Akdeniz"
  },
  {
    "id": 33,
    "name": "Mersin",
    "region": "Akdeniz"
  },
  {
    "id": 34,
    "name": "İstanbul",
    "region": "Marmara"
  },
  {
    "id": 35,
    "name": "İzmir",
    "region": "Ege"
  },
  {
    "id": 36,
    "name": "Kars",
    "region": "Doğu Anadolu"
  },
  {
    "id": 37,
    "name": "Kastamonu",
    "region": "Karadeniz"
  },
  {
    "id": 38,
    "name": "Kayseri",
    "region": "İç Anadolu"
  },
  {
    "id": 39,
    "name": "Kırklareli",
    "region": "Marmara"
  },
  {
    "id": 40,
    "name": "Kırşehir",
    "region": "İç Anadolu"
  },
  {
    "id": 41,
    "name": "Kocaeli",
    "region": "Marmara"
  },
  {
    "id": 42,
    "name": "Konya",
    "region": "İç Anadolu"
  },
  {
    "id": 43,
    "name": "Kütahya",
    "region": "Ege"
  },
  {
    "id": 44,
    "name": "Malatya",
    "region": "Doğu Anadolu"
  },
  {
    "id": 45,
    "name": "Manisa",
    "region": "Ege"
  },
  {
    "id": 46,
    "name": "Kahramanmaraş",
    "region": "Akdeniz"
  },
  {
    "id": 47,
    "name": "Mardin",
    "region": "Güneydoğu Anadolu"
  },
  {
    "id": 48,
    "name": "Muğla",
    "region": "Ege"
  },
  {
    "id": 49,
    "name": "Muş",
    "region": "Doğu Anadolu"
  },
  {
    "id": 50,
    "name": "Nevşehir",
    "region": "İç Anadolu"
  },
  {
    "id": 51,
    "name": "Niğde",
    "region": "İç Anadolu"
  },
  {
    "id": 52,
    "name": "Ordu",
    "region": "Karadeniz"
  },
  {
    "id": 53,
    "name": "Rize",
    "region": "Karadeniz"
  },
  {
    "id": 54,
    "name": "Sakarya",
    "region": "Marmara"
  },
  {
    "id": 55,
    "name": "Samsun",
    "region": "Karadeniz"
  },
  {
    "id": 56,
    "name": "Siirt",
    "region": "Güneydoğu Anadolu"
  },
  {
    "id": 57,
    "name": "Sinop",
    "region": "Karadeniz"
  },
  {
    "id": 58,
    "name": "Sivas",
    "region": "İç Anadolu"
  },
  {
    "id": 59,
    "name": "Tekirdağ",
    "region": "Marmara"
  },
  {
    "id": 60,
    "name": "Tokat",
    "region": "Karadeniz"
  },
  {
    "id": 61,
    "name": "Trabzon",
    "region": "Karadeniz"
  },
  {
    "id": 62,
    "name": "Tunceli",
    "region": "Doğu Anadolu"
  },
  {
    "id": 63,
    "name": "Şanlıurfa",
    "region": "Güneydoğu Anadolu"
  },
  {
    "id": 64,
    "name": "Uşak",
    "region": "Ege"
  },
  {
    "id": 65,
    "name": "Van",
    "region": "Doğu Anadolu"
  },
  {
    "id": 66,
    "name": "Yozgat",
    "region": "İç Anadolu"
  },
  {
    "id": 67,
    "name": "Zonguldak",
    "region": "Karadeniz"
  },
  {
    "id": 68,
    "name": "Aksaray",
    "region": "İç Anadolu"
  },
  {
    "id": 69,
    "name": "Bayburt",
    "region": "Karadeniz"
  },
  {
    "id": 70,
    "name": "Karaman",
    "region": "İç Anadolu"
  },
  {
    "id": 71,
    "name": "Kırıkkale",
    "region": "İç Anadolu"
  },
  {
    "id": 72,
    "name": "Batman",
    "region": "Güneydoğu Anadolu"
  },
  {
    "id": 73,
    "name": "Şırnak",
    "region": "Güneydoğu Anadolu"
  },
  {
    "id": 74,
    "name": "Bartın",
    "region": "Karadeniz"
  },
  {
    "id": 75,
    "name": "Ardahan",
    "region": "Doğu Anadolu"
  },
  {
    "id": 76,
    "name": "Iğdır",
    "region": "Doğu Anadolu"
  },
  {
    "id": 77,
    "name": "Yalova",
    "region": "Marmara"
  },
  {
    "id": 78,
    "name": "Karabük",
    "region": "Karadeniz"
  },
  {
    "id": 79,
    "name": "Kilis",
    "region": "Güneydoğu Anadolu"
  },
  {
    "id": 80,
    "name": "Osmaniye",
    "region": "Akdeniz"
  },
  {
    "id": 81,
    "name": "Düzce",
    "region": "Karadeniz"
  }
]

module.exports = cities