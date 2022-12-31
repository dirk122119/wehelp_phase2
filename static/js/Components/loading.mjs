class loading extends HTMLElement {
  static style = `
    .loadingBackground{
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0,0.4); /* Fallback color */
        }

    #loadContent{
        position:absolute;
        top:50%;
        left:50%;
        width: 5rem;
        height: 5rem;
        border: 5px solid #f3f3f3;
        border-top: 6px solid #9c41f2;
        border-radius: 100%;
        margin: auto;
        visibility: visible;
        animation: spin 1s infinite linear;
        }
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
        }
        `;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
    this.styling();
  }

  static get observedAttributes() {
    return ["display"];
  }

  attributeChangedCallback(name, oldvalue, newvalue) {
    
    if (name === "display") {
      this.render();
    }
  }

  styling() {
    this.stylesheet = document.createElement("style");
    this.stylesheet.textContent = loading.style;
    this.shadowRoot.appendChild(this.stylesheet);
  }

  render() {
    if (this.loadingBackground) {
        this.loadingBackground.remove();
      }
    this.loadingBackground = document.createElement("div");
    this.loadingBackground.className = "loadingBackground";
    this.loadingContent = document.createElement("div");
    this.loadingContent.id = "loadContent";

    if (this.getAttribute("display") === "yes") {
        this.loadingBackground.style.display = "block";
      }
      if (this.getAttribute("display") === "no") {
        this.loadingBackground.style.display = "none";
      }

    this.loadingBackground.appendChild(this.loadingContent)
    this.shadowRoot.appendChild(this.loadingBackground)
  }
}
export { loading };