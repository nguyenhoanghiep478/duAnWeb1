////////////////////////////////////////////////SAN PHAM
//Get-set-TKhoan
var dssp = new DSSP();
var validationSP = new ValidationSP();
function getEle(id) {
    return document.getElementById(id);
}
getLocalStorageSanPham();

function layThongTinSanPham() {
    var tenSP = getEle("tenSanPham").value;
    var hang = getEle("hangSP").value;
    var ram = getEle("RamSP").value;
    var rom = getEle("RomSP").value;
    var price = getEle("priceSP").value;
    var imageSP = getEle("imageSP").value;
    var moTa = getEle("moTaSP").value;


    isValid = true;
    //tenSP
    isValid &= validationSP.kiemTraRong(tenSP, "errorTenSP", "(*) Nhập tên sản phẩm");
    //hang
    isValid &= validationSP.kiemTraRong(hang, "errorHangSP", "(*) Chọn hãng sản phẩm");
    //ram
    isValid &= validationSP.kiemTraRong(ram, "errorRam", "(*) Vui lòng nhập Ram ");
    //rom
    isValid &= validationSP.kiemTraRong(rom,"errorRom","(*) Vui lòng nhập Rom");
    //price
    isValid &= validationSP.kiemTraRong(price,"errorPrice","(*)Vui lòng nhập giá tiền");
    //image
    isValid &= validationSP.kiemTraRong(imageSP,"errorImage","(*) Chưa có hình ảnh");
    //moTa
    isValid &= validationSP.kiemTraRong(moTa,"errorMoTa","(*) Chưa nhập mô tả")

    if (isValid == true) {
        var sp = new SanPham(tenSP,
            hang,
            ram,
            rom,
            price,
            imageSP,
            moTa);

        return sp;
    }
    return null;
}

var arr = [];

getEle("btnAddSP").addEventListener("click", function () {
    var sp = layThongTinSanPham();
    if (!sp) return
    dssp.themSP(sp);

    console.log(dssp.arr);

    renderTableSanPham(dssp.arr);

    setLocalStorageSanPham();

    getEle("tenSanPham").value = "";
    getEle("hangSP").value = "";
    getEle("RamSP").value = "";
    getEle("RomSP").value = "";
    getEle("priceSP").value = "";
    getEle("imageSP").value = "";
    getEle("moTaSP").value = "";
})


function renderTableSanPham(data) {
    var content = "";

    data.forEach(function (sp, i) {
        console.log(sp);
        content += `
                <tr>
                    <td><img src="${sp.imageSP}" alt="..." style="height:100px; witdh:100px;"></td>
                    <td>${sp.tenSP}</td>
                    <td>${sp.hang}</td>
                    <td>${sp.ram}</td>
                    <td>${sp.rom}</td>
                    <td>${sp.price}</td>
                    <td>
                        <button id="btnEditSP" class="btn btn-info" onClick="editSP('${sp.tenSP}')">Edit</button>
                        <button id="btnDeleteSP" class="btn btn-danger" onClick="deleteSP('${sp.tenSP}')">Delete</button>
                    
                    </td>
                </tr>
        `
    })

    getEle("tbodySanPham").innerHTML = content;
}

function editSP(tenSP) {
    var sp = dssp.layThongTinSanPham(tenSP);
    if (sp) {
        getEle("tenSanPham").value = sp.tenSP;
        getEle("hangSP").value = sp.hang;
        getEle("RamSP").value = sp.ram;
        getEle("RomSP").value = sp.rom;
        getEle("priceSP").value = sp.price;
        getEle("imageSP").value = sp.imageSP;
        getEle("moTaSP").value = sp.moTa;


        //Hiển thị button
        getEle("btnUpdateSP").style.display = "inline-block";
        //Ẩn button#btnAdd
        getEle("btnAddSP").style.display = "none";
        //Hiể thị reset
        getEle("btnResetSP").style.display = "inline-block";
    }
}

getEle("btnUpdateSP").addEventListener("click", function () {
    var sp = layThongTinSanPham();

    dssp.capNhatSanPham(sp);
    renderTableSanPham(dssp.arr);
    setLocalStorageSanPham();

    getEle("tenSanPham").value = "";
    getEle("hangSP").value = "";
    getEle("RamSP").value = "";
    getEle("RomSP").value = "";
    getEle("priceSP").value = "";
    getEle("imageSP").value = "";
    getEle("moTaSP").value = "";

    //Hiển thị button
    getEle("btnUpdateSP").style.display = "none";
    //Ẩn button#btnAdd
    getEle("btnAddSP").style.display = "inline-block";
    //Hiển thị reset
    getEle("btnResetSP").style.display = "none";

})

getEle("btnResetSP").addEventListener("click", function () {
    var sp = layThongTinSanPham();
    if (sp) {
        getEle("tenSanPham").value = "";
        getEle("hangSP").value = "";
        getEle("RamSP").value = "";
        getEle("RomSP").value = "";
        getEle("priceSP").value = "";
        getEle("imageSP").value = "";
        getEle("moTaSP").value = "";
    }


    getEle("btnUpdateSP").style.display = "none";

    getEle("btnAddSP").style.display = "inline-block";

    getEle("btnResetSP").style.display = "none";
})

function deleteSP(tenSP) {
    dssp.xoaSP(tenSP);
    renderTableSanPham(dssp.arr);
    setLocalStorageSanPham();
}

//Get-set-SanPham
function setLocalStorageSanPham() {
    //Chuyển arr từ JSON => String
    var dataString = JSON.stringify(dssp.arr);
    //Lưu data xuống LocalStorage của trình duyệt
    localStorage.setItem("DanhSachSP", dataString);
}

function getLocalStorageSanPham() {
    if (localStorage.getItem("DanhSachSP")) {
        var dataString = localStorage.getItem("DanhSachSP");
        //convert String => JSON
        dssp.arr = JSON.parse(dataString);
        renderTableSanPham(dssp.arr);
    }
}


