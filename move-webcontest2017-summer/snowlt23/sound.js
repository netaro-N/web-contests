
// const bufferSize = 4096;
const channels = 2;

var audioContext = new(window.AudioContext || window.webkitAudioContext)();
var sampleRate = audioContext.sampleRate;

class ScriptSound {
    constructor(volume, fn) {
        // var buffers = audioContext.createBuffer(channels, frame, sampleRate);
        // for (var channel = 0; channel < channels; channel++) {
        //     var curbuf = buffers.getChannelData(channel);
        //     for (var i = 0; i < frame; i++) {
        //         curbuf[i] = fn(i);
        //     }
        // }
        // var source = audioContext.createBufferSource();
        // source.buffer = buffers;
        // this.source = source;
        var bufferSize = 4096;
        this.source = audioContext.createScriptProcessor(bufferSize, 1, 1);
        this.fn = fn;
        this.position = 0;
        this.volume = volume;
        this.source.onaudioprocess = (e) => {
            var output = e.outputBuffer.getChannelData(0);
            for (var i = 0; i < bufferSize; i++) {
                output[i] = this.volume * this.fn(this.position + i);
            }
            this.position += bufferSize;
        }
    }
    play() {
        this.source.connect(audioContext.destination);
        // this.source.start();
    }
    stop() {
        this.source.disconnect();
    }
    playms(ms) {
        this.play();
        setTimeout(() => {
            this.stop();
        }, ms);
    }
    release(dec) {
        var fn = () => {
            this.volume -= dec;
            if (this.volume <= 0) {
                this.stop();
            }
            setTimeout(fn, 1);
        };
        setTimeout(fn, 0);
    }
}

