import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["nav"];

  initialize() {
    this.timeout = false;
    this.delay = 250;
    this.body = null;
  }

  connect() {
    this.body = document.body;
    window.addEventListener("resize", () => this.handleResize());
  }

  toggleMenu(e) {
    e.preventDefault();
    this.element.classList.toggle("has-mobile-sidebar-open");
    this.body.classList.toggle("has-disabled-scroll");
    // this.navTarget.scrollTop = 0;
  }

  closeMenu() {
    this.element.classList.remove("has-mobile-sidebar-open");
    this.body.classList.remove("has-disabled-scroll");
  }

  handleResize() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.closeMenu(), this.delay);
  }
}
