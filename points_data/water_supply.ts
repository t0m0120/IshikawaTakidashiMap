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
];

const formatted: Tree[] = water_supply.map(([name, text, lat, lng]) => ({
  name,
  text,
  lat,
  lng,
  key: JSON.stringify({name, lat, lng})
}));

export default formatted;