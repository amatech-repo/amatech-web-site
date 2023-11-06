# 概要
- [あまてく公式webサイト](https://amatech.vercel.app)

## 環境構築
1. `git clone amatech-repo/amatech-web-site`
2. `npm ci`
3. `npm run dev`

## storybookについて
`npm run sb`で実行

## chromaticについて
- .stories.jsを作成している場合、UIを変更したら差分を検出できる。
- github actionsでPR作成時に自動実行

## tailwindについて
- className内に記述する
```TypeScript
{* 例 *}
<h1 className="{* プロパティ名 *}">hoge</h1>
```

## Branch strategy
- 機能開発: features-ブランチ名
- バグ修正: hotfix-ブランチ名, bug-ブランチ名

## Commit message
```shell
feat: 新しい機能
fix: バグの修正
docs: ドキュメントのみの変更
style: 空白、フォーマット、セミコロン追加など
refactor: 仕様に影響がないコード改善(リファクタ)
perf: パフォーマンス向上関連
test: テスト関連
chore: ビルド、補助ツール、ライブラリ関連
```
```shell
feat: 〇〇なため、△△を追加
ex) 記事の分類ができないため、タグ機能を追加
```

#　レビュー時の注意点
- PRに対して、レビューを行う際は、レビューを行うブランチをcheckoutしてください。