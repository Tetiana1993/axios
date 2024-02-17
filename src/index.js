import './styles/normalize.css';
import './styles/index.css';
import { productsApi } from './requests/products';
import { refs } from './js/refs';
async function renderProducts() {
  const products = await productsApi.getAll();
  const markup = products.products
    .map(item => {
      return `<li><h3>${item.title}</h3><p>${item.description}</p><p>${item.price}</p></li>`;
    })
    .join('');
  refs.productsLists.insertAdjacentHTML('afterbegin', markup);
}
renderProducts();
