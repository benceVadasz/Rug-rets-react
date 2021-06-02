const  createProxyMiddleware  = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/Rug-Rets',
        createProxyMiddleware({
            target: 'http://localhost',
            changeOrigin: true,
        })
    );
};

