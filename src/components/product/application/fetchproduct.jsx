import { fetchProducts } from '../infraestructure/productsAPI.jsx';

export async function getAllProducts() {
    return await fetchProducts()
}