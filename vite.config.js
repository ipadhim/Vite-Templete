/**
 * vite.config.js
 * SPCTeam配置
 * @author ipadhim
 */

import autoprefixer from "autoprefixer";
import cssnanoPlugin from "cssnano";

/** @type {import("vite").UserConfig} */
export default {
    css: {
        postcss: {
            plugins: [
                cssnanoPlugin(),
                autoprefixer()
            ]
        }
    }
};