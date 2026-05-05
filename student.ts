import promptSync from "prompt-sync";
const prompt = promptSync();

class Student {
    name: string;
    marks: number;
    grade: string;

    constructor(name: string, marks: number) {
        this.name = name;
        this.marks = marks;
        this.grade = this.calculateGrade();
    }

    calculateGrade(): string {
        let category: number;

        if (this.marks >= 90) category = 1;
        else if (this.marks >= 75) category = 2;
        else if (this.marks >= 60) category = 3;
        else if (this.marks >= 50) category = 4;
        else category = 5;

        switch (category) {
            case 1: return "A+";
            case 2: return "A";
            case 3: return "B";
            case 4: return "C";
            case 5: return "Fail";
            default: return "Invalid";
        }
    }

    displayResult(): void {
        console.log("Name:", this.name);
        console.log("Marks:", this.marks);
        console.log("Grade:", this.grade);
    }
}

let name = prompt("Enter student name: ");
let marks = Number(prompt("Enter marks: "));

let student = new Student(name, marks);
student.displayResult();