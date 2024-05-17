import { Router } from './router.js'
import * as click from './events.js'

click.links


const router = new Router()
router.add('/', "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()