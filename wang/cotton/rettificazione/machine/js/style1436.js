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

    //喂入型式1436，400,500 控制
    var wrsbtnone  = document.getElementsByClassName("wrs-btn-one")[0];
    var wrsbtntwo = document.getElementsByClassName("wrs-btn-two")[0];
    var wrsbtnimg = document.getElementsByClassName("wrs-btn-img")[0];
    qiehuan(wrsbtnone,wrsbtntwo,wrsbtnimg,"image/jwf1436_dongtai05_400.gif");
    qiehuan(wrsbtntwo,wrsbtnone,wrsbtnimg,"image/jwf1436_dongtai05_500.gif");

    //参数规格转换控制
    var csbtnone  = document.getElementsByClassName("cs-btn-one")[0];
    var csbtntwo = document.getElementsByClassName("cs-btn-two")[0];
    var csbtnimg = document.getElementsByClassName("cs-table-img")[0];
    qiehuan(csbtnone,csbtntwo,csbtnimg,"image/jwf1436canshu02.png");
    qiehuan(csbtntwo,csbtnone,csbtnimg,"image/jwf1436canshu01.png");

    //jwf1436电控系统切换
    var dkbtnone  = document.getElementsByClassName("dk-btn-one")[0];
    var dkbtntwo = document.getElementsByClassName("dk-btn-two")[0];
    var dkimgandinstructB = document.getElementsByClassName("dk-imgandinstructB")[0];
    var dkimgandinstructC = document.getElementsByClassName("dk-imgandinstructC")[0];
    qiehuanAll(dkbtnone,dkbtntwo,dkimgandinstructB,dkimgandinstructC);
    qiehuanAll(dkbtntwo,dkbtnone,dkimgandinstructC,dkimgandinstructB);

};

