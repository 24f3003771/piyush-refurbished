import { Size } from "@/types";
import { mockSizes } from "@/lib/mock-data";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  if (!process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_API_URL.includes("your-store-id")) {
    return mockSizes;
  }

  try {
    const res = await fetch(URL, { next: { revalidate: 0 } });
    if (!res.ok) return mockSizes;
    return res.json();
  } catch (error) {
    console.error("[GET_SIZES_FALLBACK]", error);
    return mockSizes;
  }
};

export default getSizes;
