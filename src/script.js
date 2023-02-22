let time = document.querySelector(".day");
let now = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let day = days[now.getDay()];
time.innerHTML = day;
let hour = document.querySelector(".hour");
hour.innerHTML = now.getHours();
let minute = document.querySelector(".minute");
minute.innerHTML = now.getMinutes();

function show(event) {
  event.preventDefault();
  let input = document.querySelector("#search");
  let h1 = document.querySelector("#City");
  h1.innerHTML = input.value;
  function showing(response) {
    let round = Math.round(response.data.main.temp);
    alert(round);
  
  let apiKey = "2513f3c728b1b5ff4f4347e1a6af22b8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${h1.textContent}&appid=${apiKey}&&units=metric`;
  axios.get(apiUrl).then(showing);
}
let city = document.querySelector("form");
city.addEventListener("submit", show);
let buttonfunction = document.querySelector("#searchbutt");
buttonfunction.addEventListener("click", show, showing);

function change() {
  let temp = document.querySelector(".number");
  temp.innerHTML = 5;
}
let cel = document.querySelector(".cel");
cel.addEventListener("click", change);

function change2() {
  let temp2 = document.querySelector(".number");
  temp2.innerHTML = 43;
}
let farenheit = document.querySelector(".farenheit");
farenheit.addEventListener("click", change2);
///////////////////////////////////////////////
function showing(response) {
  alert(response.data.main.temp);
}
let apiKey = "2513f3c728b1b5ff4f4347e1a6af22b8";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=${apiKey}&&units=metric`;
axios.get(apiUrl).then(showing);