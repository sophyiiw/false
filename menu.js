/* stage 7·5a · slide: s6-render · indicators 2, 7 · end state */
/* menu.js — index.html only */

/* ===== 1. The menu as data (§6) ===== */

const dishes = [
  {
    name: "Falafel",
    description: "Chickpea, herbs, and spices",
    price: 10,
    image: "falafel.jpeg",
    alt: "A falafel"
  },
  {
    name: "Pasta Salad",
    description: "Lettuce, vegetables, and mozzarella",
    price: 12,
    image: "salad.jpeg",
    alt: "A pasta salad"
  },
  {
    name: "Greek Salad", // Menu baru ketiga
    description: "Tomatoes, cucumber, olives, and feta cheese",
    price: 11,
    image: "greeksalad.jpg", // Gambar menu Greek Salad
    alt: "A Greek salad"
  },
  {
    name: "Veggie Burger", // Menu baru keempat
    description: "Vegetable patty, lettuce, tomato, and cheese",
    price: 14,
    image: "veggie burger.jpeg", // Gambar menu Veggie Burger
    alt: "A veggie burger"
  },
  {
    name: "Hummus", // Menu baru kelima
    description: "Chickpeas, tahini, lemon, and olive oil",
    price: 9,
    image: "hummus.jpeg", // Gambar menu Hummus
    alt: "A bowl of hummus"
  }
];

/* ===== 2. One rule for how a price looks (§6) ===== */

function priceLabel(price) {
  return "$" + price;
}

/* ===== 3. Build one card and one table row from one dish (§6) ===== */

function makeCard(dish) {
  const card = document.createElement("div");
  card.classList.add("dish");

  const photo = document.createElement("img");
  photo.src = dish.image;
  photo.width = 240;
  photo.height = 135;
  photo.alt = dish.alt;

  const name = document.createElement("h2");
  name.textContent = dish.name;

  const description = document.createElement("p");
  description.textContent = dish.description;

  const price = document.createElement("p");
  price.classList.add("price");
  price.textContent = priceLabel(dish.price);

  card.append(photo, name, description, price);
  return card;
}

function makeRow(dish) {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = dish.name;

  const priceCell = document.createElement("td");
  priceCell.textContent = priceLabel(dish.price);

  row.append(nameCell, priceCell);
  return row;
}

/* ===== 4. Put every dish on the page (§6) ===== */

const dishList = document.querySelector("#dishes");
const priceList = document.querySelector("#price-list");

for (const dish of dishes) {
  dishList.append(makeCard(dish));
  priceList.append(makeRow(dish));
}
