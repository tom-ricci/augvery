

const root = document.getElementById("root");

const loadPiece = (art, index) => {
  setTimeout(() => {
    if(art.length > index) {
      const piece = art[index];
      const source =
        `
<div class="piece body animate__animated animate__fadeInLeft">
  <div class="piece-meta">
    <h3 class="piece-text piece-title" id="piece-${index}-title">${piece.title}</h3>
    <div class="piece-flex">
      <p class="piece-text piece-desc" id="piece-${index}-desc">${piece.description}</p>
      <div class="piece-button-container">
        <a class="piece-button material-icons" id="piece-${index}-button">info</a>
      </div>
    </div>
  </div>
  <div class="piece-imgs" id="piece-${index}-imgs">
    <div>
      
    </div>
    <img src="${piece.imageUrls[0]}" onload="fadeInImage(this)" alt="Image not found!" class="piece-img"/>
    ${renderOtherImgs()}
  </div>
</div>
`
      const html = document.createRange().createContextualFragment(source);
      root.appendChild(html);
      document.getElementById(`piece-${index}-button`).addEventListener("click", (event) => {
        document.getElementById("modal-title").innerHTML = document.getElementById(`piece-${event.target.id.split("-")[1]}-title`).innerHTML;
        document.getElementById("modal-desc").innerHTML = document.getElementById(`piece-${event.target.id.split("-")[1]}-desc`).innerHTML;
        document.getElementById("modal-imgs").innerHTML = document.getElementById(`piece-${event.target.id.split("-")[1]}-imgs`).innerHTML;
        for(const child of document.getElementById("modal-imgs").children) {
          child.classList.remove("dn");
        }
        document.getElementById("modal").style.display = "flex";
      })
      loadPiece(index + 1);
    }
  }, 500);
}

const renderOtherImgs = (imgs) => {
  let output = "\n";
  imgs.shift()
  for(const img of imgs) {
    output += `<img src="${img}" alt="Image not found!" class="piece-img dn"/>\n`;
  }
  return output;
}

const getArt = async () => {
  return await fetch("https://www.augvery.com/cdn/index.json").then(res => res.json());
}

root.addEventListener("renderart", async () => {
  const art = await getArt();
  loadPiece(art, 0);
});
