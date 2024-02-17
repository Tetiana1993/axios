import './styles/normalize.css';
import './styles/index.css';
import { productsApi } from './requests/products';
import { refs } from './js/refs';
import { createProductsMarkup } from './services/markupService';
import { singleProductFormSubmit } from './js/singleProductFormSubmit';
import { onFormSubmit } from './js/onFormSubmit';

async function renderProducts() {
  const products = await productsApi.getAll();
  const markup = createProductsMarkup(products);
  refs.productsLists.insertAdjacentHTML('afterbegin', markup);
}
// renderProducts();

refs.singleProductForm.addEventListener('submit', singleProductFormSubmit);

refs.form.addEventListener('submit', onFormSubmit);
