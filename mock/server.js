let http = require('http');
let fs = require('fs');
let url = require('url');
let sliders = require('./slider');
function read(callback) {
    fs.readFile('./mock/book.json', 'utf8', function (err, data) {//在根目录起了服务就要写相对根目录的路径，在mock中起服务就写相对mock路径
        data = data.length === 0 ? [] : JSON.parse(data);
        callback(data);
    })
}

http.createServer(function (req, res) {
    let { pathname, query } = url.parse(req.url, true);
    if (pathname === '/api/slider') {
        return res.end(JSON.stringify(sliders));
    }
    if (pathname === '/api/hot') {
        read(function (data) {
            var books = data.reverse().slice(0, 6);
            setTimeout(function(){
                res.end(JSON.stringify(books));
            },1000)          
        });
        return;
    }
}).listen(3000);//跨域