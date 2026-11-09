// Категории услуг
export const categories = [
  { id: "hair", title: "Парикмахерские услуги" },
  { id: "nails", title: "Маникюр и педикюр" },
  { id: "brows", title: "Брови и ресницы" },
  { id: "cosmetology", title: "Косметология" },
  { id: "epilation", title: "Эпиляция" },
  { id: "massage", title: "Массаж" },
  { id: "spa", title: "SPA-процедуры" },
  { id: "wedding", title: "Свадебный образ" },
];

// Услуги
const services = [
  {
    id: 1,
    category: "hair",
    title: "Женская стрижка",
    description:
      "Стрижка любой сложности с учётом формы лица и структуры волос. Включает мытьё головы и укладку.",
    price: 1500,
    duration: "60 мин",
    image: "",
  },
  {
    id: 2,
    category: "hair",
    title: "Окрашивание в один тон",
    description:
      "Профессиональное окрашивание с использованием премиальных красителей без аммиака.",
    price: 3500,
    duration: "120 мин",
    image: "",
  },
  {
    id: 3,
    category: "nails",
    title: "Маникюр с гель-лаком",
    description:
      "Классический маникюр с покрытием гель-лаком. Стойкость до 3 недель.",
    price: 2000,
    duration: "90 мин",
    image: "",
  },
  {
    id: 4,
    category: "nails",
    title: "Наращивание ногтей",
    description: "Наращивание на форму по вашему выбору с дизайном.",
    price: 3500,
    duration: "150 мин",
    image: "",
  },
  {
    id: 5,
    category: "brows",
    title: "Коррекция и окрашивание бровей",
    description:
      "Придание формы бровям и окрашивание краской или хной.",
    price: 1200,
    duration: "45 мин",
    image: "",
  },
  {
    id: 6,
    category: "brows",
    title: "Ламинирование ресниц",
    description:
      "Процедура для выразительного взгляда без наращивания. Эффект до 6 недель.",
    price: 2500,
    duration: "90 мин",
    image: "",
  },
  {
    id: 7,
    category: "cosmetology",
    title: "Чистка лица",
    description:
      "Комбинированная чистка лица с уходовой маской и массажем.",
    price: 4000,
    duration: "90 мин",
    image: "",
  },
  {
    id: 8,
    category: "epilation",
    title: "Шугаринг (зона ног)",
    description: "Мягкая и эффективная эпиляция сахарной пастой.",
    price: 1800,
    duration: "60 мин",
    image: "",
  },
  {
    id: 9,
    category: "massage",
    title: "Расслабляющий массаж",
    description:
      "Полный массаж тела для снятия напряжения и стресса.",
    price: 3000,
    duration: "60 мин",
    image: "",
  },
  {
    id: 10,
    category: "spa",
    title: "SPA-обёртывание",
    description:
      "Питательное обёртывание с водорослями для тонуса кожи.",
    price: 3500,
    duration: "90 мин",
    image: "",
  },
  {
    id: 11,
    category: "wedding",
    title: "Свадебный образ «под ключ»",
    description:
      "Причёска + макияж + репетиция. Выезд мастера возможен.",
    price: 12000,
    duration: "180 мин",
    image: "",
  },
];

export default services;