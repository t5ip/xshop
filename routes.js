var xshop = require('./models/xshop');

module.exports = {
    configure: function(app) {
        app.get('/xshop/getall/apple/', function(req, res) {
            xshop.getAllApple(res);
        });
        // general purpose route with all search terms
        app.get('/xshop/startdate/:startdate/enddate/:enddate/startprice/:startprice/endprice/:endprice/region/:region/keyword/:keyword/', function(req, res) {
            xshop.findByParameters(req, res);
        });
    }
}
