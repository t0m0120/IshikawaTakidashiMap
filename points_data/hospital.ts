// Data source: https://open.toronto.ca/dataset/street-tree-data/

type RawHospital = [string, string, number, number];

type Tree = {
    key: string;
    name: string;
    text: string;
    lat: number;
    lng: number;
};

const hospital: RawHospital[] = [
    ['珠洲市総合病院', '救急外来と薬対応のみ。緊急の患者は受け入れる\n https://www.city.suzu.lg.jp/site/suzuhp/', 37.443789117316065, 137.27064150976707],
    ['公立宇出津総合病院', '救急外来のみ。通院患者は薬対応と入院受け入れを実施。緊急の患者も受け入れる\n http://www.hospitalnet.jp/', 37.30855930749119, 137.14692945209137],
    ['恵寿総合病院', '通常通りの診療。放射線治療は除く\n https://www.keiju.co.jp/', 37.05155929644039, 136.96184508547594],
    ['公立能登総合病院', '原則薬対応のみ。小児科は診察実施。緊急の患者は受け入れる\n http://www.noto-hospital.nanao.ishikawa.jp/', 37.045216112300956, 136.9465919962556],
    ['国立病院機構七尾病院', '通院患者、入院患者のみ対応\n https://nanao.hosp.go.jp/', 37.06412589024922, 136.94406812324635],
    ['公立羽咋病院', '通常通りの診療\n http://www.hakuihp.jp/', 36.90114550654213, 136.77996890974478],
    ['町立富来病院', '原則薬対応のみ。緊急の患者は診療のみ対応\n https://www.town.shika.lg.jp/togihospital/index.html', 37.137559583329576, 136.72943809810428],
    ['町立宝達志水病院', '通常通りの診療\n http://hodatsushimizu-hp.jp/', 36.867132557018735, 136.7950006404235],
    ['河北中央病院', '通常通りの診療\n http://kahoku-hp.jp/', 36.67031955944672, 136.7368869655604],
    ['金沢医科大病院', '通常通りの診療\n http://www.kanazawa-med.ac.jp/~hospital/', 36.65793084321486, 136.64640456555992],
];

const formatted: Tree[] = hospital.map(([name, text, lat, lng]) => ({
    name,
    text,
    lat,
    lng,
    key: JSON.stringify({ name, lat, lng })
}));

export default formatted;