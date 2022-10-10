const input = document.getElementById("input");

input.addEventListener("change", extractChildrens);

function extractChildrens(e) {
  const file = e.target.files[0];
  const svgXml = svgToXml(file);
  const childrens = getChildrens(svgXml);
  console.log(childrens); // manipular a gusto
}

function svgToXml(file) {
  let reader = new FileReader();
  reader.readAsText(file);
  let svg;
  reader.onload = function (e) {
    svg = e.target.result;
  };
  return svg;
}

function getChildrens(svgXml) {
  const div = document.createElement("div");
  div.innerHTML = svgXml;
  const svg = div.querySelector("svg");
  const childrens = svg.childNodes;
  let response = "";
  childrens.forEach(function (c) {
    response += c;
  });
  return response;
}
