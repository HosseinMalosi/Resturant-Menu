const cateBtns = document.querySelectorAll(".category");
const sections = [...document.querySelectorAll(".foodCard")];

const remove = function () {
  for (const i of cateBtns) {
    i.classList.remove("active");
  }
};

const removeSec = function () {
  for (const sec of sections) {
    sec.classList.remove("hidden");
  }
};

for (const e of cateBtns) {
  e.addEventListener("click", () => {
    remove();
    e.classList.add("active");

    removeSec();
    let notSec = sections.filter(
      (sec) => !sec.classList.contains(e.textContent)
    );
    for (const i of notSec) {
      i.classList.add("hidden");
    }
    if (e.textContent == "All Foods") {
      removeSec();
    }
  });
}
