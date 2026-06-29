/**
 * Project North — Loey's Digital Routebook
 * Interactive route data, map, charts, gear checklist, and scroll animations
 *
 * === HOW TO CUSTOMIZE ===
 * 1. Edit the routeData array below to change days, distances, coordinates, etc.
 * 2. Edit gearData to change the checklist items
 * 3. Edit photoData to change photography log entries
 * Coordinates are [lat, lng] (latitude, longitude) for Leaflet.js / OpenStreetMap
 */

// ============================================
// 1. ROUTE DATA — 14 Days
// ============================================
const routeData = [
  {
    day: 1, type: 'walking',
    from: '重庆',
    to: '北碚区·澄江老渡口',
    province: '重庆',
    dist: 28, ascent: 320, hours: 6.5,
    startCoord: [29.810, 106.430], endCoord: [30.020, 106.380],
    accommodation: '澄江镇及周边乡镇旅馆',
    food: '北碚豆花、乡村家常菜',
    foodQuery: '北碚美食 澄江镇',
    stayQuery: '澄江镇住宿',
    risk: '走省道/乡道行进，部分路段车辆较多注意靠边行走，避开村镇集市时段',
    transitAdvice: '',
    photoTheme: '澄江老渡口·出发，嘉陵江晨光',
    photoTime: '清晨 / 傍晚',
    photoSuggestions: ['澄江老渡口', '乡道路牌', '出发合影'],
    weather: { temp: '22~30°C', condition: '多云转晴', wind: '微风' }
  },
  {
    day: 2, type: 'walking',
    from: '澄江镇北',
    to: '合川·钓鱼城景区',
    province: '重庆',
    dist: 30, ascent: 280, hours: 7,
    startCoord: [30.020, 106.380], endCoord: [30.280, 106.320],
    accommodation: '合川城区经济型酒店',
    food: '合川桃片、合川肉片、豆花饭',
    foodQuery: '合川美食 老街',
    stayQuery: '合川住宿',
    risk: '沿国道/省道行进，避开合川城区密集区域，注意工业园区货车',
    transitAdvice: '',
    photoTheme: '钓鱼城·嘉陵江峡谷、山城要塞',
    photoTime: '傍晚·黄金时刻',
    photoSuggestions: ['钓鱼城', '嘉陵江峡谷', '省道延伸'],
    weather: { temp: '23~31°C', condition: '晴', wind: '微风' }
  },
  {
    day: 3, type: 'walking',
    from: '合川城区',
    to: '潼南·大佛寺景区',
    province: '重庆',
    dist: 32, ascent: 260, hours: 7.5,
    startCoord: [30.280, 106.320], endCoord: [30.540, 106.250],
    accommodation: '潼南乡镇旅馆',
    food: '潼南凉粉、乡村餐馆',
    foodQuery: '潼南特色小吃',
    stayQuery: '潼南乡镇住宿',
    risk: '走乡道/村道行进，注意防晒，沿途补给点较少，避开人群密集区域',
    transitAdvice: '',
    photoTheme: '大佛寺·重庆最后一段丘陵、乡镇道路',
    photoTime: '清晨 / 午后',
    photoSuggestions: ['大佛寺', '村道田野', '重庆界碑'],
    weather: { temp: '23~32°C', condition: '晴转多云', wind: '1-2级' }
  },
  {
    day: 4, type: 'transit',
    from: '潼南/重庆边界',
    to: '南充·北湖公园',
    province: '重庆 → 四川',
    dist: 0, ascent: 0, hours: 0,
    startCoord: [30.540, 106.250], endCoord: [30.800, 106.080],
    accommodation: '南充市区酒店',
    food: '南充米粉、川北凉粉',
    foodQuery: '南充美食 特色',
    stayQuery: '南充住宿',
    risk: '提前购买车票确认班次，车站区域注意人群密集，随身证件分离存放',
    transitAdvice: '大巴/城际公交从潼南到南充，约2-3小时车程',
    photoTheme: '车窗风景·北湖公园接驳记录',
    photoTime: '全天',
    photoSuggestions: ['车站', '车窗风景', '北湖公园'],
    weather: { temp: '24~32°C', condition: '多云', wind: '微风' }
  },
  {
    day: 5, type: 'walking',
    from: '南充市郊区',
    to: '南部县·火峰山公园',
    province: '四川',
    dist: 34, ascent: 300, hours: 8,
    startCoord: [30.800, 106.080], endCoord: [31.080, 106.020],
    accommodation: '南部县乡镇旅馆',
    food: '南部肥肠、锅盔、川北凉粉',
    foodQuery: '南部县美食',
    stayQuery: '南部县住宿',
    risk: '沿省道/乡道行进，走川北乡村公路避开城镇，夏季注意防暑',
    transitAdvice: '',
    photoTheme: '火峰山·川北田野、乡村公路',
    photoTime: '清晨 / 傍晚',
    photoSuggestions: ['火峰山', '乡村公路', '川北民居'],
    weather: { temp: '23~31°C', condition: '多云', wind: '2-3级' }
  },
  {
    day: 6, type: 'walking',
    from: '南部县',
    to: '阆中·华光楼古街',
    province: '四川',
    dist: 32, ascent: 280, hours: 7.5,
    startCoord: [31.080, 106.020], endCoord: [31.360, 105.960],
    accommodation: '阆中古城周边住宿',
    food: '阆中牛肉面、张飞牛肉、保宁醋',
    foodQuery: '阆中美食 古城',
    stayQuery: '阆中住宿',
    risk: '沿省道/乡道行进，阆中为旅游城市，到达后避开古城游客密集区',
    transitAdvice: '',
    photoTheme: '华光楼·古城、嘉陵江畔',
    photoTime: '傍晚',
    photoSuggestions: ['华光楼', '古城街巷', '嘉陵江日落'],
    weather: { temp: '22~30°C', condition: '晴', wind: '微风' }
  },
  {
    day: 7, type: 'walking',
    from: '阆中市',
    to: '苍溪·红军渡纪念地',
    province: '四川',
    dist: 30, ascent: 350, hours: 7,
    startCoord: [31.360, 105.960], endCoord: [31.620, 105.880],
    accommodation: '苍溪县旅馆',
    food: '苍溪雪梨、川北农家菜',
    foodQuery: '苍溪美食',
    stayQuery: '苍溪住宿',
    risk: '走乡道/村道/山道行进，部分路段坡道增多注意膝盖保护',
    transitAdvice: '',
    photoTheme: '红军渡·川北河谷、历史印记',
    photoTime: '清晨 / 傍晚',
    photoSuggestions: ['红军渡', '河谷', '山村远眺'],
    weather: { temp: '21~29°C', condition: '多云转晴', wind: '2级' }
  },
  {
    day: 8, type: 'walking',
    from: '苍溪县',
    to: '昭化古城·葭萌关',
    province: '四川',
    dist: 28, ascent: 320, hours: 6.5,
    startCoord: [31.620, 105.880], endCoord: [31.880, 105.820],
    accommodation: '昭化古城客栈或广元市区酒店',
    food: '广元蒸凉面、剑门豆腐、昭化火锅',
    foodQuery: '广元美食 昭化',
    stayQuery: '广元昭化住宿',
    risk: '沿国道/省道行进，接近广元市区走乡道绕行避开快速路',
    transitAdvice: '',
    photoTheme: '葭萌关·古城、四川告别',
    photoTime: '清晨 / 傍晚',
    photoSuggestions: ['葭萌关', '古城墙', '四川告别'],
    weather: { temp: '21~29°C', condition: '晴', wind: '1-2级' }
  },
  {
    day: 9, type: 'transit',
    from: '广元市',
    to: '陇南·万象洞景区',
    province: '四川 → 甘肃',
    dist: 0, ascent: 0, hours: 0,
    startCoord: [31.880, 105.820], endCoord: [33.400, 104.920],
    accommodation: '陇南市区酒店',
    food: '陇南面食、洋芋搅团',
    foodQuery: '陇南美食',
    stayQuery: '陇南住宿',
    risk: '提前购买火车票，车站注意人群密集，进入甘肃后海拔升高注意适应',
    transitAdvice: '火车/动车从广元到陇南，约1.5-2小时',
    photoTheme: '进甘·万象洞、秦岭隧道群',
    photoTime: '全天',
    photoSuggestions: ['万象洞', '秦岭隧道', '进甘瞬间'],
    weather: { temp: '19~27°C', condition: '晴', wind: '2-3级' }
  },
  {
    day: 10, type: 'walking',
    from: '陇南市',
    to: '西和·仇池山',
    province: '甘肃',
    dist: 28, ascent: 400, hours: 7,
    startCoord: [33.400, 104.920], endCoord: [33.660, 104.860],
    accommodation: '西和县乡镇旅馆',
    food: '陇南手工面、土豆饼',
    foodQuery: '陇南特色 西和',
    stayQuery: '西和县住宿',
    risk: '沿省道/乡道/山道行进，海拔1000-1500m，注意高原适应初期',
    transitAdvice: '',
    photoTheme: '仇池山·黄土高原初现、山路',
    photoTime: '清晨 / 傍晚',
    photoSuggestions: ['仇池山', '黄土坡', '山路蜿蜒'],
    weather: { temp: '18~26°C', condition: '晴', wind: '3级' }
  },
  {
    day: 11, type: 'walking',
    from: '西和县',
    to: '礼县·祁山武侯祠',
    province: '甘肃',
    dist: 30, ascent: 380, hours: 7,
    startCoord: [33.660, 104.860], endCoord: [34.080, 104.550],
    accommodation: '礼县县城旅馆',
    food: '礼县面片、羊肉串',
    foodQuery: '礼县美食',
    stayQuery: '礼县住宿',
    risk: '走省道/乡道/山道行进，日温差大早晚保暖，避开沿途村庄集市',
    transitAdvice: '',
    photoTheme: '祁山·黄土丘陵、西北辽阔',
    photoTime: '清晨 / 傍晚',
    photoSuggestions: ['祁山武侯祠', '黄土高原', '村庄'],
    weather: { temp: '16~26°C', condition: '晴', wind: '3-4级' }
  },
  {
    day: 12, type: 'walking',
    from: '礼县',
    to: '甘谷·大像山石窟',
    province: '甘肃',
    dist: 28, ascent: 350, hours: 6.5,
    startCoord: [34.080, 104.550], endCoord: [34.500, 104.200],
    accommodation: '甘谷县城旅馆',
    food: '甘谷酥饼、浆水面',
    foodQuery: '甘谷美食',
    stayQuery: '甘谷住宿',
    risk: '沿国道/乡道/山道行进，部分路段风沙较大带好围巾口罩',
    transitAdvice: '',
    photoTheme: '大像山·石窟、黄土公路',
    photoTime: '清晨 / 傍晚',
    photoSuggestions: ['大像山', '无尽公路', '蓝天黄土'],
    weather: { temp: '16~27°C', condition: '晴转多云', wind: '3级' }
  },
  {
    day: 13, type: 'walking',
    from: '甘谷县',
    to: '榆中·兴隆山',
    province: '甘肃',
    dist: 26, ascent: 300, hours: 6,
    startCoord: [34.500, 104.200], endCoord: [35.100, 103.950],
    accommodation: '榆中县旅馆',
    food: '榆中浆水面、手抓羊肉',
    foodQuery: '榆中美食 兰州周边',
    stayQuery: '榆中住宿',
    risk: '走省道/乡道/村道行进，接近兰州走外围山路避开城市快速路',
    transitAdvice: '',
    photoTheme: '兴隆山·兰州渐变、山景',
    photoTime: '清晨 / 傍晚',
    photoSuggestions: ['兴隆山', '公路延伸', '抵达前奏'],
    weather: { temp: '17~28°C', condition: '多云', wind: '2-3级' }
  },
  {
    day: 14, type: 'walking',
    from: '榆中县',
    to: '兰州·中山桥',
    province: '甘肃',
    dist: 22, ascent: 200, hours: 5.5,
    startCoord: [35.100, 103.950], endCoord: [36.070, 103.780],
    accommodation: '七里河区酒店（已到达目的地）',
    food: '兰州牛肉面、灰豆子、甜醅子、酿皮',
    foodQuery: '兰州美食 七里河',
    stayQuery: '兰州住宿',
    risk: '最后一段走乡道/村道进入兰州，避开城区快速路和高架，沿外围进入',
    transitAdvice: '最后一天抵达日，预留充足拍照和休息时间',
    photoTheme: '抵达·中山桥、黄河铁桥',
    photoTime: '清晨 / 抵达时刻',
    photoSuggestions: ['中山桥', '黄河', '终点合影'],
    weather: { temp: '18~29°C', condition: '晴', wind: '2级' }
  }
];

// Total distance for progress calculation
const totalDist = routeData.reduce((sum, d) => sum + d.dist, 0);

// ============================================
// 2. GEAR DATA
// ============================================
const gearData = [
  {
    category: '一、徒步装备',
    items: ['30L 主背包', '徒步鞋', '手电筒', '水壶 / 水袋', '背包雨罩', '防晒帽', '墨镜']
  },
  {
    category: '二、衣物系统',
    items: ['硬壳 ×1', '软壳 ×1', '羽绒服 ×1', '防晒外套 ×1', '速干衣 ×2', '美利奴短袖 ×1', '硬壳裤 ×1', '速干软壳裤 ×1', '袜子', '内衣裤', '备用轻薄衣物']
  },
  {
    category: '三、电子设备',
    items: ['手机', '25000mAh 充电宝', '数据线 ×5', '多口充电器', '耳机']
  },
  {
    category: '四、摄影设备',
    items: ['10L 摄影设备包', 'DJI Air 3S (1电池)', 'DJI Action 4', 'DJI Pocket 3', '手机', 'Dazz', 'Blackmagic Cam', '存储卡', '读卡器', '镜头清洁布', '防水收纳袋']
  },
  {
    category: '五、应急药品',
    items: [
      { name: '碘伏棉签 ×6', link: 'https://www.xiaohongshu.com/search_result?keyword=碘伏+说明书' },

      { name: '红花油', link: 'https://www.xiaohongshu.com/search_result?keyword=红花油+说明书' },

      { name: '生理盐水10ml', link: 'https://www.xiaohongshu.com/search_result?keyword=生理盐水+说明书' },

      { name: '镇痛消炎膏 ×10', link: 'https://www.xiaohongshu.com/search_result?keyword=镇痛消炎膏+说明书' },

      { name: '速效救心丸', link: 'https://www.xiaohongshu.com/search_result?keyword=速效救心丸+说明书' },

      { name: '肠炎宁片 ×12', link: 'https://www.xiaohongshu.com/search_result?keyword=肠炎宁片+说明书' },

      { name: '扑尔敏', link: 'https://www.xiaohongshu.com/search_result?keyword=扑尔敏+说明书' },

      '急救毯 ×3',

      { name: '蒙脱石散 ×4', link: 'https://www.xiaohongshu.com/search_result?keyword=蒙脱石散+说明书' },

      { name: '999感冒灵 ×3', link: 'https://www.xiaohongshu.com/search_result?keyword=999感冒灵+说明书' },

      '电解质快充包30ml ×8',

      '葡萄糖饮品20ml ×10',

      '能量胶 ×5',

      '盐丸 ×10'
    ]
  },
  {
    category: '六、路餐',
    items: ['坚果厚切面包80g ×2', '馒头100g ×4', '压缩饼干45g ×4', '奥利奥 ×2包', '混合坚果80g', '鸡胸肉50g ×4', '卤牛肉50g ×4', '士力架 ×2']
  },
  {
    category: '七、充电与线材',
    items: ['25000mAh 充电宝', '数据线 ×5', '多口充电器', '无人机充电器', '相机充电线', '防水收纳袋']
  }
];

// ============================================
// 3. PHOTOGRAPHY LOG DATA
// ============================================
const photoData = [
  { day: 1, theme: '澄江老渡口·出发', time: '清晨·出发', tags: ['Photo', 'Video', 'Drone'], desc: '北碚澄江老渡口，出发时刻的晨光与嘉陵江' },
  { day: 2, theme: '钓鱼城·嘉陵江要塞', time: '傍晚·黄金时刻', tags: ['Photo', 'Drone'], desc: '合川钓鱼城，嘉陵江环绕的南宋古战场' },
  { day: 3, theme: '潼南·大佛寺告别', time: '清晨·薄雾', tags: ['Photo', 'Video'], desc: '潼南大佛寺，离开重庆前的最后一段丘陵' },
  { day: 4, theme: '南充·北湖转换', time: '全天·旅拍', tags: ['Photo', 'Video'], desc: '公共交通接驳至南充，北湖公园闲步' },
  { day: 5, theme: '火峰山·川北田野', time: '清晨·出发', tags: ['Photo', 'Drone'], desc: '南部县火峰山，川北田野与乡村公路' },
  { day: 6, theme: '华光楼·阆中古城', time: '傍晚·日落', tags: ['Photo', 'Video'], desc: '阆中华光楼古街，嘉陵江畔的古城日落' },
  { day: 7, theme: '红军渡·苍溪河谷', time: '清晨·顺光', tags: ['Photo', 'Drone'], desc: '苍溪红军渡纪念地，川北河谷与历史印记' },
  { day: 8, theme: '葭萌关·昭化终章', time: '傍晚·抵达', tags: ['Photo', 'Video'], desc: '昭化古城葭萌关，四川段的最后告别' },
  { day: 9, theme: '万象洞·进甘记录', time: '全天·记录', tags: ['Photo', 'Video'], desc: '火车入甘，陇南万象洞的地貌奇观' },
  { day: 10, theme: '仇池山·黄土初现', time: '清晨·顺光', tags: ['Photo', 'Drone'], desc: '西和仇池山，黄土高原的初印象' },
  { day: 11, theme: '祁山·武侯祠', time: '傍晚·黄金时刻', tags: ['Photo', 'Video'], desc: '礼县祁山武侯祠，三国古战场与西北辽阔' },
  { day: 12, theme: '大像山·石窟公路', time: '清晨·出发', tags: ['Photo', 'Drone'], desc: '甘谷大像山石窟，千年石刻与黄土公路' },
  { day: 13, theme: '兴隆山·抵达前奏', time: '傍晚·日落', tags: ['Photo', 'Video'], desc: '榆中兴隆山，接近兰州的最后一段山景' },
  { day: 14, theme: '中山桥·黄河抵达', time: '抵达时刻', tags: ['Photo', 'Video', 'Drone'], desc: '终点兰州中山桥，黄河铁桥下的抵达瞬间' }
];

// ============================================
// 4. MAP INITIALIZATION
// ============================================
let map, gpsPolyline, dayPolylines = [], dayMarkers = [];
let currentHighlight = -1;

function initMap() {
  // Center map between Chongqing and Lanzhou
  map = L.map('routeMap', {
    center: [33.0, 105.2],
    zoom: 6,
    zoomControl: true,
    scrollWheelZoom: true
  });

  // OpenStreetMap tile layer
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>',
    maxZoom: 18
  }).addTo(map);

  // Build route lines
  buildRouteLines();

  // Fit bounds to show entire route
  const allCoords = routeData.filter(d => d.type === 'walking').flatMap(d => [d.startCoord, d.endCoord]);
  map.fitBounds(allCoords, { padding: [40, 40] });
}

function buildRouteLines() {
  routeData.forEach((day, idx) => {
    const isWalking = day.type === 'walking';
    const coords = isWalking ? [day.startCoord, day.endCoord] : [day.startCoord, day.endCoord];

    // Polyline style: walking = solid, transit = dashed
    const polyline = L.polyline(coords, {
      color: isWalking ? '#D4763A' : '#A0845C',
      weight: isWalking ? 3 : 2,
      opacity: 0.3,
      dashArray: isWalking ? null : '8, 8'
    }).addTo(map);
    dayPolylines.push(polyline);

    // Start marker
    const markerIcon = L.divIcon({
      className: 'custom-marker',
      html: `<div style="width:10px;height:10px;border-radius:50%;background:${isWalking?'#2C3E2D':'#A0845C'};border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,0.2)"></div>`,
      iconSize: [10, 10],
      iconAnchor: [5, 5]
    });

    const marker = L.marker(day.startCoord, { icon: markerIcon }).addTo(map);
    marker.bindPopup(`
      <strong>Day ${day.day} ${isWalking ? '🚶' : '🚌'}</strong>
      ${day.from} → ${day.to}<br>
      ${isWalking ? day.dist + 'km · ' + day.province : day.province}
    `);
    dayMarkers.push(marker);

    // End marker for the last day
    if (idx === routeData.length - 1) {
      const endIcon = L.divIcon({
        className: 'custom-marker',
        html: `<div style="width:14px;height:14px;border-radius:50%;background:#D4763A;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,0.2)"></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7]
      });
      const endMarker = L.marker(day.endCoord, { icon: endIcon }).addTo(map);
      endMarker.bindPopup(`<strong>🏁 终点</strong><br>兰州市七里河区`);
    }
  });
}

// ============================================
// 5. HIGHLIGHT DAY ON MAP
// ============================================
function highlightDay(index) {
  if (index === currentHighlight) return;
  currentHighlight = index;

  dayPolylines.forEach((line, i) => {
    if (i === index) {
      line.setStyle({ opacity: 1, weight: routeData[i].type === 'walking' ? 4 : 3 });
    } else if (i < index) {
      line.setStyle({ opacity: 0.5, weight: routeData[i].type === 'walking' ? 2.5 : 2 });
    } else {
      line.setStyle({ opacity: 0.2, weight: routeData[i].type === 'walking' ? 2 : 1.5 });
    }
  });

  // Center map on the highlighted day
  if (index >= 0 && index < routeData.length) {
    const day = routeData[index];
    const midLat = (day.startCoord[0] + day.endCoord[0]) / 2;
    const midLng = (day.startCoord[1] + day.endCoord[1]) / 2;
    map.setView([midLat, midLng], map.getZoom(), { animate: true, duration: 0.5 });
  }
}

// ============================================
// 6. DAILY ITINERARY CARDS
// ============================================


// ============================================
// INTERACTIVE EFFECTS - Particle Network, Mouse, Tilt
// ============================================

// --- Particle Network Background ---
let particleAnimId = null;
function initParticleNetwork() {
  if (window.innerWidth < 360) return;
  const canvas = document.createElement('canvas');
  canvas.id = 'particleCanvas';
  document.body.prepend(canvas);
  const ctx = canvas.getContext('2d');
  let particles = [];
  const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;
  const COUNT = isMobile ? 35 : 80;
  const CONNECT_DIST = 150;
  
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  
  for (let i = 0; i < COUNT; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 0.5
    });
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
      
      // Draw connections
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < CONNECT_DIST) {
          const alpha = 1 - dist / CONNECT_DIST;
          ctx.strokeStyle = `rgba(255,45,120,${alpha * 0.12})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
      
      // Draw particle
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
      gradient.addColorStop(0, 'rgba(255,45,120,0.6)');
      gradient.addColorStop(1, 'rgba(255,45,120,0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = 'rgba(200,200,212,0.4)';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    
    particleAnimId = requestAnimationFrame(animate);
  }
  animate();
}

// --- Mouse Cursor Glow ---
let cursorGlow = null;
function initMouseCursor() {
  cursorGlow = document.createElement('div');
  cursorGlow.style.cssText = 'position:fixed;width:300px;height:300px;border-radius:50%;pointer-events:none;z-index:9999;background:radial-gradient(circle,rgba(139,92,246,0.06),transparent 70%);transform:translate(-50%,-50%);transition:opacity 0.3s ease;opacity:0;';
  document.body.appendChild(cursorGlow);
  
  let mouseX = -500, mouseY = -500;
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorGlow.style.opacity = '1';
    cursorGlow.style.left = mouseX + 'px';
    cursorGlow.style.top = mouseY + 'px';
  });
  document.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
  });
  // Also glow with cyan on interactive elements
  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('a, button, .day-card, .stat-card, .photo-card, .food-card, .safety-item');
    if (target) {
      cursorGlow.style.background = 'radial-gradient(circle,rgba(0,240,255,0.08),transparent 70%)';
      cursorGlow.style.width = '200px';
      cursorGlow.style.height = '200px';
    }
  });
  document.addEventListener('mouseout', (e) => {
    const target = e.target.closest('a, button, .day-card, .stat-card, .photo-card, .food-card, .safety-item');
    if (target) {
      cursorGlow.style.background = 'radial-gradient(circle,rgba(139,92,246,0.06),transparent 70%)';
      cursorGlow.style.width = '300px';
      cursorGlow.style.height = '300px';
    }
  });
}

// --- Touch Feedback (Mobile) ---
function initTouchFeedback() {
  if (!('ontouchstart' in window)) return;
  document.querySelectorAll('.day-card, .stat-card, .photo-card, .food-card').forEach(el => {
    el.addEventListener('touchstart', () => { el.style.transform = 'scale(0.98)'; });
    el.addEventListener('touchend', () => { el.style.transform = ''; });
  });
}

// --- 3D Card Tilt ---
function initCardTilt() {
  if ('ontouchstart' in window) return;
  const cards = document.querySelectorAll('.day-card, .stat-card, .photo-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

function renderItinerary() {
  const container = document.getElementById('itineraryList');
  let cumDist = 0;

  routeData.forEach((day, idx) => {
    cumDist += day.dist;
    const pct = totalDist > 0 ? Math.round((cumDist / totalDist) * 100) : 0;
    const remaining = totalDist - cumDist;

    const isWalking = day.type === 'walking';

    // External link helpers
    const startStr = `${day.startCoord[1].toFixed(4)},${day.startCoord[0].toFixed(4)}`;
    const endStr = `${day.endCoord[1].toFixed(4)},${day.endCoord[0].toFixed(4)}`;
    const amapUrl = `https://uri.amap.com/navigation?from=${startStr}&to=${endStr}&mode=${isWalking ? 'walking' : 'bus'}`;
    const stayUrl = `https://m.ctrip.com/webapp/hotel/hotelsearch?keyword=${encodeURIComponent(day.stayQuery)}`;
    const foodUrl = `https://i.meituan.com/s/${encodeURIComponent(day.foodQuery)}`;
    const windyUrl = `https://www.windy.com/?lat=${day.startCoord[0]}&lon=${day.startCoord[1]}&zoom=10`;

    // Transit buttons
    const transitBtns = day.type === 'transit' ? `
      <button class="day-btn transit-btn" onclick="window.open('${amapUrl}','_blank')">📍 高德（公交路线）</button>
      <button class="day-btn transit-btn" onclick="window.open('https://www.12306.cn','_blank')">🚄 查询12306</button>
      <button class="day-btn transit-btn" onclick="window.open('https://flights.ctrip.com/train','_blank')">🚆 查询携程火车票</button>
      <button class="day-btn transit-btn" onclick="window.open('https://bus.ctrip.com','_blank')">🚌 查询汽车票</button>
    ` : '';

    const card = document.createElement('div');
    card.className = 'day-card';
    card.dataset.day = day.day;
    card.innerHTML = `
      <div class="day-header">
        <span class="day-num">Day ${day.day}</span>
        <span class="day-badge ${isWalking ? 'walking' : 'transit'}">${isWalking ? 'Walking Day' : 'Transit Day'}</span>
      </div>
      <div class="day-route">
        ${day.from}<br>
        <span style="color:#A0845C">↓</span> ${day.to}
      </div>
      ${isWalking ? `
      <div class="day-stats">
        <div class="day-stat"><div class="day-stat-label">距离</div><div class="day-stat-value">${day.dist} km</div></div>
        <div class="day-stat"><div class="day-stat-label">预计爬升</div><div class="day-stat-value">${day.ascent} m</div></div>
        <div class="day-stat"><div class="day-stat-label">预计时间</div><div class="day-stat-value">${day.hours} h</div></div>
      </div>
      <div class="day-details">
        <div class="day-detail-item"><strong>省份：</strong>${day.province}</div>
        <div class="day-detail-item"><strong>累计：</strong>${cumDist} km (${pct}%) · <strong>剩余：</strong>${remaining} km</div>
        <div class="day-detail-item"><strong>住宿建议：</strong>${day.accommodation}</div>
        <div class="day-detail-item"><strong>美食搜索：</strong>${day.food}</div>
        <div class="day-detail-item"><strong>路线风险：</strong>${day.risk}</div>
        ${day.transitAdvice ? `<div class="day-detail-item"><strong>交通建议：</strong>${day.transitAdvice}</div>` : ''}
      </div>
      <div class="day-weather">
        <div class="day-weather-item"><strong>🌡 气温</strong> ${day.weather.temp}</div>
        <div class="day-weather-item"><strong>🌤 天气</strong> ${day.weather.condition}</div>
        <div class="day-weather-item"><strong>💨 风力</strong> ${day.weather.wind}</div>
      </div>
      ` : `
      <div class="day-details">
        <div class="day-detail-item"><strong>接驳路线：</strong>${day.from}</div>
        <div class="day-detail-item"><strong>交通建议：</strong>${day.transitAdvice}</div>
        <div class="day-detail-item"><strong>住宿建议：</strong>${day.accommodation}</div>
        <div class="day-detail-item"><strong>风险提示：</strong>${day.risk}</div>
      </div>
      <div class="day-weather">
        <div class="day-weather-item"><strong>🌡 气温</strong> ${day.weather.temp}</div>
        <div class="day-weather-item"><strong>🌤 天气</strong> ${day.weather.condition}</div>
      </div>
      `}
      <div class="day-buttons">
        <button class="day-btn" onclick="window.open('${amapUrl}','_blank')">📍 高德地图</button>
        <button class="day-btn" onclick="window.open('${stayUrl}','_blank')">🏠 查住宿</button>
        <button class="day-btn" onclick="window.open('${foodUrl}','_blank')">🍜 查美食</button>
        <button class="day-btn" onclick="window.open('${windyUrl}','_blank')">🌤 Windy</button>
        ${transitBtns}
      </div>
    `;
    container.appendChild(card);
  });
}

// ============================================
// 7. SCROLL-BASED MAP HIGHLIGHT
// ============================================
function bindScrollHighlight() {
  const cards = document.querySelectorAll('.day-card');
  if (!cards.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const dayNum = parseInt(entry.target.dataset.day);
        const idx = dayNum - 1;
        if (idx >= 0 && idx < routeData.length) {
          highlightDay(idx);
          // Highlight the card
          cards.forEach(c => c.classList.remove('highlight'));
          entry.target.classList.add('highlight');
        }
      }
    });
  }, { threshold: 0.3, rootMargin: '-80px 0px -40px 0px' });

  cards.forEach(card => observer.observe(card));

  // Also update progress bar on scroll
  window.addEventListener('scroll', updateProgressOnScroll);
}

// ============================================

// 7b. GEO-LOCATION PROGRESS (auto-detect your position on the route)
// ============================================
function initGeoProgress() {
  const cached = localStorage.getItem("loey_geo_progress");
  if (cached) {
    try {
      const p = JSON.parse(cached);
      if (p.timestamp && Date.now() - p.timestamp < 86400000) { // cache for 24h
        applyGeoProgress(p.pct);
        return;
      }
    } catch(e) {}
  }
  if (!navigator.geolocation) return;
  navigator.geolocation.getCurrentPosition(
    function(pos) {
      const userLat = pos.coords.latitude;
      const userLng = pos.coords.longitude;
      const pct = calcRouteProgress(userLat, userLng);
      localStorage.setItem("loey_geo_progress", JSON.stringify({ pct: pct, timestamp: Date.now() }));
      applyGeoProgress(pct);
    },
    function() {}, // permission denied or error, use scroll-based instead
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 }
  );
}

function calcRouteProgress(lat, lng) {
  const WALKING = routeData.filter(d => d.type === "walking");
  if (!WALKING.length) return 0;
  const totalDist = WALKING.reduce((s, d) => s + d.dist, 0);
  let bestSeg = 0, bestDist = Infinity, cumBefore = 0;
  let cum = 0;
  for (let i = 0; i < WALKING.length; i++) {
    const seg = WALKING[i];
    // Distance from user to this segment's start point
    const d = geoDist(lat, lng, seg.startCoord[0], seg.startCoord[1]);
    if (d < bestDist) { bestDist = d; bestSeg = i; cumBefore = cum; }
    cum += seg.dist;
  }
  // Also check end of last segment
  const last = WALKING[WALKING.length - 1];
  const dEnd = geoDist(lat, lng, last.endCoord[0], last.endCoord[1]);
  if (dEnd < bestDist) { bestDist = dEnd; bestSeg = WALKING.length; cumBefore = totalDist; }

  // Threshold: if within 15km of a segment, consider user has completed up to that segment
  // Check if close to any segment start point
  for (let i = 0; i < WALKING.length; i++) {
    const seg = WALKING[i];
    const dStart = geoDist(lat, lng, seg.startCoord[0], seg.startCoord[1]);
    if (dStart < 15) {
      cumBefore = i > 0 ? WALKING.slice(0, i).reduce((s, d) => s + d.dist, 0) : 0;
      break;
    }
    const dEnd = geoDist(lat, lng, seg.endCoord[0], seg.endCoord[1]);
    if (dEnd < 15) {
      cumBefore = WALKING.slice(0, i + 1).reduce((s, d) => s + d.dist, 0);
      break;
    }
  }

  if (bestDist > 100) return 0; // too far from route, likely not on trail
  return Math.round((cumBefore / totalDist) * 100);
}

function geoDist(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function applyGeoProgress(pct) {
  const bar = document.getElementById("progressFill");
  const comp = document.getElementById("progressCompleted");
  const compKm = document.getElementById("progressCompletedKm");
  const remain = document.getElementById("progressRemainingKm");
  if (!bar || !comp) return;
  const total = routeData.reduce((s, d) => s + d.dist, 0);
  const doneKm = Math.round((pct / 100) * total);
  bar.style.width = pct + "%";
  comp.textContent = pct;
  compKm.textContent = doneKm;
  remain.textContent = total - doneKm;
  document.querySelectorAll(".progress-milestones span").forEach(function(el) {
    el.classList.toggle("active", parseFloat(el.dataset.pct) <= pct);
  });
}

// 8. PROGRESS BAR
// ============================================
function updateProgressOnScroll() {
  const itinerarySection = document.getElementById('itinerary');
  const cards = document.querySelectorAll('.day-card');
  if (!cards.length) return;

  const scrollTop = window.scrollY;
  const sectionTop = itinerarySection.offsetTop;
  const sectionHeight = itinerarySection.offsetHeight;
  const scrollPct = Math.max(0, Math.min(100, ((scrollTop - sectionTop + 200) / (sectionHeight - 400)) * 100));

  // Calculate progress based on visible cards
  let maxVisibleDay = 0;
  let maxVisibleDist = 0;
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const dayNum = parseInt(card.dataset.day);
    if (rect.top < window.innerHeight * 0.7) {
      maxVisibleDay = Math.max(maxVisibleDay, dayNum);
    }
  });

  // Calculate cumulative distance up to maxVisibleDay
  let cum = 0;
  routeData.forEach(d => {
    if (d.day <= maxVisibleDay) cum += d.dist;
  });

  const pct = totalDist > 0 ? Math.round((cum / totalDist) * 100) : 0;
  const remaining = Math.max(0, totalDist - cum);

  document.getElementById('progressFill').style.width = Math.min(pct, 100) + '%';
  document.getElementById('progressCompleted').textContent = pct;
  document.getElementById('progressCompletedKm').textContent = cum;
  document.getElementById('progressRemainingKm').textContent = remaining;

  // Update milestones
  document.querySelectorAll('.progress-milestones span').forEach(el => {
    const pctVal = parseInt(el.dataset.pct);
    el.classList.toggle('active', pct >= pctVal);
  });
}

// ============================================
// 9. CHARTS
// ============================================
function initCharts() {
  const walkingDays = routeData.filter(d => d.type === 'walking');
  const transitDays = routeData.filter(d => d.type === 'transit');
  const labels = routeData.map(d => `Day ${d.day}`);
  const dists = routeData.map(d => d.dist);
  const ascents = routeData.map(d => d.ascent);

  // Cumulative distance
  let cum = 0;
  const cumDists = routeData.map(d => { cum += d.dist; return cum; });

  // Elevation (simulated cumulative elevation change)
  let elev = 400; // Start elevation ~400m (Chongqing)
  const elevData = routeData.map(d => {
    if (d.type === 'transit') {
      // Simulate elevation jump for transit
      if (d.day === 4) elev = 500;
      else if (d.day === 9) elev = 1000;
      return elev;
    }
    elev += (d.ascent * 0.3);
    return Math.round(elev);
  });

  // --- Distance Bar Chart ---
  new Chart(document.getElementById('distChart'), {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: '距离 (km)',
        data: dists,
        backgroundColor: dists.map(d => d > 0 ? 'rgba(255,45,120,0.4)' : 'rgba(139,92,246,0.3)'),
        borderColor: dists.map(d => d > 0 ? '#ff2d78' : '#8b5cf6'),
        borderWidth: 1,
        borderRadius: 4
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.04)' } },
        x: { grid: { display: false } }
      }
    }
  });

  // --- Cumulative Progress Chart ---
  new Chart(document.getElementById('cumChart'), {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: '累计距离 (km)',
        data: cumDists,
        borderColor: '#00f0ff',
        backgroundColor: 'rgba(0,240,255,0.05)',
        fill: true,
        tension: 0.3,
        pointBackgroundColor: '#00f0ff',
        pointRadius: 3
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.04)' } },
        x: { grid: { display: false } }
      }
    }
  });

  // --- Walking vs Transit Pie ---
  new Chart(document.getElementById('pieChart'), {
    type: 'doughnut',
    data: {
      labels: [`徒步日 (${walkingDays.length}天)`, `交通日 (${transitDays.length}天)`],
      datasets: [{
        data: [walkingDays.length, transitDays.length],
        backgroundColor: ['#ff2d78', '#8b5cf6'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { padding: 16, font: { size: 11 }, color: 'rgba(200,200,212,0.5)' }
        }
      }
    }
  });

  // --- Elevation Chart ---
  new Chart(document.getElementById('elevChart'), {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: '预计海拔 (m)',
        data: elevData,
        borderColor: '#8b5cf6',
        backgroundColor: 'rgba(139,92,246,0.05)',
        fill: true,
        tension: 0.3,
        pointBackgroundColor: '#8b5cf6',
        pointRadius: 3
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: false, grid: { color: 'rgba(255,255,255,0.04)' } },
        x: { grid: { display: false } }
      }
    }
  });
}

// ============================================
// 10. GEAR CHECKLIST (with localStorage)
// ============================================
function renderGear() {
  const container = document.getElementById('gearContainer');
  const storageKey = 'projectNorth_gear';

  // Load saved state
  let savedState = {};
  try { savedState = JSON.parse(localStorage.getItem(storageKey)) || {}; } catch(e) {}

  gearData.forEach((cat, catIdx) => {
    const div = document.createElement('div');
    div.className = 'gear-category open';

    let bodyHtml = '';
 cat.items.forEach((item, itemIdx) => {
     const id = `gear-${catIdx}-${itemIdx}`;
     const checked = savedState[id] || false;
      const hasLink = typeof item === 'object' && item.link;
      const label = hasLink ? `<a href="${item.link}" target="_blank" rel="noopener" class="gear-drug-link">${item.name}</a>` : item;
     bodyHtml += `
       <div class="gear-item ${checked ? 'checked' : ''}">
         <input type="checkbox" id="${id}" ${checked ? 'checked' : ''}>
          <label for="${id}">${label}</label>
       </div>
     `;
   });

    div.innerHTML = `
      <div class="gear-category-header" onclick="toggleGearCategory(this)">
        <span class="gear-cat-name">${cat.category}</span>
        <span class="gear-cat-count">${cat.items.length}项</span>
        <span class="gear-toggle">▾</span>
      </div>
      <div class="gear-category-body">${bodyHtml}</div>
    `;

    container.appendChild(div);
  });

  // Save on change
  container.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') {
      const id = e.target.id;
      savedState[id] = e.target.checked;
      localStorage.setItem(storageKey, JSON.stringify(savedState));
      // Toggle line-through style
      e.target.closest('.gear-item').classList.toggle('checked', e.target.checked);
    }
  });
}

// Toggle gear category accordion
function toggleGearCategory(header) {
  header.closest('.gear-category').classList.toggle('open');
}
// Make globally accessible
window.toggleGearCategory = toggleGearCategory;

// 11. PHOTOGRAPHY GRID — Interactive Upload Album
const PHOTO_STORAGE_KEY = "loey_photo_album";

function loadPhotoAlbum() { try { return JSON.parse(localStorage.getItem(PHOTO_STORAGE_KEY)) || {}; } catch(e) { return {}; } }
function savePhotoAlbum(album) {
  let total = 0;
  Object.values(album).forEach(a => a.forEach(p => total += p.data.length));
  if (total > 4*1024*1024 && !confirm("照片总大小已超过4MB，继续保存可能影响性能。是否继续？")) return;
  localStorage.setItem(PHOTO_STORAGE_KEY, JSON.stringify(album));
  renderPhotoRandomPreviews();
}
function handlePhotoUpload(day) {
  var input = document.createElement("input");
  input.type = "file"; input.accept = "image/*"; input.multiple = true;
  input.onchange = function(e) {
    var files = Array.from(e.target.files);
    var album = loadPhotoAlbum();
    if (!album[day]) album[day] = [];
    var loaded = 0;
    files.forEach(function(f) {
      if (album[day].length >= 20) { alert("每个主题最多20张照片"); return; }
      var reader = new FileReader();
      reader.onload = function(ev) {
        album[day].push({ data: ev.target.result, name: f.name });
        loaded++;
        if (loaded === files.length) savePhotoAlbum(album);
      };
      reader.readAsDataURL(f);
    });
  };
  input.click();
}
function removePhoto(day, idx) {
  var album = loadPhotoAlbum();
  if (album[day]) { album[day].splice(idx, 1); if (!album[day].length) delete album[day]; }
  closeDayGallery();
  savePhotoAlbum(album);
}
var galleryState = { day: 0, index: 0, photos: [] };
var galleryDeleteBtn = null;

function openDayGallery(day, startIdx) {
  var album = loadPhotoAlbum();
  var photos = album[day] || [];
  if (!photos.length) return;
  galleryState = { day: day, index: startIdx, photos: photos };
  var g = document.getElementById("dayGallery");
  if (!g) return;
  g.querySelector(".gallery-img").src = photos[startIdx].data;
  g.querySelector(".gallery-counter").textContent = (startIdx + 1) + "/" + photos.length;
  g.classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeDayGallery() {
  var g = document.getElementById("dayGallery");
  if (!g) return;
  g.classList.remove("active");
  document.body.style.overflow = "";
  if (galleryDeleteBtn) { galleryDeleteBtn.style.display = "none"; galleryDeleteBtn._day = null; galleryDeleteBtn._idx = null; }
}
function navigateGallery(dir) {
  if (!galleryState.photos.length) return;
  var n = galleryState.index + dir;
  if (n < 0) n = galleryState.photos.length - 1;
  if (n >= galleryState.photos.length) n = 0;
  galleryState.index = n;
  var g = document.getElementById("dayGallery");
  if (!g) return;
  g.querySelector(".gallery-img").src = galleryState.photos[n].data;
  g.querySelector(".gallery-counter").textContent = (n + 1) + "/" + galleryState.photos.length;
  if (galleryDeleteBtn) { galleryDeleteBtn.style.display = "none"; galleryDeleteBtn._idx = null; }
}
function renderPhotoRandomPreviews() {
  var album = loadPhotoAlbum();
  document.querySelectorAll(".photo-card").forEach(function(card) {
    var day = parseInt(card.dataset.day);
    var ph = album[day] || [];
    var pr = card.querySelector(".photo-preview");
    if (!pr) return;
    pr.innerHTML = "";
    if (ph.length === 0) {
      pr.innerHTML = "<div class=\"photo-preview-empty\">照片会随机展示在这里</div>";
      return;
    }
    var shuf = [...ph].sort(function() { return Math.random() - 0.5; });
    var show = shuf.slice(0, 6);
    show.forEach(function(p) {
      var img = document.createElement("img");
      img.className = "photo-preview-img";
      img.src = p.data;
      img.loading = "lazy";
      img.onclick = function(e) {
        e.stopPropagation();
        var all = album[day] || [];
        var idx = -1;
        for (var k = 0; k < all.length; k++) { if (all[k].data === p.data) { idx = k; break; } }
        openDayGallery(day, idx >= 0 ? idx : 0);
      };
      pr.appendChild(img);
    });
  });
}
function initDayGallery() {
  if (document.getElementById("dayGallery")) return;
  var g = document.createElement("div");
  g.id = "dayGallery";
  g.className = "day-gallery";
  g.onclick = function(e) { if (e.target === g) closeDayGallery(); };
  g.tabIndex = -1;
  var tx = 0, lpTimer = null;
  g.addEventListener("touchstart", function(e) {
    if (e.changedTouches) tx = e.changedTouches[0].screenX;
    if (e.target.closest(".gallery-img")) {
      lpTimer = setTimeout(function() {
        if (galleryDeleteBtn) {
          galleryDeleteBtn._day = galleryState.day;
          galleryDeleteBtn._idx = galleryState.index;
          galleryDeleteBtn.style.display = "block";
        }
      }, 500);
    }
  });
  g.addEventListener("touchend", function(e) {
    clearTimeout(lpTimer);
    if (e.changedTouches) {
      var dx = e.changedTouches[0].screenX - tx;
      if (dx < -40) navigateGallery(1);
      if (dx > 40) navigateGallery(-1);
    }
  });
  g.addEventListener("touchmove", function() { clearTimeout(lpTimer); });
  g.addEventListener("mousedown", function(e) {
    if (!e.target.closest(".gallery-img")) return;
    lpTimer = setTimeout(function() {
      if (galleryDeleteBtn) {
        galleryDeleteBtn._day = galleryState.day;
        galleryDeleteBtn._idx = galleryState.index;
        galleryDeleteBtn.style.display = "block";
      }
    }, 500);
  });
  g.addEventListener("mouseup", function() { clearTimeout(lpTimer); });
  g.addEventListener("mouseleave", function() { clearTimeout(lpTimer); });
  g.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") navigateGallery(-1);
    if (e.key === "ArrowRight") navigateGallery(1);
    if (e.key === "Escape") closeDayGallery();
  });
  g.innerHTML =
    "<button class=\"gallery-close\">&times;</button>" +
    "<span class=\"gallery-counter\"></span>" +
    "<div class=\"gallery-slide\"><img src=\"\" alt=\"photo\" class=\"gallery-img\" /></div>" +
    "<button class=\"gallery-prev\">&#8249;</button>" +
    "<button class=\"gallery-next\">&#8250;</button>" +
    "<button class=\"gallery-delete\" id=\"galleryDeleteBtn\">删除照片</button>";
  document.body.appendChild(g);
  var c = g.querySelector(".gallery-close");
  if (c) c.onclick = closeDayGallery;
  g.querySelector(".gallery-prev").onclick = function() { navigateGallery(-1); };
  g.querySelector(".gallery-next").onclick = function() { navigateGallery(1); };
  galleryDeleteBtn = g.querySelector(".gallery-delete");
  galleryDeleteBtn.onclick = function() {
    if (galleryDeleteBtn._idx != null) removePhoto(galleryDeleteBtn._day, galleryDeleteBtn._idx);
  };
}
function renderPhotos() {
  initDayGallery();
  var container = document.getElementById("photoGrid");
  photoData.forEach(function(photo) {
    var tagHtml = photo.tags.map(function(t) { return "<span>" + t + "</span>"; }).join("");
    var card = document.createElement("div");
    card.className = "photo-card";
    card.dataset.day = photo.day;
    card.innerHTML =
      "<div class=\"photo-preview\"><div class=\"photo-preview-empty\">照片会随机展示在这里</div></div>" +
      "<div class=\"photo-info\">" +
        "<div class=\"photo-day\">Day " + photo.day + "</div>" +
        "<div class=\"photo-theme\">" + photo.theme + "</div>" +
        "<div class=\"photo-time\">" + photo.time + "</div>" +
        "<div class=\"photo-tags\">" + tagHtml + "</div>" +
      "</div>" +
      "<button class=\"photo-upload-btn\" onclick=\"handlePhotoUpload(" + photo.day + ");event.stopPropagation()\" title=\"上传照片\">" +
        "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"/><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"/></svg>" +
      "</button>";
    container.appendChild(card);
  });
  renderPhotoRandomPreviews();
}
// 12. SCROLL FADE-IN ANIMATION
// ============================================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  // Observe day cards
  document.querySelectorAll('.day-card').forEach(el => observer.observe(el));
  // Observe photo cards
  document.querySelectorAll('.photo-card').forEach(el => observer.observe(el));
  // Observe chart cards
  document.querySelectorAll('.chart-card').forEach(el => observer.observe(el));
}

// ============================================
// 13. BACK TO TOP BUTTON
// ============================================
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ============================================
// 14. BOTTOM NAV HIGHLIGHT
// ============================================
function initBottomNav() {
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navItems.forEach(item => {
          item.classList.toggle('active', item.dataset.section === id);
        });
      }
    });
  }, { threshold: 0.2, rootMargin: '-60px 0px -40% 0px' });

  sections.forEach(s => observer.observe(s));
}

// ============================================
// 15. STAT COUNTER ANIMATION
// ============================================
function animateCounters() {
  document.querySelectorAll('.stat-value[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      el.textContent = current;
    }, 25);
  });
}

// ============================================
// 16. GPS TRAIL ANIMATION
// ============================================
function initGpsAnimation() {
  // Build a single continuous trail from all walking segments
  let trailCoords = [];
  routeData.forEach(d => {
    if (d.type === 'walking') {
      // Add intermediate points for smoother animation
      const steps = 5;
      const latStep = (d.endCoord[0] - d.startCoord[0]) / steps;
      const lngStep = (d.endCoord[1] - d.startCoord[1]) / steps;
      for (let s = 0; s < steps; s++) {
        trailCoords.push([
          d.startCoord[0] + latStep * s,
          d.startCoord[1] + lngStep * s
        ]);
      }
    }
  });
  trailCoords.push(routeData[routeData.length-1].endCoord);

  // Draw animated polyline on scroll
  gpsPolyline = L.polyline([], {
    color: '#D4763A',
    weight: 3,
    opacity: 0.7,
    dashArray: '4, 8'
  }).addTo(map);

  let animIndex = 0;
  const animInterval = setInterval(() => {
    if (animIndex < trailCoords.length) {
      gpsPolyline.addLatLng(trailCoords[animIndex]);
      animIndex++;
    } else {
      clearInterval(animInterval);
    }
  }, 80);
}

// ============================================
// 17. MOBILE NAV HIDE ON SCROLL
// ============================================
let lastScrollY = 0;
function initNavHide() {
  const nav = document.getElementById('bottomNav');
  window.addEventListener('scroll', () => {
    const currentY = window.scrollY;
    if (currentY > lastScrollY && currentY > 200) {
      nav.classList.add('hidden');
    } else {
      nav.classList.remove('hidden');
    }
    lastScrollY = currentY;
  }, { passive: true });
}

// ============================================
// 18. INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initParticleNetwork();
  initMouseCursor();
  setTimeout(initCardTilt, 500);
  initTouchFeedback();
  // Render content first (no map dependency)
  renderItinerary();
  renderGear();
  renderPhotos();

  // Stats counter animation (after render)
  animateCounters();

  // Init map (needs container to exist)
  try { initMap(); } catch(e) { console.warn('Map init failed:', e); }

  // Charts (after canvases exist)
  try { initCharts(); } catch(e) { console.warn('Charts init failed:', e); }

  // GPS trail animation
  setTimeout(initGpsAnimation, 500);

  // Bind interactions
  bindScrollHighlight();
  initScrollAnimations();
  initBackToTop();
  initBottomNav();
  initNavHide();
  initGeoProgress();
});

