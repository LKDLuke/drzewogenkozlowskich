function TheLogin() {

var password = 'rodzina'
if (this.document.login.pass.value == password) {
  top.location.href="start.html";
}
else {
  window.alert("B³êdne has³o, spróbuj ponownie");
  }
}