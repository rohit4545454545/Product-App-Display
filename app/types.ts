export interface APIResponse {
    products: Product[];
  }
  
  export interface Product {
    id: number;
    title: string;
    category: string;
    price: number;
    description: string;
    image: string;
  }
  