class footer extends HTMLElement {
  static style = `.footer{
        height: 100px;
        width:100%;
        background-color: var(--Secondary_Color_50);
        color: var(--Additional_Color_White);
        display: grid;
        place-items: center;
        position: relative;
        bottom:0px;
        font-size:var(--Body_Bold_Size);
      }`;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.styling();
    this.render();
  }
  static get observedAttributes() {
    return ["position", "top"];
  }
  attributeChangedCallback(name, oldvalue, newvalue) {
    if (name === "position") {
      if (newvalue === "relative") {
        alert("relative");
      } else {
        alert("absolute");
      }
    }
  }
  styling() {
    this.stylesheet = document.createElement("style");
    this.stylesheet.textContent = footer.style;
    this.shadowRoot.appendChild(this.stylesheet);
  }
  render() {
    this.footerDiv = document.createElement("div");
    this.footerDiv.className = "footer";
    this.footerSpan = document.createElement("div");
    this.footerSpan.textContent = "COPYRIGHT © 2021 台北一日遊";
    this.footerDiv.appendChild(this.footerSpan);
    this.shadowRoot.appendChild(this.footerDiv);
  }
}



export { footer};
