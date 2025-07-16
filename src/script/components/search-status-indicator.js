class SearchStatusIndicator extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._style = document.createElement('style');
    }

    connectedCallback() {
        this.render();
    }
    _updateStyle(){
        this._style.textContent =`
        .placeholder {
          margin-block: 1rem;
          font-size: 1.5rem;
          font-weight: lighter;
          color: rgba(0, 0, 0, 0.5);
        }
        `
    }
    render() {
        this._updateStyle();
        this._shadowRoot.appendChild(this._style);
        this._shadowRoot.innerHTML += `
        <div class="placeholder">
            <slot></slot>
        </div>
        `
    }
}

customElements.define('search-status-indicator', SearchStatusIndicator);