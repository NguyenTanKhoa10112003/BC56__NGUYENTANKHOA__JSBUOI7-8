var arrNumber = [];

document.getElementById("inputNumber").onclick = function () {
  var soN = document.getElementById("soN").value * 1;

  arrNumber.push(soN);

  var soN = (document.getElementById("soN").value = " ");
  document.getElementById("nhapSoN").innerHTML = `<p>${arrNumber}</p>`;
};
function tongSoDuong() {
  var sum = 0;
  for (var index = 0; index < arrNumber.length; index++) {
    sum += arrNumber[index];
  }
  document.getElementById("ketQua1").innerHTML = `<p>${sum}</p>`;
}
function demSoDuong() {
  var soDuong = 0;
  for (var index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] > 0) {
      soDuong += 1;
    }
  }
  document.getElementById("ketQua2").innerHTML = `<p>${soDuong}</p>`;
}
function soNhoNhat() {
  var soNhoNhat = arrNumber[0];
  for (var index = 1; index < arrNumber.length; index++) {
    if (arrNumber[index] < soNhoNhat) {
      soNhoNhat = arrNumber[index];
    }
  }
  document.getElementById("ketQua3").innerHTML = `<p>${soNhoNhat}</p>`;
}
function soDuongNhoNhat() {
  var arrNewNumber = [];
  var soDuongNhoNhat = arrNewNumber[0];
  for (var index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] > 0) {
      arrNewNumber.push(arrNumber[index]);
    }
    if (arrNewNumber.length > 0) {
      for (index = 0; index < arrNewNumber.length; index++) {
        soDuongNhoNhat = arrNewNumber[index];
      }
    }
    document.getElementById("ketQua4").innerHTML = soDuongNhoNhat;
  }
}
function soChanCuoiCung() {
  var soChanCuoiCung = null;
  for (var index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] % 2 === 0) {
      soChanCuoiCung = arrNumber[index];
    }
  }

  document.getElementById("ketQua5").innerHTML = `<p>${soChanCuoiCung}</p>`;
  if (soChanCuoiCung == null) {
    document.getElementById("ketQua5").innerHTML = `<p>Không có số chẵn</p>`;
  }
}
function doiCho() {
  var soThuNhat = document.getElementById("soThuNhat").value * 1;
  var soThuHai = document.getElementById("soThuHai").value * 1;
  var giaTriTam = arrNumber[soThuNhat];
  arrNumber[soThuNhat] = arrNumber[soThuHai];
  arrNumber[soThuHai] = giaTriTam;
  document.getElementById("ketQua6").innerHTML = `<p>${arrNumber}</p>`
}
