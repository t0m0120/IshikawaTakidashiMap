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
  ['テルメ金沢', 'https://twitter.com/terume_kanazawa', 36.56982377268884, 136.60130156561607],
  ['松の湯', `1/3 ~ 1/5 13:00 - 19:00 \n https://www.instagram.com/matsu_sento`, 36.565212872319854, 136.6517657251374],
  ['pocapoca御経塚の湯', ' \n https://www.instagram.com/pocapocasento/',36.548895672080775, 136.6010080153412],
  ['ユーフォリア千里浜', '1/3無料開放されます。 \n https://www.instagram.com/euphoria_chirihama/',36.88962832985281, 136.7677724386353],
  ['和音の湯', '1/3 12:00 ~ 予定 \n https://www.facebook.com/waonnoyu',36.58975862678718, 136.66898781534118],
  ['金城温泉元湯','通常営業 \n https://twitter.com/kinjo_onsen',36.58037824133834, 136.5972617522164],
  ['ゴールドジムヴィテン野々市','1/2,3 無料開放 12:00 - 18:00 \n https://instagram.com/v10nonoichi', 36.53510282534515, 136.6168239767059],
  ['加賀ゆめのゆ','', 36.32431744822491, 136.4105824767059],
  ['満天の湯 白山インター店', 'https://page.line.me/797xsdvz',36.52590425512876, 136.58114643068234],
  ['ピュア涌泉寺温泉','10:00〜20:00（最終受付19:00まで）\nhttps://www.instagram.com/pyuayuusenzi21127/',36.392430908715276, 136.52479516931766],
  ['プライベートサウナ部 ととのう','要予約・お風呂のみ\nhttps://twitter.com/Diaztyuwan2932',36.55103299728419, 136.66665292513272],
  ['【公式】 金沢温泉 金石荘', '通常営業 11:00 ~ 22:45', 36.59839209221941, 136.5919659153412],
  ['勝崎の湯', 'https://katsuzakikan.com/public_bath/', 36.67357581891642, 136.7305061153412],
  ['極楽湯 野々市店', 'https://www.gokurakuyu.ne.jp/tempo/nonoichi/', 36.53489193554797, 136.61250393068232],
  ['しあわせの湯', '1/3より通常営業\nhttps://www.instagram.com/shiawasenoyu/', 36.53489193554797, 136.61250393068232],
  ['楽ちんの湯', 'http://www.rakuchinnoyu.com/',36.53701401871254, 136.67512823068233 ],
  ['ゆめのゆ', '1/3より一部営業再開\nhttps://yumenoyu.net/kanazawa/news/news/3901',36.58344715780954, 136.62031614602353 ]
];

const formatted: Tree[] = sentou.map(([name, text, lat, lng]) => ({
  name,
  text,
  lat,
  lng,
  key: JSON.stringify({name, lat, lng})
}));

export default formatted;