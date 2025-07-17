class SectionWithTitle extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }

  connectedCallback() {
    this.render();
  }

  _updateStyle() {
    this._style.textContent = `
        .title-section {
          margin-block-end: 2rem;
          font-size: 1.2em;
        }
        `;
  }

  render() {
    this._updateStyle();
    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
        <div class="title-section">
        <h2>Sport Club List</h2>
        </div>
        <slot></slot>
        `;
  }
}

customElements.define('section-with-title', SectionWithTitle);
