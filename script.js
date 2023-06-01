const cities = [
    { name: 'Kuala Lumpur', coordinates: [3.1390, 101.6869] },
    { name: 'George Town', coordinates: [5.4149, 100.3298] },
    { name: 'Ipoh', coordinates: [4.5975, 101.0901] },
    { name: 'Johor Bahru', coordinates: [1.4927, 103.7414] },
    { name: 'Kota Kinabalu', coordinates: [5.9804, 116.0735] },
    { name: 'Shah Alam', coordinates: [3.0738, 101.5183] },
    { name: 'Malacca City', coordinates: [2.1896, 102.2501] },
    { name: 'Alor Setar', coordinates: [6.1264, 100.3685] },
    { name: 'Miri', coordinates: [4.4021, 113.9914] },
    { name: 'Petaling Jaya', coordinates: [3.0869, 101.5927] },
    { name: 'Seremban', coordinates: [2.7258, 101.9421] },
    { name: 'Kuching', coordinates: [1.5497, 110.3634] },
    { name: 'Kota Bharu', coordinates: [6.1254, 102.2386] },
    { name: 'Sungai Petani', coordinates: [5.6470, 100.4877] },
    { name: 'Kuala Terengganu', coordinates: [5.3167, 103.1410] },
    { name: 'Taiping', coordinates: [4.8540, 100.7396] },
    { name: 'Kuantan', coordinates: [3.8077, 103.3260] },
    { name: 'Sandakan', coordinates: [5.8414, 118.1171] },
    { name: 'Kuala Langat', coordinates: [2.8306, 101.4173] },
    { name: 'Ampang Jaya', coordinates: [3.1485, 101.7614] },
    { name: 'Subang Jaya', coordinates: [3.0224, 101.5903] },
    { name: 'Klang', coordinates: [3.0436, 101.4466] },
    { name: 'Tawau', coordinates: [4.2447, 117.8913] },
    { name: 'Kota Tinggi', coordinates: [1.7332, 103.9029] },
    { name: 'Bukit Mertajam', coordinates: [5.3656, 100.4555] },
    { name: 'Seri Manjung', coordinates: [4.1990, 100.6770] },
    { name: 'Sepang', coordinates: [2.6972, 101.7303] },
    { name: 'Bintulu', coordinates: [3.1664, 113.0353] },
    { name: 'Batu Pahat', coordinates: [1.8548, 102.9325] },
    { name: 'Butterworth', coordinates: [5.3997, 100.3630] },
    { name: 'Hulu Selangor', coordinates: [3.5689, 101.6414] },
    { name: 'Kulim', coordinates: [5.3640, 100.5592] },
    { name: 'Selayang', coordinates: [3.2532, 101.6538] },
    { name: 'Port Dickson', coordinates: [2.5275, 101.8051] },
    { name: 'Labuan', coordinates: [5.2831, 115.2477] },
    { name: 'Kuala Selangor', coordinates: [3.3452, 101.2499] },
    { name: 'Segamat', coordinates: [2.4994, 102.8295] },
    { name: 'Sungai Ara', coordinates: [5.3272, 100.2664] },
    { name: 'Kangar', coordinates: [6.4415, 100.1981] },
    { name: 'Muar', coordinates: [2.0449, 102.5681] },
    { name: 'Rawang', coordinates: [3.3222, 101.5767] },
    { name: 'Teluk Intan', coordinates: [4.0117, 101.0215] },
    { name: 'Kampar', coordinates: [4.3075, 101.1571] },
    { name: 'Bentong', coordinates: [3.5222, 101.9069] },
    { name: 'Bandar Baru Bangi', coordinates: [2.9570, 101.7588] },
    { name: 'Jerantut', coordinates: [3.9340, 102.3633] },
    { name: 'Papar', coordinates: [5.7370, 115.9409] },
    { name: 'Keningau', coordinates: [5.3378, 116.1619] },
    { name: 'Batu Gajah', coordinates: [4.4680, 101.0572] },
    { name: 'Pontian Kechil', coordinates: [1.4854, 103.3920] },
    { name: 'Sibu', coordinates: [2.2912, 111.8260] },
    { name: 'Kluang', coordinates: [2.0280, 103.3221] },
    { name: 'Kuala Kangsar', coordinates: [4.7717, 100.9418] },
    { name: 'Tapah', coordinates: [4.1849, 101.2674] },
    { name: 'Kuala Lipis', coordinates: [4.1849, 102.0430] },
    { name: 'Pekan', coordinates: [3.4954, 103.3896] },
    { name: 'Tangkak', coordinates: [2.2634, 102.5254] },
    { name: 'Batu Berendam', coordinates: [2.2509, 102.2493] },
    { name: 'Tanjung Tokong', coordinates: [5.4498, 100.3054] },
    { name: 'Semenyih', coordinates: [2.9526, 101.8620] },
    { name: 'Tanjung Malim', coordinates: [3.6833, 101.5167] },
    { name: 'Lahad Datu', coordinates: [5.0464, 118.3277] },
    { name: 'Tasek Gelugor', coordinates: [5.4747, 100.4317] },
    { name: 'Simpang Empat', coordinates: [4.9517, 100.6333] },
    { name: 'Donggongon', coordinates: [5.8969, 116.0804] },
    { name: 'Seri Kembangan', coordinates: [3.0224, 101.7067] },
    { name: 'Kampong Dungun', coordinates: [2.8142, 101.8713] },
    { name: 'Bukit Rambai', coordinates: [2.2416, 102.1983] },
    { name: 'Perai', coordinates: [5.3900, 100.3970] },
    { name: 'Jitra', coordinates: [6.2659, 100.4378] },
    { name: 'Permatang Kuching', coordinates: [5.3387, 100.2707] },
    { name: 'Parit Buntar', coordinates: [5.1167, 100.4833] },
    { name: 'Ranau', coordinates: [5.9537, 116.6600] },
    { name: 'Kampong Baharu Balakong', coordinates: [3.0329, 101.7701] },
    { name: 'Kuala Pilah', coordinates: [2.8083, 102.3157] },
    { name: 'Kuala Klawang', coordinates: [2.8060, 102.3509] },
    { name: 'Batang Berjuntai', coordinates: [3.3769, 101.4039] },
    { name: 'Sungai Udang', coordinates: [2.3005, 102.1753] },
    { name: 'Kulai', coordinates: [1.6716, 103.5987] },
    { name: 'Banting', coordinates: [2.8132, 101.5023] },
    { name: 'Simpang Renggam', coordinates: [1.8481, 103.0589] },
    { name: 'Pulau Sebang', coordinates: [2.3815, 102.2053] },
    { name: 'Limbang', coordinates: [4.7511, 115.0088] },
    { name: 'Bukit Bakri', coordinates: [2.1397, 102.8892] },
    { name: 'Padang Serai', coordinates: [5.7381, 100.5085] },
    { name: 'Lundu', coordinates: [1.6884, 109.8170] },
    { name: 'Pekan Nanas', coordinates: [1.5175, 103.5372] },
    { name: 'Kuala Perlis', coordinates: [6.4213, 100.1937] },
    { name: 'Kuala Lipis', coordinates: [4.1849, 102.0430] },
    { name: 'Kampung Ayer Molek', coordinates: [2.1989, 102.1306] },
    { name: 'Batu Arang', coordinates: [3.2906, 101.4789] },
    { name: 'Semporna', coordinates: [4.4819, 118.6097] },
    { name: 'Paka', coordinates: [4.6483, 103.4385] },
    { name: 'Jenjarum', coordinates: [2.8983, 101.5083] },
    { name: 'Pulau Pinang', coordinates: [5.4164, 100.3327] },
    { name: 'Lumut', coordinates: [4.2326, 100.6305] },
    { name: 'Pasir Mas', coordinates: [6.0219, 102.1722] },
    { name: 'Tampin', coordinates: [2.4692, 102.2324] },
    { name: 'Putatan', coordinates: [5.9043, 116.0462] },
]

// Initializing the Leaflet map and setting the view
let map = L.map('map', {renderer: L.canvas()}).setView([3.1390, 101.6869], 8);

// Specifying a custom renderer for the map:
let myRenderer = L.canvas({ padding: 0.5 });

// Adding a tile layer from OpenStreetMap to the map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add circles for each city
cities.forEach(city => {
    L.circle(city.coordinates, {
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 600,
        stroke: false,
        renderer: myRenderer,
    }).addTo(map).bindPopup(city.name);
});