import { productsApi } from '../requests/products';
import { createOneProductMarkup } from '../services/markupService';
import { refs } from './refs';
export async function singleProductFormSubmit(event) {
  event.preventDefault();
  const id = event.currentTarget.elements.id.value.trim();
  const response = await productsApi.getById(id);

  const markup = createOneProductMarkup(response);
  refs.singleProduct.insertAdjacentHTML('afterbegin', markup);
}
