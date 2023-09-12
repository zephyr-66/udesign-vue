import { defineConfig } from "vitepress";
import VueMacros from "unplugin-vue-macros/vite";
import VueJsx from "@vitejs/plugin-vue-jsx";
import mPlugin from "./plugin/vite-plugin-md";
import { resolve } from "path";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import resolvers from "udesign-vue/es/resolvers";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "udesign-vue",
  description:
    "udesign-vue is a Vue 3 UI library that contains a set of high quality components and demos for building rich, interactive user interfaces.",
  vite: {
    resolve: {
      alias: {
        "@demos": resolve(__dirname, "../demos"),
      },
    },
    plugins: [
      VueMacros({
        plugins: {
          vueJsx: VueJsx(),
        },
      }),
      Components({ resolvers: [ElementPlusResolver(), resolvers()] }),
      mPlugin({
        demoSrc: "docs/demos",
      }),
    ],
    ssr: {
      noExternal: ["udesign-vue", "element-plus", "file-saver"],
    },
  },
  base: "/udesign-vue/",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "指南", link: "/guide/", activeMatch: "/guide/" },
      { text: "组件", link: "/component/menu", activeMatch: "/component/" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "指南",
          items: [
            {
              text: "安装",
              link: "/guide/",
            },
            {
              text: "按需引入",
              link: "/guide/on-demand",
            },
            {
              text: "完整引入",
              link: "/guide/whole",
            },
          ],
        },
      ],
      "/component/": [
        {
          text: "指南",
          items: [
            {
              text: "Menu 菜单",
              link: "/component/menu",
            },
            {
              text: "Table 表格",
              link: "/component/table",
            },
          ],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],

    outline: {
      label: "本页目录",
    },
  },
});
