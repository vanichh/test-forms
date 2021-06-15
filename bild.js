const buttonTable = document.querySelectorAll('.column__menu');
const table = document.querySelector('.table');
console.log(buttonTable);
for (let button of buttonTable) {
  button.onclick = menuTable;
}

function menuTable() {
  this.nextElementSibling.style.visibility = 'visible';
  const menuTable = this;
  this.nextElementSibling.lastElementChild.lastElementChild.onclick =
    function () {
      this.offsetParent.remove();

      console.log(this.offsetParent);
    }.bind(menuTable);
}

// document.querySelector('.table').onclick = function (event) {
//   // console.dir(event.target);
//   // console.log(getComputedStyle(event.target, ':hover').cursor);

//   if (event.target.parentElement.className == 'table__row') {
//     event.target.nextElementSibling.style.visibility = 'visible';
//     console.dir(event.target.nextElementSibling);
//   }
// };
