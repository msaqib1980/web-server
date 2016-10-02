

    var middleware = {
        requireAuthentication: function(req,res,next) {
         console.log('private route hit!');
         next();
        },
        logger:function(req,res,next){
            console.log('Request: ' + req.method + ' ' + req.url + ' on ' + new Date());
            next();
        }
    };

module.exports = middleware;