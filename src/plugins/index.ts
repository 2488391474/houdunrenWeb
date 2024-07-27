import { App, Component } from "vue";
import { setupTailwindcss } from "./tailwindcss";

function setupPlugins(app: App) {
  setupTailwindcss();
  autoRegisterComponent(app);
}

// 自动加载全局组件
function autoRegisterComponent(app: App) {
  const components = import.meta.glob("../components/form/*.vue",{eager:true});
  Object.keys(components).forEach((key) => {
    const name = key.split("/").pop()?.replace(".vue", "") as string;
    // @ts-ignore
    app.component(name, components[key].default as Component);
  });

}

export default setupPlugins;
