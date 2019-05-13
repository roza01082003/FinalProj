var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

xotArr = [];
xotakerArr = [];
gishatichArr = [];
snowArr = [];
ancrevArr = [];

// xotClec = 0;
// xotakerCnvec = 0;
// gishatichCnvec = 0;
// ancrevEkav = 0;
// cyunEkav = 0;

var Grass = require("./modules./Grass.js");
var GrassEater = require("./modules./GrassEater.js");
var Gishatich = require("./modules./Gishatich.js");
var Ancrev = require("./modules./Ancrev.js");
var Snow = require("./modules./Snow.js");

let matrix = []; // Մատրիցի ստեղծում
let rows = 100; // Տողերի քանակ
let columns = 100; // Սյուների քանակ

for (let y = 0; y < rows; y++) {
    matrix[y] = []; // Մատրիցի նոր տողի ստեղծում
    for (let x = 0; x < columns; x++) {
        let a = Math.floor(Math.random() * 100);
        if (a >= 0 && a < 20) {
            matrix[y][x] = 0; // Մատրիցի 20 տոկոսը կլինի 0
        }
        if (a >= 20 && a < 40) {
            matrix[y][x] = 1; // Մատրիցի 20 տոկոսը կլինի 1
        }
        else if (a >= 40 && a < 50) {
            matrix[y][x] = 2; // Մատրիցի 10 տոկոսը կլինի 2
        }
        else if (a >= 50 && a < 70) {
            matrix[y][x] = 3; // Մատրիցի 20 տոկոսը կլինի 3
        }
        else if (a >= 70 && a < 90) {
            matrix[y][x] = 4; // Մատրիցի 20 տոկոսը կլինի 4
        }
        else if (a >= 90 && a < 100) {
            matrix[y][x] = 5; // Մատրիցի 10 տոկոսը կլինի 5
        }
    }
}

for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] == 1) {
            xotArr.push(new Grass(j, i, 1));
        }
        else if (matrix[i][j] == 2) {
            xotakerArr.push(new StandardCritter(j, i, 2));
        }
        else if (matrix[i][j] == 3) {
            gishatichArr.push(new Gishatich(j, i, 3));
        }
    }
}
//setInterval(exanak,5000);

setInterval(drawServerayin, 5000);
function drawServerayin() {
    for (var i in xotArr) {
        xotArr[i].mul();
    }
    for (var i in xotakerArr) {
        xotakerArr[i].eat();
    }
    if (weather == "summer") {
        for (var i in gishatichArr) {
            gishatichArr[i].eat();
        }
    }
    if (weather == "winter") {
        for (var i in snowArr) {
            snowArr[i].eat();
        }
    }
    io.sockets.emit("ekan", matrix)
}

