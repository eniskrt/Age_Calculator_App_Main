const txtDay = document.getElementById("day");
const txtMonth = document.getElementById("month");
const txtYear = document.getElementById("year");
const btn = document.getElementById("btn");
const lblDay = document.getElementById("lblDay");
const lblMonth = document.getElementById("lblMonth");
const lblYear = document.getElementById("lblYear");
const resultDay = document.getElementById("resultDay");
const resultMonth = document.getElementById("resultMonth");
const resultYear = document.getElementById("resultYear");




btn.addEventListener("click", () => {
    day = Number(txtDay.value);
    month = Number(txtMonth.value);
    year = Number(txtYear.value);

    let currentDate = new Date();
    let birthDate = new Date(`${year}-${month}-${day}`)

    if (!day || day < 1 || month >31) {
        txtDay.style.borderColor ="hsl(0, 100%, 67%)";
        lblDay.style.color = "hsl(0, 100%, 67%)"
    }
    if (!month || month < 1 || month > 12) {
        txtMonth.style.borderColor ="hsl(0, 100%, 67%)";
        lblMonth.style.color = "hsl(0, 100%, 67%)"
    }
    if (!year || year < 1900 || day >2024) {
        txtYear.style.borderColor ="hsl(0, 100%, 67%)";
        lblYear.style.color = "hsl(0, 100%, 67%)"
    }

    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth()+1;
    let currentDay = currentDate.getDate();

    let ageYear = currentYear -year;

    let ageMoth = currentMonth -month;
    if (ageMoth < 0) {
        ageYear--;
        ageMoth +=12;
    }

    let ageDay = currentDay - day;
    if (ageDay < 0) {
        ageMoth--;
        ageDay +=30;
    }

    resultDay.innerText = ageDay;
    resultMonth.innerText = ageMoth;
    resultYear.innerHTML = ageYear;

});

