# webpack + Babel + gulp + browser-sync template for Three.js

ver 0.5あたり

webpackとgulpを同時起動し各ファイルをコンパイルするテンプレート自分用。
Three.jsバージョン

---

# 使い方

## start

```bash
$ npm run start
```
- start-serve : browser-sync
- webpack-watch : webpack(babel)
- gulp
  - pug
  - sass
  - + bourbon

### その他の使い方
```bash
$ npm webpack-watch
```
などで単体起動も可能。

---

# 全体の流れ

gulp, webpack, browser-syncを平行起動、gulpとwebpackでhtml, cssまたはjsを監視、コンパイルし保存。コンパイル済みのファイルをbrowser-syncで監視してブラウザをリロードする。

---
# 各機能

## gulp

```js
/src/pug/**/*.pug
/src/sass/**/*.scss
```
をコンパイルしてdist以下にディレクトリを維持したまま保存

## webpack
```js
/src/js/app.js
```
をコンパイルし, /dist/app.bundle.jsとして保存

jqueryなどはvendorとしてchunkを保存、色々してあるのでimportしないでも動くかもしれない。

## browser-sync
サーバーを管理し、/dist/ディレクトリにあるコンパイル済みのhtml, css, jsのみを監視してブラウザーをリロード
