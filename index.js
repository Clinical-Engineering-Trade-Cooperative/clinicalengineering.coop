function on(d){
  if (d == 0){
    offAll()
    document.getElementById("o0").style.display = "block";
  }
  if (d == 1){
    offAll()
    document.getElementById("o1").style.display = "block";
  }
  if (d == 2){
    offAll()
    document.getElementById("o2").style.display = "block";
  }
  if (d == 3){
    offAll()
    document.getElementById("o3").style.display = "block";
  }
  if (d == 4){
    offAll()
    document.getElementById("o4").style.display = "block";
  }
  if (d == 5){
    offAll()
    document.getElementById("o5").style.display = "block";
  }
  if (d == 6){
    offAll()
    document.getElementById("o6").style.display = "block";
  }
  if (d == 7){
    offAll()
    document.getElementById("o7").style.display = "block";
  }
  if (d == 8){
    offAll()
    document.getElementById("o8").style.display = "block";
  }
}

function off(d){
  if (d == 0){
    document.getElementById("o0").style.display = "none";
  }
  if (d == 1){
    document.getElementById("o1").style.display = "none";
  }
  if (d == 2){
    document.getElementById("o2").style.display = "none";
  }
  if (d == 3){
    document.getElementById("o3").style.display = "none";
  }
  if (d == 4){
    document.getElementById("o4").style.display = "none";
  }
  if (d == 5){
    document.getElementById("o5").style.display = "none";
  }
  if (d == 6){
    document.getElementById("o6").style.display = "none";
  }
  if (d == 7){
    document.getElementById("o7").style.display = "none";
  }
  if (d == 8){
    document.getElementById("o8").style.display = "none";
  }
}

function offAll(){
  off(0)
  off(1)
  off(2)
  off(3)
  off(4)
  off(5)
  off(6)
  off(7)
  off(8)
}