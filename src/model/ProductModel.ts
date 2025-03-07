export interface ProductModel {
    id: number;
    title: string;
    price: string;
    description: string;
    image: string;
};

export interface ProductCardInterface {
    product: ProductModel
};