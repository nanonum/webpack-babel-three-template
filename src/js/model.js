'use strict'
module.exports = {
  test: function(str) {
     console.log('外部ファイルのモジュール', str);
    //  $('body').appendChild($('div').text(str))
  },
  hoge: function(){
    console.log('hogehoge')
  }
}
