var NumberCheck = /** @class */ (function () {
    function NumberCheck() {
    }
    NumberCheck.prototype.checkNumber = function (n) {
        if (n % 2 == 0) {
            console.log(n + " is Even");
        }
        else {
            console.log(n + " is Odd");
        }
    };
    return NumberCheck;
}());
function fun() {
    var obj = new NumberCheck();
    var inputs = ["5", "8", "13"];
    for (var i = 0; i < inputs.length; i++) {
        var num = parseInt(inputs[i]);
        obj.checkNumber(num);
    }
}
fun();
