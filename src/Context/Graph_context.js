import axios from "axios";
import { createContext, useContext, useEffect,  useState } from "react";

const GraphProvider = createContext();

const url = "https://dummyjson.com/products?limit=30";

const AppProvider = ({ children }) => {
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [rating, setRating] = useState('');
  const getData = async (url) => {

    try {
      let data1 = await axios.get(url);
      setPrice([...new Set(data1 && data1.data.products.map((curEle, index) => curEle.price))].slice(0,9));
      setStock([...new Set(data1 && data1.data.products.map((curEle, index) => curEle.stock))].slice(0,9));
      setCategory([...new Set(data1 && data1.data.products.map((curEle, index) => curEle.category))].slice(0,9));
      setBrand([...new Set(data1 && data1.data.products.map((curEle, index) => curEle.brand))].slice(0,9));
      setRating([...new Set(data1 && data1.data.products.map((curEle, index) => curEle.rating))].slice(0,9));
    } catch (error) {
      console.log(error);
    }
    
  };
  useEffect(() => {
    getData(url)
    
  }, []);
let product={
    price:price,
    stock:stock,
    category:category,
    rating:rating,
    brand:brand
}
  return (
    <GraphProvider.Provider  value={product} >
      {children}
    </GraphProvider.Provider>
  );
};

const useContextApi = () => {
  return useContext(GraphProvider);
};

export { AppProvider, useContextApi };
