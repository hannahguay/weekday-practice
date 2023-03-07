function dayChecker () {
    if (document.getElementById("input-field").value === "Saturday" || document.getElementById("input-field").value === "Sunday") {
        document.getElementById("header").innerHTML = "It's the Weekend!";
    } else {
        document.getElementById("header").innerHTML = "It's the Workweek!";
    }
}














