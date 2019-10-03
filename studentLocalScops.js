function readStudentDetails(){
    var name = prompt("Enter the Student Name: ");
    var marks = [];
    var total = 0;
    var avg;
    var grade;
    //itration started...
    for(var i = 0; i < 5; i++){
        makrs[i] = prompt("Enter subject name: "+(i+1));
        marks[i] = parseInt(marks[i]);
    }
    var details = getTotalAndAvg(marks);
    total = details[0];
    avg = details[1];
    var grade = getGrade(avg);
    displayData(name, total, avg, grade);
}

function getTotalAndAvg(marks){
    var total = 0;
    for(var i = 0; i < marks.length; i++)
    {
        total += marks[i];
    }
    var avg = total/marks.length;
    var details = [total, avg];
    return details;
}

function getGrade(avg){
    var grade = '';
    if (avg>=40){
        grade = 'Passed';
    }else{
        grade = 'Surprise';
    }
    return grade;
}
function displayData(){
    console.log("Name is "+sname);
    console.log("Total "+tot);
    console.log("Average "+avg);
    console.log("Grade is "+grade);
}
readStudentDetails();