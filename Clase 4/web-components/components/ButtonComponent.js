const template = document.createElement("template");
template.innerHTML = `
<style>
    button{
        font-size: 1rem;
        border-color: transparent;
        color: white;
        margin: 1rem;
    }

    .add{
        background-color: green;
    }

    .substract{
        background-color: red;
    }

    button:hover{
        background-color: blue;
    }
</style>
    <button></button>

`;

// crear una clase para consumir el template y definir el web component

class ButtonComponent extends HTMLElement{
  constructor(){
    super()
    //añadir la sombra a la clase: shadowRoot
    this.attachShadow({ mode: 'open'})
    //Obtener el contenido del template
    const shadowTemplate = template.content.cloneNode(true)
    //agregamos el clon del template al shadowRoot de la clase
    this.shadowRoot.append(shadowTemplate)
    this.type = this.getAttribute("type")
    this.btn = this.shadowRoot.querySelector("button")

    this.btn.innerHTML = this.type;
    this.btn.classList.add(this.type);

    this.value = this.getAttribute('value'); 
    this.counterValue = this.getAttribute('value'); 
    this.number = this.shadowRoot.querySelector('h1'); 
  }

  connectedCallback(){
    console.log(`se renderizó ${this.type}`);
    if (this.type === "add") {
      this.btn.addEventListener('click', () =>{
        this.counterValue++;
        console.log(this.counterValue);
      })
    }else if(this.type === "substract"){
      this.btn.addEventListener('click', () =>{
        this.counterValue--;
        console.log(this.counterValue);
      })
    }
  }

  disconnectedCallback(){
    
  }

}
// Registramos el componente que vamos a utilizar
customElements.define("button-component", ButtonComponent)

