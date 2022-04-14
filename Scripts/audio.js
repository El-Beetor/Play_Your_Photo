const audioContext = new AudioContext();

const buffer =  audioContext.createBuffer(
    1, 
    audioContext.sampleRate * 1, 
    audioContext.sampleRate
    );

const primaryGainControl = audioContext.createGain()
primaryGainControl.gain.setValueAtTime(0.05, 0);
primaryGainControl.connect(audioContext.destination);


let imageFrequency = 440;
let soundType = 'sine';
    function playSong(){
        if(playing){ playing = false;}
        else { playing = true; 

            if(img){
    
            let playTime = 0;
            imgc.loadPixels();
            let totPixels =  4 * (imgc.width * imgc.height);
            if(totPixels > 50000){
                totPixels = 50000;
            }
            console.log(totPixels);
            for(let i = 0; i < totPixels; i+= 4){
                
                   //c = get()
                   imageFrequency = imgc.pixels[i] + imgc.pixels[i+1] + imgc.pixels[i+2];
                //    +imgc.pixels[i+4] + imgc.pixels[i+5] + imgc.pixels[i+6]
                //    +imgc.pixels[i+8] + imgc.pixels[i+9] + imgc.pixels[i+10]
                //    +imgc.pixels[i+12] + imgc.pixels[i+13] + imgc.pixels[i+14];
                //    imageFrequency /= 4;
                  //console.log(imageFrequency);
                  
                 // console.log(imgc.pixels[i]);
                    playNote(imageFrequency, playTime);
                    playTime +=1;
          
                }
            }
            
        }    
        
    }

     function playNote(fre, playTime){
       // console.log( ' '+ fre);

        const noteOscillator = audioContext.createOscillator();
        noteOscillator.type = soundType;
        noteOscillator.frequency.setValueAtTime(fre, audioContext.currentTime);

        // const noteGain = audioContext.createGain();
            // noteGain.gain.setValueAtTime(1,0);
            // noteGain.gain.exponentialRampToValueAtTime(
            //     0.001,
            //     audioContext.currentTime + 0.5
            //     );
            // for(let i =1;i< 10;i++){
            // playNote(imageFrequency*i, i);
            // }
            
        // const vibrato = audioContext.createOscillator();
        // vibrato.frequency.setValueAtTime(.5,0);
        // const vibratoGain = audioContext.createGain();
        // vibratoGain.gain.setValueAtTime(10,0);
        // vibrato.connect(vibratoGain);
        // vibratoGain.connect(noteOscillator.frequency);
        // vibrato.start();
        
        
        // noteOscillator.connect(noteGain);
        // noteGain.connect(primaryGainControl);
        noteOscillator.connect(primaryGainControl);
        noteOscillator.start(audioContext.currentTime + playTime);
        //console.log(audioContext.currentTime);
        noteOscillator.stop(audioContext.currentTime + playTime + 1);
        
     }
