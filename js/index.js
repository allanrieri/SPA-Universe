import { Router } from "./router.js"
import { linkHome, linkUniverse, linkExploration } from "./elements.js"

const router = new Router()

router.add("/home", "./pages/home.html")
router.add("/universe", "./pages/universe.html")
router.add("/exploration", "./pages/exploration.html")

router.handle()

linkHome.addEventListener("click", router.controlHome)
linkUniverse.addEventListener("click", router.controlUniverse)
linkExploration.addEventListener("click", router.controlExploration)

window.onpopstate = () => router.handle()
window.route = () => router.route()
console.log(window.information = () => router.informationPage())