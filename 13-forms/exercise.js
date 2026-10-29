
export function readForm() {
  const nameInput = document.querySelector("#name");
  const priceInput = document.querySelector("#price");

  return {
    name: nameInput.value.trim(),
    price: Number(priceInput.value),
  };
}

export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

export function renderList(items) {
  const list = document.querySelector("#list");
  list.textContent = "";

  for (const item of items) {
    const card = document.createElement("li");
    card.classList.add("card");

    const heading = document.createElement("h3");
    heading.textContent = item.name;

    const priceTag = document.createElement("p");
    priceTag.classList.add("price");
    priceTag.textContent = `${item.price} EGP`;

    card.append(heading, priceTag);
    list.append(card);
  }
}

export function wireForm() {
  const form = document.querySelector("#product-form");
  const errorLine = document.querySelector("#error");
  const items = [];

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const item = readForm();
    const priceInput = document.querySelector("#price");

    if (!item.name) {
      errorLine.textContent = "Give the product a name.";
      return;
    }

    if (
      !priceInput.value ||
      !Number.isFinite(item.price) ||
      item.price <= 0
    ) {
      errorLine.textContent = "Give the product a price.";
      return;
    }

    errorLine.textContent = "";
    items.push(item);
    renderList(items);
    clearForm();
  });
}
