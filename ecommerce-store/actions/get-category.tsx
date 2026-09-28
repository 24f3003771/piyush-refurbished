import { Category } from "@/types";
import { mockCategories } from "@/lib/mock-data";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  if (!process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_API_URL.includes("your-store-id")) {
    const found = mockCategories.find((c) => c.id === id);
    return found || mockCategories[0];
  }

  try {
    const res = await fetch(`${URL}/${id}`, { next: { revalidate: 0 } });
    if (!res.ok) return mockCategories.find((c) => c.id === id) || mockCategories[0];
    return res.json();
  } catch (error) {
    console.error("[GET_CATEGORY_FALLBACK]", error);
    return mockCategories.find((c) => c.id === id) || mockCategories[0];
  }
};

export default getCategory;
