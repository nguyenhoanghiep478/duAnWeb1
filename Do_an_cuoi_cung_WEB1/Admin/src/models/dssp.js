function DSSP() {
    this.arr = [];

    this.themSP = function (sp) {
        this.arr.push(sp);
    }

    this.timViTriSP = function (tenSP) {
        var index = -1;

    
        this.arr.forEach(function(sp, i){
            if(sp.tenSP === tenSP){
                index = i;
            }
        });
        return index; 
    }

    this.xoaSP = function(tenSP){
        var index = this.timViTriSP(tenSP);

        if(index !== -1){
            this.arr.splice(index, 1);
        }
    }

    this.layThongTinSanPham = function(tenSP){
        //tim vi tri 
        var index = this.timViTriSP(tenSP);

        if(index !==-1){
            return this.arr[index];
        }
        return null;
    }

    this.capNhatSanPham = function(sp){
        //timvitri
        var index = this.timViTriSP(sp.tenSP);

        if(index !== -1){
            this.arr[index] = sp;
        }
    }

    this.timKiemSanPham=function(keyword){
        var mangTimKiem = [];

        this.arr.forEach(function(sp){
            var sanPham = sp.tenSP.toLowerCase();
            var txtSearch =keyword.toLowerCase();
            if(sanPham.indexOf(txtSearch) !== -1) {
                mangTimKiem.push(sp);
            }
        })
        return mangTimKiem;
    }
}