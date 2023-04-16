const url = "http://localhost:4377/";
// const reQ = new Promise(rej);
const fetchData = async (url) => {
  const req = new XMLHttpRequest();
  try {
    req.open("GET", url); // open channel
    req.send(); // send request
    const resp = await req.response;
    console.log(req);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

fetchData(url)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

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
  fetchData()
  
  svg1.appendChild(circle1);
  textholder.appendChild(text1);
  svgholder.appendChild(svg1);
  
