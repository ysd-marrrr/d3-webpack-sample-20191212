# d3-webpack-sample-20191212

「d3.js のnpmパッケージを使いたいがためにWebpackを設定する」サンプルプロジェクト。  
Node.jsの環境が必要です。

描画部分はほとんどこちらのサンプルからです。ありがとうございます🙇‍♂️♂️  
https://wizardace.com/d3-forcesimulation-simple/

主に次の変更を加えています。

 * npmのD3.jsを用いるようにした
 * ノード・エッジの色・大きさを調整した
 * ノードの下にテキストを表示できるようにした

## 動かしたいとき

``` bash
$ npm install
$ npm run dev
```

## デプロイ用にビルドするとき

```bash
$ npm run build
```