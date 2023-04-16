const url = "http://localhost:4377/";
const getData = document.getElementById("lessons")

const manipulate = (tets) => {
  return getData = test
}
// const reQ = new Promise(rej);
const fetchData = async (url) => {
  const req = new XMLHttpRequest();
     try {
     req.send();
     req.responseType = 'json'; // assign response type to json
     req.onreadystatechange = () => { 
     if(req.readyState === 4){ // readyState 4 is done/request finished/response is ready
       console.log(req.response)
       let data = req.response
       Object.values(data.lessons).map((e) => {
         getData.appendChild(
         Object.assign(document.createElement("p"),{
           innerText: e.id + " " + e.topic + " " +  e.description 
         }))
       })
     
       return data
     }
   }
   } catch (error) {
     return error
   }
};

  function createElement(type, attributes) {
    const element = document.createElementNS("http://www.w3.org/2000/svg", type);
      const text1 = document.createElementNS("http://www.w3.org/2000/svg",type);
    for (let key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
    return element;
  }
  const svgholder = document.getElementById("imageX")
  const svg1 = createElement('svg', { width: '100', height: '100' });
  const circle1 = createElement('circle', {
    cx: 50,
    cy: 50,
    r: 40,
    style: 'fill: red; stroke: purple; stroke-width: 4px;'
  });
  
  const textholder = document.getElementById("txt")
  const text1 = createElement('text', {
    x: 50,
    y: 50,
    'text-anchor': 'middle',
    'dominant-baseline': 'middle',
    fill: 'white',
    textContent: 'I am svg'
  }); 

  svg1.appendChild(circle1);
  textholder.appendChild(text1);
  svgholder.appendChild(svg1);
  
  fetchData()
