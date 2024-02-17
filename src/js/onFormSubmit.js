import { productsApi } from '../requests/products';
import { createOneProductMarkup } from '../services/markupService';
import { refs } from './refs';

export async function onFormSubmit(event) {
  event.preventDefault();

  const newProduct = {};

  new FormData(event.currentTarget).forEach((value, key) => {
    newProduct[key] = value;
  });
  const result = await productsApi.add(newProduct);

  const markup = createOneProductMarkup(result);
  refs.newProductSection.insertAdjacentHTML('afterbegin', markup);
}
