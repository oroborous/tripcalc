function calculateTrip()
{

    // get length of trip in miles
    var tripLengthMiles = prompt("How long is your trip?");

    // convert to number
    tripLengthMiles = parseFloat(tripLengthMiles);

    // get the mpg of vehicle
    var mpg = prompt("What MPG does your vehicle get?");

    // convert to number
    mpg = parseFloat(mpg);

    // get the $/gallon of gas
    var dollarsPerGallon = parseFloat(prompt("How much is gas?"));

    // convert to number

    // get average mph driven
    var mph = parseInt(prompt("What is your average speed?"));


    // convert to number

    // find total gallons by dividing miles by mpg
    var totalGallons = tripLengthMiles / mpg;

    // find total gas cost by total gallons * $/gallon
    var totalGasCost = totalGallons * dollarsPerGallon;

    // find total hours by dividing miles by mph
    var totalHours = tripLengthMiles / mph;

    var totalGasCostDisplay = totalGasCost.toFixed(2);

    var totalHoursDisplay = totalHours.toFixed(1);

    // output total gas cost
    alert("Your trip will cost $" + totalGasCostDisplay + " for gas.");
    alert(`Your trip will cost $${totalGasCostDisplay} for gas.`);

    // output hours of trip
    alert("Your trip will take " + totalHoursDisplay + " hours.");
    alert(`Your trip will take ${totalHoursDisplay} hours.`);
}