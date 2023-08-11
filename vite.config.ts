import { defineConfig } from "vite";
// Adding million react compiler that replaces
// React virtual DOM with million virtual DOM
// That is 70% faster
import million from "million/compiler";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // Adding the million compiler to vite
  // to use millionjs VDOM wrap each the component
  // in a block function. block(React.js component)
  plugins: [million.vite(), react()],
  build: { commonjsOptions: { transformMixedEsModules: true, include: [] } },
  optimizeDeps: { disabled: false },
});
