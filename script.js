function openModal(modalNumber) {
  var modal = document.getElementById("myModal" + modalNumber);
  modal.style.display = "block";
}

function closeModal(modalNumber) {
  var modal = document.getElementById("myModal" + modalNumber);
  modal.style.display = "none";
}

document.getElementById("myBtn1").onclick = function () {
  openModal(1);
};

document.getElementById("myBtn2").onclick = function () {
  openModal(2);
};

window.onclick = function (event) {
  var modal1 = document.getElementById("myModal1");
  var modal2 = document.getElementById("myModal2");
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};
