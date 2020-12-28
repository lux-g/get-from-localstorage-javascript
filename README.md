- created an array of objects called products
- next I setItem using localstorage calling it 'product' and stringify products
- created a variable called values which then will JSON.parse getItem 'product'
- created a function called getItems
- inside getItems i created a forEach loop from the values variable calling it (item)
- created a new div called allProducts
- then i set the innerHTML of all products to a Template literal which then I can call item.name, price...or anything from my object
and put it in an html tag
- next i append allProducts to the container which I had previously made

- then I created a button and assigned a click to it which when clicked will call the getItmes function and then displaying the data to the page

see it here-->https://codesandbox.io/s/js-localstorage-and-template-literals-7njgq?file=/src/main.js:0-751
