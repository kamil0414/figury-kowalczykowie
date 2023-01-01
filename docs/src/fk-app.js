import { __decorate } from "tslib";
import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./components/fk-header";
import "./pages/fk-home";
let FkApp = class FkApp extends LitElement {
    render() {
        return html `<fk-header></fk-header><fk-home></fk-home>`;
    }
};
FkApp.styles = css `
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  `;
FkApp = __decorate([
    customElement("fk-app")
], FkApp);
export { FkApp };
//# sourceMappingURL=fk-app.js.map