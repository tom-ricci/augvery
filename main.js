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

updateName();
