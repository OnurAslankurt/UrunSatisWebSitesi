// JavaScript Document
$(document).ready(function () {

 /* UFAK CİHAZLAR İÇİN MENU AÇMA BUTONUNUN İŞLEMLERİ >>>>> */
 $("#HeaderMenuAcmaButonuAlani").on("click", function () {
  $("#HeaderMenuAcmaButonuMenuSinirlamaAlani").slideToggle("slow");
 });
 /* UFAK CİHAZLAR İÇİN MENU AÇMA BUTONUNUN İŞLEMLERİ <<<<< */

 /* MAİN VE FOOTER ALANI İÇİN ÜSTTEN BOŞLUK HESAPLAMALARI */
 var DocumanGenisligi = $(window).outerWidth();

 if (!$("#HeaderMesajAlani").length) {
  if (DocumanGenisligi >= 1200) {
   var OfsetDegeri = 108;
  } else if ((DocumanGenisligi >= 992) && (DocumanGenisligi <= 1199)) {
   var OfsetDegeri = 98;
  } else if ((DocumanGenisligi >= 768) && (DocumanGenisligi <= 991)) {
   var OfsetDegeri = 88;
  } else if ((DocumanGenisligi >= 576) && (DocumanGenisligi <= 767)) {
   var OfsetDegeri = 78;
  } else if (DocumanGenisligi <= 574) {
   var OfsetDegeri = 78;
  }
 } else {
  if (DocumanGenisligi >= 1200) {
   var OfsetDegeri = 148;
  } else if ((DocumanGenisligi >= 992) && (DocumanGenisligi <= 1199)) {
   var OfsetDegeri = 138;
  } else if ((DocumanGenisligi >= 768) && (DocumanGenisligi <= 991)) {
   var OfsetDegeri = 118;
  } else if ((DocumanGenisligi >= 576) && (DocumanGenisligi <= 767)) {
   var OfsetDegeri = 108;
  } else if (DocumanGenisligi <= 574) {
   var OfsetDegeri = 103;
  }
 }
 $("main").css("top", OfsetDegeri);
 $("footer").css("top", OfsetDegeri);

 $(window).resize(function () {
  var DocumanGenisligi = $(window).outerWidth();

  if (!$("#HeaderMesajAlani").length) {
   if (DocumanGenisligi >= 1200) {
    var OfsetDegeri = 108;
   } else if ((DocumanGenisligi >= 992) && (DocumanGenisligi <= 1199)) {
    var OfsetDegeri = 98;
   } else if ((DocumanGenisligi >= 768) && (DocumanGenisligi <= 991)) {
    var OfsetDegeri = 88;
   } else if ((DocumanGenisligi >= 576) && (DocumanGenisligi <= 767)) {
    var OfsetDegeri = 78;
   } else if (DocumanGenisligi <= 574) {
    var OfsetDegeri = 78;
   }
  } else {
   if (DocumanGenisligi >= 1200) {
    var OfsetDegeri = 148;
   } else if ((DocumanGenisligi >= 992) && (DocumanGenisligi <= 1199)) {
    var OfsetDegeri = 138;
   } else if ((DocumanGenisligi >= 768) && (DocumanGenisligi <= 991)) {
    var OfsetDegeri = 118;
   } else if ((DocumanGenisligi >= 576) && (DocumanGenisligi <= 767)) {
    var OfsetDegeri = 108;
   } else if (DocumanGenisligi <= 574) {
    var OfsetDegeri = 103;
   }
  }
  $("main").css("top", OfsetDegeri);
  $("footer").css("top", OfsetDegeri);
 });
 /* MAİN VE FOOTER ALANI İÇİN ÜSTTEN BOŞLUK HESAPLAMALARI */


 /* SSS İÇERİK GÖSTER / GİZLE >>>> */
 $.SSSIceriginiGoster = function (ElemanID) {
  var SoruIDsi = ElemanID;
  var IslenecekAlan = "#" + SoruIDsi;

  $(".TamSayfaCerceveAlaniIciSSSSoruIcerigiAlani").slideUp();
  $(IslenecekAlan).parent().find(".TamSayfaCerceveAlaniIciSSSSoruIcerigiAlani").slideToggle();
 }
 /* SSS İÇERİK GÖSTER / GİZLE <<<< */


 /* ALIŞVERİŞ SEPETİ FATURA VE TESLİMAT ADRESİ FORMU GÖNDER İŞLEMİ >>>> */
 $.AlisverisSepetiFormGonder = function (ElemanID) {
  $("#AlisverisSepetiFormu").submit(); /*  $("form").submit(); BÖYLE GÖNDERİRSEN HTML DEKİ FORMU DİREK GÖNDERİR - ID İLE DİREL ID FORMU GİDER */

 }
 /* ALIŞVERİŞ SEPETİ FATURA VE TESLİMAT ADRESİ FORMU GÖNDER İŞLEMİ <<<< */


 /* ALIŞVERİŞ SEPETİ ÖDEME SİSTEMLERİ ALANLARI AÇMA / KAPAMA İŞLEMİ BAŞLANGIÇ YERİ */

 $.AlisverisSepetiOdemeSayfasiIcinKrediKartiSistemiSecildi = function () {
  $("#KrediKartiIleOdemeAlani").css("display", "block");
  $("#MobilOdemeIleOdemeAlani").css("display", "none");
  $("#BankaHavalesiIleOdemeAlani").css("display", "none");
 }

 $.AlisverisSepetiOdemeSayfasiIcinMobilOdemeSistemiSecildi = function () {
  $("#KrediKartiIleOdemeAlani").css("display", "none");
  $("#MobilOdemeIleOdemeAlani").css("display", "block");
  $("#BankaHavalesiIleOdemeAlani").css("display", "none");
 }

 $.AlisverisSepetiOdemeSayfasiIcinBankaHavalesiSistemiSecildi = function () {
  $("#KrediKartiIleOdemeAlani").css("display", "none");
  $("#MobilOdemeIleOdemeAlani").css("display", "none");
  $("#BankaHavalesiIleOdemeAlani").css("display", "block");
 }

 /* ALIŞVERİŞ SEPETİ ÖDEME SİSTEMLERİ ALANLARI AÇMA / KAPAMA İŞLEMİ BİTİŞ YERİ  */


 $.UrunDetaySayfasiIcınResimDegistir = function (ResimDegeri) {
  var DegisecekResimDosyasiYolu = "/Resim/UrunResimleri/Kitap/";
  var ResimOlustur = DegisecekResimDosyasiYolu + ResimDegeri;

  $('#BuyukResim').attr("src", ResimOlustur);

 }


 /* SLAYT ALANI */

 $(function () {
  var SlaytElementi = $(".SlaytAlaniKapsayicisi");
  var SlaytListeOlusturmaElementi = SlaytElementi.find(".SlaytAlaniResimleri");
  var SlaytListesiUzunlugu = SlaytListeOlusturmaElementi.find(".SlaytResmi").length;
  var SlaytIcinDokumanGenisligi = SlaytElementi.outerWidth();
  var ToplamGenislik = SlaytListesiUzunlugu * SlaytIcinDokumanGenisligi;
  var ResimSirasi = 0;
  var KayacakAlan = 0;

  SlaytListeOlusturmaElementi.find(".SlaytResmi").width(SlaytIcinDokumanGenisligi).end().width(ToplamGenislik);

  $(window).resize(function () {
   SlaytElementi = $(".SlaytAlaniKapsayicisi");
   SlaytListeOlusturmaElementi = SlaytElementi.find(".SlaytAlaniResimleri");
   SlaytListesiUzunlugu = SlaytListeOlusturmaElementi.find(".SlaytResmi").length;
   SlaytIcinDokumanGenisligi = SlaytElementi.outerWidth();
   ToplamGenislik = SlaytListesiUzunlugu * SlaytIcinDokumanGenisligi;

   SlaytListeOlusturmaElementi.find(".SlaytResmi").width(SlaytIcinDokumanGenisligi).end().width(ToplamGenislik).css("margin-left", "-" + (ResimSirasi * SlaytIcinDokumanGenisligi) + "px");
  });

  $.OtomatikDegistir = function () {
   if (ResimSirasi < SlaytListesiUzunlugu - 1) {
    ResimSirasi++;
    KayacakAlan = "-" + (ResimSirasi * SlaytIcinDokumanGenisligi) + "px";
   } else {
    ResimSirasi = 0;
    KayacakAlan = 0;
   }
   SlaytListeOlusturmaElementi.stop().animate({
     marginLeft: KayacakAlan
    }, 500,
    function () {
     SlaytElementi = $(".SlaytAlaniKapsayicisi");
     SlaytListeOlusturmaElementi = SlaytElementi.find(".SlaytAlaniResimleri");
     SlaytListesiUzunlugu = SlaytListeOlusturmaElementi.find(".SlaytResmi").length;
     SlaytIcinDokumanGenisligi = SlaytElementi.outerWidth();
     ToplamGenislik = SlaytListesiUzunlugu * SlaytIcinDokumanGenisligi;

     SlaytListeOlusturmaElementi.find(".SlaytResmi").width(SlaytIcinDokumanGenisligi).end().width(ToplamGenislik).css("margin-left", "-" + (ResimSirasi * SlaytIcinDokumanGenisligi) + "px");
    });
  }

  var SlaytOynat = setInterval("$.OtomatikDegistir()", 2000);

 });

 /* SLAYT ALANI BİTİŞ */


});