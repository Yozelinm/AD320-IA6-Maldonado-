// 1
//console.log("HELLO WORLD");



//2
//var nums = process.argv.slice(2);

//var total = 0;

//var sum = function (x) {
//    total += Number(x);
//};

//nums.forEach(sum);

//console.log(total);


//3
//var fs = require('fs'),
//    filename = process.argv[2];
//var data = fs.readFileSync(filename, 'utf8');
//console.log(data.split('\n').length - 1);
//'use strict';
//var fs = require('fs');
//fs.readFile(process.argv[2], 'utf8', function (err, data) {
//    return console.log(data.split('\n').length - 1);
//});

//4
//'use strict';
//var fs = require('fs');
//var args = process.argv.slice(2, 4),
//    path = args[0],
//    filter = args[1];
//var ext = new RegExp('\\.' + filter + '$');
//var matching = function (d) {
//    return ext.test(d);
//};
//var printFiltered = function (err, list) {
//    list.sort()
//        .filter(matching)
//        .forEach(function (f) {
//
//            console.log(f);
//        });
//};
//fs.readdir(path, printFiltered);




//5
//var filterFn = require('./solution_filter.js')
//var dir = process.argv[2]
//var filterStr = process.argv[3]

//filterFn(dir, filterStr, function (err, list) {
//  if (err)
//    return console.error('There was an error:', err)

//  list.forEach(function (file) {
//    console.log(file)
//  })
//})


//6

//'use strict';
//var match = require('filter'),
//    path = process.argv[2],
//    filter = process.argv[3];
//match(path, filter, function (err, list) {
//    if (err) {
//        return console.error(err);
//    }
//    list.forEach(function (dir) {

//        console.log(dir);
//    });
//});


//7

//'use strict';
//var http = require('http'),
//    url = process.argv[2];
//var done = function (response) {
//    response.setEncoding('utf8');
//    response.on('error', console.error);
//    response.on('data', console.log);
//};
//http.get(url, done);

//8

//'use strict';
//var http = require('http'),
//    url = process.argv[2];
//var done = function (response) {
//    var data = '';
//    response.setEncoding('utf8');
//    response.on('error', console.error);
//    response.on('data', function (d) {

//        data += d;
//    });
//    response.on('end', function () {

//        console.log(data.length);
//        console.log(data);
//    });
//};


//9
// http.get(url, done);

//'use strict';
//var http = require('http'),
//    urls = process.argv.slice(2),
//    results = {},
//    count = 0;

//var print = function (results) {

//    for (var i = 0; i < 3; ++i) {
//        console.log(results[i]);
//    }
//};
//var task = function (i) {

//    http.get(urls[i], function (resp) {

//        var data = '';
//        resp.setEncoding('utf8');
//        resp.on('error', console.error);
//        resp.on('data', function (d) {

//            data += d;
//        });

//        resp.on('end', function () {

//            results[i] = data;
//            count += 1;
//            if (count === 3) {
//                print(results);
//            }
//        });
//    });
//};


//for (var i = 0; i < 3; ++i) {
//    task(i);
//}


//10

//var net = require('net');

//function zeroFill(i) {
//    return (i < 10 ? '0' : '') + i;
//}

// function now() {
//    var d = new Date();
//    return d.getFullYear() + '-'
//      + zeroFill(d.getMonth() + 1) + '-'
//      + zeroFill(d.getDate()) + ' '
//      + zeroFill(d.getHours()) + ':'
//      + zeroFill(d.getMinutes());
//}

//var server = net.createServer(function(socket) {
//    socket.end(now() + '\n');
//});
//server.listen(Number(process.argv[2]));


//11

//'use strict';
//var fs = require('fs'),
//    http = require('http'),
//    port = process.argv[2],
//    file = process.argv[3];

//var connect = function (req, res) {

//    res.writeHead(200, { 'content-type': 'text/plain' });
//    return fs.createReadStream(file).pipe(res);
//};

// http.createServer(connect).listen(port);

//12
//'use strict';
//var map = require('through2-map'),
//    http = require('http'),
//    port = process.argv[2];
//var upcase = function (chunk) {

//    return chunk.toString().toUpperCase();
//};

//var connect = function (req, res) {

//    if (req.method === 'POST') {
//        return req.pipe(map(upcase)).pipe(res);
//    }
//};

//http.createServer(connect).listen(port);


'use strict';
var map = require('through2-map'),
    http = require('http'),
    port = process.argv[2];


var upcase = function (chunk) {

    return chunk.toString().toUpperCase();
};


var connect = function (req, res) {

    if (req.method === 'POST') {
        return req.pipe(map(upcase)).pipe(res);
    }
};

http.createServer(connect).listen(port);
