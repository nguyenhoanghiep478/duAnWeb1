var dstk = new DSTK();
var validation = new Validation();
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
        renderTable(dstk.arr);
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


//Lay thong tin luc cap nhat

function layThongTinTaiKhoanCapNhat() {
    var taiKhoan = getEle("taiKhoan").value;
    var matKhau = getEle("matKhau").value;
    var hoTen = getEle("hoTen").value;
    var email = getEle("email").value;
    var soDienThoai = getEle("soDT").value;
    var ngaySinh = getEle("birthDay").value;

    isValid = true;
    //taiKhoan
    isValid &= validation.kiemTraRong(taiKhoan, "errorTaiKhoan", "(*) Vui lòng nhập tài khoản")
        && validation.kiemTraDoDaiKiTu(taiKhoan, "errorTaiKhoan", "(*) Vui lòng nhập đủ 5 và không quá 10 kí tự", 5, 10);
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
    isValid &= validation.kiemTraRong(soDienThoai, "errorBirthDay", "(*) Vui lòng nhập ngày sinh của bạn");
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
    renderTable(dstk.arr);

    setLocalStorage();
})
//${}
function renderTable(data) {
    var content = "";
    data.forEach(function (tk, i) {
        console.log(tk);
        content += `
            <tr>
                <td>${tk.taiKhoan}</td>
                <td>${tk.matKhau}</td>
                <td>${tk.hoTen}</td>
                <td>${tk.soDienThoai}</td>
                <td>${tk.email}</td>
                <td>${tk.ngaySinh}</td>
                <td>
                    <button id="btnEdit" class="btn btn-info" onClick="editTK('${tk.taiKhoan}')">Edit</button>
                    <button id="btnDelete" class="btn btn-danger" onClick="deleteTK('${tk.taiKhoan}')">Delete</button>
                </td>
            </tr>
        `;
    })
    // console.log(content);
    getEle("tbodyTaiKhoan").innerHTML = content;
}

function editTK(taiKhoan) {
    var tk = dstk.layThongTinTaiKhoan(taiKhoan);
    if (tk) {
        getEle("taiKhoan").value = tk.taiKhoan;
        getEle("matKhau").value = tk.matKhau;
        getEle("hoTen").value = tk.hoTen;
        getEle("email").value = tk.email;
        getEle("soDT").value = tk.soDienThoai;
        getEle("birthDay").value = tk.ngaySinh;
        //Hiển thị button
        getEle("btnUpdate").style.display = "inline-block";
        //Ẩn button#btnAdd
        getEle("btnAdd").style.display = "none";
        //Hiể thị reset
        getEle("btnReset").style.display = "inline-block";
    }
}

//Update
getEle("btnUpdate").addEventListener("click", function () {
    var tk = layThongTinTaiKhoanCapNhat();
    console.log(tk);
    dstk.capNhatTaiKhoan(tk);
    renderTable(dstk.arr);
    setLocalStorage();

    getEle("taiKhoan").value = "";
    getEle("matKhau").value = "";
    getEle("hoTen").value = "";
    getEle("email").value = "";
    getEle("soDT").value = "";
    getEle("birthDay").value = "";

    //Hiển thị button
    getEle("btnUpdate").style.display = "none";
    //Ẩn button#btnAdd
    getEle("btnAdd").style.display = "inline-block";
    //Hiển thị reset
    getEle("btnReset").style.display = "none";
})

//Reset

getEle("btnReset").addEventListener("click", function () {
    var tk = layThongTinTaiKhoanCapNhat();
    console.log(tk);
    if (tk) {
        getEle("taiKhoan").value = "";
        getEle("matKhau").value = "";
        getEle("hoTen").value = "";
        getEle("email").value = "";
        getEle("soDT").value = "";
        getEle("birthDay").value = "";
    }

    getEle("btnUpdate").style.display = "none";

    getEle("btnAdd").style.display = "inline-block";

    getEle("btnReset").style.display = "none";
})

function deleteTK(taiKhoan) {
    dstk.xoaTK(taiKhoan);
    renderTable(dstk.arr);
    setLocalStorage();
}


getEle("txtSearch").addEventListener("keyup", function () {
    var keyword = getEle("txtSearch").value;
    // console.log(keyword);
    var mangTimKiem = dstk.timKiemTaiKhoan(keyword)
    //hienthi
    renderTable(mangTimKiem);
})




