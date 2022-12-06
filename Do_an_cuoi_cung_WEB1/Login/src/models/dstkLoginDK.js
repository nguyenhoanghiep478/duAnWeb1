function DSTK(){
    this.arr = [];

    this.themTK = function(tk){
        this.arr.push(tk);
    }

    this.timViTriTK = function (taiKhoan){
        var index=-1;

        this.arr.forEach(function(tk, i){
            if(tk.taiKhoan === taiKhoan){
                index = i;
            }
        });
        return index;
    }

    this.xoaTK = function(taiKhoan){
        var index = this.timViTriTK(taiKhoan);
        //Xoa phan tu trong mang
        if(index !== -1){
            this.arr.splice(index, 1);
        }

    }

    this.layThongTinTaiKhoan = function(taiKhoan){
        //tim vi tri 
        var index = this.timViTriTK(taiKhoan);

        if(index !==-1){
            return this.arr[index];
        }
        return null;
    }

    this.capNhatTaiKhoan = function(tk){
        //timvitri
        var index = this.timViTriTK(tk.taiKhoan);

        if(index !== -1){
            this.arr[index] = tk;
        }
    }

    this.timKiemSinhVien=function(keyword){
        var mangTimKiem = [];

        this.arr.forEach(function(tk){
            var taiKhoan = tk.taiKhoan.toLowerCase();
            var txtSearch =keyword.toLowerCase();
            if(taiKhoan.indexOf(txtSearch) !== -1) {
                mangTimKiem.push(tk);
            }
        })
        return mangTimKiem;
    }

}