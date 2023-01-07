const filter1 = document.querySelector(".filter1");
const filter2 = document.querySelector(".filter2");
const filter3 = document.querySelector(".filter3");
const filter4 = document.querySelector(".filter4");
const filter5 = document.querySelector(".filter5");
const filter6 = document.querySelector(".filter6");
const Filter1 = () => {
  filter1.classList.add('bg-color');
  filter2.classList.remove('bg-color');
  filter3.classList.remove('bg-color');
  filter4.classList.remove('bg-color');
  filter5.classList.remove('bg-color');
  filter6.classList.remove('bg-color');
}
const Filter2 = () => {
  filter2.classList.add('bg-color');
  filter1.classList.remove('bg-color');
  filter3.classList.remove('bg-color');
  filter4.classList.remove('bg-color');
  filter5.classList.remove('bg-color');
  filter6.classList.remove('bg-color');
}
const Filter3 = () => {
  filter3.classList.add('bg-color');
  filter2.classList.remove('bg-color');
  filter1.classList.remove('bg-color');
  filter4.classList.remove('bg-color');
  filter5.classList.remove('bg-color');
  filter6.classList.remove('bg-color');
}
const Filter4 = () => {
  filter4.classList.add('bg-color');
  filter2.classList.remove('bg-color');
  filter3.classList.remove('bg-color');
  filter1.classList.remove('bg-color');
  filter5.classList.remove('bg-color');
  filter6.classList.remove('bg-color');
}
const Filter5 = () => {
  filter5.classList.add('bg-color');
  filter2.classList.remove('bg-color');
  filter3.classList.remove('bg-color');
  filter4.classList.remove('bg-color');
  filter1.classList.remove('bg-color');
  filter6.classList.remove('bg-color');
}
const Filter6 = () => {
  filter6.classList.add('bg-color');
  filter2.classList.remove('bg-color');
  filter3.classList.remove('bg-color');
  filter4.classList.remove('bg-color');
  filter5.classList.remove('bg-color');
  filter1.classList.remove('bg-color');
}