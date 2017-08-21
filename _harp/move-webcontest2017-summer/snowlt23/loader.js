
class Loader {
    constructor(url) {
        this.url = url;
    }
    loadBuffer() {
        return newPromise((resolve, reject) => {
            var request = new XMLHttpRequest();
            request.open('GET', this.url, true);
            request.responseType = 'arrayBuffer';
            request.onload = () => {
                audioCtx.decodeAudioData(this.response, (buffer) => {
                    if (!buffer) {
                        console.log('buffer is nil');
                        return;
                    }
                    resolve(buffer);
                });
            }
            request.send();
        });
    }
}

class DragDropLoader {
    constructor(el) {
        this.el = el;
    }
    loadBuffer() {
        return new Promise((resolve, reject) => {
            // this.el.addEventListener('dragover', (e) => {
            //     e.preventDefault();
            //     e.stopPropagation();
            // });
            this.el.addEventListener('drop', (event) => {
                event.preventDefault();
                event.stopPropagation();
                var files = event.dataTransfer.files;
                var file = files[0];
                var reader = new FileReader();
                reader.addEventListener('load', (e) => {
                    var data = e.target.result;
                    audioContext.decodeAudioData(data, (buffer) => {{
                        resolve(buffer);
                    }});
                });
                reader.readAsArrayBuffer(file);
            });
        });
    }
}
