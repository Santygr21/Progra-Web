const template = document.createElement("template")
template.innerHTML = `
<style>
      h1{
        color: #111ceb;
      }
    </style>
<header>
  <h1><slot></slot></h1>
</header>
`

//Clase para consumir el template y definir el web component
class HeaderComponent extends HTMLElement {
  constructor(){
    super()
    //añadir la sombra a la clase: ShadowRoot
    this.attachShadow({mode: "open"})
    //Obtener el contenido del template
    const shadowTemplate = template.content.cloneNode(true) //Se pone true para que sea una copia profunda. (La superficial no copia lo anidado de las etiquetas(hijos))
    //Agregamos el clon del template al ShadowRoot de la clase
    this.shadowRoot.append(shadowTemplate)
  }
}

//Registramos el componente que vamos a utilizar
customElements.define("header-component", HeaderComponent)