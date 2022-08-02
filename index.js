function narrate(s) {
  divvy = document.getElementById("title");
  
  // divvy.innerHTML += "<br>";
  for (let i = 0; i < s.length; i+=1) {
    setTimeout(() => {divvy.innerHTML += s[i]}, 30*i);
  }
  return s;
}

// document.addEventListener("DOMContentLoaded", function(event) { 
//   //do work
//   narrate("hi! i'm aanya agrawal.")
// });

// function art() {
// 	console.log("hi");
// }

