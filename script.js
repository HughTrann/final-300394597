// get the date from the input field
function getDate() {
    var date = document.getElementById("birthday").value;
    return date;
}

// start the countdown
function start() {
    

    // Set the date we're counting down to
    var future_date = getDate();
    console.log(future_date);
    // Update the count down every 0.1 second

        // Get today's date and time
        var today = new Date();
        console.log(today);
               
        // Find the distance between now and the count down date
        var distance = future_date - today;
        console.log(distance)

        if(distance>0){
            // Time calculations for days, hours, minutes and seconds
            var count_day = Math.floor(distance/1000/60/60/24);
            var count_hour = Math.floor((distance%(1000*60*60*24))/(1000*60*60))
            var count_minute = Math.floor((distance%(1000*60*60))/(1000*60))
            var count_second = Math.floor((distance%(1000*60))/(1000))
            console.log(`${count_day} ${count_hour} ${count_minute} ${count_second}`);

            // Output the result in an element with id="demo"
            document.getElementById('demo').innerHTML = `
            ${count_day} <sub>days</sub> ${count_hour} <sub>hrs</sub> ${count_minute} <sub>mins</sub> ${count_second} <sub>scnds</sub> 

            `
        } else if(distance<0) {
            alert("Date is Expired")
        } else {
            alert("Countdown is over!!!")
        }

        
        // If the count down is over, write some text 
        // 0 <sub>days</sub> 0 <sub>hrs</sub> 0 <sub>mins</sub> 0 <sub>scnds</sub> 0 <sub>decscnd</sub> ${count_dicsecs} <sub>decscnd</sub>
}

