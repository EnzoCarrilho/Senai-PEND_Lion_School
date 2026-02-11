'use strict'

import { router } from "./router.js";

function init() {
    router()

    window.addEventListener("hashchange", router)
}

window.addEventListener("DOMContentLoaded", init)
