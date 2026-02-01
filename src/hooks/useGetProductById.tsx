import { useQuery } from "@tanstack/react-query";
import { Product } from "./useGetAllProducts"; // Import lại interface Product
import { mockProducts } from "../data/mockProducts";

const fetchProductById = async (id: number): Promise<Product | null> => {
  try {
    const product = mockProducts.find((p) => p.id === id) || null;
    console.log("Fetched product:", product); // Debug fetched product
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

const useGetProductById = (id: number) => {
  return useQuery<Product | null>({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    enabled: !!id, // Chỉ fetch nếu id tồn tại
    staleTime: 600000,
    refetchOnWindowFocus: false,
    retry: false,
  });
};

export { useGetProductById };
