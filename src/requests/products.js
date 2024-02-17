import apiInstance from "../services/api"

async function getAll() {
    const result = await apiInstance.get("/products");
    return result.data;
}

export const productsApi = {
    getAll
}