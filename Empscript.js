// employee dictionary and employee class
const empdict = {};
const payedemp = {};
class employee
{
    constructor(name, tax, hours, hourly_rate, sales, commission)
    {
        this.name = name;
        this.tax = tax;
        this.hours = hours;
        this.hourly_rate = hourly_rate;
        this.sales = sales;
        this.commission = commission;
    }
}

class payed_employee
{
    constructor(name, hourly_pay, commission_pay, withheld_tax, total_pay)
    {
        this.name = name;
        this.hourly_pay = hourly_pay,
        this.commission_pay = commission_pay;
        this.withheld_tax = withheld_tax;
        this.total_pay = total_pay;
    }
}

//Function to begin the program
function startclick()
{
    document.getElementById("start").style.display = "none"; 
    collect();
}

//Function to display information input boxes, 
// collect information and pass it through an error catcher.

function collect()
{
    document.getElementById("mainprob").style.backgroundColor = "rgb(255, 205, 149)";
    document.getElementById("mainprob").style.display = "flex";
    document.getElementById("tax").style.display = "flex";
    document.getElementById("hours").style.display = "flex";
    document.getElementById("sales").style.display = "flex";
    document.getElementById("commission").style.display = "flex";
    document.getElementById("name").style.display = "flex";
    document.getElementById("button").style.display = "flex";
    document.getElementById("hour_rate").style.display = "flex";
    
    document.getElementById("subbutton").onclick = function()
    {   
        var pass =  errorcheck();
        if(pass == true)
        {
            passederror();
        }
    }
    document.getElementById("donebutton").onclick = function()
    {
        var output = calculate();
        document.getElementById("mainprob").style.height = "fit-content";
        document.getElementById("main").style.alignItems = "top";
        document.getElementById("main").style.height = "fit-content";
        document.getElementById("mainoutput").innerHTML = output;
    }
}


//Function to check if inputs have any errors

function errorcheck()
{
    let name, tax, hours, sales, commission, hourly_rate;
    name = document.getElementById("empname").value;
    tax = document.getElementById("taxrate").value;
    hours = document.getElementById("workedhours").value;
    sales = document.getElementById("salesmade").value;
    commission = document.getElementById("commissionrate").value;
    hourly_rate = document.getElementById("hourly_rate").value;
    document.getElementById("confirmation").innerHTML = "";
    let x = true;
    if(isNaN(name) == false)
    {
        document.getElementById("nameerror").innerHTML = "Error";
        document.getElementById("empname").value = '';
        x = false;
    }
    else{
        document.getElementById("nameerror").innerHTML = "";
    }
    if(tax <= 0)
    {
        document.getElementById("taxerror").innerHTML = "Must be greater than 0.";
        document.getElementById("taxrate").value = "";
        x = false;
    }
    else{
        document.getElementById("taxerror").innerHTML = "";
    }
    if(hourly_rate <= 0)
    {
        document.getElementById("hourly_rate_error").innerHTML = "Must be greater than 0.";
        document.getElementById("hourly_rate").value = "";
        x = false;
    }
    else{
        document.getElementById("hourly_rate_error").innerHTML = "";
    }
    if(sales < 0)
    {
        document.getElementById("saleserror").innerHTML = "Cannont be negative.";
        document.getElementById("salesmade").value = "";
        x = false;
    }
    else{
        document.getElementById("saleserror").innerHTML = "";
    }
    if(hours < 0)
    {
        document.getElementById("hourserror").innerHTML = "Cannont be negative.";
        document.getElementById("workedhours").value = "";
        x = false;
    }
    else{
        document.getElementById("hourserror").innerHTML = "";
    }
    if(commission < 0)
    {
        document.getElementById("comerror").innerHTML = "Cannont be negative.";
        document.getElementById("commissionrate").value = "";
        x = false;
    }
    else{
        document.getElementById("comerror").innerHTML = "";
    }
    return x;
}


//Function to clear information and tell user that the information
// was submitted if no errors occured.
function passederror()
{
    let name, tax, hours, sales, commission, hourly_rate;
    name = document.getElementById("empname").value;
    tax = document.getElementById("taxrate").value;
    hours = document.getElementById("workedhours").value;
    sales = document.getElementById("salesmade").value;
    commission = document.getElementById("commissionrate").value;
    hourly_rate = document.getElementById("hourly_rate").value;
    const current = new employee(name, tax, hours, hourly_rate, sales, commission);
    empdict[name] = current;

    document.getElementById("nameerror").innerHTML = "";
    document.getElementById("saleserror").innerHTML = "";
    document.getElementById("hourserror").innerHTML = "";
    document.getElementById("comerror").innerHTML = "";
    document.getElementById("taxerror").innerHTML = "";
    document.getElementById("hourly_rate_error").innerHTML = "";
    document.getElementById("empname").value = "";
    document.getElementById("taxrate").value = "";
    document.getElementById("workedhours").value = "";
    document.getElementById("salesmade").value = "";
    document.getElementById("commissionrate").value = "";
    document.getElementById("hourly_rate").value = "";

    document.getElementById("output").style.display = 'flex';
    document.getElementById("confirmation").innerHTML = "info submitted";


}

//Function to calculate all the information in the dictionary 
//add them to a new dictionary under a new class
// and output into string the user can read.
function calculate()
{
    document.getElementById("tax").style.display = "none";
    document.getElementById("hours").style.display = "none";
    document.getElementById("hour_rate").style.display = "none";
    document.getElementById("sales").style.display = "none";
    document.getElementById("commission").style.display = "none";
    document.getElementById("name").style.display = "none";
    document.getElementById("button").style.display = "none";
    document.getElementById("output").style.display = "none";
    document.getElementById("main").style.display = "flex";
    document.getElementById("main").style.textAlign = "left";

    for(let key in empdict)
    {
        let name, hours, tax, hourly_rate, commission, sales, hourly_pay, commission_pay,
        withheld_tax, total_pay;
        name = empdict[key].name;
        hours = empdict[key].hours;
        tax = empdict[key].tax;
        hourly_rate = empdict[key].hourly_rate;
        commission = empdict[key].commission;
        sales = empdict[key].sales;
        if(tax > 1)
        {
            tax = tax / 100;
        }
        if(commission > 1)
        {
            commission = commission / 100;
        }
        hourly_pay = parseFloat((hours * hourly_rate) - ((hours * hourly_rate) * tax)).toFixed(2);
        commission_pay = parseFloat(sales * commission).toFixed(2);
        withheld_tax = parseFloat((hours * hourly_rate) * tax).toFixed(2);
        total_pay = parseFloat((sales * commission) + ((hours * hourly_rate) - ((hours * hourly_rate) * tax))).toFixed(2);
        const current_payed = new payed_employee(name, hourly_pay, commission_pay, withheld_tax, total_pay);
        payedemp[name] = current_payed;
    }
 
    return to_string();
}

// function to convert dictionary contents into a string.
function to_string()
{
    let string = '';
    let total_commission = 0, total_hourly = 0, total_total = 0;
    for(let key in payedemp)
    {
        total_commission = (parseFloat(total_commission) + payedemp[key].commission_pay);
        total_hourly =  parseFloat(total_hourly) + payedemp[key].hourly_pay;
        total_total = parseFloat(total_total) + payedemp[key].total_pay;
        string = string + payedemp[key].name + "'s totals are as follows:<br>Total Hourly Pay: $" + payedemp[key].hourly_pay + ". <br>" + "Total Commission Pay: $" + payedemp[key].commission_pay + ".<br>Tax Withheld: $" + payedemp[key].withheld_tax + ".<br>Total Pay: $" + payedemp[key].total_pay + '.<br><br>';
    }
    string = string + "<br><br>Total hourly payed to employees: $" + parseFloat(total_hourly).toFixed(2) + "<br>Total commission payed to employees: $" + parseFloat(total_commission).toFixed(2) + "<br>Total payed to employees: $" + parseFloat(total_total).toFixed(2);
    return string;
}