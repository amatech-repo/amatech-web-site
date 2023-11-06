const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "960px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      spacing: {
        22: "5.5rem", // 88px
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main: "#333", // メインテキスト
        sub: "#303030", // サブテキスト
        "amatech-log": "#3DAAFC", // あまてくロゴカラー
        title: "#252D58", // タイトル
        "sub-title": "#A9C0CB", // サブタイトル: タイトル下の日本語訳
        "background-object": "#D6EAF3", // 背景オブジェクト
        "news-background": "#f8fafc", // ニュース背景
        background: "#F0FAFF", // 背景
        gray: "#AAAAAA", // グレーテキスト
        white: colors.white,
      },
      borderRadius: {
        32: "32px",
      },
      fontFamily: {
        base: "YuGothic", // 游ゴシック
        concept: "YuMincho", // 游明朝体
        title: "var(--font-urbanist)", // アーバニスト
      },
      animation: {
        "top-logo": "3d-move 18s ease-in-out infinite",
      },
      keyframes: {
        "3d-move": {
          "0%,100%": {
            transform:
              "perspective(800px) rotateX(12deg) rotateY(24deg) scale3d(1, 1, 1)",
          },
          "25%": {
            transform:
              "perspective(800px) rotateX(-18deg) rotateY(-5deg) scale3d(1, 1, 1)",
          },
          "50%": {
            transform:
              "perspective(800px) rotateX(8deg) rotateY(-20deg) scale3d(1, 1, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};
