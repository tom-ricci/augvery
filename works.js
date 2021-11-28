import { art } from "./art.config.js";

const root = document.getElementById("root");

const loadPiece = (index) => {
  setTimeout(() => {
    if(art.length > index) {
      const piece = art[index];
      const source =
        `
<div class="piece body animate__animated animate__fadeInLeft">
  <div class="piece-meta">
    <h3 class="piece-text piece-title">${piece.title}</h3>
    <p class="piece-text">${piece.description}</p>
  </div>
  <div class="piece-imgs">
    <img src="${piece.imageUrls[0]}" onload="fadeInImage(this)" alt="Image not found!" class="piece-img"/>
  </div>
</div>
`
      const html = document.createRange().createContextualFragment(source);
      root.appendChild(html);
      loadPiece(index + 1);
    }
  }, 500);
}

// will use this in expanded art section
const renderImgs = (imgs) => {
  let output = "\n";
  for(const img of imgs) {
    output += `<img src="${img}" alt="Image not found!" class="piece-img"/>\n`;
  }
  return output;
}

root.addEventListener("renderart", () => {
  loadPiece(0);
});
