
function htmlrender(object , container ){
    // let htmlelement = document.createElement(object.type);
    // htmlelement.innerHTML = object.Children ;
    // htmlelement.setAttribute('href' , object.props.href);
    //  htmlelement.setAttribute('target' , object.props.target);
    //  container.appendChild(htmlelement);


         let htmlelement = document.createElement(object.type);
    htmlelement.innerHTML = object.Children ;
    for (let prop in object.props ) {
      htmlelement.setAttribute(prop , object.props[prop]);
    }
   container.appendChild(htmlelement);
}

let obj1 = {
    type : 'a',
    props : {
        href : "www.google.com" ,
        target : "_blank"
    } ,
    Children : "click me" ,
}


const mainContainer = document.getElementById("root");

htmlrender( obj1 , mainContainer)