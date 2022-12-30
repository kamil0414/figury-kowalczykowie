import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./components/fk-header";
import "./pages/fk-home";

@customElement("fk-app")
export class FkApp extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  `;

  render() {
    return html`<fk-header></fk-header><fk-home></fk-home>`;
  }
}
