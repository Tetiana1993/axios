import apiInstance from '../services/api';

async function getAll() {
  const result = await apiInstance.get('/products');
  return result.data;
}

async function getById(id) {
  const result = await apiInstance.get(`/products/${id}`);
  return result.data;
}

export const productsApi = {
  getAll,
  getById,
};
