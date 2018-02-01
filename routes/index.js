var express = require('express');
var router = express.Router();
const pug = require('pug')
var fs = require('fs')
var path = require('path')
// function onRequest(req, res, fileToPush){
//     var filename = path.join(__dirname, req.url);
//
//     if(res.push){
//         var push = res.push(fileToPush)
//         push.writeHead(200)
//
//         fs.createReadStream(path.join(__dirname, fileToPush)).pipe(push)
//     }
//
//     res.writeHead(200)
//     var fileStream = fs.createReadStream(filename)
//     fileStream.pipe(res)
//     fileStream.on('finish', res.end)
// }

/* GET home page. */
router.get('/', function(req, res, next) {
    fs.readFile('views/index.html', function(err, data){

        if(err){
            return res.send(err)
        } else {

            // var stream = res.push('/javascripts/test1.js', {
            //     status : 200,
            //     method : 'GET',
            //     response : { 'content-type' : 'application/javascript' }
            // });
            // fs.createReadStream('public/javascripts/test1.js').pipe(stream)
            //
            // var stream2 = res.push('/stylesheets/style.css', {
            //     status : 200,
            //     method : 'GET',
            //     response : { 'content-type' : 'text/css'}
            // })
            // fs.createReadStream('public/stylesheets/style.css').pipe(stream2)
            //
            //
            // var stream3 = res.push('/images/test.jpg', {
            //     status : 200,
            //     method : 'GET',
            //     response : { 'content-type' : 'image/jpeg'}
            // })
            // fs.createReadStream('public/images/test.jpg').pipe(stream3)

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data)

        }
    })
    // res.render('index', { title: 'Express' });
    // var stream = res.push("public/javascripts/test1.js", {
    //     status: 200, // optional
    //     method: 'GET', // optional
    //     request: {
    //         accept: '*/*'
    //     },
    //     response: {
    //         'content-type': 'application/javascript'
    //     }
    // });
    // stream.end(function(){
    //     console.log("Hello World");
    // });
    // stream.on('error', function() {
    //     console.log('error')
    // });
    // res.end('<script src="/javascripts/test1.js"></script>')
});

module.exports = router;