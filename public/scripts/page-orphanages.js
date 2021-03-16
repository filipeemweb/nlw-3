const map = L.map('mapid').setView([-15.805, -48.082], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-15.805, -48.082]).addTo(map)
    .bindPopup('Home')
    .openPopup();