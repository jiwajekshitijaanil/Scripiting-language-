var WeekDays = /** @class */ (function () {
    function WeekDays() {
    }
    WeekDays.prototype.showDay = function (day) {
        switch (day) {
            case 1:
                console.log("Monday");
                break;
            case 2:
                console.log("Tuesday");
                break;
            case 3:
                console.log("Wednesday");
                break;
            case 4:
                console.log("Thursday");
                break;
            case 5:
                console.log("Friday");
                break;
            case 6:
                console.log("Saturday");
                break;
            case 7:
                console.log("Sunday");
                break;
            default:
                console.log("Invalid day number");
        }
    };
    return WeekDays;
}());
var userDays = [1, 5, 7, 9];
var week = new WeekDays();
for (var i = 0; i < userDays.length; i++) {
    console.log("Day number:", userDays[i]);
    week.showDay(userDays[i]);
}
