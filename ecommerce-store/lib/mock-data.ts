import { Billboard, Category, Color, Product, Size } from "@/types";

export const mockBillboard: Billboard = {
  id: "224ce266-415e-4a3b-b813-12809a93b8de",
  label: "India's Most Trusted Certified Refurbished Laptops & MacBooks",
  imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1800&auto=format&fit=crop&q=80",
};

export const mockCategories: Category[] = [
  {
    id: "cat-macbooks",
    name: "Apple MacBooks",
    billboard: {
      id: "bb-macbooks",
      label: "Certified Apple MacBooks (M1 / M2 / M3 Pro) — 1-Yr Warranty",
      imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1800&auto=format&fit=crop&q=80",
    },
  },
  {
    id: "cat-business",
    name: "Business & ThinkPads",
    billboard: {
      id: "bb-business",
      label: "Corporate Enterprise ThinkPads, Dell Latitude & XPS Series",
      imageUrl: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=1800&auto=format&fit=crop&q=80",
    },
  },
  {
    id: "cat-gaming",
    name: "Gaming Rigs",
    billboard: {
      id: "bb-gaming",
      label: "NVIDIA RTX Gaming Laptops (Asus ROG, Lenovo Legion)",
      imageUrl: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=1800&auto=format&fit=crop&q=80",
    },
  },
  {
    id: "cat-budget",
    name: "Student & Coding Under ₹35K",
    billboard: {
      id: "bb-budget",
      label: "Affordable Work & Study Laptops Starting at ₹19,999",
      imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1800&auto=format&fit=crop&q=80",
    },
  },
];

export const mockSizes: Size[] = [
  { id: "size-16gb-512gb", name: "16GB RAM / 512GB NVMe SSD", value: "16GB RAM | 512GB SSD" },
  { id: "size-32gb-1tb", name: "32GB RAM / 1TB NVMe SSD", value: "32GB RAM | 1TB NVMe" },
  { id: "size-8gb-256gb", name: "8GB RAM / 256GB SSD", value: "8GB RAM | 256GB SSD" },
  { id: "size-64gb-2tb", name: "64GB RAM / 2TB NVMe SSD", value: "64GB RAM | 2TB NVMe" },
];

export const mockColors: Color[] = [
  { id: "color-spacegray", name: "Space Gray", value: "#4B4846" },
  { id: "color-silver", name: "Silver", value: "#E1E1E1" },
  { id: "color-midnight", name: "Midnight Black", value: "#1A1D20" },
  { id: "color-matteblack", name: "Stealth Matte Black", value: "#111111" },
  { id: "color-platinum", name: "Platinum Silver", value: "#D9D9D9" },
];

export const mockProducts: Product[] = [
  {
    id: "laptop-1",
    name: "Apple MacBook Pro 14\" (M2 Pro 10-Core, 16GB Unified RAM, 512GB SSD)",
    price: "109999",
    isFeatured: true,
    category: mockCategories[0],
    size: mockSizes[0],
    color: mockColors[0],
    images: [
      { id: "img-mbp14-1", url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80" },
      { id: "img-mbp14-2", url: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=80" },
    ],
  },
  {
    id: "laptop-2",
    name: "Lenovo ThinkPad X1 Carbon Gen 10 (Intel Core i7-1260P, 16GB, 512GB SSD)",
    price: "64999",
    isFeatured: true,
    category: mockCategories[1],
    size: mockSizes[0],
    color: mockColors[3],
    images: [
      { id: "img-tp-1", url: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop&q=80" },
      { id: "img-tp-2", url: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&auto=format&fit=crop&q=80" },
    ],
  },
  {
    id: "laptop-3",
    name: "Dell XPS 15 9520 OLED (Intel i7-12700H, RTX 3050 Ti 4GB, 32GB, 1TB SSD)",
    price: "89999",
    isFeatured: true,
    category: mockCategories[1],
    size: mockSizes[1],
    color: mockColors[4],
    images: [
      { id: "img-xps-1", url: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&auto=format&fit=crop&q=80" },
      { id: "img-xps-2", url: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&auto=format&fit=crop&q=80" },
    ],
  },
  {
    id: "laptop-4",
    name: "ASUS ROG Zephyrus G14 (AMD Ryzen 9 6900HS, Radeon 6800S, 16GB, 1TB)",
    price: "79999",
    isFeatured: true,
    category: mockCategories[2],
    size: mockSizes[1],
    color: mockColors[1],
    images: [
      { id: "img-rog-1", url: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80" },
      { id: "img-rog-2", url: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&auto=format&fit=crop&q=80" },
    ],
  },
  {
    id: "laptop-5",
    name: "Apple MacBook Air 13\" (Apple M1 Chip, 8GB Unified, 256GB SSD)",
    price: "48999",
    isFeatured: true,
    category: mockCategories[0],
    size: mockSizes[2],
    color: mockColors[0],
    images: [
      { id: "img-mba-1", url: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=80" },
      { id: "img-mba-2", url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80" },
    ],
  },
  {
    id: "laptop-6",
    name: "Lenovo Legion 5 Pro (AMD Ryzen 7 5800H, RTX 3070 140W TGP, 32GB, 1TB)",
    price: "84999",
    isFeatured: true,
    category: mockCategories[2],
    size: mockSizes[1],
    color: mockColors[2],
    images: [
      { id: "img-legion-1", url: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=800&auto=format&fit=crop&q=80" },
    ],
  },
  {
    id: "laptop-7",
    name: "HP EliteBook 840 G8 (Intel Core i5 11th Gen, 16GB RAM, 256GB NVMe SSD)",
    price: "32999",
    isFeatured: true,
    category: mockCategories[3],
    size: mockSizes[0],
    color: mockColors[1],
    images: [
      { id: "img-hp-1", url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=80" },
    ],
  },
  {
    id: "laptop-8",
    name: "Apple MacBook Pro 16\" (M1 Max 32-Core GPU, 64GB Unified RAM, 2TB SSD)",
    price: "159999",
    isFeatured: true,
    category: mockCategories[0],
    size: mockSizes[3],
    color: mockColors[0],
    images: [
      { id: "img-mbp16-1", url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80" },
    ],
  },
];
