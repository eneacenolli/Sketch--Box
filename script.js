"use strict";

const reset = document.querySelector(".reset");
const erasor = document.querySelector(".erasor");
const black = document.querySelector(".black");
const grey = document.querySelector(".grey");
const random = document.querySelector(".random");

function change_box(size) {
  const contenier = document.querySelector(".contenier");
  const contenier_height = contenier.clientHeight;
  let finalSize = size * size;
  contenier.innerHTML = "";
  for (let i = 0; i < finalSize; i++) {
    const div = document.createElement("div");
    div.style.height = contenier_height / size + "px";
    div.style.width = contenier_height / size + "px";
    contenier.appendChild(div).classList.add("inner_box");
  }
}

function final_box() {
  const input = document.querySelector(".box_no");
  change_box(input.value);
}

reset.addEventListener("click", function () {
  const group_divs = document.querySelectorAll(".inner_box");
  group_divs.forEach((element) => {
    element.style.backgroundColor = "white";
  });
});

erasor.addEventListener("mouseover", function () {
  const group_divs = document.querySelectorAll(".inner_box");
  group_divs.forEach((element) => {
    element.addEventListener("mouseover", function () {
      element.style.backgroundColor = "white";
    });
  });
});

black.addEventListener("mouseover", function () {
  const group_divs = document.querySelectorAll(".inner_box");
  group_divs.forEach((element) => {
    element.addEventListener("mouseover", function () {
      element.style.backgroundColor = "black";
    });
  });
});

grey.addEventListener("mouseover", function () {
  const group_divs = document.querySelectorAll(".inner_box");
  group_divs.forEach((element) => {
    element.addEventListener("mouseover", function () {
      element.style.backgroundColor = "grey";
    });
  });
});

function random_rgba() {
  let o = Math.round,
    r = Math.random,
    s = 255;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
}

random.addEventListener("mouseover", function () {
  const group_divs = document.querySelectorAll(".inner_box");
  group_divs.forEach((element) => {
    element.addEventListener("mouseover", function () {
      element.style.backgroundColor = random_rgba();
    });
  });
});
