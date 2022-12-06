var dstk = new DSTK();
var validation = new ValidationDangKi();
getLocalStorage();


function getEle(id) {
    return document.getElementById(id);
}
function setLocalStorage() {
    //Chuyển arr từ JSON => String
    var dataString = JSON.stringify(dstk.arr);
    //Lưu data xuống LocalStorage của trình duyệt
    localStorage.setItem("DanhSachTK", dataString);
}

function getLocalStorage() {
    if (localStorage.getItem("DanhSachTK")) {
        var dataString = localStorage.getItem("DanhSachTK");
        //convert String => JSON
        dstk.arr = JSON.parse(dataString);
    }
}
function layThongTinTaiKhoan() {
    var taiKhoan = getEle("taiKhoan").value;
    var matKhau = getEle("matKhau").value;
    var hoTen = getEle("hoTen").value;
    var email = getEle("email").value;
    var soDienThoai = getEle("soDT").value;
    var ngaySinh = getEle("birthDay").value;

    isValid = true;
    //taiKhoan
    isValid &= validation.kiemTraRong(taiKhoan, "errorTaiKhoan", "(*) Vui lòng nhập tài khoản")
        && validation.kiemTraDoDaiKiTu(taiKhoan, "errorTaiKhoan", "(*) Vui lòng nhập đủ 5 và không quá 10 kí tự", 5, 10)
        && validation.kiemTraTaiKhoanTrung(taiKhoan, "errorTaiKhoan", "(*) Tài khoản đã tồn tại", dstk.arr);
    //matKhau
    isValid &= validation.kiemTraRong(matKhau, "errorMatKhau", "(*) Vui lòng nhập mật khẩu")
        && validation.kiemTraDoDaiKiTu(matKhau, "errorMatKhau", "(*)Vui lòng nhập mật khẩu dài hơn 5 kí tự", 5, 10000);
    //hoTen
    isValid &= validation.kiemTraRong(hoTen, "errorHoTen", "(*) Vui lòng nhập họ tên");
    //Email
    isValid &= validation.kiemTraRong(email, "errorEmail", "(*) Vui lòng nhập email");
    //SoDT
    isValid &= validation.kiemTraRong(soDienThoai, "errorSoDT", "(*) Vui lòng nhập số điện thoại");
    //NgaySinh
    isValid &= validation.kiemTraRong(soDienThoai, "errorBirthDay", "(*) Vui lòng nhập ngày sinh của bạn   ");

    isValid &= validation.check(isValid, "errorBtnAdd");
    if (isValid == true) {
        var tk = new TaiKhoan(taiKhoan,
            matKhau,
            hoTen,
            email,
            soDienThoai,
            ngaySinh);

        return tk;
    }
    return null;
}



var arr = [];

getEle("btnAdd").addEventListener("click", function () {
    var tk = layThongTinTaiKhoan();
    // console.log(tk);
    if (!tk) return
    dstk.themTK(tk);
    console.log(dstk.arr);
    //render
    // if (isValid == true) {
    //     getEle('errorBtnAdd').style.display = "block";
    //     getEle('errorBtnAdd').innerHTML = "Đăng kí thành công";
    //     console.log("true");
    // } else {
    //     getEle('errorBtnAdd').style.display = "none";
    //     getEle('errorBtnAdd').innerHTML = "Đăng kí không thành công";
    //     console.log(false);
    // }
    setLocalStorage();
})
//${}
// function renderTable(data) {
//     var content = "";
//     data.forEach(function (tk, i) {
//         console.log(tk);
//         content += `
//             <tr>
//                 <td>${tk.taiKhoan}</td>
//                 <td>${tk.matKhau}</td>
//                 <td>${tk.hoTen}</td>
//                 <td>${tk.email}</td>
//                 <td>${tk.soDienThoai}</td>
//                 <td>${tk.ngaySinh}</td>
//                 <td>
//                     <button id="btnEdit" class="btn btn-info" onClick="editTK('${tk.taiKhoan}')">Edit</button>
//                     <button id="btnDelete" class="btn btn-danger" onClick="deleteTK('${tk.taiKhoan}')">Delete</button>
//                 </td>
//             </tr>
//         `;
//     })
//     // console.log(content);
//     getEle("tbodyTaiKhoan").innerHTML = content;
// }




