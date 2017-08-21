
function generateSineWave(sampleRate, frequency, i) {
    return Math.sin((2*Math.PI) * (i / sampleRate) * frequency);
}

function generateViolinWave(sampleRate, frequency, i) {
    var t = i / sampleRate;
    var y = 0;
    var atotal = 0;
    for (var harm=1; harm<=7;harm++) {
        var f2 = frequency*harm;
        var A = 1/harm;
        atotal += A;
        y += A*Math.sin(f2*2**Math.PI*t);
    }
    var res = y/atotal;
    res *= (1-.05*Math.sin(2*Math.PI*6*t));
    res *= (1-Math.exp(-t*3));
    return res;
}

function keyToFreq(key) {
    return 440 * (2 ** ((key-69) / 12));
}

function dft(a) {
    var reArr = [];
    var imArr = [];
    for (var i = 0; i < a.length; i++) {
        var re = 0.0;
        var im = 0.0;
        for (var j = 0; j < a.length; j++) {
            var th = 2*Math.PI/a.length*i*j;
            re += a[j] * Math.cos(th);
            im += a[j] * Math.sin(th);
        }
        reArr.push(re);
        imArr.push(im);
    }
    return {"re": rearr, "im": imarr};
}

document.addEventListener("DOMContentLoaded", () => {
    var defaultColor = "#A9A9A9";
    var dragColor = "#98FB98";
    var elDragDrop = document.getElementById('dragdrop');
    elDragDrop.addEventListener("dragover", (e) => {
        e.preventDefault();
        elDragDrop.style["color"] = dragColor;
        elDragDrop.style["border-color"] = dragColor;
    });
    elDragDrop.addEventListener("dragleave", (e) => {
        e.preventDefault();
        elDragDrop.style["color"] = defaultColor;
        elDragDrop.style["border-color"] = defaultColor;
    });
    elDragDrop.addEventListener("drop", (e) => {
        elDragDrop.style["display"] = "none";
    });
    
    var loader = new DragDropLoader(elDragDrop);
    loader.loadBuffer().then((buffer) => {
        var els = [];
        for (var i = 0; i < 64; i++) {
            var el = document.createElement("div");
            el.style["position"] = "absolute";
            el.style["left"] = Math.floor(window.innerWidth / 64) * i + "px";
            el.style["width"] = Math.floor(window.innerWidth / 64) + "px";
            el.style["height"] = "0px";
            el.style["background"] = "#98FB98";
            document.body.appendChild(el);
            els.push(el);
        }
        var visualizer = new Visualizer(buffer, 0.8, 128, (count, freqs) => {
            for (var i = 0; i < count; i++) {
                els[i].style["height"] = Math.floor(freqs[i] / 255 * window.innerHeight) + "px";
            }
        });
        visualizer.start();
    });
});

// var notemaps = {};
// var midiinput = new MidiInput((note, key, vel) => {
//     console.log(`${note} ${key} ${vel}`);
//     if (note == MidiNoteon) {
//         console.log(keyToFreq(key));
//         var sinsound = new ScriptSound(vel / 127 * 0.3, (i) => {
//             // return generateSineWave(sampleRate, keyToFreq(key), i);
//             return generateViolinWave(sampleRate, keyToFreq(key), i);
//         });
//         sinsound.play();
//         notemaps[key] = sinsound;
//     } else if (note == MidiNoteoff) {
//         notemaps[key].release(0.0035);
//     }
// });
