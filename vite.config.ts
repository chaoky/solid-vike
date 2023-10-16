import solid from "vite-plugin-solid";
import vike from "vike/plugin";
import { UserConfig } from "vite";
import UnoCSS from "unocss/vite";
import { presetAttributify, presetUno } from "unocss";

const config: UserConfig = {
  plugins: [
    solid({ ssr: true }),
    UnoCSS({
      presets: [
        presetUno(),
        presetAttributify({ prefix: "uno-", prefixedOnly: true }),
      ],
    }),
    vike(),
  ],
  resolve: {
    alias: { "/": import.meta.dir },
  },
};

export default config;
