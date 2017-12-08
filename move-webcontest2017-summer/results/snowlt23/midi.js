
const MidiNoteon = 144;
const MidiNoteoff = 128;

class MidiInput {
    constructor(handler) {
        this.inputs = {};
        this.handler = handler;
        if (navigator.requestMIDIAccess) {
            navigator.requestMIDIAccess().then((data) => {
                var inputIterator = data.inputs.values();
                for (var input = inputIterator.next(); !input.done; input = inputIterator.next()) {
                    var value = input.value
                    this.inputs[value.name] = value;
                    value.addEventListener("midimessage", (event) => {
                        var arr = [];
                        event.data.forEach((val) => {
                            arr.push(val);
                        });
                        this.handler(arr[0], arr[1], arr[2]);
                    }, false);
                }
            }, () => {
                alert("couldn't access to MIDI device.");
            });
        }
    }
}
