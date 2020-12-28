let products = [
    {
        name: 'crooks',
        price: 32,
        tag: 'tshirt'
    },
    {
        name: 'adidas',
        price: 40,
        tag: 'tshirt'
    },
    {
        name: 'nike',
        price: 100,
        tag: 'sneakers'
    },
]

localStorage.setItem('product', JSON.stringify(products))
const values = JSON.parse(localStorage.getItem('product'))

function getItems() {
    values.forEach(item => {
        const allProducts = document.createElement('div');
        allProducts.innerHTML = `
            <p>Brand: ${item.name}</p>
            <p>${item.tag}</p>
            <p>Price: ${item.price}</p>
        `
        document.querySelector('.container').append(allProducts)
    })
}

const btn1 = document.querySelector('.btn1')
btn1.addEventListener('click', getItems)
