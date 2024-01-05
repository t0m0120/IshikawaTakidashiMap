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
    ['珠洲市総合病院', '救急外来と薬対応のみ。緊急の患者は受け入れる\n https://www.city.suzu.lg.jp/site/suzuhp/', 37.4436315, 137.2680988],
    ['公立宇出津総合病院', '救急外来のみ。通院患者は薬対応と入院受け入れを実施。緊急の患者も受け入れる\n http://www.hospitalnet.jp/', 37.3084782, 137.1444082],
    ['恵寿総合病院', '通常通りの診療。放射線治療は除く\n https://www.keiju.co.jp/', 37.0448663, 136.9618009],
    ['公立能登総合病院', '原則薬対応のみ。小児科は診察実施。緊急の患者は受け入れる\n http://www.noto-hospital.nanao.ishikawa.jp/', 37.0450663, 136.9440171],
    ['国立病院機構七尾病院', '通院患者、入院患者のみ対応\n https://nanao.hosp.go.jp/', 37.0640018, 136.9415576],
    ['公立羽咋病院', '通常通りの診療\n http://www.hakuihp.jp/', 36.9010383, 136.7774262],
    ['町立富来病院', '原則薬対応のみ。緊急の患者は診療のみ対応\n https://www.town.shika.lg.jp/togihospital/index.html', 37.1373842, 136.7267881],
    ['町立宝達志水病院', '通常通りの診療\n http://hodatsushimizu-hp.jp/', 36.8669223, 136.7923721],
    ['河北中央病院', '通常通りの診療\n http://kahoku-hp.jp/', 36.6701862, 136.7343979],
    ['金沢医科大病院', '通常通りの診療\n http://www.kanazawa-med.ac.jp/~hospital/', 36.65772, 136.6439155],
];

const formatted: Tree[] = hospital.map(([name, text, lat, lng]) => ({
    name,
    text,
    lat,
    lng,
    key: JSON.stringify({ name, lat, lng })
}));

export default formatted;