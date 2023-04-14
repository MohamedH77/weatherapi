const search = document.querySelector(".searchBox")


search.addEventListener("ckick", () => {
    const APIkey = "3623f28106c0768d3dd0c0c773617d27";
    const city = document.querySelector(".searchBox input").value;
    if(ciry === "")
        return
        fetch("https://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}").then(Response =>json())
        console.log(search)
})