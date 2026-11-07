export type Category = "coffee" | "non-coffee" | "bakery";

export type MenuItem = {
  name: string;
  desc: string;
  price: number;
  category: Category;
  featured?: boolean;
};

export const categories: { id: Category; label: string }[] = [
  { id: "coffee", label: "Coffee" },
  { id: "non-coffee", label: "Non-coffee" },
  { id: "bakery", label: "Bakery" },
];

export const menu: MenuItem[] = [
  { name: "Barako Black", desc: "Our house brew. Bold, earthy and a little smoky, served hot or over ice.", price: 120, category: "coffee", featured: true },
  { name: "Ube Latte", desc: "Purple yam, espresso and steamed milk.", price: 165, category: "coffee" },
  { name: "Spanish Latte", desc: "Sweet, creamy and strong.", price: 155, category: "coffee" },
  { name: "Calamansi Cold Brew", desc: "Bright, sharp and very refreshing.", price: 150, category: "coffee" },

  { name: "Matcha Milk", desc: "Ceremonial grade, lightly sweet.", price: 160, category: "non-coffee" },
  { name: "Tablea Hot Choc", desc: "Thick native cacao.", price: 140, category: "non-coffee" },
  { name: "Calamansi Soda", desc: "Fizzy, tart and just sweet enough.", price: 110, category: "non-coffee" },

  { name: "Pandesal Box", desc: "Six warm rolls with butter.", price: 90, category: "bakery" },
  { name: "Ensaymada", desc: "Soft, buttery and topped with cheese.", price: 85, category: "bakery" },
  { name: "Banana Bread", desc: "Baked daily, best with barako.", price: 95, category: "bakery" },
  { name: "Pan de Coco", desc: "Sweet coconut filling inside a soft roll.", price: 80, category: "bakery" },
];