import { Category } from "@/types";
import { mockCategories } from "@/lib/mock-data";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  if (!process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_API_URL.includes("your-store-id")) {
    return mockCategories;
  }

  try {
    const res = await fetch(URL, { next: { revalidate: 0 } });
    if (!res.ok) return mockCategories;
    return res.json();
  } catch (error) {
    console.error("[GET_CATEGORIES_FALLBACK]", error);
    return mockCategories;
  }
};

export default getCategories;

