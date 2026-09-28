import { Product } from "@/types";
import { mockProducts } from "@/lib/mock-data";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  if (!process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_API_URL.includes("your-store-id")) {
    const found = mockProducts.find((p) => p.id === id);
    return found || mockProducts[0];
  }

  try {
    const res = await fetch(`${URL}/${id}`, { next: { revalidate: 0 } });
    if (!res.ok) return mockProducts.find((p) => p.id === id) || mockProducts[0];
    return res.json();
  } catch (error) {
    console.error("[GET_PRODUCT_FALLBACK]", error);
    return mockProducts.find((p) => p.id === id) || mockProducts[0];
  }
};

export default getProduct;
