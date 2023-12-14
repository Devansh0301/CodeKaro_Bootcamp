// Assignment 1:
// Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero.
console.log('ASSIGNMENT-1:');
function telltell(n){
      if(n>0){
            console.log(n + ' is a positive number.');
      }
      else if(n<0){
            console.log(n + ' is a negative number.');
      }
      else{
            console.log(n + ' is Zero.');
      }     
}
telltell(1)
telltell(0)
telltell(-1)


// Assignment 2:
// Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. 
// The factorial of a number N is the product of all positive integers less than or equal to N.
console.log('ASSIGNMENT-2:');
function fact(n){
      let ans =1;
      for(let i =1; i<=n; i++){
            ans *= i
      }
      console.log('The factorial of '+n+ ' is ' + ans );
}
fact(5)


// Assignment 3:
// Write a JavaScript function that takes two numbers as parameters and returns the larger one.
console.log('ASSIGNMENT-3:');
function WhoIsBig(n, m){
      if(n>m){
            console.log('Among '+ n+' and '+ m+ ', '+ n + ' is greater. ');
      }
      else{
            console.log('Among '+ n+' and '+ m+ ', '+ m + ' is greater. ');
      }
}
WhoIsBig(5, 6)


// Assignment 4:
// Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not. A palindrome is a word, phrase, 
// number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
console.log('ASSIGNMENT-4:');
function IsPalindrome(s){
      let str  = s.toLowerCase();
      str = str.split(' ').join('');
      str = str.replaceAll(',' , '');
      str = str.replaceAll('/' , '');
      str = str.replaceAll('.' , '');
      str = str.replaceAll('?' , '');
      let n = str.length;
      for(let i =0; i<n/2; i++){
            if(str[i] !=  str[n-1-i]){
                  console.log("'" + s + "'" + ' is not a Palindrome');
                  return
            }
      }
      console.log( "'" + s + "'" + ' is a Palindrome');
}
IsPalindrome('Hey, how are you doing?')
IsPalindrome('12321')
IsPalindrome('iTopiNonAvevanoNipoti')


// Assignment 5:
// Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. 
// A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
console.log('ASSIGNMENT-5:');
function PrimeNumbers(n){
      let ans =[];
      for(let i =2; i<=n; i++){
            let val = true;
            for(let j =2; j<i; j++){
                  if(i%j === 0) val=false;
            }
            if(val) ans.push(i);
      }
      console.log(ans);
}
PrimeNumbers(50)


// Assignment 6:
// Write a JavaScript function that simulates a simple calculator. The function should take two numbers and an operator (+, -, *, or /) as parameters and 
// perform the corresponding operation.
console.log('ASSIGNMENT-6:');
function Claci(n, m, sym){
      if(sym == '+'){
            console.log('The sum(+) of ' + n + ' and ' + m + ' is: '+ (n+m) );
      }
      else if(sym == '-'){
            console.log('The sub(-) of ' +  n + ' and ' + m + ' is: '+ (n-m) );
      }
      else if(sym == '/'){
            console.log('The div(/) of ' + n + ' and ' + m + ' is: '+ (n/m) );
      }
      else if(sym == '*'){
            console.log('The mul(*) of '+ n + ' and ' + m + ' is: '+ (n*m) );
      }
}
Claci(5, 5, '+');
Claci(5, 4, '-');
Claci(10, 5, '/');
Claci(5, 6, '*');



// Assignment 7:
// Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string.
console.log('ASSIGNMENT-7:');
function ShallWeCountVowels(s){
      s = s.toLowerCase();
      let cnt =0;
      for(let i =0; i<s.length; i++){
            if(s[i] === 'a' || s[i] === 'u' || s[i] === 'o' || s[i] === 'i' || s[i] === 'e' ){
                  cnt++;
            }
      }
      console.log('The number of vowels in "'+s+'" are: '+cnt );
}
ShallWeCountVowels("hey how are we doing bro lets go for a wal shall we")


// Assignment 8:
// Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. A perfect number is a positive integer 
// that is equal to the sum of its proper divisors, excluding itself.
console.log('ASSIGNMENT-8:');
function IsItPerferctNumberHUHH(n){
      let sum=0;
      for(let i =1; i<n; i++){
            if(n%i === 0) sum += i;
      }
      if(sum === n) console.log('Yes, '+ n+ ' is a perfect number.');
      else  console.log('No, '+ n+ ' is not a perfect number.');
}
IsItPerferctNumberHUHH(25);
IsItPerferctNumberHUHH(6)

// Assignment 9:
// Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. The Fibonacci series is a sequence of 
// numbers in which each number is the sum of the two preceding ones.
console.log('ASSIGNMENT-9:');
function LetsGetFibonacciSeries(n){
      let arr =[];
      let i = 0;
      let j = 1;
      arr.push(i);
      while(j<=n){
            arr.push(j);
            let prev = j;
            j = i+j;
            i=prev;
      }
      console.log(arr);
}
LetsGetFibonacciSeries(5)


// Assignment 10:
// Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10.
console.log('ASSIGNMENT-10:');
function MultiplicationTableForKiddos(n){
      console.log('Table of '+ n );
      for(let i =1; i<=10; i++){
            console.log(n + ' * ' + i + ' = ' + n*i);
      }
}
MultiplicationTableForKiddos(15)
