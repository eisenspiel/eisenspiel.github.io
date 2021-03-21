function hello() {
    alert("АААААААААААААА")
};

function getMeme(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {      
        var img = new Image();
        img.id = "meme";
        img.src = xhr.response.url;
        img.width = 300;        
        var meme_card = document.getElementById('meme_shelter');
        meme_card.appendChild(img);
      } else {
        alert("Не удалось получить мем");        
      }
    };
    xhr.send();
};