function tich() {
  let soThuNhat = Number(document.getElementById("soThuNhat").value)
  let soThuHai = Number(document.getElementById("soThuHai").value)
  let tich = soThuNhat * soThuHai
  let ketqualuutam = tich
  let phatNgon = soThuNhat + "*" + soThuHai + '=' + tich
  document.getElementById("phatNgon").innerText = phatNgon
  document.getElementById("ketqualuutam").innerText = ketqualuutam
}
function thuong() {
  let soThuNhat = Number(document.getElementById("soThuNhat").value)
  let soThuHai = Number(document.getElementById("soThuHai").value)
  let thuong = soThuNhat / soThuHai
  let ketqualuutam = thuong
  let phatNgon = soThuNhat + ":" + soThuHai + '=' + thuong
  document.getElementById("phatNgon").innerText = phatNgon
  document.getElementById("ketqualuutam").innerText = ketqualuutam
} function tong() {
  let soThuNhat = Number(document.getElementById("soThuNhat").value)
  let soThuHai = Number(document.getElementById("soThuHai").value)
  let tong = soThuNhat + soThuHai
  let ketqualuutam = tong
  let phatNgon = soThuNhat + "+" + soThuHai + '=' + tong
  document.getElementById("ketqualuutam").innerText = ketqualuutam

  document.getElementById("phatNgon").innerText = phatNgon
} function hieu() {
  let soThuNhat = Number(document.getElementById("soThuNhat").value)
  let soThuHai = Number(document.getElementById("soThuHai").value)
  let hieu = soThuNhat - soThuHai
  let phatNgon = soThuNhat + "-" + soThuHai + '=' + hieu
  let ketqualuutam = hieu
  document.getElementById("phatNgon").innerText = phatNgon
  document.getElementById("ketqualuutam").innerText = ketqualuutam
}
function bang() {
  let soThuNhat = Number(document.getElementById("soThuNhat").value)
  let soThuHai = Number(document.getElementById("soThuHai").value)
  let ketqualuutam = Number(document.getElementById("ketqualuutam").value)
  document.getElementById("soThuNhat").innerText= ketqualuutam
}

