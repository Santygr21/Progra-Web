const template = document.createElement("template")
template.innerHTML = `
<style>
      h2{
        color: #111ceb;
      }
    </style>
      <h2><slot></slot></h2>
`

class CounterComponent extends HTMLElement {
  static get observedAttributes(){
    return ['value']
  }
  constructor(){
    super()
    this.attachShadow({mode: "open"})
    const shadowTemplate = template.content.cloneNode(true) 
    this.shadowRoot.append(shadowTemplate)

    this.value = this.getAttribute('value');
    this.h2Element = this.shadowRoot.querySelector('h2');
    this.h2Element.innerText = this.value;
  }

  attributeChangedCallback(propName, oldValue, newValue){
    this[propName] = newValue; 
    this.h2Element.innerText = newValue;
  }
}

customElements.define("counter-component", CounterComponent)