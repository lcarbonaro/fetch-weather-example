const input = document.querySelector("#city");
const btn = document.querySelector("#btnSubmit");
const list = document.querySelector("#result");
const err = document.querySelector("#errormsg");

btn.addEventListener("click", asyncfetchWeatherData);

async function asyncfetchWeatherData() {
  let url = "https://diego-sable.vercel.app/api/weather/";
  let city = input.value;

  let resp = await fetch(`${url}${city}`); // fetch is an asynchronous method
  let data = await resp.json();

  if (data.success === true) {
    list.innerHTML = ""; // clear any previous results

    for (let i = 0; i < data.result.length; i++) {
      let {
        currDesc,
        windDir,
        windSpeed,
        minTemp,
        maxTemp,
        currTemp,
        date,
        dow,
        image,
      } = data.result[i];

      let li = document.createElement("li");
      let img = document.createElement("img");
      img.src = image;
      //img.style = "background-color:red;"

      li.appendChild(img);
      let span = document.createElement("span");
      span.textContent = `${dow} Temp:${currTemp}C Min:${minTemp}C Max:${maxTemp}C  Wind:${windSpeed}mph ${windDir}`;
      li.appendChild(span);
      list.appendChild(li);
    }  // for loop

  } else {
    err.textContent = data.message;
  }
} // async function asyncfetchWeatherData() 

function fetchWeatherData() {
  let url = "https://diego-sable.vercel.app/api/weather/";
  let city = input.value;

  fetch(`${url}${city}`) // fetch is an asynchronous method
    .then((resp) => resp.json())
    .then((data) => {
      //console.log(data);
      if (data.success === true) {
        list.innerHTML = ""; // clear any previous results

        for (let i = 0; i < data.result.length; i++) {
          let {
            currDesc,
            windDir,
            windSpeed,
            minTemp,
            maxTemp,
            currTemp,
            date,
            dow,
            image,
          } = data.result[i];

          let li = document.createElement("li");
          let img = document.createElement("img");
          img.src = image;
          //img.style = "background-color:red;"

          li.appendChild(img);
          let span = document.createElement("span");
          span.textContent = `${dow} Temp:${currTemp}C Min:${minTemp}C Max:${maxTemp}C  Wind:${windSpeed}mph ${windDir}`;
          li.appendChild(span);
          list.appendChild(li);
        }  // for loop

      } else {
        err.textContent = data.message;
      }
    });
}  // function fetchWeatherData() {

/*
let exampleJson = {
  success: true,
  message: "",
  result: [
    {
      currDesc: "Showers",
      windDir: "SSE",
      windSpeed: 6,
      minTemp: 9,
      maxTemp: 21,
      currTemp: 20,
      date: "2021-05-12",
      dow: "Wed",
      image: "https://www.metaweather.com/static/img/weather/s.svg",
    },
    {
      currDesc: "Light Cloud",
      windDir: "N",
      windSpeed: 4,
      minTemp: 8,
      maxTemp: 21,
      currTemp: 20,
      date: "2021-05-13",
      dow: "Thu",
      image: "https://www.metaweather.com/static/img/weather/lc.svg",
    },
    {
      currDesc: "Heavy Cloud",
      windDir: "SSE",
      windSpeed: 6,
      minTemp: 8,
      maxTemp: 17,
      currTemp: 16,
      date: "2021-05-14",
      dow: "Fri",
      image: "https://www.metaweather.com/static/img/weather/hc.svg",
    },
    {
      currDesc: "Showers",
      windDir: "S",
      windSpeed: 6,
      minTemp: 9,
      maxTemp: 18,
      currTemp: 17,
      date: "2021-05-15",
      dow: "Sat",
      image: "https://www.metaweather.com/static/img/weather/s.svg",
    },
    {
      currDesc: "Showers",
      windDir: "S",
      windSpeed: 6,
      minTemp: 8,
      maxTemp: 17,
      currTemp: 17,
      date: "2021-05-16",
      dow: "Sun",
      image: "https://www.metaweather.com/static/img/weather/s.svg",
    },
  ],
};
*/
