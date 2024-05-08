// Bài 1
document.getElementById("btnBai1").onclick = function () {
  let tienLuong1Ngay = document.getElementById("tienLuong1Ngay").value * 1;
  let soNgayLam = document.getElementById("soNgayLam").value * 1;
  let tongTienLuong = tienLuong1Ngay * soNgayLam;
  document.getElementById("KetQua1").innerHTML =
    "Tổng số tiền bạn nhận được trong " +
    soNgayLam +
    " ngày đã làm là " +
    tongTienLuong.toLocaleString("vi", { style: "currency", currency: "VND" });
};

// Bài 2
document.getElementById("btnBai2").onclick = function () {
  let so1 = document.getElementById("so1").value * 1;
  let so2 = document.getElementById("so2").value * 1;
  let so3 = document.getElementById("so3").value * 1;
  let so4 = document.getElementById("so4").value * 1;
  let so5 = document.getElementById("so5").value * 1;
  let giaTriTrungBinh = (so1 + so2 + so3 + so4 + so5) / 5;
  document.getElementById("KetQua2").innerHTML =
    "Giá trị trung bình của 5 số bạn đã nhập là " + giaTriTrungBinh;
};

// Bài 3
document.getElementById("btnBai3").onclick = function () {
  let tienUSD = document.getElementById("tienUSD").value * 1;
  let tienVND = tienUSD * 23500;
  document.getElementById("KetQua3").innerHTML =
    "số tiền VND bạn đã đổi là " +
    tienVND.toLocaleString("vi", { style: "currency", currency: "VND" });
};

// Bài 4
document.getElementById("btnBai4").onclick = function () {
  let chieuDai = document.getElementById("chieuDai").value * 1;
  let chieuRong = document.getElementById("chieuRong").value * 1;
  let chuVi = (chieuDai + chieuRong) * 2;
  let dienTich = chieuDai * chieuRong;
  document.getElementById("KetQua4").innerHTML =
    "chu vi: " + chuVi + ", diện tích: " + dienTich;
};

// Bài 5
document.getElementById("btnBai5").onclick = function () {
  let soThuc = document.getElementById("soThuc").value * 1;
  let soDonVi = soThuc % 10;
  let soChuc = Math.floor(soThuc / 10);
  let tong = soChuc + soDonVi;
  let ketQua = "";
  if (soThuc < 10 || soThuc >= 100) {
    ketQua = "Xin hãy nhập 1 số chỉ có 2 chữ số";
  } else {
    ketQua = "tổng 2 ký số của số vừa nhập là " + tong;
  }
  document.getElementById("KetQua5").innerHTML = ketQua;
};
