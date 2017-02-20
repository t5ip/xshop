var connection = require('../connection');
function Xshop() {
    this.getAllApple = function(res) {
        connection.acquire(function(err, con) {
            con.query('select * from elektroniikka where name like \'%apple%\'', function(err, result) {
                con.release();
                res.send(result);
            });
        });
    };
    this.findByParameters = function(req,res) {
        connection.acquire(function(err, con) {
            var queryString = 'select * from elektroniikka where name like \'%' + req.params.keyword + '%\'';
            console.log(queryString);
            con.query(queryString, function(err, result) {
                con.release();
                res.send(result);
            });
        });
    };
}

module.exports = new Xshop();
