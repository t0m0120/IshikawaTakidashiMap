// Data source: https://open.toronto.ca/dataset/street-tree-data/

type RawSentou = [string, string, number, number];

type Tree = {
  key: string;
  name: string;
  text: string;
  lat: number;
  lng: number;
};

const water_supply: RawSentou[] = [
  ['旧越路小学校横', '午後9時まで https://www.town.nakanoto.ishikawa.jp/kinkyu/kyuusuijyojyouhou/8054.html',36.98067460147399, 136.92883384026175],
  ['羽咋市立羽咋中学校', '1月3日の午前7時から午後8時\nペットボトル1人1リットル配布\nhttps://www.city.hakui.lg.jp/important/14566.html',36.89142118719571, 136.77574187301445],
  ['すこやかセンター', '1月3日の午前7時から午後8時\nペットボトル1人1リットル配布\nhttps://www.city.hakui.lg.jp/important/14566.html',36.89804791279271, 136.79132244210948],
  ['邑知中学校 ', '1月3日の午前7時から午後8時\nペットボトル1人1リットル配布\nhttps://www.city.hakui.lg.jp/important/14566.html',36.9055985349381, 136.8299927556026],
  ['神子原公民館 ', '1月3日の午前7時から午後8時\nペットボトル1人1リットル配布 給水袋配布\nhttps://www.city.hakui.lg.jp/important/14566.html',36.9055985349381, 136.8299927556026],
  ['鹿島路公民館 ', '1月3日の午前7時から午後8時\nペットボトル1人1リットル配布 給水袋配布\nhttps://www.city.hakui.lg.jp/important/14566.html',36.935134285520085, 136.81223014232853],
  ['西北台小学校 ', '1月3日の午前7時から午後8時\nペットボトル1人1リットル配布 給水袋配布\nhttps://www.city.hakui.lg.jp/important/14566.html',36.935174372093165, 136.76266135930368],
  ['余喜公民館 ', '1月3日の午前7時から午後8時\nペットボトル1人1リットル配布 給水袋配布\nhttps://www.city.hakui.lg.jp/important/14566.html',36.931280581447446, 136.84581877301446],
  ['アクアパーク シ・オン', 'https://www.town.shika.lg.jp/jouhou/R6zishin/kyusuizyo-2_2.html',37.00759567491278, 136.7799815896793],
  ['富来活性化センター', 'https://www.town.shika.lg.jp/jouhou/R6zishin/kyusuizyo-2_2.html',37.14441072153195, 136.72524866279167],
]; 

const formatted: Tree[] = water_supply.map(([name, text, lat, lng]) => ({
  name,
  text,
  lat,
  lng,
  key: JSON.stringify({name, lat, lng})
}));

export default formatted;