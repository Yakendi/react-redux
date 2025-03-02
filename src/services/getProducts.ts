const baseURL = 'https://fakestoreapi.com/products';
const getProducts = async () => {
    const response = await fetch(baseURL);
    const data = await response.json();
    console.log(data);
    return data;
};

export default getProducts;