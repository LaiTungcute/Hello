var a = document.getElementById('ten');
var b = document.getElementById('matKhau');
var c = document.getElementById('container');
var d = document.querySelector('.main');
var e = document.querySelector('.box');

d.onclick = () => {
    var hangName = 'Hang Mai';
    var hangPass = 'hang070402';

    var trinhName = 'Duong Trinh';
    var trinhPass = 'trinh160702';

    var traName = 'Thu Tra';
    var traPass = 'tra240202';

    var maiName = 'Sao Mai';
    var maiPass = "mai280402";

    var cduongName = 'Tran Thi Thuy Duong';
    var cduongPass = "duong010300";

    var rungName = 'Tran Thi Thuy Dung';
    var rungPass = 'dung180305';

    var cPAname = 'Phuong Anh';
    var cPAPass = 'pa260503';

    var duongName = 'Dang Thuy Duong';
    var duongPass = 'duong211002';

    var thuyName = 'Thu Thuy';
    var thuyPass = "thuy191202";

    var lanName = 'Nguyen Thi Lan';
    var lanPass = 'lan230202';

    var loanName = 'Pham Loan';
    var loanPass = 'loan250202';

    var trangName = 'Ha Trang';
    var trangPass = 'trang281201';
    if(hangName===a.value && hangPass===b.value) {
        c.innerHTML = 
        ` 
        <div class="content">
            <h1>HAPPY WOMEN DAY</h1>
            <p>Nhân ngày 8/3 mình chúc bạn Hằng vui vẻ, xinh đẹp và thành công trong cuộc sống. Mong gặp bạn sớm nhất có thể &#60 3 :v</p>
            <img src="./img/hang.jpg">
        </div>
        `
    }
    else if(trinhName===a.value && trinhPass===b.value) {
        c.innerHTML = 
        ` 
        <div class="content">
            <h1>HAPPY WOMEN DAY</h1>
            <p>Nhân ngày 8/3 mình chúc bạn Trinh vui vẻ, xinh đẹp và thành công trong cuộc sống. Mong sớm gặp lại bạn Trinh xinh xắn :v</p>
            <img src="./img/trinh3.jpg" style="width: 320px; height: 370px;">
        </div>
        `
    }
    else if(traName===a.value && traPass===b.value) {
        c.innerHTML = 
        ` 
        <div class="content">
            <h1>HAPPY WOMEN DAY</h1>
            <p>Nhân ngày 8/3 mình chúc bạn Tea vui vẻ, xinh đẹp và thành công trong công cuộc giải cứu thế giới nha. Mong sớm gặp lại bạn Tea :v</p>
            <img src="./img/tra.jpg">
        </div>
        `
    }
   else if(maiName===a.value && maiPass===b.value) {
        c.innerHTML = 
        ` 
        <div class="content">
            <h1>HAPPY WOMEN DAY</h1>
            <p>Nhân ngày 8/3 mình chúc bạn Mai vui vẻ, xinh đẹp và thành công trong cuộc sống nha. Mong sớm gặp lại bạn Mai trên Hà Nội :v</p>
            <img src="./img/mai3.jpg">
        </div>
        `
    }
    else if(cduongName===a.value && cduongPass===b.value) {
        c.innerHTML = 
        ` 
        <div class="content">
            <h1>HAPPY WOMEN DAY</h1>
            <p>Nhân ngày 8/3 em chúc chị vui vẻ, xinh đẹp và thành công trong cuộc sống nha. Chúc 2 anh chị trăm năm...à mà thôi. Mong sớm nhận được thiệp mời của chị :v</p>
            <img src="./img/ChiDuong.jpg">
        </div>
        `
    }
    else if(rungName===a.value && rungPass===b.value) {
        c.innerHTML = 
        ` 
        <div class="content">
            <h1>HAPPY WOMEN DAY</h1>
            <p>Nhân ngày 8/3 em chúc chị vui vẻ, xinh đẹp và thành công trong cuộc sống nha. Mong sớm gặp nhau bốc phét :v</p>
            <img src="./img/RungDaiKa.jpg" style="width: 328px;">
        </div>
        `
    }
    else if(duongName===a.value && duongPass===b.value) {
        c.innerHTML = 
        ` 
        <div class="content">
            <h1>HAPPY WOMEN DAY</h1>
            <p>Nhân ngày 8/3 tớ chúc bạn Dương vui vẻ, xinh đẹp và thành công trong cuộc sống nha. Mong sẽ được gặp bạn Dương trên Hà Nội :v</p>
            <img src="./img/duong.jpg" style="width: 320px; height: 370px;">
        </div>
        `
    }
    else if(thuyName===a.value && thuyPass===b.value) {
        c.innerHTML = 
        ` 
        <div class="content">
            <h1>HAPPY WOMEN DAY</h1>
            <p>Nhân ngày 8/3 mình chúc bạn Thủy vui vẻ, xinh đẹp và thành công trong cuộc sống nha. Mong sớm gặp lại bạn Thủy hotgirl trên Hà Nội :v</p>
            <img src="./img/thuy2.jpg" style="width: 300px; height: 350px;">
        </div>
        `
    }
    else if(cPAname===a.value && cPAPass===b.value) {
        c.innerHTML = 
        ` 
        <div class="content">
            <h1>HAPPY WOMEN DAY</h1>
            <p>Nhân ngày 8/3 em chúc đại ca Phương Anh luôn luôn vui vẻ, xinh đẹp và quên hết quá khứ đi kemeno đừng quan tâm nữa. Mong sớm sớm gặp lại đại ca :v</p>
            <img src="./img/phuongAnh.jpg">
        </div>
        `
    }
    else if(lanName===a.value && lanPass===b.value) {
        c.innerHTML = 
        ` 
        <div class="content">
            <h1>HAPPY WOMEN DAY</h1>
            <p>Nhân ngày 8/3 mình chúc bạn Lan vui vẻ, xinh đẹp và thành công trong cuộc sống nha. Mong sớm gặp lại bạn Lan trên Hà Nội :v</p>
            <img src="./img/lan.jpg">
        </div>
        `
    }
    else if(loanName===a.value && loanPass===b.value) {
        c.innerHTML = 
        ` 
        <div class="content">
            <h1>HAPPY WOMEN DAY</h1>
            <p>Nhân ngày 8/3 mình chúc bạn Loan vui vẻ, xinh đẹp và thành công trong cuộc sống nha. Mong được gặp lại bạn Loan trên Hà Nội :v</p>
            <img src="./img/loanTrang.jpg" style="width: 350px; height: 350px;">
        </div>
        `
    }
    else if(trangName===a.value && trangPass===b.value) {
        c.innerHTML = 
        ` 
        <div class="content">
            <h1>HAPPY WOMEN DAY</h1>
            <p>Nhân ngày 8/3 mình chúc bạn Trang luôn vui vẻ, xinh đẹp và thành công trong cuộc sống nha và đừng sợ ma nữa :v. Mong được gặp lại bạn Trang(lang thang) :v</p>
            <img src="./img/loanTrang.jpg" style="width: 350px; height: 350px;">
        </div>
        `
    }
    else {
        e.innerHTML = '<h2 style="color: red; text-align: center; margin-top: 20px">Nhập sai</h2>'
    }
}