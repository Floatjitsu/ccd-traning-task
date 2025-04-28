import PageManager from "./PageManager.js";
import InputManager from "./InputManager.js";

class OutputManager {
  #pages = [];
  #pageIndexToShow = 0;

  constructor(rawInput, pageLines) {
    this.#pages = new PageManager().createPages(rawInput, pageLines);
  }

  output() {
    this.#outputPage(this.#pages[0]);
    new InputManager().awaitInput(this.handleInput.bind(this));
  }

  handleInput(answer) {
    switch (answer.toUpperCase()) {
      case "F":
        this.#pageIndexToShow = 0;
        break;
      case "N":
        this.#pageIndexToShow =
          this.#pageIndexToShow == this.#pages.length - 1
            ? this.#pageIndexToShow
            : this.#pageIndexToShow + 1;
        break;
      case "P":
        this.#pageIndexToShow =
          this.#pageIndexToShow == 0
            ? this.#pageIndexToShow
            : this.#pageIndexToShow - 1;
        break;
      case "L":
        this.#pageIndexToShow = this.#pages.length - 1;
        break;
      case "E":
        process.exit();
    }
    this.#outputPage(this.#pages[this.#pageIndexToShow]);
  }

  #outputPage(page) {
    for (const element of page.getContent()) {
      console.log(element);
    }
  }
}

export default OutputManager;
