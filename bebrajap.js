const list = [
    'あ','い','う','え','お','や','ゆ','よ','か','き','く','け','こ','きゃ','きゅ','きょ','が','ぎ','ぐ','げ','ご','ぎゃ','ぎゅ','ぎょ','さ','し','す','せ','そ','しゃ','しゅ','しょ',
    'ざ','じ','ず','ぜ','ぞ','じゃ','じゅ','じょ','た','ち','つ','て','と','ちゃ','ちゅ','ちょ','だ','ぢ','づ','で','ど','な','に','ぬ','ね','の','にゃ','にゅ','にょ','は','ひ','ふ',
    'へ','ほ','ひゃ','ひゅ','ひょ','ば','び','ぶ','べ','ぼ','びゃ','びゅ','びょ','ぱ','ぴ','ぷ','ぺ','ぽ','ぴゃ','ぴゅ','ぴょ','ら','り','る','れ','ろ','りゃ','りょ','りょ','ま','み',
    'む','め','も','みゃ','みゅ','みょ','わ','を','ん'
  ]
  
  function get_random(list) {
  return list[Math.floor((Math.random()*list.length))]
  }
  
  console.log(get_random(list))

  //node Desktop\jopa\test\bebrajap.js  