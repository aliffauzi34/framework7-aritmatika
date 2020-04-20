var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  view:{
    stackPage:true
  },
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/page2/',
      pageName: 'page2',
    },
    {
      path: '/home/',
      pageName: 'home',
    },
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');

  var $$ = Dom7;

  $$("#tambah").click(function(){
      // app.dialog.alert("Tambah");
      var bil1=$$("#bil1").val();
      var bil2=$$("#bil2").val();

      var hasil = parseInt(bil1)+parseInt(bil2);
      $$("#hasil").html("Hasil Tambah : " + hasil);
  });
  
$$("#kurang").click(function(){
    // app.dialog.alert("Tambah");
    var bil1=$$("#bil1").val();
    var bil2=$$("#bil2").val();

    var hasil = parseInt(bil1)-parseInt(bil2);
    $$("#hasil").html("Hasil Kurang : " + hasil);
});

$$("#kali").click(function(){
  // app.dialog.alert("Tambah");
  var bil1=$$("#bil1").val();
  var bil2=$$("#bil2").val();

  var hasil = parseInt(bil1) * parseInt(bil2);
  $$("#hasil").html("Hasil Kali : " + hasil);
});

$$("#bagi").click(function(){
  // app.dialog.alert("Tambah");
  var bil1=$$("#bil1").val();
  var bil2=$$("#bil2").val();

  var hasil = parseInt(bil1) / parseInt(bil2);
  $$("#hasil").html("Hasil Bagi : " + hasil);
});

$$("#proses").click(function(){
  var bil1=$$("#angka1").val();
  var bil2=$$("#angka2").val();
  var operator = $$("#operator").val();
  var hasil = "";

  switch(operator){
    case 'tambah':
      hasil = parseInt(bil1) + parseInt(bil2);
      break;
    case 'kurang':
      hasil = parseInt(bil1) - parseInt(bil2);
      break;
    case 'kali':
      hasil = parseInt(bil1) * parseInt(bil2);
      break;
    case 'bagi':
      hasil = parseInt(bil1) / parseInt(bil2);
      break;
  }
  $$("#nilai").html("Hasil Proses : " + hasil)
});