import { 
  linkExploration,
  linkHome,
  linkUniverse,
  page
 } from './elements.js';

export class Router {

  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event){
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)
    
    this.handle()
  }

  handle() {
    const {pathname} = window.location
    const route = this.routes[pathname] || this.routes['/home']

    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html
      })
    
  }

  controlHome() {
    page.classList.add('home')
    page.classList.remove('universe')
    page.classList.remove('exploration')
    linkHome.classList.add('bold')
    linkUniverse.classList.remove('bold')
    linkExploration.classList.remove('bold')
  }

  controlUniverse() {
    page.classList.add('universe')
    page.classList.remove('home')
    page.classList.remove('exploration')
    linkHome.classList.remove('bold')
    linkUniverse.classList.add('bold')
    linkExploration.classList.remove('bold')
  }

  controlExploration() {
    page.classList.add('exploration')
    page.classList.remove('home')
    page.classList.remove('universe')
    linkHome.classList.remove('bold')
    linkUniverse.classList.remove('bold')
    linkExploration.classList.add('bold')
  }

}