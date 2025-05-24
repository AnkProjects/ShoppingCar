import { fetchProducts } from '../infraestructure/productsAPI.jsx';
import { Product }  from '../domain/product.jsx';

export async function getAllProducts() {

    const data = await fetchProducts();

    return data.map(
        p => new Product(p.id, p.title, p.price, p.description, p.category, p.image));
}