'use strict';

//--------------------------------------------------------------------------------
// 設定ファイルの読み込み
//--------------------------------------------------------------------------------
const path = require('../path');

//--------------------------------------------------------------------------------
// 設定のエクスポート
//--------------------------------------------------------------------------------
module.exports = {
	entry: [
		{
			// 対象ファイル
			src: path.srcDir + path.spriteDir + '!(_)*.+(jpg|png|gif)',
			// 出力先
			dest: {
				img: path.srcDir + path.imagesDir,
				sass: path.srcDir + path.sassDir + 'helpers/'
			},
			// 出力するファイル名
			out: {
				img: 'sprite.png',
				sass: '_sprite.scss'
			},
			// CSSから画像までのパス
			path: '../images/',
			// 各画像の間隔を指定
			padding: 10
		}
	]
};
