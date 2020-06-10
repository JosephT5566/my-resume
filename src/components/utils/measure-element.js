// https://github.com/gregfleury/react-utils/blob/master/measureElement.js

import ReactDOM from 'react-dom';

const measureElement = (element, id) => {
    return new Promise((resolve) => {
        const measureLayer = document.createElement("div");
    
        measureLayer.style.display = "inline-block";
        measureLayer.style.visibility = "hidden";
        measureLayer.style.zIndex = "-1";
        measureLayer.style.position = "absolute";

        document.body.appendChild(measureLayer);
    
        // append element onto a DOM, measureLayer.
        ReactDOM.render(element, measureLayer, () => {
            let width = measureLayer.offsetWidth;
            let height = measureLayer.offsetHeight;
    
            ReactDOM.unmountComponentAtNode(measureLayer);
            measureLayer.parentNode.removeChild(measureLayer);

            resolve({width, height, id});
        });
    })
}

// measureElement(
//     <div style={{width: '100px', height: '50px'}}></div>,
//     id
// ).then( ({width, height, id}) => { console.log(width); } )
// 
// console: 50

export default measureElement;
