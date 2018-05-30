



module.exports = function (app) {
    app.get('/', function (req, res) {
        res.sendFile(__dirname + '/public/views/layout.html')
    });

    app.get('/register', function (req, res) {
        res.sendFile(__dirname + '/public/views/layout.html')
    });
}