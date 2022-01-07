const city_name = document.getElementById("city_name");
const search_btn = document.getElementById("search_btn");
const show_temp = document.getElementById("show_temp");
const temp_img = document.getElementById("temp_img");
const KEY = "ddc55ff93c84402cbd9144932220301";

const getInfo = async () => {
  if (city_name.value) {
    try {
      const response =
        await fetch(`http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city_name.value}&aqi=yes
        `);
      const data = await response.json();
      show_temp.textContent = data.current.temp_c;
      temp_img.setAttribute("src", data.current.condition.icon);
    } catch {
      show_temp.textContent = "000";
      temp_img.setAttribute("src", "");
    }
  } else {
    show_temp.textContent = "000";
  }
};

search_btn.addEventListener("click", getInfo);
