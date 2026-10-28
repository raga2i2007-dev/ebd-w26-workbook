
export function addProduct(name, price) {
  const list = document.querySelector("#list");

  const card = document.createElement("li");
  card.classList.add("card");

  const heading = document.createElement("h3");
  heading.textContent = name;

  const priceTag = document.createElement("p");
  priceTag.classList.add("price");
  priceTag.textContent = `${price} EGP`;

  card.append(heading, priceTag);
  list.append(card);
}

export function removeProduct(name) {
  const list = document.querySelector("#list");

  const card = Array.from(list.querySelectorAll(".card")).find(
    (item) => item.querySelector("h3")?.textContent === name
  );

  if (card) {
    card.remove();
  }
}

export function markSoldOut(name) {
  const list = document.querySelector("#list");

  const card = Array.from(list.querySelectorAll(".card")).find(
    (item) => item.querySelector("h3")?.textContent === name
  );

  if (card) {
    card.classList.add("sold-out");
  }
}

export function clearProducts() {
  const list = document.querySelector("#list");

  for (const card of list.querySelectorAll(".card")) {
    card.remove();
  }
}

export function wireButtons() {
  document.querySelector("#add").addEventListener("click", () => {
    addProduct("Notebook", 45);
  });

  document.querySelector("#reset").addEventListener("click", () => {
    clearProducts();
  });
}
