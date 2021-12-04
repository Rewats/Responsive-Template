function openslidemenu() {
    document.getElementById("menu").style.width = "35%";
    document.getElementById("content").style.marginLeft = "35%";
    document.getElementById("menu").style.transition = "0.7s ease-in";
    document.getElementById("content").style.transition = "0.7s ease-in";
    document.getElementById("navbar").style.marginLeft = "35%";
    document.getElementById("navbar").style.transition = "0.7s ease-in";
    document.getElementById("main1").style.marginLeft = "35%";
    document.getElementById("main1").style.transition = "0.7s ease-in";
    document.getElementById("main2").style.marginLeft = "35%";
    document.getElementById("main2").style.transition = "0.7s ease-in";
    document.getElementById("main3").style.marginLeft = "35%";
    document.getElementById("main3").style.transition = "0.7s ease-in";
    
}

function closeslidemenu() { 
    document.getElementById("menu").style.width = "0%";
    document.getElementById("content").style.marginLeft = "0%";
    document.getElementById("menu").style.transition = "0.7s ease-in";
    document.getElementById("content").style.transition = "0.7s ease-in";
    document.getElementById("navbar").style.marginLeft = "0%";
    document.getElementById("navbar").style.transition = "0.7s ease-in";
    document.getElementById("main1").style.marginLeft = "0%";
    document.getElementById("main1").style.transition = "0.7s ease-in";
    document.getElementById("main2").style.marginLeft = "0%";
    document.getElementById("main2").style.transition = "0.7s ease-in";
    document.getElementById("main3").style.marginLeft = "0%";
    document.getElementById("main3").style.transition = "0.7s ease-in";

}

consoleText3(['My Website'], 'text3', ['white']);

    function consoleText3(words, id, colors) {
      if (colors === undefined) colors = ['#fff'];
      var visible = true;
      var con = document.getElementById('console3');
      var letterCount = 1;
      var x = 0.7;
      var waiting = false;
      var target = document.getElementById(id)
      target.setAttribute('style', 'color:' + colors[0])
      window.setInterval(function () {

        if (letterCount === 0 && waiting === false) {
          waiting = true;
          target.innerHTML = words[0].substring(0, letterCount)
          window.setTimeout(function () {
            var usedColor = colors.shift();
            colors.push(usedColor);
            var usedWord = words.shift();
            words.push(usedWord);
            x = 1;
            target.setAttribute('style', 'color:' + colors[0])
            letterCount += x;
            waiting = false;
          }, 1000)
        } else if (waiting === false) {
          target.innerHTML = words[0].substring(0, letterCount)
          letterCount += x;
        }
      }, 120)
    }
