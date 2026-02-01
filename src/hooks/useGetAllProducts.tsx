import { useQuery } from "@tanstack/react-query";
import { mockProducts } from "../data/mockProducts";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[]; // Sửa lỗi ở đây
  category: string;
  brand: string;
  rate: number;
  stock: number;
  is_active: boolean;
}

const fetchAllProducts = async (): Promise<Product[]> => {
  return mockProducts;
};

const useGetAllProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
    staleTime: 600000,
    refetchOnWindowFocus: false,
    retry: false,
  });
};

export { useGetAllProducts };
