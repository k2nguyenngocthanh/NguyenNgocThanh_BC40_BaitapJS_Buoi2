var luongNgay=document.getElementById("luong-ngay");
    luongNgay.value="100000";
function tinhLuong(){
    var luongNgay=document.getElementById("luong-ngay").value*1;

   
    
    var ngayLam=document.getElementById("ngay-lam").value*1;
    
    var tongLuong =luongNgay*ngayLam
    document.getElementById("result").innerHTML=`<h2 class="mt-5 text-danger text-center">Số tiền phải trả: ${tongLuong} VNĐ</h2>`;
    
}

/*----------------Bài 2----------------*/

function trungBinhCong(){
    var somot=document.getElementById("so-mot").value*1;
    var sohai=document.getElementById("so-hai").value*1;
    var soba=document.getElementById("so-ba").value*1;
    var sobon=document.getElementById("so-bon").value*1;
    var sonam=document.getElementById("so-nam").value*1;

    var trungBinhCongCacSo =(somot+sohai+soba+sobon+sonam)/5
    document.getElementById("comment").innerHTML=`<h2 class="mt-5 text-danger text-center">Trung bình cộng các số là: ${trungBinhCongCacSo} </h2>`;
    
}

/*----------------Bài 3----------------*/
var giaUSD=document.getElementById("gia-USD");
    giaUSD.value="23500";

function Quydoi(){
    var giaUSD=document.getElementById("gia-USD").value*1;
    var soTien=document.getElementById("so-tien").value*1;

    var quyDoiTien= giaUSD*soTien 
    document.getElementById("quydoiso").innerHTML=`<h2 class="mt-5 text-danger text-center">Số tiền sau quy đổi là: ${quyDoiTien} </h2>`;
    
}

/*----------------Bài 4----------------*/
 function Tinh(){
    var chieuDai=document.getElementById("chieu-dai").value*1;
    var chieuRong=document.getElementById("chieu-rong").value*1;

    var dientich= chieuDai*chieuRong
    var chuvi=(chieuDai+chieuRong)*2
    document.getElementById("tinhchuvivadientich").innerHTML=`<h2 class="mt-5 text-danger text-center">Diện tích của hình chữ nhật là: ${dientich} <br />
    Chu vi của hình chữ nhật là:${chuvi}
    </h2>`;
    
 }
 /*----------------Bài 5----------------*/
 function Tong2kyso(){
    var nhapSo=document.getElementById("nhap-so").value*1;

    var donvi =Math.floor(nhapSo%10);


    var chuc=Math.floor(nhapSo/10);

    var sum2so=donvi+chuc
    document.getElementById("kyso").innerHTML=`<h2 class="mt-5 text-danger text-center">Tổng hai ký số là: ${sum2so} </h2>`


 }



