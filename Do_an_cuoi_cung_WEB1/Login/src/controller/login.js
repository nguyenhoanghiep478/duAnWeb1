
function getEle(id) {
    return document.getElementById(id);
}
var validation = new validationDN();
var dstk = new DSTK();
var arr = [];
var admin=true;
getLocalStorage();
function getLocalStorage() {
    if (localStorage.getItem("DanhSachTK")) {
        var dataString = localStorage.getItem("DanhSachTK");
        //convert String => JSON
        dstk.arr = JSON.parse(dataString);
    }
}
// console.log(dstk.arr[1]);//

// function layThongTinTaiKhoan(){
//     var taiKhoan = getEle('txtDN').value;
//     var matKhau = getEle('txtDK').value;

//     isValid = true;


// }
getEle('btnDangNhap').addEventListener("click", function () {
    // var tk=layThongTinTaiKhoan();
    var taiKhoan = getEle('txtDN').value;
    var matKhau = getEle('txtDK').value;

    var dangNhapThanhCong = false;
    if (taiKhoan === "admin" && matKhau === "1") {
        getEle('AD').style.display = "block";
        getEle('errorBtnDangNhap').style.display = "block";
        getEle('errorBtnDangNhap').innerHTML = "Đăng nhập thành công";
        getEle('txtDN').value = "";
        getEle('txtDK').value = "";
        admin = true;
        let adminData={
            taiKhoan: taiKhoan,
            matKhau: matKhau,
        }
        localStorage.setItem('userLogin',JSON.stringify(adminData));
        window.location="../Main/main.html";
        return null;
    } else {
        getEle('AD').style.display = "none";
        admin = false;
        
    }
    isValid = true;

    isValid &= validation.kiemTraTrung(taiKhoan, "errorTaiKhoan", "(*) Tài khoản hoặc mật khẩu sai", dstk.arr);



    isValid &= validation.kiemTraMatKhau(taiKhoan, matKhau, "errorMatKhau", "(*) Tài khoản hoặc mật khẩu sai", dstk.arr);

    if (isValid == true) {
        getEle('errorBtnDangNhap').style.display = "block";
        getEle('errorBtnDangNhap').innerHTML = "Đăng nhập thành công";
        dangNhapThanhCong = true;
    } else {
        getEle('errorBtnDangNhap').style.display = "block";
        getEle('errorBtnDangNhap').innerHTML = "Đăng nhập không thành công";
        dangNhapThanhCong = false;
    }
    getLocalStorage();
    if(localStorage.getItem('userLogin')==null){
        localStorage.setItem('userLogin',JSON.stringify(dstk.arr[dstk.arr.findIndex(x=>x.taikhoan==taiKhoan)]));
    }
    window.location="../Main/main.html";
    // if (isValid === false) {
    //     console.log(isValid);
    // } else {
    //     console.log(isValid);
    // }
})

var dstk=[];
getLocalStorage();
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
