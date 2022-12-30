import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("fk-home")
export class FkHome extends LitElement {
  static styles = css`
    :host {
      display: flex;
      background-image: url(./src/assets/bg.jpg);
      background-repeat: repeat;
      background-size: inherit;
      background-attachment: fixed;
      background-position: 0 0;
      flex: 1;
    }

    main {
      display: flex;
      flex: 1;
    }

    h1 {
      margin-bottom: 40px;
      font-size: 100px;
      line-height: 100px;
      font-weight: 300;
    }

    h4 {
      font-weight: 300;
    }

    .container {
      margin: 0 auto;
    }

    @media (min-width: 1200px) {
      .container {
        width: 1170px;
      }
    }
  `;

  render() {
    return html`<main>
      <div class="container">
        <div class="flex">
          <h1>Witaj!</h1>
          <h2>
            Nasza firma zajmuje się produkcją wyrobów gipsowych. Specjalizujemy
            się w produkcji figur dewocjonalnych, których w swojej ofercie mamy
            duży asortyment.
          </h2>
          <h4>
            Nasze wyroby zaliczamy do "rękodzieła" gdyż cała produkcja odbywa
            się wyłącznie z materiałów przyjaznych środowisku (z gipsu
            naturalnego) i jest pracą ludzkich rąk, począwszy od zrobienia form,
            poprzez odlew, malowanie aż do momentu wystawienia figury na
            sprzedaż.
          </h4>
        </div>
      </div>
    </main>`;
  }
}
