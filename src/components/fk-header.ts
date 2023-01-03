import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("fk-header")
export class FkHeader extends LitElement {
  static styles = css`
    .container {
      margin: 0 auto;
    }

    @media (min-width: 1200px) {
      .container {
        width: 1170px;
      }
    }

    .flex {
      display: flex;
    }

    header {
      background-color: #f5f5f5;
      color: #999999;
    }

    nav {
      height: 90px;
      box-shadow: 0 3px 3px rgb(0 0 0 / 5%);
    }

    ul {
      list-style: none;
      margin: 34px 0;
      padding: 0;
    }

    a {
      color: #3d449a;
      text-decoration: none;
    }

    #links {
      padding: 8px 0;
      display: flex;
      justify-content: space-between;
    }
  `;

  render() {
    return html`<header class="flex">
        <div class="container">
        <div id="links">
        <a href="tel:343281343">/34/ 328 13 43</a>
        <a class="mail" href="mailto:colins.duet@op.pl">colins.duet@op.pl</a>
        </div>
        </div>
      </header>
      <nav class="flex">
        <div class="container">
          <ul>
            <li>Home</li>
          </ul>
        </div>
      </nav>`;
  }
}
