/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        small: "url('/background/sections/small.svg')",
        medium: "url('/background/sections/medium.svg')",
        large: "url('/background/sections/large.svg')",
      },
      colors: {
        main: "#333", // メインテキスト
        sub: "#303030", // サブテキスト
        "amatech-log": "#3DAAFC", // あまてくロゴカラー
        title: "#252D58", // タイトル
        "sub-title": "#A9C0CB", // サブタイトル: タイトル下の日本語訳
        "background-object": "#D6EAF3", // 背景オブジェクト
        background: "#F0FAFF", // 背景
        gray: "#AAAAAA", // グレーテキスト
        white: colors.white,
      },
    },
    fontFamily: {
      base: "YuGothic", // 游ゴシック
      concept: "YuMincho", // 游明朝体
      title: "Urbanist", // アーバニスト
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-white-shadow": {
          textShadow: "2px 4px 0px white",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
