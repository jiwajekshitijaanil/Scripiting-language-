class WeekDays {
    showDay(day: number): void {
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
    }
}
let userDays: number[] = [1, 5, 7, 9];
let week = new WeekDays();
for (let i = 0; i < userDays.length; i++) {
    console.log("Day number:", userDays[i]);
    week.showDay(userDays[i]);
}
