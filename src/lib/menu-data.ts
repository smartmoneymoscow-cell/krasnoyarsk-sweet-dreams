import eclair from "@/assets/product-eclair.jpg";
import tart from "@/assets/product-tart.jpg";
import croissant from "@/assets/product-croissant.jpg";
import cake from "@/assets/product-cake.jpg";
import macarons from "@/assets/product-macarons.jpg";
import cappuccino from "@/assets/product-cappuccino.jpg";

export type MenuCategory = "desserts" | "pastry" | "coffee";

export type MenuItem = {
  id: string;
  name: string;
  desc: string;
  price: number;
  img: string;
  category: MenuCategory;
  tag?: string;
};

export const MENU: MenuItem[] = [
  {
    id: "medovik-stolby",
    name: "Медовик «Столбы»",
    desc: "Тонкие медовые коржи, сметанный крем, засахаренная клюква.",
    price: 540,
    img: cake,
    category: "desserts",
    tag: "Хит",
  },
  {
    id: "eclair-enisey",
    name: "Эклер «Енисей»",
    desc: "Заварное тесто, крем на белом шоколаде, глянцевая карамель.",
    price: 290,
    img: eclair,
    category: "desserts",
  },
  {
    id: "tart-chasovnya",
    name: "Тарталетка «Часовня»",
    desc: "Песочная корзинка, ванильный мусс, карамелизированные орехи, золото.",
    price: 380,
    img: tart,
    category: "desserts",
    tag: "Новинка",
  },
  {
    id: "macarons-assorti",
    name: "Макаронс «Ассорти»",
    desc: "Шесть вкусов: ваниль, солёная карамель, фисташка, малина, кофе, роза.",
    price: 690,
    img: macarons,
    category: "desserts",
  },
  {
    id: "croissant-classic",
    name: "Круассан ручной складки",
    desc: "72 слоя, французское масло, сахарная пудра как первый снег.",
    price: 230,
    img: croissant,
    category: "pastry",
  },
  {
    id: "croissant-choco",
    name: "Круассан с шоколадом",
    desc: "Слоёное тесто с бельгийским тёмным шоколадом Callebaut.",
    price: 280,
    img: croissant,
    category: "pastry",
  },
  {
    id: "cappuccino-pryanik",
    name: "Капучино «Пряничный»",
    desc: "Спешелти-обжарка, молочная пена, нотка пряного сиропа и корицы.",
    price: 240,
    img: cappuccino,
    category: "coffee",
    tag: "Сезон",
  },
  {
    id: "latte-vanilla",
    name: "Латте ванильный",
    desc: "Двойной эспрессо, шёлковое молоко, ваниль Мадагаскар.",
    price: 260,
    img: cappuccino,
    category: "coffee",
  },
  {
    id: "raf-caramel",
    name: "Раф карамельный",
    desc: "Сливки, эспрессо, солёная карамель домашней варки.",
    price: 290,
    img: cappuccino,
    category: "coffee",
  },
];

export const CATEGORIES: { id: MenuCategory | "all"; label: string }[] = [
  { id: "all", label: "Всё меню" },
  { id: "desserts", label: "Десерты" },
  { id: "pastry", label: "Выпечка" },
  { id: "coffee", label: "Кофе" },
];
