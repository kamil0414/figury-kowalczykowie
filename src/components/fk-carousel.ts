import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("fk-carousel")
export class FkCarousel extends LitElement {
  static styles = css`
    .carousel {
      position: relative;
    }

    .carousel-inner {
      position: relative;
      overflow: hidden;
      width: 100%;
    }

    .carousel-open:checked + .carousel-item {
      position: static;
      opacity: 100;
    }

    .carousel-item {
      position: absolute;
      opacity: 0;
      -webkit-transition: opacity 0.6s ease-out;
      transition: opacity 0.6s ease-out;
    }

    .carousel-item img {
      display: block;
      height: auto;
      max-width: 100%;
    }

    .carousel-control {
      background: rgba(0, 0, 0, 0.28);
      border-radius: 50%;
      color: #fff;
      cursor: pointer;
      display: none;
      font-size: 40px;
      height: 40px;
      line-height: 35px;
      position: absolute;
      top: 50%;
      -webkit-transform: translate(0, -50%);
      cursor: pointer;
      -ms-transform: translate(0, -50%);
      transform: translate(0, -50%);
      text-align: center;
      width: 40px;
      z-index: 10;
    }

    .carousel-control.prev {
      left: 2%;
    }

    .carousel-control.next {
      right: 2%;
    }

    .carousel-control:hover {
      background: rgba(0, 0, 0, 0.8);
      color: #aaaaaa;
    }

    #carousel-1:checked ~ .control-1,
    #carousel-2:checked ~ .control-2,
    #carousel-3:checked ~ .control-3 {
      display: block;
    }

    .carousel-indicators {
      list-style: none;
      margin: 0;
      padding: 0;
      position: absolute;
      bottom: 2%;
      left: 0;
      right: 0;
      text-align: center;
      z-index: 10;
    }

    .carousel-indicators li {
      display: inline-block;
      margin: 0 5px;
    }

    .carousel-bullet {
      color: #fff;
      cursor: pointer;
      display: block;
      font-size: 35px;
    }

    .carousel-bullet:hover {
      color: #aaaaaa;
    }

    #carousel-1:checked
      ~ .control-1
      ~ .carousel-indicators
      li:nth-child(1)
      .carousel-bullet,
    #carousel-2:checked
      ~ .control-2
      ~ .carousel-indicators
      li:nth-child(2)
      .carousel-bullet,
    #carousel-3:checked
      ~ .control-3
      ~ .carousel-indicators
      li:nth-child(3)
      .carousel-bullet {
      color: #428bca;
    }

    #title {
      width: 100%;
      position: absolute;
      padding: 0px;
      margin: 0px auto;
      text-align: center;
      font-size: 27px;
      color: rgba(255, 255, 255, 1);
      font-family: "Open Sans", sans-serif;
      z-index: 9999;
      text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.33),
        -1px 0px 2px rgba(255, 255, 255, 0);
    }
  `;

  render() {
    return html`<div class="carousel">
      <div class="carousel-inner">
        <input
          class="carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          hidden=""
          checked="checked"
        />
        <div class="carousel-item">
          <img loading="lazy" src="src/assets/1.png" />
        </div>
        <input
          class="carousel-open"
          type="radio"
          id="carousel-2"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div class="carousel-item">
          <img loading="lazy" src="src/assets/2.png" />
        </div>
        <input
          class="carousel-open"
          type="radio"
          id="carousel-3"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div class="carousel-item">
          <img loading="lazy" src="src/assets/3.png" />
        </div>
        <label for="carousel-3" class="carousel-control prev control-1"
          >‹</label
        >
        <label for="carousel-2" class="carousel-control next control-1"
          >›</label
        >
        <label for="carousel-1" class="carousel-control prev control-2"
          >‹</label
        >
        <label for="carousel-3" class="carousel-control next control-2"
          >›</label
        >
        <label for="carousel-2" class="carousel-control prev control-3"
          >‹</label
        >
        <label for="carousel-1" class="carousel-control next control-3"
          >›</label
        >
        <ol class="carousel-indicators">
          <li>
            <label for="carousel-1" class="carousel-bullet">•</label>
          </li>
          <li>
            <label for="carousel-2" class="carousel-bullet">•</label>
          </li>
          <li>
            <label for="carousel-3" class="carousel-bullet">•</label>
          </li>
        </ol>
      </div>
    </div>`;
  }
}
