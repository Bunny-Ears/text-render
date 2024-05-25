const btt = document.querySelector('#btt');
const lig = document.querySelector('#lig');
const vs = document.querySelector('#vs');
const text = document.querySelector("textarea");
const spell = document.querySelector("#spell");
const bg = document.querySelector("#bg");

btt.addEventListener("change",() => {
  if (btt.checked) {
    text.style.writingMode = "vertical-lr";
    text.style.transform = "rotate(-90deg)";  
  } else {
    text.style.writingMode = "inherit";
    text.style.transform = "rotate(0deg)";
  }
  
});


lig.addEventListener("change",() => {
  if (lig.checked) {
    text.style.fontVariantLigatures = "discretionary-ligatures";
  } else {
    text.style.fontVariantLigatures = "none";
  }

});

vs.addEventListener("change",() => {
  if (vs.checked) {
    text.style.fontFamily = "velishin";
  } else {
    text.style.fontFamily = 'Oblegg';
  }

});

spell.addEventListener("change",() => {
  if (spell.checked) {
    text.setAttribute("spellcheck", "true");
  } else {
    text.setAttribute("spellcheck", "false");
  }
});

bg.addEventListener("change",() => {
  if (bg.checked) {
    text.style.background = "url(https://www.worldanvil.com/uploads/images/1fea3f76e20423fa5282e0cf246c0b36.jpg)";
  } else {
    text.style.background = "var(--main)";
  }
});