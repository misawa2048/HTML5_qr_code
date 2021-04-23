//import jsQR from "jsqr";

function n_onload(){
  let ele=document.getElementById("iqr");
  ele.innerText="QR";
  jsQR("hello",100,100,null);
}
