
const API_URL = 'https://fakestoreapi.com/products';

export async function fetchProducts() {

    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();

}


export async function fetchProductById(name) {

    const products = await fetchProducts();
    return products.find(product => product.title.toLowerCase() === name.toLowerCase());

}