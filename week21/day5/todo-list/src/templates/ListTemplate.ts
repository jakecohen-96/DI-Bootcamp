import FullList from "../model/FullList";

export interface DOMList {
  ul: HTMLUListElement;
  clear(): void;
  render(fullList: FullList): void;
}

export default class ListTemplate implements DOMList {
  ul: HTMLUListElement;
  static instance: ListTemplate = new ListTemplate();

  constructor() {
    const ul = document.getElementById("listItems") as HTMLUListElement;
    if (!ul) {
      throw new Error("UL element not found!");
    }
    this.ul = ul;
  }

  clear(): void {
    this.ul.innerHTML = "";
  }

  render(fullList: FullList): void {
    this.clear();

    fullList.list.forEach((item) => {
      const li = document.createElement("li") as HTMLElement;
      li.className = "item";

      const check = document.createElement("input") as HTMLInputElement;
      check.type = "checkbox";
      check.id = item.id;
      check.checked = item.checked;
      li.appendChild(check);

      check.addEventListener("change", () => {
        item.checked = !item.checked;
        fullList.save();
      });

      const label = document.createElement("label") as HTMLLabelElement;
      label.textContent = item.item;
      label.htmlFor = item.id;
      li.appendChild(label);

      const button = document.createElement("button") as HTMLButtonElement;
      button.textContent = "X";
      button.className = "button";
      li.appendChild(button);

      button.addEventListener("click", () => {
        fullList.removeItem(item.id);
        this.render(fullList);
      });

      this.ul.appendChild(li);
    });
  }
}