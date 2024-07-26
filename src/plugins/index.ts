import { App } from "vue";
import {setupTailwindcss} from "./tailwindcss";

function setupPlugins(app:App){
    setupTailwindcss()
}

export default setupPlugins;