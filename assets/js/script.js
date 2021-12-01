var headerEl = $("#currentDay");

var dateEl = $("<p>");
headerEl.append(dateEl);
// Timer, displays current date and time
function today() {
    let dateTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
    console.log(dateTime);
    dateEl.text(dateTime);
}


// checks to see what time it is and colors blocks
function currentTime() {
    let currentTime = moment().hour();
    $(".row").each(function() {
        let rowTime = $(this).children("textarea").attr("time");
        if(parseInt(rowTime) < currentTime) {
            $(this).children("textarea").addClass("past");
        }
        if(parseInt(rowTime) == currentTime) {
            $(this).children("textarea").addClass("present");
        }
        if(parseInt(rowTime) > currentTime) {
            $(this).children("textarea").addClass("future");
        }
    });
}

// gtakes input from text and puts into local storage
function getInput() {
    // uses id as a key
    let timeStore = $(this).attr("id");
    console.log(timeStore);
    let timeInput = $(this).siblings('textarea').val();
    console.log(timeInput);
    localStorage.setItem(timeStore, timeInput);
}

// renders localstorage info into timeblocks
function renderInput() {
    let nineAm = localStorage.getItem("scheduleNine");
    let tenAm = localStorage.getItem("scheduleTen");
    let elevenAm = localStorage.getItem("scheduleEleven");
    let twelvePm = localStorage.getItem("scheduleTwelve");
    let onePm = localStorage.getItem("scheduleOne");
    let twoPm = localStorage.getItem("scheduleTwo");
    let threePm = localStorage.getItem("scheduleThree");
    let fourPm = localStorage.getItem("scheduleFour");
    let fivePm = localStorage.getItem("scheduleFive");

    $("#nine").text(nineAm);
    $("#ten").text(tenAm);
    $("#eleven").text(elevenAm);
    $("#twelve").text(twelvePm);
    $("#one").text(onePm);
    $("#two").text(twoPm);
    $("#three").text(threePm);
    $("#four").text(fourPm);
    $("#five").text(fivePm);
}

$(".saveBtn").on("click", getInput);


//function calls
today();
currentTime();
renderInput();
setInterval(currentTime, 60000);
setInterval(today, 60000);
