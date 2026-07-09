// Live Date & Time

function updateDateTime() {

    const now = new Date();

    document.getElementById("dateTime").innerHTML =
        now.toLocaleDateString() + " | " + now.toLocaleTimeString();

}

setInterval(updateDateTime,1000);

updateDateTime();


// ===============================
// Calculate Result
// ===============================

function calculateResult(){

    let name=document.getElementById("name").value.trim();

    let sub1=Number(document.getElementById("sub1").value);
    let sub2=Number(document.getElementById("sub2").value);
    let sub3=Number(document.getElementById("sub3").value);
    let sub4=Number(document.getElementById("sub4").value);
    let sub5=Number(document.getElementById("sub5").value);

    // Validation

    if(
        name=="" ||
        document.getElementById("sub1").value=="" ||
        document.getElementById("sub2").value=="" ||
        document.getElementById("sub3").value=="" ||
        document.getElementById("sub4").value=="" ||
        document.getElementById("sub5").value==""
    ){

        alert("Please fill all fields.");
        return;

    }

    if(
        sub1<0 || sub1>100 ||
        sub2<0 || sub2>100 ||
        sub3<0 || sub3>100 ||
        sub4<0 || sub4>100 ||
        sub5<0 || sub5>100
    ){

        alert("Marks should be between 0 and 100.");
        return;

    }

    let total=sub1+sub2+sub3+sub4+sub5;

    let percentage=(total/500)*100;

    let grade="";
    let performance="";
    let status="";

    // Grade

    if(percentage>=90){

        grade="A+";
        performance="🏆 Excellent";

    }

    else if(percentage>=80){

        grade="A";
        performance="🥇 Very Good";

    }

    else if(percentage>=70){

        grade="B";
        performance="👍 Good";

    }

    else if(percentage>=60){

        grade="C";
        performance="🙂 Average";

    }

    else if(percentage>=50){

        grade="D";
        performance="⚠ Needs Improvement";

    }

    else{

        grade="F";
        performance="❌ Poor";

    }

    // Pass / Fail

    if(
        sub1>=33 &&
        sub2>=33 &&
        sub3>=33 &&
        sub4>=33 &&
        sub5>=33
    ){

        status="PASS ✅";

    }

    else{

        status="FAIL ❌";

    }

    // Output

    document.getElementById("studentName").innerHTML=name;

    document.getElementById("total").innerHTML=total+" / 500";

    document.getElementById("percentage").innerHTML=percentage.toFixed(2)+" %";

    document.getElementById("grade").innerHTML=grade;

    document.getElementById("performance").innerHTML=performance;

    document.getElementById("status").innerHTML=status;

    // Progress Bar

    document.getElementById("progressBar").style.width=percentage+"%";

    document.getElementById("progressBar").innerHTML=
    percentage.toFixed(0)+"%";

    // Grade Color

    let gradeColor=document.getElementById("grade");

    if(grade=="A+"){

        gradeColor.style.color="green";

    }

    else if(grade=="A"){

        gradeColor.style.color="blue";

    }

    else if(grade=="B"){

        gradeColor.style.color="orange";

    }

    else if(grade=="C"){

        gradeColor.style.color="#ff9800";

    }

    else if(grade=="D"){

        gradeColor.style.color="brown";

    }

    else{

        gradeColor.style.color="red";

    }

    // Status Color

    let statusColor=document.getElementById("status");

    if(status=="PASS ✅"){

        statusColor.style.color="green";

    }

    else{

        statusColor.style.color="red";

    }

}


// ===============================
// Reset
// ===============================

function resetData(){

    document.getElementById("name").value="";

    document.getElementById("sub1").value="";
    document.getElementById("sub2").value="";
    document.getElementById("sub3").value="";
    document.getElementById("sub4").value="";
    document.getElementById("sub5").value="";

    document.getElementById("studentName").innerHTML="-";
    document.getElementById("total").innerHTML="-";
    document.getElementById("percentage").innerHTML="-";
    document.getElementById("grade").innerHTML="-";
    document.getElementById("performance").innerHTML="-";
    document.getElementById("status").innerHTML="-";

    document.getElementById("progressBar").style.width="0%";
    document.getElementById("progressBar").innerHTML="0%";

}


// ===============================
// Dark Mode
// ===============================

function darkMode(){

    document.body.classList.toggle("dark");

}