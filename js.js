let farine = 63;
let oeuf = 1;
let lait = 0.2;
let sucre = 0.5;
let beurre = 13;
let huile = 2;

function calcul(){
    console.log("Test");
    console.log(Number(
  document.getElementById("value").value));
    var a=Number(
        document.getElementById("value").value);
            var b=farine*a;
            var s=document.getElementById("farine");
            s.innerText=b + " g";
    var a=Number(
        document.getElementById("value").value);
          var b=oeuf*a;
          var s=document.getElementById("oeuf");
          s.innerText=b + " oeuf";
    var a=Number(
        document.getElementById("value").value);
          var b=lait*a;
          var s=document.getElementById("lait");
          s.innerText=b + " L";
    var a=Number(
        document.getElementById("value").value);
          var b=sucre*a;
          var s=document.getElementById("sucre");
          s.innerText=b + " c.a.s";
    var a=Number(
        document.getElementById("value").value);
          var b=beurre*a;
          var s=document.getElementById("beurre");
          s.innerText=b + " g";
    var a=Number(
        document.getElementById("value").value);
          var b=beurre*a;
          var s=document.getElementById("huile");
          s.innerText=b + " c.a.s";
}