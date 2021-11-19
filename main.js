const names = [ "August", "Avery", "Lav" ];
let count = 0;

const updateName = () => {
  setTimeout(() => {
    count = count < 2 ? count + 1 : 0;
    document.getElementById("name").innerText = names[count];
    updateName();
  }, 2000);
}

updateName();
