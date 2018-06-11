'use strict';

//--------------------------------------------------------------------------------
// パッケージの読み込み
//--------------------------------------------------------------------------------
const gulp = require('gulp');

//--------------------------------------------------------------------------------
// 設定ファイルの読み込み
//--------------------------------------------------------------------------------
const taskName = require('../taskName');

//--------------------------------------------------------------------------------
// タスクの登録
//--------------------------------------------------------------------------------
gulp.task(taskName.dev, [taskName.browserSync, taskName.watch]);
