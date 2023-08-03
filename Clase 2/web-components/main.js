import './style.css'

const template = document.createElement("template");
template.innerHTML = `
  <header>
    <h1>Holiwi</h1>
  </header>
`;

// crear una clase para consumir el template y definir el web component

class HeaderComponent extends HTMLElement{
  constructor(){
    super()
    //añadir la sombra a la clase: shadowRoot
    this.attachShadow({ mode: 'open'})
    //Obtener el contenido del template
    const shadowTemplate = template.content.cloneNode(true)
    //agregamos el clon del template al shadowRoot de la clase
    this.shadowRoot.append(shadowTemplate)
  }
}
// Registramos el componente que vamos a utilizar
customElements.define("header-component", HeaderComponent)