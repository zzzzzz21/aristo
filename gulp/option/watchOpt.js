'use strict';

//--------------------------------------------------------------------------------
// 設定ファイルの読み込み
//--------------------------------------------------------------------------------
const path = require('../path');

//--------------------------------------------------------------------------------
// 設定のエクスポート
//--------------------------------------------------------------------------------
module.exports = {
	html: path.srcDir + path.htmlDir + '**/*.ejs',
	sass: path.srcDir + path.sassDir + '**/*.scss',
	js: path.srcDir + path.jsDir + '**/*.js'
};