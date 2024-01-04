// Data source: https://open.toronto.ca/dataset/street-tree-data/

type RawSentou = [string, string, number, number];

type Tree = {
  key: string;
  name: string;
  text: string;
  lat: number;
  lng: number;
};

const supply: RawSentou[] = [
  ['七尾市役所', 'https://www.city.nanao.lg.jp/bosai/mail/20240104_4.html', 37.043071556614414, 136.96758679523793],
  ['七尾東部中学校', 'https://www.city.nanao.lg.jp/bosai/mail/20240104_4.html', 37.027878852072014, 136.969258293254],
  ['七尾市立和倉小学校', 'https://www.city.nanao.lg.jp/bosai/mail/20240104_4.html', 37.08307169263842, 136.91804133761894],
  ['七尾市北大呑地区コミュニティセンター', 'https://www.city.nanao.lg.jp/bosai/mail/20240104_4.html', 37.040807234143934, 137.04633274598115],
  ['田鶴浜地区コミュニティセンター', 'https://www.city.nanao.lg.jp/bosai/mail/20240104_4.html',37.05979241606568, 136.8952321173631],
  ['七尾市立中島小学校', 'https://www.city.nanao.lg.jp/bosai/mail/20240104_4.html',37.121722300000016, 136.84271456509103],
  ['七尾市 能登島地区コミュニティセンター', 'https://www.city.nanao.lg.jp/bosai/mail/20240104_4.html',37.12619904157633, 136.99657256564498],
];

const formatted: Tree[] = supply.map(([name, text, lat, lng]) => ({
  name,
  text,
  lat,
  lng,
  key: JSON.stringify({name, lat, lng})
}));

export default formatted;