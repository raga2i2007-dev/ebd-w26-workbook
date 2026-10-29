import { items } from "./items.js";

export function renderItems(list) {
  const listElement = document.querySelector("#list");
  listElement.replaceChildren();

  list.forEach((item) => {
    const li = document.createElement("li");
    li.className = "listing";
    li.textContent = `${item.name} (${item.category})`;
    listElement.appendChild(li);
  });
}

export function matching() {
  return items.filter((item) => item.price < 100);
}

export function start() {
  renderItems(items);

  const button = document.querySelector("#shortlist");

  button.addEventListener("click", () => {
    renderItems(matching());
  });
}

