const snowMany = 300;
const snows = [];
let imageDivHeight = 300;

window.onload = function() {
    imageDivHeight = document.getElementById('imageDiv').clientHeight;
    for (let id = 1; id <= snowMany; id++) {
        const snowObj = {
            x: Math.floor(Math.random() * 3000),
            y: Math.floor(Math.random() * imageDivHeight),
            element: null
        }
        const snow = document.createElement("span");
        snow.id = `snow${id}`
        snow.innerHTML = "●";
        snow.style.position = 'absolute';
        snow.style.color = 'white';
        snow.style.fontSize = '12 px';
        snow.style.top = snowObj.y + 'px';
        snow.style.left = snowObj.x + 'px';
        snowObj.element = snow;
        snows.push(snowObj);
        document.getElementById('imageDiv').appendChild(snow);
    }

    setInterval(moveSnows, 33);
}

function moveSnows() {
    for (let snowObj of snows) {
        snowObj.y = snowObj.y > imageDivHeight ? 0 : snowObj.y + 1;
        snowObj.element.style.top = snowObj.y + 'px';
    }
}