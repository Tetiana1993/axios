import apiInstance from '../services/api';

async function getAll() {
  const result = await apiInstance.get('/products');
  return result.data;
}

async function getById(id) {
  const result = await apiInstance.get(`/products/${id}`);
  return result.data;
}

async function add(data) {
  const result = await apiInstance.post(`/products/add`, data);
  return result.data;
}

export const productsApi = {
  getAll,
  getById,
  add,
};
