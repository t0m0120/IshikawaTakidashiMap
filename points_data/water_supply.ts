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
  ['レクトピアパーク駐車場', '午後9時まで https://www.town.nakanoto.ishikawa.jp',36.96794491269307, 136.91102331641463],
  ['スポーツセンターろくせい', '午後9時まで https://www.town.nakanoto.ishikawa.jp',36.956813727210836, 136.86674832736838],
  ['すこやかセンター', '1月6日 午前8時から午後8時\nペットボトル配布、\nhttps://www.city.hakui.lg.jp/index.html',36.89804791279271, 136.79132244210948],
  ['羽咋中学校', '1月6日 午前8時から午5時\nペットボトル配布\nhttps://www.city.hakui.lg.jp/index.html',36.89142118719571, 136.77574187301445],
  ['邑知中学校', '1月6日の午前8時から午後5時\nペットボトル配布、 給水袋配布\nhttps://www.city.hakui.lg.jp/index.html',36.9055985349381, 136.8299927556026],
  // ['神子原公民館 ', '1月6日の午前8時から午後5時\nペットボトル配布、 給水袋配布\nhttps://www.city.hakui.lg.jp/index.html',36.9055985349381, 136.8299927556026],
  ['鹿島路公民館', '1月6日の午前8時から午後5時\nペットボトル配布、 給水袋配布\nhttps://www.city.hakui.lg.jp/index.html',36.935134285520085, 136.81223014232853],
  ['西北台小学校', '1月6日の午前8時から午後5時\nペットボトル配布、 給水袋配布\nhttps://www.city.hakui.lg.jp/index.html',36.935174372093165, 136.76266135930368],
  ['余喜公民館', '1月6日の午前8時から午後5時\nペットボトル配布、 給水袋配布\nhttps://www.city.hakui.lg.jp/index.html',36.931280581447446, 136.84581877301446],
  ['千路町会事務所 ', '1月6日の午前8時から午後5時\ 給水袋配布\nhttps://www.city.hakui.lg.jp/index.html',36.926080496719834, 136.80226976767577],

  // ['アクアパーク シ・オン', 'https://www.town.shika.lg.jp/jouhou/R6zishin/kyusuizyo-2_2.html',37.00759567491278, 136.7799815896793],
  ['能登中核工業団地コミュニティ施設', 'https://www.town.shika.lg.jp/',37.07123581930873, 136.75466346443628],
  ['富来活性化センター', 'https://www.town.shika.lg.jp/',37.14441072153195, 136.72524866279167],
  ['志賀町文化ホール', 'https://www.town.shika.lg.jp/',37.010173878187366, 136.77530820694412],
  
  ['アステラス', 'ポリタンクやペットボトルなどの給水ができるものをご持参ください。\nhttps://www.hodatsushimizu.jp/kinkyu/6196.html',36.81637120012523, 136.76403974598392],
  ['宝達志水病院', 'ポリタンクやペットボトルなどの給水ができるものをご持参ください。\nhttps://www.hodatsushimizu.jp/kinkyu/6196.html',36.86688794795771, 136.7948291649326],
  
  ['大崎公民館','1/5~ 24時間対応 https://www.city.kahoku.lg.jp/001/162/d010965.html',36.70528359532242, 136.6906252690079],
  // ['かほく市役所正面玄関駐車場', '7時から19時まで\nhttps://www.city.kahoku.lg.jp/001/162/d010942.html',36.71955900618487, 136.7068073588779],
  // ['七塚健康福祉センター', '7時から19時まで\nhttps://www.city.kahoku.lg.jp/001/162/d010942.html',36.734734177578154, 136.70073236083098],
  // ['高松小学校', '7時から19時まで\nhttps://www.city.kahoku.lg.jp/001/162/d010942.html',36.768913689705656, 136.7193933883574],
  // ['七塚小学校', '7時から19時まで\nhttps://www.city.kahoku.lg.jp/001/162/d010942.html',36.74820611359258, 136.7015716377858],
  // ['外日角小学校体育館側', '8時から20時まで\nhttps://www.city.kahoku.lg.jp/001/162/d010942.html',36.72365322293017, 136.6917557676373],
  
  // ['津幡町文化会館シグナス', '午前10時00分から午後5時00分\nhttps://www.town.tsubata.lg.jp/emergency_information/20240101saigai.html',36.663460642095444, 136.72731778844994],
  ['津幡町役場レコ裏（サイト確認必須）', '午後1時00分から午後8時00分\nhttps://www.town.tsubata.lg.jp/emergency_information/20240101saigai.html',36.6689763598988, 136.72908106852645],
  ['津幡運動公園駐車場', '午前9時30分から午後5時00分\nhttps://www.town.tsubata.lg.jp/emergency_information/20240101saigai.html',36.66519728497139, 136.7620299999969],
  ['刈安小学校 体育館前', '午前9時30分から午後5時00分\nhttps://www.town.tsubata.lg.jp/emergency_information/W012H0000204.html',36.66981876404328, 136.7881779375597],
  ['近懇館（緑が丘）', '午前9時30分から午後5時00分\nhttps://www.town.tsubata.lg.jp/emergency_information/20240101saigai.html',36.680160943462795, 136.74889605141394],


  ['内灘文化会館 正面玄関', '24時間開設\nhttps://www.town.uchinada.lg.jp/soshiki/soumu/15134.html',36.650868877161926, 136.6437295288237],
  ['清湖小学校 グラウンド', '24時間開設\nhttps://www.town.uchinada.lg.jp/soshiki/soumu/15134.html', 36.64098368256126, 136.6339917000024],
  ['内灘中学校 正面玄関', '1/5 午前7時から午後8時 給水車\nhttps://www.town.uchinada.lg.jp/soshiki/soumu/15134.html', 36.64557857538397, 136.6441918067455],
  ['宮坂公民館', '1/5 午前7時から午後8時 給水車\nhttps://www.town.uchinada.lg.jp/soshiki/soumu/15134.html', 36.665944940759786, 136.65672301720406],
  
  // ['白帆台小学校 体育館前', '1/3 午前7時から午後8時 給水車\nhttps://www.town.uchinada.lg.jp/soshiki/soumu/15134.html', 36.674026914477075, 136.65726855139073],
  ['西荒屋小学校', '1/3 午後3時~無くなるまで 給水車\nhttps://www.town.uchinada.lg.jp/soshiki/soumu/15134.html', 36.684683784672735, 136.6725578883636],
  ['西荒屋公民館', '1/3 午後3時~無くなるまで 給水車\nhttps://www.town.uchinada.lg.jp/soshiki/soumu/15134.html', 36.684683784672735, 136.6725578883636],
  
  ['七尾市立中島小学校', '1/7 9:30~ \nhttps://www.city.nanao.lg.jp/bosai/mail/20240104_3.html',37.121722300000016, 136.84271456509103],
  ['田鶴浜体育館', '1/7 9:30~ \nhttps://www.city.nanao.lg.jp/bosai/mail/20240104_3.html',37.06006223972143, 136.89276228841717],
  ['七尾城登山口駐車場', '1/7 9:30~ \nhttps://www.city.nanao.lg.jp/bosai/mail/20240104_3.html',37.02491115419428, 136.97456733157196],
  ['南大呑地区コミュニティセンター', '1/7 9:30~ \nhttps://www.city.nanao.lg.jp/bosai/mail/20240104_3.html',36.983009955946834, 137.0492335036926],
  ['旧能登島市民センター跡地', '1/7 9:30~ \nhttps://www.city.nanao.lg.jp/bosai/mail/20240104_3.html',36.983009955946834, 137.0492335036926],
  ['七尾東部中学校', '1/7 14~18:00 \nhttps://www.city.nanao.lg.jp/bosai/mail/20240104_9.html',37.02781690325878, 136.96924369155698],
]; 

const formatted: Tree[] = water_supply.map(([name, text, lat, lng]) => ({
  name,
  text,
  lat,
  lng,
  key: JSON.stringify({name, lat, lng})
}));

export default formatted;