function TheLogin() {

var password = 'rodzina'
if (this.document.login.pass.value == password) {
  top.location.href="start.html";
}
else {
  window.alert("B��dne has�o, spr�buj ponownie");
  }
}