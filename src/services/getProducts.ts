
const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products/1');
    const data = await response.json();
    console.log(data);
    return data;
};

export default getProducts;