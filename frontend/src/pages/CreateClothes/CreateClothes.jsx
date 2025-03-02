import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ClothesService from "../../services/clothesService";
import { CirclePercent, FolderPen } from "lucide-react";
const CreateClothes = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [inventory_quantity, setInventory_quantity] = useState(0);
  const [selled, setSelled] = useState(0);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const form = useRef();
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const onChangeImage = (e) => {
    setImage(e.target.value);
  };
  const onChangeInventoryQuantity = (e) => {
    setInventory_quantity(e.target.value);
  };
  const onChangeSelledQuanityt = (e) => {
    setSelled(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    ClothesService.createClothes(name, price, image, inventory_quantity, selled)
      .then(() => {
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setMessage(resMessage);
      });
  };
  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">
            Clothes Store
          </h1>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form onSubmit={handleLogin} ref={form} className="bg-white">
          <h1 className="text-gray-800 font-bold text-2xl mb-1">
            Hello Again!
          </h1>
          <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <FolderPen size={20} />
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => {
                onChangeName(e);
              }}
              placeholder="Name"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <CirclePercent size={20} />
            <input
              className="pl-2 outline-none border-none"
              type="number"
              name="price"
              id="price"
              value={price}
              onChange={(e) => {
                onChangePrice(e);
              }}
              placeholder="Price"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <CirclePercent size={20} />
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name="image"
              id="image"
              value={image}
              onChange={(e) => {
                onChangeImage(e);
              }}
              placeholder="Image"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <CirclePercent size={20} />
            <input
              className="pl-2 outline-none border-none"
              type="number"
              name="inventory_quantity"
              id="inventory_quantity"
              value={inventory_quantity}
              onChange={(e) => {
                onChangeInventoryQuantity(e);
              }}
              placeholder="Inventory quantity"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <CirclePercent size={20} />
            <input
              className="pl-2 outline-none border-none"
              type="number"
              name="selled_quantity"
              id="selled_quantity"
              value={selled}
              onChange={(e) => {
                onChangeSelledQuanityt(e);
              }}
              placeholder="Image"
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            {loading && (
              <div className="spinner-border spinner-border-sm" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
            Create
          </button>
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
export default CreateClothes;
