import FullList from "./model/FullList";
import ListItem from "./model/ListItem";
import ListTemplate from "./templates/ListTemplate";
import { v4 as uuidv4 } from "uuid";

const initApp = (): void => {
  const fullList = FullList.instance;
  const template = ListTemplate.instance;

  // Ensure form exists
  const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement;
  if (!itemEntryForm) {
    console.error("Form not found!");
    return;
  }

  // Add listener to the form
  itemEntryForm.addEventListener("submit", (e: SubmitEvent): void => {
    e.preventDefault();

    // Ensure input field exists
    const input = document.getElementById("newitem") as HTMLInputElement;
    if (!input) {
      console.error("Input field not found!");
      return;
    }

    const newEntryText: string = input.value.trim();
    if (!newEntryText) return;

    const newItem = new ListItem(uuidv4(), newEntryText, false);

    fullList.addItem(newItem);
    template.render(fullList);
    input.value = ""; // Clear input field
  });
};

document.addEventListener("DOMContentLoaded", initApp);