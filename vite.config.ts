import solid from "vite-plugin-solid";
import vike from "vike/plugin";
import { UserConfig } from "vite";
import UnoCSS from "unocss/vite";
import { presetAttributify } from "unocss";
import { resolve } from "path";

const config: UserConfig = {
  plugins: [
    solid({ ssr: true }),
    UnoCSS({
      presets: [presetAttributify({ prefix: "un-", prefixedOnly: true })],
    }),
    vike(),
  ],
  resolve: {
    alias: {
      "#lib": resolve(import.meta.dir, "lib"),
    },
  },
};

export default config;
