export function createProductsMarkup(products) {
  const markup = products.products
    .map(item => {
      return `<li><h3>${item.title}</h3><p>${item.description}</p><p>${item.price}</p></li>`;
    })
    .join('');

  return markup;
}

export function createOneProductMarkup(product) {
  return `<li><h3>${product.title}</h3><p>${product.description}</p><p>${product.price}</p></li>`;
}
