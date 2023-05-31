var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Create a custom Canvas layer
var canvasLayer = L.canvasLayer().delegate({
    onDrawLayer: function (info) {
        // Access the canvas context
        var ctx = info.canvas.getContext('2d');

        // Clear the canvas
        ctx.clearRect(0, 0, info.canvas.width, info.canvas.height);

        // Draw custom content on the canvas
        // Example: Draw a circle
        ctx.beginPath();
        ctx.arc(100, 100, 50, 0, Math.PI * 2);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
    }
}).addTo(map);

// Adjust the canvas layer's pane to be above markers
canvasLayer.setZIndex(10);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();
