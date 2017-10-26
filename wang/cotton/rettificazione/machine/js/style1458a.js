//360℃全景轮播
$(document).ready(function () {
    //360℃全景图
    var $threeSixty = $('.threesixty');
    $threeSixty.threeSixty({
        dragDirection: 'horizontal',
        useKeys: true,
        draggable: true,
        drag:true
    });
});

window.onload = function () {

    //切换函数1
    function qiehuan(variabalOne,variabalTwo,images,url) {
        variabalOne.onclick = function () {
            images.src = url;
            this.style.border = "1px solid #01c09e";
            this.style.background = "#01c09e";
            this.style.color = "#fff";
            variabalTwo.style.border = "1px solid #8c92aa";
            variabalTwo.style.background = "#fff";
            variabalTwo.style.color = "#8a95a9";
        };
    }

    //切换函数2
    function qiehuanAll(variable1,variable2,check1,check2) {
        variable1.onclick = function () {
            this.style.border = "1px solid #01c09e";
            this.style.background = "#01c09e";
            this.style.color = "#fff";
            variable2.style.border = "1px solid #8c92aa";
            variable2.style.background = "#fff";
            variable2.style.color = "#8a95a9";
            check1.style.display = "block";
            check2.style.display = "none";

        };
    }

    //喂入型式1458a，400,500 控制
    var wrbtnone  = document.getElementsByClassName("wr-btn-one")[0];
    var wrbtntwo = document.getElementsByClassName("wr-btn-two")[0];
    var wrbtnimg = document.getElementsByClassName("wr-btn-img")[0];
    qiehuan(wrbtnone,wrbtntwo,wrbtnimg,"image/jwf1458a_dongtai05_400.gif");
    qiehuan(wrbtntwo,wrbtnone,wrbtnimg,"image/jwf1458a_dongtai05_500.gif");

    //jwf1458控制系统
    var kzbtnone  = document.getElementsByClassName("kz-btn-one")[0];
    var kzbtntwo = document.getElementsByClassName("kz-btn-two")[0];
    var kzbtnimg = document.getElementsByClassName("kz-btn-img")[0];
    qiehuan(kzbtnone,kzbtntwo,kzbtnimg,"image/jwf1458awangluo.png");
    qiehuan(kzbtntwo,kzbtnone,kzbtnimg,"image/jwf1458arenji.png");

};