//Task 1: Set Up the Project 

//Task 2
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error has occurred: ${response.status}`); //getting product data 
        }
        return response.json();
    })
    .then(products => {
        products.forEach(product => {
            console.log(product.fields.name); //logging each product's name in the console
        });
    })
    .catch(error => {
        console.error('Error has occurred:', error); //logs the actual errors
    });
};

//Task 3
async function fetchProductsAsync() {
    try {
        const response = await fetch('https://www.course-api.com/javascript-store-products') //gets product data
        const products = await response.json();
        displayProducts(products); //helper function to render products to page
    } catch (error) {
        handleError(error); //if error occurs, it has been passed to here
    }
};