let inputs;
let img;
let imgc;
let w, h;
let slider;
let slider2;
let c;
let currentColor;
let playing  = false;
let f =0;
function setup() {
    w = windowWidth*99/100;
    h = windowHeight*97/100;
    createCanvas(w, h);
    currentColor = color(0,0,0);
    inputs = createFileInput(handleFile);
    inputs.position(w*3/5, h/20);
    inputs.style('font-size', '18px');

    slider = createSlider(0.1, 5, 5,0);
    slider.position(w/20, h/20);
    slider.style('width', '200px');
    img = createImg('files/Mini Van Gogh.jpeg');
    imgc = loadImage('files/Mini Van Gogh.jpeg');
    img.hide();
    
    button = createButton('Play Song');
    button.style('font-size', '18px');
    button.position(w*4.5/10, h/20-10);
    button.size(100,50);
    button.mousePressed(playSong);
    buttonSoundType = createButton('Change Sound type ');
    buttonSoundType.style('font-size', '20px');
    buttonSoundType.position(w*3.5/10, h/20-10);
    buttonSoundType.size(100,100);
    buttonSoundType.mousePressed(changeSoundType);
  }

  function windowResized() {
    w = windowWidth*99/100;
    h = windowHeight*97/100;
    resizeCanvas(w, h);
  }


  function handleFile(file){
      print(file);
      if(file.type === 'image') {
          img = createImg(file.data, '');
          imgc = loadImage(file.data);
          //imgc.hide();
          //imgc.loadPixels();
          img.hide();

          // button = createButton('Play Song');
          // button.style('font-size', '18px');
          // button.position(w*4.5/10, h/20-10);
          // button.size(100,50);
          // button.mousePressed(playSong);
          // buttonSoundType = createButton('Change Sound type ');
          // buttonSoundType.style('font-size', '20px');
          // buttonSoundType.position(w*3.5/10, h/20-10);
          // buttonSoundType.size(100,100);
          // buttonSoundType.mousePressed(changeSoundType);
        //   button = createButton('Play Song');
        // button.style('font-size', '18px');
        // button.position(w*2/5, h/20-10);
        // button.size(100,50);
        // button.mousePressed(play);

      }
      else {
          img = null;
      }
  }

  function changeSoundType(){
    console.log(soundType);
        if(soundType == 'sine'){ soundType = 'square';}
        else if(soundType == 'square') {soundType = 'sawtooth';}
        else if(soundType == 'sawtooth') {soundType = 'triangle';}
        else if(soundType == 'triangle') {soundType = 'sine';}
  }
  function draw() {
    background(currentColor);
    fill(255);
    let val = slider.value();
    fill(255);
    textSize(30);
    text(soundType, w*2.5/10, h/20 )
    textSize(22);
    text('Change Size of Photo '+ val,w/20,30);
    fill(0);
    if (img) {
        image(img,w/2-img.width*val/2,h/10,img.width*val, img.height*val);
        //filter(BLUR, 3);

      fill(255);
        textSize(50);
        text('Upload a photo and see what song it plays!',w/4,h*3/4);
    }

    //rect(0, 100, 55, 55);
  }  
  var intervalID = window.setInterval(ChangeCurrentColor, 1000);
  function ChangeCurrentColor(){
    if(playing){
      currentColor= color(imgc.pixels[f], imgc.pixels[f+1],imgc.pixels[f+2]);
      f +=4;
  }
  }