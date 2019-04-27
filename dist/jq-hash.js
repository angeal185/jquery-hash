
(function($) {

  function str2u8(string) {
    let arrayBuffer = new ArrayBuffer(string.length * 1);
    let newUint = new Uint8Array(arrayBuffer);
    newUint.forEach((_, i) => {
      newUint[i] = string.charCodeAt(i);
    });
    return newUint;
  }

  function u82str(STR) {
    let str = ''
    for (var i=0; i <  STR.byteLength; i++) {
        str += String.fromCharCode(STR[i])
    }
    return str;
  }

  function s2h(str){
    try{
      let hex = '';
      for(var i=0;i<str.length;i++) {
        hex += '' + str.charCodeAt(i).toString(16);
      }
      return hex;
    }catch(err){
       if(err){return console.log(err)}
    }
  }

 /**
 * $.hash(str, digest, enc, cb)
 * @param {string} str ~ string to be hashed
 * @param {string} digest ~ 1/256/384/512
 * @param {string} enc ~ hex/base64/Uint8
 * @param {function} cb ~ callback
 */

  $.hash = function(str, digest, enc, cb){
    window.crypto.subtle.digest({name: 'SHA-'+ digest}, str2u8(str))
    .then(function(res){
      if(enc === 'base64'){
        cb(btoa(u82str(new Uint8Array(res))))
      } else if(enc === 'Uint8'){
        cb(new Uint8Array(res))
      } else {
        cb(s2h(u82str(new Uint8Array(res))))
      }
    })
    .catch(function(err){
      console.error(err);
    });
  }

}(jQuery));
