var Sound_0
var keyCode = null;

function preload() {

  Sound_0 = loadSound("resources/keySoundReference/0.wav")
  Sound_1 = loadSound("resources/keySoundReference/1.wav")
  Sound_2 = loadSound("resources/keySoundReference/2.wav")
  Sound_3 = loadSound("resources/keySoundReference/3.wav")
  Sound_4 = loadSound("resources/keySoundReference/4.wav")
  Sound_5 = loadSound("resources/keySoundReference/5.wav")
  Sound_6 = loadSound("resources/keySoundReference/6.wav")
  Sound_7 = loadSound("resources/keySoundReference/7.wav")
  Sound_8 = loadSound("resources/keySoundReference/8.wav")
  Sound_9 = loadSound("resources/keySoundReference/9.wav")

  Sound_a = loadSound("resources/keySoundReference/a.WAV")
  Sound_b = loadSound("resources/keySoundReference/b.WAV")
  Sound_c = loadSound("resources/keySoundReference/c.WAV")
  Sound_d = loadSound("resources/keySoundReference/d.WAV")
  Sound_e = loadSound("resources/keySoundReference/e.WAV")
}


function setup() {
  createCanvas(displayWidth-100,displayHeight-220)
}



function draw() {
 
    keyCode = null
    key_value()

    switch(keyCode){

      case 48 : background(255);
                Sound_0.play();
                textSize(200);
                strokeWeight(15);
                stroke (0);
                fill (0);
                text ("0 - ZERO" , width/4,height/2);
      break;

      case 49 : background(255);
                Sound_1.play();
                textSize(200);
                strokeWeight(15);
                stroke (0);
                fill (0);
                text ("1 - ONE" , width/4,height/2);
      break;

      case 50 : background(255);
                Sound_2.play();
                textSize(200);
                strokeWeight(15);
                stroke (0);
                fill (0);
                text ("2 - TWO" , width/4,height/2);
      break;

      case 51 : background(255);
                Sound_3.play();
                textSize(200);
                strokeWeight(15);
                stroke (0);
                fill (0);
                text ("3 - THREE" , width/4,height/2);
      break;

      case 52 : background(255);
                Sound_4.play();
                textSize(200);
                strokeWeight(15);
                stroke (0);
                fill (0);
                text ("4 - FOUR" , width/4,height/2);
      break;

      case 53 : background(255);
                Sound_5.play();
                textSize(200);
                strokeWeight(15);
                stroke (0);
                fill (0);
                text ("5 - FIVE" , width/4,height/2);
      break;

      case 54 : background(255);
                Sound_6.play();
                textSize(200);
                strokeWeight(15);
                stroke (0);
                fill (0);
                text ("6 - SIX" , width/4,height/2);
      break;
      
      case 55 : background(255);
                Sound_7.play();
                textSize(200);
                strokeWeight(15);
                stroke (0);
                fill (0);
                text ("7 - SEVEN" , width/4,height/2);
      break;

      case 56 : background(255);
                Sound_8.play();
                textSize(200);
                strokeWeight(15);
                stroke (0);
                fill (0);
                text ("8 - EIGHT" , width/4,height/2);
      break;

      case 57 : background(255);
                Sound_9.play();
                textSize(200);
                strokeWeight(15);
                stroke (0);
                fill (0);
                text ("9 - NINE" , width/4,height/2);
      break;

      case 97 : background(255);
                Sound_a.play();
                textSize(200);
                strokeWeight(10);
                stroke (0);
                fill (0);
                text ("a" , width/2,height/2);
      break;

      case 98 : background(255);
                Sound_b.play();
                textSize(200);
                strokeWeight(10);
                stroke (0);
                fill (0);
                text ("b" , width/2,height/2);
      break;

      
      case 99 : background(255);
                Sound_c.play();
                textSize(200);
                strokeWeight(10);
                stroke (0);
                fill (0);
                text ("c" , width/2,height/2);
      break;

      case 100 : background(255);
                Sound_d.play();
                textSize(200);
                strokeWeight(10);
                stroke (0);
                fill (0);
                text ("d" , width/2,height/2);
      break;



      default: break;
    }

}

function key_value(){

  if (keyDown("0")){
    keyCode = 48
  }

  if (keyDown("1")){
    keyCode = 49
  }

  if (keyDown("2")){
    keyCode = 50
  }

  if (keyDown("3")){
    keyCode = 51
  }

  if (keyDown("4")){
    keyCode = 52
  }

  if (keyDown("5")){
    keyCode = 53
  }

  if (keyDown("6")){
    keyCode = 54
  }

  if (keyDown("7")){
    keyCode = 55
  }

  if (keyDown("8")){
    keyCode = 56
  }

  if (keyDown("9")){
    keyCode = 57
  }

  if (keyDown("a")){
    keyCode = 97
  }

  if (keyDown("b")){
    keyCode = 98
  }

  if (keyDown("c")){
    keyCode = 99
  }

  if (keyDown("d")){
    keyCode = 100
  }
}