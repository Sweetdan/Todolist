
$(function(){
 $("#table1").html(localStorage.first);
 $("#table2").html(localStorage.second); 
 count();
 $('.del').on('click',del);
 $('.input').on('click',done);
 $('.output').on('click',undone);
 $('.clear').on('click',clear);
 $("#form").keypress(function(e){
  if (e.which == 13){
    return false;
  };
 });
 $("#addbt").click(function(){
  var a=$("#input").val();
  var string='<tr><td><input type="checkbox" class="input">' + a + '<a href="#" class="del">-</a></td></tr>';
  var string1=$("#table1").html();
  string1+=string;
  localStorage.setItem("first",string1);
  $("#table1").html(localStorage.first);
  count();
  $('.input').unbind('click').on('click',done);
  $('.del').unbind('click').on('click',del);
 });
 function del(){
   $(this).parent().parent().remove();
   rslocal();
   count();
 };
 function done(){
   $(this).removeClass("input");
   $(this).addClass("output");
   $(this).parent().parent().remove();
   //alert($("#table2").html());
   $("#table2").append($(this).parent().parent());
   //alert($("#table2").html());
   count();
   rslocal();
   $('.del').unbind('click').on('click',del);
   $('.output').unbind('click').on('click',undone);
 };
 function undone(){
   $(this).removeClass("output");
   $(this).addClass("input");
   $(this).parent().parent().remove();
   //alert($("#table1").html());
   $("#table1").append($(this).parent().parent());
   //alert($("#table1").html());
   count();
   rslocal();
   $('.del').unbind('click').on('click',del);
   $('.input').unbind('click').on('click',done);
 };
 function count(){
  var row1 = document.getElementById("table1").rows.length;
  $("#number1").html(row1);
  var row2 = document.getElementById("table2").rows.length;
  $("#number2").html(row2);
 };
 function clear(){
 localStorage.clear();
 location.reload();
 };
 function rslocal(){
  var string6=$("#table1").html();
  var string7=$("#table2").html();
  localStorage.setItem("first",string6);
  localStorage.setItem("second",string7);
  $("#table1").html(localStorage.first);
  $("#table2").html(localStorage.second);
  console.log(string6.string7);
  $('.del').on('click',del);

  $('.input').unbind('click').on('click',done);
  $('.output').unbind('click').on('click',undone);
  // $('.input').click(function(){done();})
  // $('.output').click(function(){undone();})
 };
})
