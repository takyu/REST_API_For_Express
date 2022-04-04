/**
 * node のインポート方法である require を ts でも認識させるために
 * @types/node , @types/express
 * のパッケージをインストールする。
 */
// const express = require('express'); // commonJS

// import 文で読み込む
import express, { Request, Response, NextFunction } from 'express'; // ESModule

import todoRoutes from './routes/todos';

import { json } from 'body-parser';

const port: number = 3000;
const app = express();

// request.body に変換するため
app.use(json());

// /todos へのリクエストは、全て todoRoutes のルーティング設定になる
app.use('/todos', todoRoutes);

// error 処理の　middleware 関数
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    message: err.message,
  });
});

app.listen(port);
