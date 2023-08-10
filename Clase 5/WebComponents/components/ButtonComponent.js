const template = document.createElement("template")
template.innerHTML = `
<style>
button {
  border-radius: 8px;
  border: none;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #111ceb;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
.Add{
  background-color: green;
  color:white
}
.Substract{
  background-color: red;
  color:white
}
</style>
      <button type="button"><slot></slot></button>
`

class ButtonComponent extends HTMLElement {
  constructor(){
    super()
    this.attachShadow({mode: "open"})
    const shadowTemplate = template.content.cloneNode(true) 
    this.shadowRoot.append(shadowTemplate)
    this.type = this.getAttribute("type")
    this.btn = this.shadowRoot.querySelector("button")
    console.log(this.btn);
    this.btn.innerText = this.type;
    this.btn.classList.add(this.type);

    this.counter = document.querySelector('counter-component');
  }

  connectedCallback(){
    this.btn.addEventListener('click', ()=>{

      //Obtenemos el valor del atributo de 'value' y lo encapsulamos a una nueva variable +1 cada que damos click
      this.currentValue = +this.counter.getAttribute('value');
      // console.log(typeof this.currentValue);
      const newValue = (this.type === "Add") ? this.add(this.currentValue) : this.substract(this.currentValue);
      console.log(newValue);
      this.counter.setAttribute('value', newValue);
    })
  }

  disconnectedCallback(){
    console.log(`Me caí ${this.type}`);
  }

   add(value) {
    return value + 1
  }

  substract(value) {
    if (value <= 0) {
      return 0;
    }else{
    return value - 1;
  }}
}


customElements.define("button-component", ButtonComponent)