/*
WEB 215
m2lab
Hughes, Joshua
9/26/17
*/


// QUESTION 1
// Answer Q1 here by listing the URL of your remixed Thimble project.
"https://thimbleprojects.org/hughesj/321828"


// QUESTION 2
// functions used in Q2
function singBottleSong(amount, drink) {
  // input: an amount of bottles (a number) and a drink name (a string)
  // output: none
  // side effect: the function prints the full text of the song to the console
  // HINT: use a for loop
  // HINT: check for bad input (for example a non-number for amount)

  // example output if you called singleBottleSong(1, 'beer')
  // don't worry about plural/singlar of bottles
  /*console.log()
  console.log('1 bottles of beer on the wall');
  console.log('1 bottles of beer');
  console.log('take one down, pass it around');
  console.log('0 bottles of beer on the wall');
  */
  // count down from amount to zero
  //console.log(amount +' bottles of ' + drink + ' on the wall');
  while( amount > 0){
	  console.log(amount +' bottles of ' + drink + ' on the wall, ' + amount + ' bottles of ' + drink);
	  amount = amount -1;
	  console.log('take one down, pass it around');
	  console.log(amount + ' bottles of ' + drink + ' on the wall');
	  console.log();
  }
}

// test driver for q2
function q2_test() {
  console.log('This should sing the 99 bottles of beer song');
  console.log('---------START SONG----------')
  singBottleSong('99','beer');
  console.log('--------- END SONG ----------')
}

// QUESTION 3
// functions used for q3
function singBottleSong2(song) {
  // input: a Song object
  // output: non-number
  // side effect: as in Q2, the function prints the song text to the log
  // HINT: very similar to Q2 but you have to unpack the Song object's data
  var amount = song.amount;
  var container = song.container;
  var beverage = song.beverage;
  var location = song.location;
  while( amount > 0){
	  
	console.log(amount +' ' + container + ' of ' + beverage + ' on the ' + location +', ' + amount + ' ' + container +' of ' + beverage);
	amount = amount -1;
	  console.log('take one down, pass it around');
	  console.log(amount + ' ' + container + ' of ' + beverage + ' on the ' + location);
	  console.log();
	}
   
}
// test driver for q3
function q3_test() {
  var bottleSong = new Song(3, 'bottles', 'tequila', 'floor');
  console.log('Sings about 3 bottles of tequila on the floor');
  singBottleSong2(bottleSong);

  var coffeeSong =new Song(5, 'cups', 'coffee', 'table'); // write the constructor call here
  console.log('Sings about 5 cups of coffee on the table');
  singBottleSong2(coffeeSong);

}

// prototype function for Song object
function Song(amount, container, beverage, location) {
	
  this.amount = amount;
  this.container = container;
  this.beverage = beverage;
  this.location = location;
  
}

// QUESTION 4
// functions for q4
function isPasswordValid(pw) {
  // input: a string, the password
  // output: true if the password matches, false otherwise
  actualPassword = 'rosebud';
 // todo: finish the function
 if (pw == actualPassword){
	 return true;
 }else{
  return false;
}
}
// test driver for q4
function q4_test() {
  // todo: write a test driver
  // hint: be sure to test for true and false
  var goodPass = 'rosebud'
  var badPass = 'ivrneiernv'
  var isValid = isPasswordValid(goodPass);
  console.log('test on good password :' + isValid + ' expected true');
  isValid = isPasswordValid(badPass);
  console.log('test on bad password :' + isValid + ' expected false');
}

// QUESTION 5
// functions for q5
function checkPasswordStrength(pw) {
  // input: a string, the password
  // output: a string from 'strong', 'medium', or 'weak'
  // hints: see question definition in HTML
  // also see W3Schools JS 'string methods' and 'regular expressions'
  var hasNumbs = /[0-9]/.test(pw);
  var hasPunct = /[$.,!?]/.test(pw);

  // if pw contains at least one number, or at least one piece of punctuation,
  // then the password strength is 'medium'
  if (hasNumbs && hasPunct){
	  return "strong"
  }
  
  // if pw contains both of the above, password strength is 'strong'
  else if (hasNumbs || hasPunct){
	  return "medium"
  }

  // otherwise, password strength is 'weak'
  // todo: finish the function
  else{
  return 'weak';
}}

// test driver for q5
function q5_test() {
  // todo: write a test driver
  // hint: be sure to test for all 3 options
  var strongPass = 'tom123$!'
  var mediumPass = 'tom123'
  var weakPass = 'tom'
  var isValid = checkPasswordStrength(strongPass);
  console.log('Test on strong Password : ' + isValid + ' expected true');
  isValid = checkPasswordStrength(mediumPass);
  console.log('Test on medium Password : ' + isValid + ' expected true');
  isValid = checkPasswordStrength(weakPass);
  console.log('Test on weak Password : ' + isValid + ' expected true');
}
