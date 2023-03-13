const list = [
  'a','i','u','e','o','ya','yu','yo','ka','ki','ku','ke','ko','kya','kyu','kyo','ga','gi','gu','ge','go','gya','gyu','gyo','sa','shi','su','se','so','sha','shu','sho','za',
  'zi','zu','ze','zo','ja','ju','jo','ta','chi','tsu','te','to','cha','chu','cho','da','di','du','de','do','na','ni','nu','ne','no','nya','nyu','nyo','ha','hi','fu','he','ho',
  'hya','hyu','hyo','ba','bi','bu','be','bo','bya','byu','byo','pa','pi','pu','pe','po','pya','pyu','pyo','ra','ri','ru','re','ro','rya','ryu','ryo','ma','mi','mu','me','mo',
  'mya','myu','myo','wa','wo','n'
]

function get_random(list) {
return list[Math.floor((Math.random()*list.length))]
}

console.log(get_random(list))

//node Desktop\jopa\test\bebra.js  