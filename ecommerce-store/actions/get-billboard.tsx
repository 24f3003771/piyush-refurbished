import { Billboard } from "@/types";
import { mockBillboard, mockCategories } from "@/lib/mock-data";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  if (!process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_API_URL.includes("your-store-id")) {
    const categoryBillboard = mockCategories.find((c) => c.billboard?.id === id || c.id === id)?.billboard;
    return categoryBillboard || mockBillboard;
  }

  try {
    const res = await fetch(`${URL}/${id}`, { next: { revalidate: 0 } });
    if (!res.ok) return mockBillboard;
    return res.json();
  } catch (error) {
    console.error("[GET_BILLBOARD_FALLBACK]", error);
    return mockBillboard;
  }
};

export default getBillboard;
