// Fizz Buzz test: Scrivi un programma che stampi i numeri da 1 a 100 ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
var number1 = 1;
var number2= 3;
var number3= 5;

while (number1 <= 100) {

  if (number1 % 3 === 0 && number1 % 5 === 0 ) {
   var fizzbuzz= document.writeln("FIZZBUZZ");
  }
  else if (number1 % number2===0) {
    var fizz = document.writeln("fizz");
  }
  else if (number1 % number3===0) {
    var buzz= document.writeln("buzz");
  }
  else {
    document.writeln(number1);
  }
  number1++;
}
