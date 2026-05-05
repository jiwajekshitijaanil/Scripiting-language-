class NumberCheck {
    checkNumber(n: number): void {
        if (n % 2 == 0) {
            console.log(n + " is Even");
        } else {
            console.log(n + " is Odd");
        }
    }
}

function fun(): void {
    let obj = new NumberCheck();

    let inputs: string[] = ["5", "8", "13"];

    for (let i = 0; i < inputs.length; i++) {
        let num: number = parseInt(inputs[i]); 
        obj.checkNumber(num);
    }
}

fun();
