const template = document.createElement("template");
template.innerHTML = `

    <h1>0</h1>

`;

// crear una clase para consumir el template y definir el web component

class ValueComponent extends HTMLElement{
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
customElements.define("value-component", ValueComponent)