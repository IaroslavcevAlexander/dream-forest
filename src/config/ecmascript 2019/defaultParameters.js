// function f(a = 10, b = 20) {}


function fetchOrders(count = 10, start = 0) {
    console.log('Getting', count,
        'orders starting from', start);
}

fetchOrders();
fetchOrders(13, 52);

function findProducts(opts = { minPrice: 10, maxPrice: 20}) {
    console.log(opts);
}

findProducts({});