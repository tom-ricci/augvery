const names = [ "August", "Avery", "Lav" ];
let count = 0;
let modal = false;

const updateName = () => {
  setTimeout(() => {
    count = count < 2 ? count + 1 : 0;
    document.getElementById("name").innerText = names[count];
    updateName();
  }, 2000);
}

const triggerModal = () => {
  modal = !modal;
  console.log(modal);
  if(modal) {
    document.getElementById("modal").style.display = "flex";
  }else{
    document.getElementById("modal").style.display = "none";
  }
}

const introSequence = () => {
  const ani0 = document.getElementById("animate__intro-0");
  const ani1 = document.getElementById("animate__intro-1");
  const ani2 = document.getElementById("animate__intro-2");
  const ani3 = document.getElementById("animate__intro-3");
  const ani4 = document.getElementById("animate__intro-4");
  const ani5 = document.getElementById("animate__intro-5");
  const root = document.getElementById("root");
  ani0.addEventListener("animationend", () => {
    ani1.classList.remove("invisible");
    ani1.classList.add("animate__fadeIn");
    setTimeout(() => {
      ani2.classList.remove("invisible");
      ani2.classList.add("animate__fadeIn");
    }, 250);
  });
  ani1.addEventListener("animationend", () => {
    ani3.classList.remove("invisible");
    ani3.classList.add("animate__fadeInLeft");
    ani4.classList.add("sona-img-fade-in");
  });
  ani3.addEventListener("animationend", () => {
    ani5.classList.remove("invisible");
    ani5.classList.add("animate__fadeInDown");
    setTimeout(() => {
      const root = document.getElementById("root");
      const event = new CustomEvent("renderart");
      root.dispatchEvent(event);
    }, 500);
  });
}

const fadeInImage = (img) => {
  img.classList.add("piece-img-loaded");
}

introSequence();
updateName();
