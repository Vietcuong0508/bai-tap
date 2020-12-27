const url =require('url');
const fs =require('fs');

function renderHTML(path, res) {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('File not found');
        } else {
            res.write(data);
        }
        res.end();
    });
}
function render404(res) {
    res.writeHead(404);
    res.write('File not found');
    res.end();
}

module.exports = {
    onRequest: function onRequest(req, res) {
        const path = url.parse(req.url).pathname;
        switch (path) {
            case '/':
                renderHTML('./html/index.html', res);
                break;
            case '/products':
                renderHTML('./html/products.html', res);
                break;
            case '/product-details':
                renderHTML('./html/product-details.html', res);
                break;
            default:
                render404(res);
                break;
        }
    }
};