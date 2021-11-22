const path = require('path');
var express    = require("express");
var app = express();
const http = require('http').Server(app);
// app.listen(process.env.APP_PORT, process.env.APP_IP);
app.use(express.static(path.resolve(__dirname, '../')));
app.use(express.json());

var Datastore = require('nedb');
var db_orders = new Datastore({filename : './server/orders'});
db_orders.loadDatabase();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'));
});

app.post('/api/addOrder', function(request){
    db_orders.insert(request.body.data.order);
});

app.post('/api/findDates', function(request, response){
    db_orders.find({fullDate: request.body.data.data}, function (err, docs) {
        response.json(docs);
        console.log(docs);
    });
});

app.get('/api/getFull', function(request, response){
    db_orders.find({}, function (err, docs) {
        response.json(docs);
        console.log(docs);
    });
});

app.post('/api/deleteOrder', function(request, response){
    // console.log(request.body.data.id);
    db_orders.remove({ _id: request.body.data.id}, {}, function (err, numRemoved) {
        if(!err) {
          console.log("removed "+ numRemoved+" records");
          response.json('ok');
        }
    });
});

http.listen(3000, () => {
    console.log(`listening on *:${3000}`);
});