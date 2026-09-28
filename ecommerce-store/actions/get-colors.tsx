import { Color } from "@/types";
import { mockColors } from "@/lib/mock-data";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  if (!process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_API_URL.includes("your-store-id")) {
    return mockColors;
  }

  try {
    const res = await fetch(URL, { next: { revalidate: 0 } });
    if (!res.ok) return mockColors;
    return res.json();
  } catch (error) {
    console.error("[GET_COLORS_FALLBACK]", error);
    return mockColors;
  }
};

export default getColors;
