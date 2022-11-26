//          Chapter # 21 (Changing Case)

//                  EX # 1
// var userInput = prompt('Enter a word : ');
// document.write('User Input : ' + userInput + '<br>');
// document.write('Upper Case : ' + userInput.toUpperCase() + '<br>' + '<br>');

//          EX # 2                                                                                     
// var a = prompt("Enter a word");
// var b =  a.slice(0,1).toUpperCase()+a.slice(1,10); 
// document.write("User input: ",a,"<br>");
// document.write("Title case: ",b);

//          Chapter # 22  (Strings: measuring length and extracting parts)

//                   EX # 01
// var favoritePhone = prompt('Enter your favourite phone model : ');
// document.write('My favourite phone model is : ' + favoritePhone + '<br>');
// document.write('Length of String is : '  + (favoritePhone.length) +  '<br>' + '<br>');

//                   EX # 02
// var stpp = prompt('Enter a word');
// document.write('String : ' + stpp + '<br>');
// document.write("Last Character of your word : " + stpp.charAt(1) + '<br>' + '<br>');

//          Chapter # 23  (Strings: finding segments)

//                   EX # 01
var stp = 'Pakistani';
document.write('String : ' + stp + '<br>');
document.write("Index of 'n' : " + stp.indexOf('n') + '<br>' + '<br>');

//                  EX # 02
var sim = prompt('Enter your username : ');
if(sim.includes("@" || "!" || "." || ",")){
    alert('Please! enter a valid username');
  }
else{
  var sim = prompt('Enter your username : ');
}    

//                  EX # 03
var senta = 'The quick brown fox jumps over the lazy dog .';
document.write(senta + '<br>');
var senta1 = senta.toLowerCase();
c = (senta1.match(/the/g)).length;
document.write('There are ' + c + ' occurences of word \'the\' .' + '<br>'  + '<br>');

//          Chapter # 24  (Strings: finding a character at a location)

//                   EX # 05
var stppp = 'Pakistani';
document.write('String : ' + stppp + '<br>');
document.write('Character at Index 3 is : ' + stppp.charAt(3) + '<br>' + '<br>');


//          Chapter # 24  (Strings: replacing characters)

//                  EX # 01
var cityh = 'Hyderabad';
document.write('City : '+cityh + '<br>');
var cityi = cityh.replace("Hyder","Islam");
document.write('After Replacement : '+cityi + '<br>' + '<br>');


//                  EX # 02
var message = 'Ali and Sami are best friends. They play cricket and football together.';
message = message.replace(/and/g,"&");
document.write(message + '<br>' + '<br>');



//          Chapter # 25  (Rounding Numbers) 

//                  EX # 01
var no = +prompt('enter a +ve integar : ');
if( no > 0){
        document.write("Number : "+ no +"<br>");
        document.write("Round of value : "+ Math.round(no)  +"<br>");
        document.write("Floor value : "+ Math.floor(no) +"<br>");
        document.write("Ceil value : "+ Math.ceil(no) +"<br>" + "<br>");
}


//                  EX # 02
var noo = +prompt('enter a -ve integar : ');
if( noo < 0){
        document.write("Number : "+ noo +"<br>");
        document.write("Round of value : "+ Math.round(noo)  +"<br>");
        document.write("Floor value : "+ Math.floor(noo) +"<br>");
        document.write("Ceil value : "+ Math.ceil(noo) +"<br>" + "<br>");
}


//          Chapter # 26  (Generating random numbers)

//                  EX # 01
var t = Math.random() *6 ;
document.write("The random value of dice is : " + Math.ceil(t) + '<br>' + '<br>');


//                  EX # 02
var t$t = Math.random() * 2 ;
var t$tf = Math.floor(t$t)
document.write(t$tf + '<br>');
if(t$tf == '2'){
    document.write('random coin value :  HEADS' + '<br>' + '<br>'  );
}
else if(t$tf == '1'){
    document.write('random coin value :  TAILS' + '<br>' + '<br>'  );
}


//                  EX # 03
var g1 = Math.random() * 10;
g1 = Math.floor(g1);
var g2 = +prompt('enter your guess between 1 to 10 : ');

if ( g2 === g1){
    alert('Congratulations , Right Guess!');
}
else{
    alert('Hard Luck try Next time !');
}


//          Chapter # 26  (Converting strings to integers and decimals)

//                  EX # 07
var a = prompt('enter weight : '); 
if (a.substr(3) == "" || a.substr(3) == "kg" || a.substr(2) == "kg" || a.substr(5) == "kgs" || a.substr(4) == "kgs" || a.substr(5) == "kilograms" || a.substr(4) == "kilograms"){
    document.write("The weight of user is : " + a + '<br>');
}

//          Chapter # 27  (Converting strings to numbers, numbers to strings)

//                  EX # 01
var n$1 = '472';
document.write(n$1 + '<br>');
document.write('String' + '<br>');
document.write(parseInt(n$1) + '<br>');
document.write('Number' + '<br>'  +'<br>');

//                  EX # 02
var num = 35.36;
document.write('Number : ' + num + '<br>');
num = num.toString()
nmu = num.replace('.','')
document.write('Result : ' + nmu + '<br>' + '<br>');

//                EX # 01
var percentage = 30 / 45 * 100;
var result = percentage.toFixed(2)
document.write('Result contain tw digits after decimal point: '+ result)


         //     Chapter # 31 - 34 ( DATE METHODS )

//                  EX # 01
var dAt = new Date();
document.write(dAt + '<br>' + '<br>');


//                  EX # 02
var d = new Date();
var Mat = d.getMonth();
document.write('Current Month : '+Mat + '<br>' + '<br>');


//                  EX # 03
var d = new Date();
var Day = d.toString();
Day1 = Day.slice(0,3) ;
document.write('Today is '+ Day1+ '<br>' + '<br>');
 

//                  EX # 04
var d = new Date();
var Day = d.toString();
Day1 = Day.slice(0,3);

if ( Day1 === 'Saturday' || Day1 === 'Sunday'){
    document.write('It\'s Funday!'+ '<br>' + '<br>');
    
}

//                  EX # 05
var d = new Date();
var dayOfMonth = d.getDate();
if ( dayOfMonth < 16){
        document.write('First Fifteen Days of month'+ '<br>' + '<br>');    
}
else{
        document.write('Last days of month'+ '<br>' + '<br>');
}


//                  EX # 06
var d = new Date();
document.write('Current Date : '+ d + '<br>');
var millsSince = d.getTime();
document.write('elapsed millisecods since January 1 , 1970  : '+ millsSince + '<br>');
var min = millsSince / 1000 * 60 ;
document.write('elapsed minutes since January 1 , 1970  : '+ millsSince + '<br>' + '<br>');


//                  EX # 07
var d = new Date();
var currentHrs = d.getHours();
if ( currentHrs > 12 ){
    document.write('It\'s AM' + '<br>' + '<br>');
}
else{
    document.write('It\'s AM' + '<br>' + '<br>');
}


//                  EX # 08
var w = new Date("Dec 31,2020");
var o = w.getTime();
document.write("Last Date : " + o + '<br>' + '<br>');


//                  EX # 09
var a$$ = new Date("Jun 18,2015");
var b$$ = a$$.getTime();
var c$$ = new Date();
var d$$ = c$$.getTime();
var e$$ = d$$ - b$$;
var f$$ = Math.floor(e$$/(1000*60*60*24));
document.write(f$$ + " days have passed away since1st Ramadan , 2015" + "<br>" + "<br>");


//                  EX # 10
var a$$$ = new Date(prompt("enter the refrence date : "));
var b$$$ = a$$$.getTime();
var c$$$ = new Date("Jan 1,2015");
var d$$$ = c$$$.getTime();
var e$$$ = b$$$ - d$$$ ;
var f$$$ = Math.floor(e$$$/(1000*60));
document.write("On refrence Date " + a$$$ +" now " + f$$$ + " seconds had passed since begining of 2015 " + "<br>" + "<br>");


//                 EX # 11
var a$$$$ = new Date();
var d$$$$ = a$$$$.getHours();
var f$$$$ = d$$$$-1;
var c$$$$ = new Date();
var b$$$$ = c$$$$.setHours(f$$$$);

document.write("Current Date : "+a$$$$+"<br>");
document.write("1 hour before it was : "+c$$$$+"<br>"+"<br>");


//                  EX # 12
var a7 = new Date();
var d7 = a7.getFullYear();
var f7 = d7-100;
var c7 = new Date();
var b7 = c7.setFullYear(f7);

document.write("Current Date : "+a7+"<br>"+"<br>");
alert("100 years back,it was : " + c7);


//                  EX # 13
var a4 = new Date(prompt("enter date of birth : "));
var k4 = a4.toString();
var l4 = k4.slice(11,15);
var b4 = a4.getTime();
var c4 = new Date();
var d4 = c4.getTime();
var e4 = d4 - b4;
var f4 = Math.floor(e4/(1000*60*60*12*24*30));
document.write("Your age is : " + f4 + "<br>");
document.write("your birth year is : " + l4 + "<br>" + "<br>" );


//                  EX # 14
var hb = new Date();
var hc = hb.toString();
var ha = hc.slice(4,8);
var hn = prompt("enter your name");
var hu = +prompt("enter number of units");
var hf = hu*16;

document.write("<p style='font-size: 24px;'> K - ELECTRIC BILL</p>");
document.write("Customer Name : "+hn+"<br>");
document.write("Current Month : "+ha+"<br>");
document.write("Number of units charge : "+hu+"<br>");
document.write("Charge per unit : 16"+"<br>"+"<br>");
document.write("Net Amount Payable (with due date) : "+hf+"<br>");
document.write("Last Payable surcharge : 350"+"<br>");
document.write("Gross Amount Payable(After due date) : ", + (hf+350) + "<br>");




 //                Chapter # 35 - 38 ( FUNCTIONS )

//                  EX # 01
function current()
    {
        var d = new Date();
        return document.write(d + '<br>' + '<br>');
    }
current();


//                  EX # 02
function greet()
    {
        var firstName$ = prompt('Enter your first name : ');
        var lastName$ = prompt('Enter our last name : ');
        var fullName$ = firstName$ + ' ' + lastName$;
        return alert('Welcome To This Webpage Dear ' + fullName$);
    }
greet();


//                  EX # 03
function plus()
    {
        var firstName1 = +prompt('Enter your first number : ');
        var lastName1 = +prompt('Enter second number : ');
        alert(firstName1 +  lastName1);
    }
plus();


//                  EX # 04
var num1 = +prompt('enter first number : ');
var num2 = +prompt('enter second number : ');
var op = prompt('enter operation: ');

function calc(num1,op,num2){
    if(op == "+"){
        return num1 + num2
    }
    else if(op === "-"){
        return num1 - num2
    } 
    else if(op === "*"){
        return num1 * num2
    }
    else if(op === "/"){
        return num1 / num2
    }
    else if(op === "%" ){
        return num1 % num2
    }
    else{
        return "Incorrect Operator!"
    }
}
var result = calc(num1,op,num2);

alert(result);


//                 EX # 05
function sq(ar)
    {
        return alert(ar*ar)
    }
var ar = +prompt('enter a number : ');
sq(ar);


//                 EX # 06
function factorial(in$)
    {
        var fc = 1

        if (in$ < 0){
            return alert('factorial of negative number is not possible!')
        }
        else if (in$ === 1 || in$ === 0){
            return alert('factorial is 1');
        }
        else{
            for (var i = 1; i <= in$ ; i++){
                fc = fc * i;
            }
            return alert(fc);
        }

    }

var in$ = +prompt('enter a number : ');
factorial(in$);


//                  EX # 07
function counting()
    {
        for(var i =k1 ; i <= k2 ; i++){
             document.write(i + '<br>');
        }
    }

var k1 = +prompt('enter first number : ');
var k2 = +prompt('enter second number : ');

counting();


//                  EX # 08
var base = +prompt('enter base : ');
var perPendicular = +prompt('enter perpendicular : ');


function hypoTnuse()
    {
        dav = square() ** 0.5
        return dav
        function square()
            {
               return  base = base * base;
               return per = perPendicular * perPendicular;
                hyp = base + perPendicular;
               return hyp
            }
    }

hypoTnuse();
document.write('Hypotnuse: ' + hypoTnuse() +  '<br>' + '<br>');


//                  EX # 09
function areaSquare(height,width)
    {
        document.write('The Area is : ' + height * width);
    }

var height = +prompt('enter height : ');
var width = +prompt('enter width : ');

areaSquare(height,width);


//                  EX # 10
var word = prompt("Enter your name: ");
var c = "";

function palindrome()
    {

        for (var i = word.length - 1; i >= 0 ;i--){
            c += word[i]
        }

        if (word === c){
            return alert(word + " is a palindrome");
        }
    }
palindrome();


//                  EX # 11
function cases(v)
    {

        var s = str=> str[0].toUpperCase()+str.slice(1).toLowerCase();
        var b = v.split(" ");
        var c = v.split(" ").map(s).join(" ");
        console.log(c);

    }

var v = prompt("enter the sentence");
cases(v);


//                  EX # 12
function long (a)
    {

        var arr = a.split(" ")
        var c ;
        var d = 0;
        for (i=0;i<arr.length;i++){
            if(arr[i].length>d){
                d = arr[i].length;
                c= arr[i];
            }

        }
    // long();
    document.write("Sentence : "+a+"<br>");
    document.write("The longest word in sentence : " + c + "<br>" + "<br>");

    }

var a = prompt("enter the sentence");
f = long(a);


//                  EX # 13
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return  a=letter_Count;
}
var str = prompt('sentence : ');
var letter = prompt('give : ');
console.log(char_count(str, letter));
document.write('In sentence ' + str + ' the word ' + letter + ' occurs ' + a + ' times ' + '<br>' );


//                  EX # 14
var r = prompt("enter the radius");
function calcCircumference(r){
    document.write("The circumference is : " + (2*3.42*r) +  "<br>");
    
}

calcCircumference(r);

function calcarea(r){
    document.write("The area is : " + (3.142*(r)**2));
    
}

calcarea(r);