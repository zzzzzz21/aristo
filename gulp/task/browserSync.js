'use strict';

//--------------------------------------------------------------------------------
// パッケージの読み込み
//--------------------------------------------------------------------------------
const gulp = require('gulp');
const connect = require('gulp-connect-php');
const browserSync = require('browser-sync');

//--------------------------------------------------------------------------------
// 設定ファイルの読み込み
//--------------------------------------------------------------------------------
const taskName = require('../taskName');
const opt = require('../option/browserSyncOpt');
const optPhp = require('../option/connectPhpOpt');
const optBsPhp = require('../option/browserSyncPhpOpt');

const usePhp = false; // PHP使用する場合は true

//--------------------------------------------------------------------------------
// タスクの登録
//--------------------------------------------------------------------------------
gulp.task(taskName.browserSync, () => {
  if(usePhp){
    //--------------------------------------------------------------------------------
    // PHP使用する場合
    //--------------------------------------------------------------------------------
    connect.server(optPhp, function (){
      browserSync(optBsPhp);
    });
  } else {
    //--------------------------------------------------------------------------------
    // PHP使用しない場合
    //--------------------------------------------------------------------------------
    browserSync(opt);
  }
});