(function (homeController) {
    
    homeController.init = function (app) {
        app.get("/", function (red, res) {
            res.send("<html><body><h1>hello world!</h1></body></html>");
        });
    };

})(module.exports);