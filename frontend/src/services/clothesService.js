import axios from "axios";
const API_URL = "http://localhost:5000/api/clothes/";
class ClothesService {
  getAllClothes() {
    return axios.get(API_URL);
  }
  getDetailClothes(id) {
    return axios.get(API_URL + `/:${id}`);
  }
  createClothes(name, price, image, inventory_quantity, selled_quantity) {
    return axios.post(API_URL + `create`, {
      name,
      price,
      image,
      inventory_quantity,
      selled_quantity,
    });
  }
}

export default new ClothesService();
