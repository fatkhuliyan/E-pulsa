var $$ = Dom7;

$$('.open-login').on('click', function () {
  myApp.loginScreen();
});
var myApp = new Framework7();

$$('.open-right-panel').on('click', function (e) {
    // 'right' position to open Right panel
    myApp.openPanel('right');
});

$$('.panel-close').on('click', function (e) {
    myApp.closePanel();
}); 

var date = new Date();
    var hari = date.getDate();
    if(hari < 10) hari = "0"+hari;
    var bulan = date.getMonth()+1;
    if(bulan < 10) bulan = "0"+bulan;
    var tahun = date.getFullYear();
    var hariini = tahun+"-"+bulan+"-"+hari;
    document.getElementById('tgl').value=hariini; 

function changePaket(){
    if(document.getElementById('indosat').checked){
        document.getElementById("paket").innerHTML="<option value='I5'>I5</option><option value='I10'>I10</option><option value='I25'>I25</option><option value='I50'>I50</option><option value='I100'>I100</option>";
    }
    else if(document.getElementById('telkomsel').checked){
        document.getElementById("paket").innerHTML="<option value='TS5'>TS5</option><option value='TS10'>TS10</option><option value='TS25'>TS25</option><option value='TS50'>TS50</option><option value='TS100'>TS100</option>";
    }
    else if(document.getElementById('Smartfreen').checked){
        document.getElementById("paket").innerHTML="<option value='SM5'>SM5</option><option value='SM10'>SM10</option><option value='SM25'>SM25</option><option value='SM50'>SM50</option><option value='SM100'>SM100</option>";
    }
    else if(document.getElementById('xl').checked){
      document.getElementById("paket").innerHTML="<option value='X5'>X5</option><option value='X10'>X10</option><option value='X25'>X25</option><option value='X50'>X50</option><option value='X100'>X100</option>";
    }
    else if(document.getElementById('three').checked){
      document.getElementById("paket").innerHTML="<option value='T5'>T5</option><option value='T10'>T10</option><option value='T25'>T25</option><option value='T50'>T50</option><option value='T100'>T100</option>";
    }
    else if(document.getElementById('axis').checked){
      document.getElementById("paket").innerHTML="<option value='AX5'>AX5</option><option value='AX10'>AX10</option><option value='AX25'>AX25</option><option value='AX50'>AX50</option><option value='AX100'>AX100</option>";
    }
}

function getPaket(){
    
    if(document.getElementById('paket').value == "I5" || document.getElementById('paket').value == "TS5"){
      document.getElementById('harga').value = "6500";
    }else if(document.getElementById('paket').value == "I10" || document.getElementById('paket').value == "TS10"){
      document.getElementById('harga').value = "11500";
    }else if(document.getElementById('paket').value == "I25" || document.getElementById('paket').value == "TS25"){
      document.getElementById('harga').value = "26500";
    }else if(document.getElementById('paket').value == "I50" || document.getElementById('paket').value == "TS50"){
      document.getElementById('harga').value = "51000";
    }else if(document.getElementById('paket').value == "I100" || document.getElementById('paket').value == "TS100"){
      document.getElementById('harga').value = "101000";
    }

    else if(document.getElementById('paket').value == "SM5" || document.getElementById('paket').value == "X5" || document.getElementById('paket').value == "T5" || document.getElementById('paket').value == "AX5"){
      document.getElementById('harga').value = "6000";
    }else if(document.getElementById('paket').value == "SM10" || document.getElementById('paket').value == "X10" || document.getElementById('paket').value == "T10" || document.getElementById('paket').value == "AX10"){
      document.getElementById('harga').value = "11000";
    }else if(document.getElementById('paket').value == "SM25" || document.getElementById('paket').value == "X25" || document.getElementById('paket').value == "T25" || document.getElementById('paket').value == "AX25"){
      document.getElementById('harga').value = "26000";
    }else if(document.getElementById('paket').value == "SM50" || document.getElementById('paket').value == "X50" || document.getElementById('paket').value == "T50" || document.getElementById('paket').value == "AX50"){
      document.getElementById('harga').value = "50500";
    }else if(document.getElementById('paket').value == "SM100" || document.getElementById('paket').value == "X100" || document.getElementById('paket').value == "T100" || document.getElementById('paket').value == "AX100"){
      document.getElementById('harga').value = "100500";
    }
}

function hitung(){
    var harga = parseInt(document.getElementById('harga').value);
    var bayar = parseInt(document.getElementById('bayar').value);
    var total = bayar - harga;
    document.getElementById('kembalian').value = total;
}


function load() {
$.ajax({
    // url : 'http://192.168.20.7/rci/index.php/akademik/index_get',
    url : 'http://restciapp.000webhostapp.com/index.php/pulsa/index_get',
    type: 'GET',
    success: function (data) {
        var list_holder=document.getElementById('list_data');
        list_holder.innerHTML="";
        for (var i = 0; i < data.length; i++) {
            list_holder.innerHTML+="<tr><td>"+data[i].no_trans+"</td><td>"+data[i].tgl+"</td><td>"+data[i].no_hp+"</td><td>"+data[i].provider+"</td><td>"+data[i].paket+"</td><td>"+data[i].harga+"</td><td>"+data[i].bayar+"</td><td>"+data[i].status+"</td><td><a href='#' class='open-login-screen' onclick='edit_data(\""+data[i].no_trans+"\",\""+data[i].tgl+"\",\""+data[i].no_hp+"\",\""+data[i].provider+"\",\""+data[i].paket+"\",\""+data[i].harga+"\",\""+data[i].bayar+"\",\""+data[i].status+"\",\""+data[i].provider+"\");'><i class='fa fa-pencil-alt'> </i></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href='#' onclick='delete_data(\""+data[i].no_trans+"\");'><i class='color-red fa fa-trash'> </i></a></td></tr>";
        }
    }
});
}

function delete_data(no_trans) {
var konfirmasi = confirm("Anda yakin akan menghapus data: "+no_trans+" ?");
if (konfirmasi) {
    var data_hapus = {"no_trans": no_trans};
    $.ajax({
        type: 'DELETE',
        url:'http://restciapp.000webhostapp.com/index.php/pulsa/index_delete',
        data: data_hapus
    });
    alert("No Transaksi "+no_trans+" telah terhapus");
}
window.location.reload();
}

function edit_data(no_trans, tgl, no_hp, provider, paket, harga, bayar, status) {
document.getElementById('no_trans').value = no_trans;
document.getElementById('tgl').value = tgl;
document.getElementById('no_hp').value = no_hp;
document.getElementById('harga').value = harga;
document.getElementById('bayar').value = bayar;

if (provider=="Indosat") {
    document.getElementById('indosat').checked=true;
    document.getElementById('paket').innerHTML="<option value='I5'>I5</option><option value='I10'>I10</option><option value='I25'>I25</option><option value='I50'>I50</option><option value='I100'>I100</option>";
    if (paket=="I5") {
        document.getElementById('paket').selectedIndex = 0;
    }else if (paket=="I10") {
        document.getElementById('paket').selectedIndex = 1;
    }else if (paket=="I25") {
        document.getElementById('paket').selectedIndex = 2;
    }else if (paket=="I50") {
        document.getElementById('paket').selectedIndex = 3;
    }else if (paket=="I100") {
        document.getElementById('paket').selectedIndex = 4;
    }
}else if (provider=="Telkomsel") {
    document.getElementById('telkomsel').checked=true;
    document.getElementById("paket").innerHTML="<option value='TS5'>TS5</option><option value='TS10'>TS10</option><option value='TS25'>TS25</option><option value='TS50'>TS50</option><option value='TS100'>TS100</option>";
    if (paket=="TS5") {
        document.getElementById('paket').selectedIndex = 0;
    }else if (paket=="TS10") {
        document.getElementById('paket').selectedIndex = 1;
    }else if (paket=="TS25") {
        document.getElementById('paket').selectedIndex = 2;
    }else if (paket=="TS50") {
        document.getElementById('paket').selectedIndex = 3;
    }else if (paket=="TS100") {
        document.getElementById('paket').selectedIndex = 4;
    }
}else if (provider=="Smartfreen") {
    document.getElementById('Smartfreen').checked=true;
    document.getElementById("paket").innerHTML="<option value='SM5'>SM5</option><option value='SM10'>SM10</option><option value='SM25'>SM25</option><option value='SM50'>SM50</option><option value='SM100'>SM100</option>";
    if (paket=="S5") {
        document.getElementById('paket').selectedIndex = 0;
    }else if (paket=="S10") {
        document.getElementById('paket').selectedIndex = 1;
    }else if (paket=="S25") {
        document.getElementById('paket').selectedIndex = 2;
    }else if (paket=="S50") {
        document.getElementById('paket').selectedIndex = 3;
    }else if (paket=="S100") {
        document.getElementById('paket').selectedIndex = 4;
    }
}else if (provider=="XL") {
    document.getElementById('xl').checked=true;
    document.getElementById("paket").innerHTML="<option value='X5'>X5</option><option value='X10'>X10</option><option value='X25'>X25</option><option value='X50'>X50</option><option value='X100'>X100</option>";
    if (paket=="X5") {
        document.getElementById('paket').selectedIndex = 0;
    }else if (paket=="X10") {
        document.getElementById('paket').selectedIndex = 1;
    }else if (paket=="X25") {
        document.getElementById('paket').selectedIndex = 2;
    }else if (paket=="X50") {
        document.getElementById('paket').selectedIndex = 3;
    }else if (paket=="X100") {
        document.getElementById('paket').selectedIndex = 4;
    }
}else if (provider=="Three") {
    document.getElementById('three').checked=true;
    document.getElementById("paket").innerHTML="<option value='T5'>T5</option><option value='T10'>T10</option><option value='T25'>T25</option><option value='T50'>T50</option><option value='T100'>T100</option>";
    if (paket=="T5") {
        document.getElementById('paket').selectedIndex = 0;
    }else if (paket=="T10") {
        document.getElementById('paket').selectedIndex = 1;
    }else if (paket=="T25") {
        document.getElementById('paket').selectedIndex = 2;
    }else if (paket=="T50") {
        document.getElementById('paket').selectedIndex = 3;
    }else if (paket=="T100") {
        document.getElementById('paket').selectedIndex = 4;
    }
}else if (provider=="Axis") {
    document.getElementById('axis').checked=true;
    document.getElementById("paket").innerHTML="<option value='AX5'>AX5</option><option value='AX10'>AX10</option><option value='AX25'>AX25</option><option value='AX50'>AX50</option><option value='AX100'>AX100</option>";
    if (paket=="AX5") {
        document.getElementById('paket').selectedIndex = 0;
    }else if (paket=="AX10") {
        document.getElementById('paket').selectedIndex = 1;
    }else if (paket=="AX25") {
        document.getElementById('paket').selectedIndex = 2;
    }else if (paket=="AX50") {
        document.getElementById('paket').selectedIndex = 3;
    }else if (paket=="AX100") {
        document.getElementById('paket').selectedIndex = 4;
    }
}
document.getElementById('simpan').innerHTML = "<a class='col-100 button button-fill button-round color-orange' onclick='update_data();'>Update</a>";
}

function tambah_data(){
var no_trans = document.getElementById('no_trans').value;
var tgl = document.getElementById('tgl').value;
var no_hp = document.getElementById('no_hp').value;
var provider = "";
if(document.getElementById('indosat').checked){
    provider="Indosat";
}else if(document.getElementById('telkomsel').checked){
    provider="Telkomsel";
}else if(document.getElementById('Smartfreen').checked){
    provider="Smartfreen";
}else if(document.getElementById('xl').checked){
    provider="XL";
}else if(document.getElementById('three').checked){
    provider="Three";
}else{
    provider="Axis";
}
var paket = document.getElementById('paket').value;
var harga = document.getElementById('harga').value;
var bayar = document.getElementById('bayar').value;
var status;
var kembalian = document.getElementById('kembalian').value;
if (kembalian >= 0) {
    status = "Lunas";
}else{
    status = "Hutang";
}
var data_input = {"no_trans": no_trans, "tgl": tgl, "no_hp": no_hp, "provider": provider, "paket":paket, "harga":harga, "bayar":bayar, "status":status};
$.ajax({
type: 'POST',
url:'http://restciapp.000webhostapp.com/index.php/pulsa/index_post',
data: data_input
});
alert("Data telah tersimpan");
window.location.reload();
}

function update_data(){
var no_trans = document.getElementById('no_trans').value;
var tgl = document.getElementById('tgl').value;
var no_hp = document.getElementById('no_hp').value;
var provider = "";
if(document.getElementById('indosat').checked){
    provider="Indosat";
}else if(document.getElementById('telkomsel').checked){
    provider="Telkomsel";
}else if(document.getElementById('Smartfreen').checked){
    provider="Smartfreen";
}else if(document.getElementById('xl').checked){
    provider="XL";
}else if(document.getElementById('three').checked){
    provider="Three";
}else{
    provider="Axis";
}
var paket = document.getElementById('paket').value;
var harga = document.getElementById('harga').value;
var bayar = document.getElementById('bayar').value;
var status;
var kembalian = document.getElementById('kembalian').value;
if (kembalian >= 0) {
    status = "Lunas";
}else{
    status = "Hutang";
}
var data_input = {"no_trans": no_trans, "tgl": tgl, "no_hp": no_hp, "provider": provider, "paket":paket, "harga":harga, "bayar":bayar, "status":status};
$.ajax({
type: 'PUT',
url:'http://restciapp.000webhostapp.com/index.php/pulsa/index_put',
data: data_input
});
window.location.reload();
}

function changePaket(){
    if(document.getElementById('indosat').checked){
        document.getElementById("paket").innerHTML="<option value='I5'>I5</option><option value='I10'>I10</option><option value='I25'>I25</option><option value='I50'>I50</option><option value='I100'>I100</option>";
    }
    else if(document.getElementById('telkomsel').checked){
        document.getElementById("paket").innerHTML="<option value='TS5'>TS5</option><option value='TS10'>TS10</option><option value='TS25'>TS25</option><option value='TS50'>TS50</option><option value='TS100'>TS100</option>";
    }
    else if(document.getElementById('Smartfreen').checked){
        document.getElementById("paket").innerHTML="<option value='SM5'>SM5</option><option value='SM10'>SM10</option><option value='SM25'>SM25</option><option value='SM50'>SM50</option><option value='SM100'>SM100</option>";
    }
    else if(document.getElementById('xl').checked){
      document.getElementById("paket").innerHTML="<option value='X5'>X5</option><option value='X10'>X10</option><option value='X25'>X25</option><option value='X50'>X50</option><option value='X100'>X100</option>";
    }
    else if(document.getElementById('three').checked){
      document.getElementById("paket").innerHTML="<option value='T5'>T5</option><option value='T10'>T10</option><option value='T25'>T25</option><option value='T50'>T50</option><option value='T100'>T100</option>";
    }
    else if(document.getElementById('axis').checked){
      document.getElementById("paket").innerHTML="<option value='AX5'>AX5</option><option value='AX10'>AX10</option><option value='AX25'>AX25</option><option value='AX50'>AX50</option><option value='AX100'>AX100</option>";
    }
}

function getPaket(){
    if(document.getElementById('paket').value == "I5" || document.getElementById('paket').value == "TS5"){
      document.getElementById('harga').value = "6500";
    }else if(document.getElementById('paket').value == "I10" || document.getElementById('paket').value == "TS10"){
      document.getElementById('harga').value = "11500";
    }else if(document.getElementById('paket').value == "I25" || document.getElementById('paket').value == "TS25"){
      document.getElementById('harga').value = "26500";
    }else if(document.getElementById('paket').value == "I50" || document.getElementById('paket').value == "TS50"){
      document.getElementById('harga').value = "51000";
    }else if(document.getElementById('paket').value == "I100" || document.getElementById('paket').value == "TS100"){
      document.getElementById('harga').value = "101000";
    }

    else if(document.getElementById('paket').value == "SM5" || document.getElementById('paket').value == "X5" || document.getElementById('paket').value == "T5" || document.getElementById('paket').value == "AX5"){
      document.getElementById('harga').value = "6000";
    }else if(document.getElementById('paket').value == "SM10" || document.getElementById('paket').value == "X10" || document.getElementById('paket').value == "T10" || document.getElementById('paket').value == "AX10"){
      document.getElementById('harga').value = "11000";
    }else if(document.getElementById('paket').value == "SM25" || document.getElementById('paket').value == "X25" || document.getElementById('paket').value == "T25" || document.getElementById('paket').value == "AX25"){
      document.getElementById('harga').value = "26000";
    }else if(document.getElementById('paket').value == "SM50" || document.getElementById('paket').value == "X50" || document.getElementById('paket').value == "T50" || document.getElementById('paket').value == "AX50"){
      document.getElementById('harga').value = "50500";
    }else if(document.getElementById('paket').value == "SM100" || document.getElementById('paket').value == "X100" || document.getElementById('paket').value == "T100" || document.getElementById('paket').value == "AX100"){
      document.getElementById('harga').value = "100500";
    }
}

function hitung(){
    var harga = parseInt(document.getElementById('harga').value);
    var bayar = parseInt(document.getElementById('bayar').value);
    var total = bayar - harga;
    document.getElementById('kembalian').value = total;
}