// 名古屋駅を中心に設定
var map = L.map('map').setView([35.17114296971755, 136.88153690683527], 14);

// タイルレイヤーを追加
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  maxZoom: 19
}).addTo(map);

// マーカー情報
var locations = [
  {
    name: "ノリタケの森",
    lat: 35.1800142,
    lon: 136.8796498,
    image: "https://www.noritake.co.jp/upload/moriimage_languages/dd62fb5f6059af5a8d264b1d1274d719.jpg",
    url: "https://www.noritake.co.jp/mori/",
    description: "ノリタケの森は、陶器や食器で有名なノリタケが運営する複合施設で、ショップやカフェ、美術館などがあります。"
  },
  {
    name: "四間道の町並み",
    lat: 35.1760672,
    lon: 136.8901057,
    image: "https://www.aichi-now.jp/upload/spot_images/af3ebc7df9b47c5a76b97579be31b7a1.jpg",
    url: "https://www.city.nagoya.jp/",
    description: "四間道の町並みは、江戸時代の商家が立ち並ぶ歴史的エリアで、美しい建物が魅力の観光スポットです。"
  },
  {
    name: "名古屋市美術館",
    lat: 35.16403032391759,
    lon: 136.90105377289888,
    image: "https://art-museum.city.nagoya.jp/data/e9aa6ccf55f5cabe5f3b9dd94c290fcb.jpg",
    url: "https://www.art-museum.city.nagoya.jp/",
    description: "名古屋市美術館は、国内外の現代美術作品を展示する美術館で、定期的に企画展も開催されています。"
  },
  {
    name: "大須観音(真福寺宝生院)",
    lat: 35.1597046124812,
    lon: 136.89941865410714,
    image: "https://www.osu-kannon.jp/image/main_image.jpg",
    url: "https://www.osu-kannon.jp/",
    description: "大須観音は、真言宗の仏教寺院で、多くの参拝客が訪れる名古屋の歴史ある観光名所です。"
  }
];

// GeoJSON形式でマーカーを作成
var geojsonFeature = locations.map(location => ({
  "type": "Feature",
  "properties": {
    "popupContent": `
      <div>
        <h4>${location.name}</h4>
        <img src="${location.image}" alt="${location.name}" style="width:200px;height:auto;">
        <p>${location.description}</p>
        <p><a href="${location.url}" target="_blank">公式サイト</a></p>
      </div>
    `
  },
  "geometry": {
    "type": "Point",
    "coordinates": [location.lon, location.lat]
  }
}));

// ポップアップ設定
L.geoJson(geojsonFeature, {
  onEachFeature: function (feature, layer) {
    if (feature.properties && feature.properties.popupContent) {
      layer.bindPopup(feature.properties.popupContent);
    }
  }
}).addTo(map);
