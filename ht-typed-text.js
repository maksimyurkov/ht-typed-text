"use strict";
import { LitElement, html } from "../@polymer/lit-element/lit-element.js";
import Typed from "typed.js/src/typed.js";

class HTTypedText extends LitElement {
  _render({ textStyle }) {
    return html`
       <style>
        :host {
          display: inline;
          position: relative;
          box-sizing: border-box;
        }

        .typed-cursor {
          opacity: 1;
          animation: blink .8s infinite;
          text-decoration: none;
        }

    @keyframes blink {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
      </style>
      <span style="${textStyle}"></span>
    `;
  }

  static get is() {
    return "ht-typed-text";
  }

  static get properties() {
    return {
      textStyle: String
    };
  }

  setOptions(options) {
    new Typed(this.shadowRoot.querySelector("span"), options);
  }
}

customElements.define(HTTypedText.is, HTTypedText);
