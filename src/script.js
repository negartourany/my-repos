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
  console.log(typeof input.value);
  let upperCase = input.value.to;
  h1.innerHTML = input.value;

  let cityName = input.value;
  function showtemp(response) {
    let temperature = Math.round(response.data.main.temp);
    let rightTemp = document.querySelector(".number");
    rightTemp.innerHTML = temperature;
  }
  let apiKey = "197ef3a642b76eef90e131866f74a0a0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showtemp);
}
let city = document.querySelector("form");
city.addEventListener("submit", show);
let buttonfunction = document.querySelector("#searchbutt");
buttonfunction.addEventListener("click", show);

function change() {
  let temp = document.querySelector(".number");
  temp.innerHTML = 5;
}
let cel = document.querySelector(".cel");
cel.addEventListener("click", change);
///////////////////////////////////////////////
