import { defineConfig, ConfigEnv, loadEnv, optimizeDeps } from "vite";
import vue from "@vitejs/plugin-vue";
import alias from "./vite/alias";
import { resolve } from "path";
import { parseEnv } from "./vite/util";
import setupPlugins from './vite/plugins'

export default ({command,mode}: ConfigEnv) => {
  const isBuild = command == "build";
  const root = process.cwd()
  //              传入env配置文件
  const env = parseEnv(loadEnv(mode,root))
  
  return {  
    plugins: setupPlugins(isBuild,env),
    resolve: {
      alias,
    },
    optimizeDeps: {
      include: ['import-meta-glob'],
    },
  };
};
