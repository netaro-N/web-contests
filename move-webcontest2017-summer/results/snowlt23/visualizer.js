
class Visualizer {
    constructor(buffer, smooth, fftSize, drawfn) {
        this.sourceNode = audioContext.createBufferSource();
        this.sourceNode.buffer = buffer;
        this.analyserNode = audioContext.createAnalyser();
        this.analyserNode.fftSize = fftSize;
        this.freqs = new Uint8Array(this.analyserNode.frequencyBinCount);
        this.sourceNode.connect(this.analyserNode);
        this.analyserNode.connect(audioContext.destination);
        this.smooth = smooth;
        this.fftSize = fftSize;
        this.drawfn = drawfn;
    }
    start() {
        this.sourceNode.start();
        this.draw();
    }
    stop() {
        this.sourceNode.stop();
    }
    draw() {
        this.analyserNode.smoothingTimeConstant = this.smooth;
        this.analyserNode.fftSize = this.fftSize;
        this.analyserNode.getByteFrequencyData(this.freqs);
        
        this.drawfn(this.analyserNode.frequencyBinCount, this.freqs);
        window.requestAnimationFrame(this.draw.bind(this));
    }
}
