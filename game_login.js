function adduser(){
p1=document.getElementById("p1name").value;
p2=document.getElementById("p2name").value;
localStorage.setItem("p1name",p1);
localStorage.setItem("p2name",p2);
window.location="game_page.html";
}
