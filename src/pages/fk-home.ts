import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import "../components/fk-carousel";

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
      font-weight: 100;
    }

    .container {
      margin: 0 auto;
    }

    @media (min-width: 1200px) {
      .container {
        width: 1170px;
      }
    }

    .row {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .jc-center {
      justify-content: center;
      text-align: center;
    }

    .sm-12 {
      display: flex;
      flex-direction: column;
    }

    @media (min-width: 720px) {
      .md-3 {
        width: 25%;
      }

      .md-6 {
        width: 50%;
      }
    }
  `;

  render() {
    return html`<main>
      <div class="container">
        <div class="row">
          <div class="md-6">
            <h1>Witaj!</h1>
            <h2>
              Nasza firma zajmuje się produkcją wyrobów gipsowych.
              Specjalizujemy się w produkcji figur dewocjonalnych, których w
              swojej ofercie mamy duży asortyment.
            </h2>
            <p>
              Nasze wyroby zaliczamy do "rękodzieła" gdyż cała produkcja odbywa
              się wyłącznie z materiałów przyjaznych środowisku (z gipsu
              naturalnego) i jest pracą ludzkich rąk, począwszy od zrobienia
              form, poprzez odlew, malowanie aż do momentu wystawienia figury na
              sprzedaż.
            </p>
          </div>

          <fk-carousel class="md-6"></fk-carousel>
        </div>
        <div class="row jc-center">
          <div class="sm-12 md-3">
            <h3>Najwyższa jakość</h3>
            <p>Nasze długoletnie doświadczenie gwarantuje najwyższą jakość.</p>
          </div>

          <div class="sm-12 md-3">
            <h3>Szybka realizacja</h3>
            <p>Zapewniamy najkrótsze okresy realizacji.</p>
          </div>

          <div class="sm-12 md-3">
            <h3>Specjalne zamówienia</h3>
            <p>Nasze produkty dostosowujemy do wymagań klientów.</p>
          </div>

          <div class="sm-12 md-3">
            <h3>Renowacje, naprawy</h3>
            <p>Dokonujemy renowacji i napraw uszkodzonych figur.</p>
          </div>
        </div>
      </div>
    </main>`;
  }
}
