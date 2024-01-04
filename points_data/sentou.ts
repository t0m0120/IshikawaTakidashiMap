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
  ['ゆめのゆ', '1/3より一部営業再開\nhttps://yumenoyu.net/kanazawa/news/news/3901',36.58344715780954, 136.62031614602353 ],
  ['れもん湯', '1/3 9:00 - 23:00 営業再開 給水可\nhttps://twitter.com/le_mo_nn_1986',36.5383696513043, 136.63992447616488],
  ['古墳の湯', '1/3 無料開放 10:00 - 21:00 \nhttps://www.hodatsushimizu.jp/kinkyu/5449.html',36.856050058616276, 136.81596775559456],
  ['里湯ちりはま', '1/3 無料開放 10:00 - 21:00 \nhttps://www.hodatsushimizu.jp/kinkyu/5449.html',36.83855141235715, 136.754046626765],
  ['宝湯', '1/3 無料開放 13:00 - 23:00 \nhttps://www.hodatsushimizu.jp/kinkyu/5449.html',36.84319145785191, 136.75952894731546],
  ['大和温泉', '1/3 14:00 - 23:00 \n水提供有り/容器持参\nhttps://twitter.com/sentoishikawa/status/1742418848467583396',36.57653069203912, 136.66488972883488],
  ['湯来楽 内灘店', '1/4 10:00 ~ \n営業再開\nhttps://yurara-uchinada.jp/news/1388/',36.63815957160948, 136.62351714110417],
  ['祥楽の湯 津幡店', '1/4 10:00 ~ \n1/3 12:00~21:00 1/4 10:00~23:00\nhttps://ynx-grp.jp/shoraku/tsubata/',36.65985179005068, 136.7269794131972],
  ['浅の川温泉湯楽', '1/4~ 通常営業\nhttps://www.yuraku-onsen.jp/',36.492345734385324, 136.7607986252231],
  ['松任海浜温泉【おつかりさま】', '1/4~ 10:00 営業再開予定\nhttps://twitter.com/mt_kaihin_onsen/',36.536027402012884, 136.53032454663432],
];

const toyama: RawSentou[] = [
  ['ファミリー銭湯くさじま', '1/4 通常営業\nhttps://www.instagram.com/fami_sen_kusajima',36.74643101737014, 137.21100053799086],
  ['越乃庭', '1/4~ 朝風呂 5:30-8:00 10:00 - 19:00\nhttps://twitter.com/koshinoniwa',36.80677250627114, 137.05081696407305],
  ['天然温泉 海王', '1/3~ 営業再開中\nhttps://www.instagram.com/tennenonsenkaiou',36.753283699395055, 137.08248603754797],
  ['民宿あおまさ', '1/4~ 温泉/食堂 無料提供\nhttps://twitter.com/chunbi_mu/status/1742543488221172060',36.844881114128974, 136.99738190003626],
  ['満天の湯 魚津店', '1/2~ 通常営業(8:00-23:00（最終受付 22:30)\nhttps://www.instagram.com/mantennoyu_uozu/',36.80462509447471, 137.40383987322383],
  ['FUROBAKKA', '1/2~ 通常営業10:00 ～ 23:00 (最終受付22:00)\nhttps://twitter.com/FUROBAKKA',36.878520117898226, 137.426570528835],
  ['太閤山温泉 太閤の湯', '1/2~ 通常営業(10:00-00:00（最終受付 23:00)\nhttps://twitter.com/taikounoyu',36.713418498149906, 137.09414895764814],
  ['スパ・アルプス', '1/1~ 食堂のみ\nhttps://twitter.com/spaalps',36.67682788586738, 137.2377213644148],
  ['荏原鉱泉', '1/3~ 15:00~ 開店\nhttps://twitter.com/tateyamakosen',36.696889846917436, 137.26572701778036],
  ['高原鉱泉', '1/2~ 14:00~ 開店\nhttps://twitter.com/takaharakousen',36.673725194939635, 137.24184216441725],
  ['川城鉱泉', '1/2~ 14:00~19:00 \nhttps://twitter.com/sento_kawashiro',36.673725194939635, 137.24184216441725],
]
const mergedArray: RawSentou[] = [...sentou, ...toyama];

const formatted: Tree[] = mergedArray.map(([name, text, lat, lng]) => ({
  name,
  text,
  lat,
  lng,
  key: JSON.stringify({name, lat, lng})
}));

export default formatted;