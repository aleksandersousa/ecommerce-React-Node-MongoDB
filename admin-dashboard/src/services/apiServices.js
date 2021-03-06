import { publicRequest, userRequest } from './api';

export class ApiServices {
  async getProducts(category) {
    const res = await publicRequest.get(category ? `/products?${category}` : '/products');
    return res;
  }

  async getProduct(id) {
    const res = await publicRequest.get(`/products/${id}`);
    return res;
  }

  async deleteProduct(id) {
    const res = await userRequest.delete(`/products/${id}`);
    return res;
  }

  async updateProduct(id, body) {
    const res = await userRequest.put(`/products/${id}`, body);
    return res;
  }

  async addProduct(body) {
    const res = await userRequest.post('/products', body);
    return res;
  }

  async performPayment(body) {
    const res = await userRequest.post('/checkout/payment', body);
    return res;
  }

  async createOrder(body) {
    const res = await userRequest.post('/orders', body);
    return res;
  }

  async getOrders() {
    const res = await userRequest.get('/orders');
    return res;
  }

  async login(user) {
    const res = await publicRequest.post('/auth/login', user);
    return res;
  }

  async getUsers() {
    const res = await userRequest.get('/users/?new=true');
    return res;
  }

  async getUser(id) {
    const res = await userRequest.get(`/users/${id}`);
    return res;
  }
}
