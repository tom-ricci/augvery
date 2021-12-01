const names = [ "August", "Avery", "Lav" ];
let count = 0;

document.getElementById("modal").addEventListener("transitionend", () => {
  if(document.getElementById("modal").style.opacity === "0") {
    document.getElementById("modal").style.display = "none";
  }
});

document.getElementById("page").addEventListener("scroll", () => {
  let scroll = Math.floor(document.getElementById("page").scrollTop);
  scroll = scroll < 0 ? 0 : scroll;
  scroll = scroll > 400 ? 400 : scroll;
  document.getElementById("sona").style.top = `${(scroll * 1.5).toString()}px`;
  scroll = 1 - scroll / 400;
  document.getElementById("sona").style.opacity = scroll.toString();
});

const updateName = () => {
  setTimeout(() => {
    count = count < 2 ? count + 1 : 0;
    document.getElementById("name").innerText = names[count];
    updateName();
  }, 2000);
}

const closeModal = () => {
  document.getElementById("modal").style.opacity = "0";
}

const loadDemifluidModal = () => {
  document.getElementById("modal").style.opacity = "0";
  document.getElementById("modal-title").innerHTML = "I'm demifluid.";
  document.getElementById("modal-desc").innerHTML = "Demifluid is a gender under the umbrella of genderfluidity, an identity in which a person's gender may change constantly. Being Demifluid, I have a static gender and one that is fluid. Because my static gender is Agender, my gender changes between <a href=\"https://gender.wikia.org/wiki/Agender\">Agender</a>, <a href=\"https://gender.wikia.org/wiki/Demiboy\">Demiboy</a>, <a href=\"https://gender.wikia.org/wiki/Demigirl\">Demigirl</a>, and <a href=\"https://gender.wikia.org/wiki/Demigender\">Demibigender</a>. No matter how I identify, I'll always accept my Agender pronouns, they/cae. I also accept he/they while I'm a Demiboy, fey/they/she when I'm a Demigirl, and he/fey/they/cae/she while I'm Demibigender.";
  document.getElementById("modal-imgs").innerHTML = "";
  document.getElementById("modal").style.display = "flex";
  setTimeout(() => {
    document.getElementById("modal").style.opacity = "1";
  }, 20);
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
