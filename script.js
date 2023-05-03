//your code here
const parent = document.querySelector("#parent");
let selectedDiv = null;
let start = null;

parent.addEventListener("dragstart", (e) => {
  selectedDiv = e.target;
parent.addEventListener("dragstart", (event) => {
  start = event.target;
});

parent.addEventListener("dragover", (e) => {
  e.preventDefault();
parent.addEventListener("dragover", (event) => {
  event.preventDefault();
});

parent.addEventListener("drop", (e) => {
  e.preventDefault();
  const targetDiv = e.target;
  const parent = targetDiv.parentNode;
  if (targetDiv !== selectedDiv) {
    parent.insertBefore(selectedDiv, targetDiv);
parent.addEventListener("drop", (event) => {
  event.preventDefault();
  const final = event.target;
  const parent = final.parentNode;
  if (final !== start) {
    parent.insertBefore(start, final);
  }
});