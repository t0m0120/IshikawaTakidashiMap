// Data source: https://open.toronto.ca/dataset/street-tree-data/

type RawSentou = [string, string, number, number];

type Tree = {
  key: string;
  name: string;
  text: string;
  lat: number;
  lng: number;
};

const sentou: RawSentou[] = [
  ['テルメ金沢', '10:00-11:00', 36.56982377268884, 136.60130156561607],
];

const formatted: Tree[] = sentou.map(([name, text, lat, lng]) => ({
  name,
  text,
  lat,
  lng,
  key: JSON.stringify({name, lat, lng})
}));

export default formatted;