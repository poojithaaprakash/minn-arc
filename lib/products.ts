import fs from "fs/promises";
import path from "path";

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  description: string;
  images: string[];
  inStock: boolean;
  featured?: boolean;
  colors?: string[];
  customizable?: boolean;
};

type ProductsFile = {
  categories: Category[];
  products: Product[];
};

function getDataPath() {
  return path.join(process.cwd(), "data", "products.json");
}

// Low-level read/write helpers

export async function readData(): Promise<ProductsFile> {
  const filePath = getDataPath();
  const raw = await fs.readFile(filePath, "utf-8");
  return JSON.parse(raw) as ProductsFile;
}

export async function writeData(data: ProductsFile) {
  const filePath = getDataPath();
  const json = JSON.stringify(data, null, 2);
  await fs.writeFile(filePath, json, "utf-8");
}

// Public helpers used by pages/components

export async function getAllCategories(): Promise<Category[]> {
  const data = await readData();
  return data.categories;
}

export async function getAllProducts(): Promise<Product[]> {
  const data = await readData();
  return data.products;
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const data = await readData();
  return data.products.filter((p) => p.featured);
}

export async function getCategoryBySlug(slug: string): Promise<Category | undefined> {
  const data = await readData();
  return data.categories.find((c) => c.slug === slug);
}

export async function getProductsByCategory(slug: string): Promise<Product[]> {
  const data = await readData();
  return data.products.filter((p) => p.category === slug);
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const data = await readData();
  return data.products.find((p) => p.id === id);
}

// Admin-side helpers (you’ll call these in API routes later)

export async function addProduct(product: Product) {
  const data = await readData();
  data.products.push(product);
  await writeData(data);
}

export async function updateProduct(id: string, updates: Partial<Product>) {
  const data = await readData();
  const idx = data.products.findIndex((p) => p.id === id);
  if (idx === -1) return;
  data.products[idx] = { ...data.products[idx], ...updates, id };
  await writeData(data);
}

export async function deleteProduct(id: string) {
  const data = await readData();
  data.products = data.products.filter((p) => p.id !== id);
  await writeData(data);
}
