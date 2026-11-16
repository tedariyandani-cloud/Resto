export type MenuCategory = 'cocktails' | 'food' | 'wine';

export interface MenuItem {
  id: string;
  name: string;
  price: string;
  tag: string;
  desc: string;
}

export interface SessionSchedule {
  id: string;
  days: string;
  title: string;
  hours: string;
  featured?: boolean;
}

export const LOUNGE_IMAGES = {
  heroSkyline: '/src/assets/images/hero_rooftop_skyline_1794844751041.jpg',
  craftCocktail: '/src/assets/images/experience_craft_cocktail_1794844751840.jpg',
  woodfiredDining: '/src/assets/images/experience_woodfired_dining_1794844752599.jpg',
  djLounge: '/src/assets/images/vibe_dj_lounge_1794844753943.jpg',
} as const;

export const VENUE_INFO = {
  brand: 'Cloud Lounge',
  domain: 'cloudloungejakarta.com',
  floor: '49th Floor',
  building: 'The Plaza Office Tower',
  addressLines: [
    'The Plaza Office Tower, 49th Floor',
    'Jl. M.H. Thamrin Kav. 28–30, Gondangdia',
    'Menteng, Jakarta Pusat 10350, Indonesia',
  ],
  hours: '18:00 – 02:00 WIB',
  whatsappDisplay: '+62 812-8250-4949',
  whatsappNumber: '6281282504949',
  emailReservation: 'reservation@cloudloungejakarta.com',
  emailInfo: 'info@cloudloungejakarta.com',
  mapsUrl:
    'https://www.google.com/maps/place/Cloud+Lounge+Jakarta+(Rooftop)/@-6.1927834,106.7847762,14z/data=!4m7!3m6!1s0x2e69f4213fa91b1d:0x8f490b554b1236d2!8m2!3d-6.1927858!4d106.8227712!15sCjJyZXN0b3JhbiBkaSBqYWthcnRhIHlhbmcgbWFzaWggYmVsdW0gcHVueWEgd2Vic2l0ZVo0IjJyZXN0b3JhbiBkaSBqYWthcnRhIHlhbmcgbWFzaWggYmVsdW0gcHVueWEgd2Vic2l0ZZIBCnJlc3RhdXJhbnSaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMnM0ZVZSSVNuZFZNRVp3VG10Tk1tRXpWbmhTUm14RVlURm9URlpJWXhBQuABAPoBBAgAEDk!16s%2Fg%2F11bbrjgb9p!18m1!1e1?entry=tts&g_ep=EgoyMDI2MTExMC4wIOC7DCoASAFQAw%3D%3D&skid=2dc00b1d-9342-468c-b672-c8487332e8da',
} as const;

export const MENU_TABS: { id: MenuCategory; label: string }[] = [
  { id: 'cocktails', label: 'Signature Cocktails' },
  { id: 'food', label: 'Global Bites & Wood-Fired Pizza' },
  { id: 'wine', label: 'Wine & Spirits' },
];

export const MENU_DATA: Record<MenuCategory, MenuItem[]> = {
  cocktails: [
    {
      id: 'cloud-negroni',
      name: 'Cloud 49 Signature Negroni',
      price: 'IDR 210K',
      tag: 'House Signature',
      desc: 'London dry gin infused with roasted cacao nibs, sweet vermouth, Campari, finished with aromatic orange cedar smoke.',
    },
    {
      id: 'thamrin-spritz',
      name: 'Thamrin Sunset Spritz',
      price: 'IDR 195K',
      tag: 'Refreshing',
      desc: 'Artisanal aperitivo, blood orange reduction, passionfruit essence, topped with chilled Prosecco and dehydrated citrus.',
    },
    {
      id: 'midnight-bundaran',
      name: 'Midnight Over Bundaran HI',
      price: 'IDR 225K',
      tag: 'Smoky & Bold',
      desc: '12-year highland single malt, spiced palm sugar, Angostura and black walnut bitters, served over a hand-carved crystal sphere.',
    },
    {
      id: 'botanical-martini',
      name: 'Botanical Sky Martini',
      price: 'IDR 205K',
      tag: 'Crisp',
      desc: 'Small-batch vodka, elderflower liqueur, crushed Indonesian lemongrass, kaffir lime leaf oil, and dry vermouth mist.',
    },
    {
      id: 'velvet-espresso',
      name: 'Velvet Espresso Noir',
      price: 'IDR 200K',
      tag: 'After-Dinner',
      desc: 'Aged dark rum, cold-brewed Toraja specialty espresso, coffee blossom liqueur, and salted vanilla bean crema.',
    },
    {
      id: 'golden-margarita',
      name: 'Golden Horizon Margarita',
      price: 'IDR 215K',
      tag: 'Spicy-Citrus',
      desc: 'Reposado tequila, wildflower honey, fresh calamansi juice, Cointreau, rimmed with smoked sea salt and chili dust.',
    },
  ],
  food: [
    {
      id: 'truffle-pizza',
      name: 'Truffle Mushroom Wood-Fired Pizza',
      price: 'IDR 245K',
      tag: "Chef's Signature",
      desc: '48-hour fermented sourdough crust, roasted wild forest mushrooms, fior di latte, shaved black truffle, and aged Parmesan.',
    },
    {
      id: 'wagyu-sliders',
      name: 'Wagyu Beef Sliders (3 pcs)',
      price: 'IDR 235K',
      tag: 'Guest Favorite',
      desc: 'Australian MB7+ Wagyu patties, caramelized shallots, aged gruyère, and black garlic aioli on toasted brioche buns.',
    },
    {
      id: 'burrata-pizza',
      name: 'Prosciutto & Burrata Wood-Fired Pizza',
      price: 'IDR 265K',
      tag: 'Artisanal Oven',
      desc: 'San Marzano tomato base, creamy Apulian burrata, thinly sliced beef prosciutto, wild rocket, and balsamic glaze.',
    },
    {
      id: 'crispy-calamari',
      name: 'Crispy Calamari & Sea Salt Pepper',
      price: 'IDR 165K',
      tag: 'Tapas',
      desc: "Tender squid rings flash-fried with Szechuan pepper, bird's eye chili, spring onions, and roasted garlic saffron dip.",
    },
    {
      id: 'hokkaido-scallops',
      name: 'Pan-Seared Hokkaido Scallops',
      price: 'IDR 285K',
      tag: 'Small Plate',
      desc: 'Caramelized jumbo scallops served over cauliflower silk purée, crispy beef pancetta crumbs, and herb brown butter.',
    },
    {
      id: 'truffle-fries',
      name: 'Truffle Parmesan Hand-Cut Fries',
      price: 'IDR 135K',
      tag: 'Bar Bites',
      desc: 'Double-cooked Russet potatoes tossed in white truffle oil, 24-month Parmigiano-Reggiano, and fresh rosemary.',
    },
  ],
  wine: [
    {
      id: 'dom-perignon',
      name: 'Dom Pérignon Vintage Brut',
      price: 'IDR 6.800K',
      tag: 'Champagne · Bottle',
      desc: 'Épernay, France. Luminous notes of white stone fruit, toasted brioche, and refined mineral tension.',
    },
    {
      id: 'cloudy-bay',
      name: 'Cloudy Bay Sauvignon Blanc',
      price: 'IDR 1.450K',
      tag: 'White Wine · Bottle',
      desc: 'Marlborough, New Zealand. Vibrant expressions of kaffir lime, white peach, and crisp tropical acidity.',
    },
    {
      id: 'penfolds-389',
      name: 'Penfolds Bin 389 Cabernet Shiraz',
      price: 'IDR 2.450K',
      tag: 'Red Wine · Bottle',
      desc: 'South Australia. Rich dark berry fruit, balanced oak spice, and velvety tannins ideal for evening pairings.',
    },
    {
      id: 'macallan-12',
      name: 'Macallan 12 Years Double Cask',
      price: 'IDR 3.600K',
      tag: 'Single Malt · Bottle',
      desc: 'Speyside, Scotland. Harmonious notes of honeyed citrus, ginger spice, and warm vanilla oak.',
    },
    {
      id: 'clase-azul',
      name: 'Clase Azul Reposado Tequila',
      price: 'IDR 5.900K',
      tag: 'Ultra-Premium · Bottle',
      desc: 'Jalisco, Mexico. Slow-cooked agave aged in oak barrels with silky hazelnut, vanilla, and clove undertones.',
    },
    {
      id: 'sommelier-glass',
      name: "Sommelier's Wine by the Glass",
      price: 'IDR 190K',
      tag: 'Red / White / Sparkling',
      desc: 'Curated rotating pour of Old and New World selections served at cellar temperature.',
    },
  ],
};

export const WEEKLY_SESSIONS: SessionSchedule[] = [
  {
    id: 'wed-thu',
    days: 'Wednesday & Thursday',
    title: 'Velvet Skyline & Jazztronica',
    hours: '20:00 – 01:00 WIB',
  },
  {
    id: 'fri-sat',
    days: 'Friday & Saturday',
    title: 'Cloud 49 High-Altitude Sessions',
    hours: '21:00 – 02:00 WIB',
    featured: true,
  },
  {
    id: 'sun-tue',
    days: 'Sunday – Tuesday',
    title: 'Golden Hour & Chill Lounge',
    hours: '18:00 – 00:30 WIB',
  },
];
