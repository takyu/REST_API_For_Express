/**
 * node のインポート方法である require を ts でも認識させるために
 * @types/node , @types/express
 * のパッケージをインストールする。
 */
// const express = require('express'); // commonJS

// import 文で読み込む
import express from 'express'; // ESModule

const app = express();

app.listen(3000);
