import { Product } from "@/types";
import { mockProducts } from "@/lib/mock-data";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const filterMockProducts = (query: Query): Product[] => {
  return mockProducts.filter((product) => {
    if (query.isFeatured && !product.isFeatured) return false;
    if (query.categoryId && product.category.id !== query.categoryId) return false;
    if (query.colorId && product.color.id !== query.colorId) return false;
    if (query.sizeId && product.size.id !== query.sizeId) return false;
    return true;
  });
};

const getProducts = async (query: Query): Promise<Product[]> => {
  if (!process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_API_URL.includes("your-store-id")) {
    return filterMockProducts(query);
  }

  const url = qs.stringifyUrl({
    url: URL,
    query: { 
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return filterMockProducts(query);
    return res.json();
  } catch {
    return filterMockProducts(query);
  }
};

export default getProducts;
