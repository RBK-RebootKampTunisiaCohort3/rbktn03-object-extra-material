// Exercises
// Basic Requirments
// 1.Fix the syntax & style issues with the three objects below:
//  {firstName: 'Yan', lastname: 'Fan' }
//  {a: 1, b: 2, c: 3, d: 4}
//  {
//        animal: 'dog',
//        noise: 'bark',
//        age: 3,
//        type: 'Golden Retriever',
//        color: 'Yellow'
//  }
//--------------------------------------------------------------------------------------------------------
// 2. Create an object that represents you. It should contain your first name, last name, age and hometown. Assign it to a variable called person.
var person = {
	firstName: "Reem",
	lastName: "Elfalah",
	age: 24, 
	hometown: "Tripoli"
};
//--------------------------------------------------------------------------------------------------------
// 3.Add three more key/value pairs to your object that represent other attributes of yourself. Ideas include (but are not limited to):
//  Family
//  Date of Birth
//  Place of Birth
person["date of birth"] = new Date(1996, 2, 5);    // js counts from 0 to 11 so March is 2.
person["place of birth"] = "Tripoli";
person["favorite animal"] = "Cats";
//--------------------------------------------------------------------------------------------------------
// 4.Change your object to have a single name key, the value of which is an object – this object should have first, last and middle keys containing your first, last, 
//and middle names respectively.
person["Name"] = {
	first : person["firstName"],
	middleName: 'Mohamed',
	last : person["lastName"]
};
delete person.firstName;
delete person.lastName;
//--------------------------------------------------------------------------------------------------------
// 5.Look up something you want to buy on souq.com, and make an object that represents information about the item:
//  Item Name
//  Category/Type
//  Year released
//  Rating
//  Price
var obj = {
	Name: "Google Home Mini Wireless Voice Activated Speaker",
	Category: "Electonics",
	Year: 2017,
	Rating: 4.4,
	Price: 21.41 
};
//--------------------------------------------------------------------------------------------------------
// 6.in the console,Create a new empty object in your console called obj like this:
//var obj = {};
var cat = {};
//--------------------------------------------------------------------------------------------------------
// 7.Add a new key/value pair to the object obj by assigning a new value to a new key like so:
//  obj.hello = 'world';
//  obj['number'] = 25;
cat.Name = "Bessa";
cat['age'] = 4;
//--------------------------------------------------------------------------------------------------------
// 8. Now, check the value of obj in the console and ensure that it has the two key/value pairs added above. This is how we create new key/value pairs in existing objects.
cat;
// {Name: "Bessa", age: 4}
//--------------------------------------------------------------------------------------------------------
// 9.In the console attached to your main.js file, add a favoriteColor key/value pair to the object that represents you.
person.favoriteColor = "Blue";
//--------------------------------------------------------------------------------------------------------
// 10.Fix the attempts to access values in the person object:
//  var key = 'name';
//  var woman = {
//        name: 'Grace Hopper',
//        age: 85,
//        occupation: 'computer scientist'
//  };
//  woman.age; // => 85
//  woman[key]; // => 'Grace Hopper'
//  woman['computer scientist'] // => undefined
//  Side Note: Who is Grace Hopper? She is one of the most influential people in the history of computer science and software engineering.
//  Read more about her contribution to our field here. (https://en.wikipedia.org/wiki/Grace_Hopper)
//--------------------------------------------------------------------------------------------------------
// 11.Write a function formatName that takes the person object that you created above (the first exercise at the top) as an argument, and returns your full name.
function formatName(obj){
	if (obj.name.middle === undefined) {
		return obj.name.first + ' ' + obj.name.last;
	}
	return obj.name.first + ' ' + obj.name.middle + ' ' + obj.name.last;
}
//--------------------------------------------------------------------------------------------------------
// 12.Using these objects:
var people = [
	{name: {first: 'Grace', middle: 'B.', last: 'Hopper'}, age: 85},
	{name: {first: 'Adele', last: 'Goldstine'}, age: 43},
	{name: {first: 'Ada', last: 'Lovelace'}, age: 36},
	{name: {first: 'Hedy', middle: 'E.', last: 'Lamarr'}, age: 85},
	{name: {first: 'Ruchi', last: 'Sanghvi'}, age: 34}
];
//  Add the object representing yourself (person) to this array of people (if your name key does not have the same 'shape' as the ones above,
//  change it to look like these).
people.push({name: person.Name, age: person.age})
//--------------------------------------------------------------------------------------------------------
//  Write a function that, when passed people as an argument, returns an array of their full names. Can you use your formatName function here?
function fullName(array){
	let arr = [];
	for (let i = 0; i < array.length; i++)
		arr[i] = formatName(array[i])
	return arr
}
//--------------------------------------------------------------------------------------------------------
//  Write a function that finds the average age of the people array.
function avg(array){
	let sum = 0;
	for (let i = 0; i < array.length; i++)
		sum += array[i].age;
	return sum / array.length;
}
//--------------------------------------------------------------------------------------------------------
//  Write a function that, when given people and an age as arguments, returns an array of just the people that are older than the specified age.
//  Side Note: The women in the people array are all very famous. What did they do?
//  Bonus Points: What is the name of the woman in the picture here?
function olderAge(array,age){
	let arr = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i].age > age)
			arr.push(formatName(array[i]));
	}
	return arr;
}
//--------------------------------------------------------------------------------------------------------
// 13.The following object has a number of key/value pairs that need to be removed:
//  var dirtyObject = {
//        _fht: 192492,
//        name: 'Yan Fan',
//        age: 27,
//        _byz: 939205,
//        _ttrs: 510852
//  }
//  function clean(obj) {
//  }
//  clean(dirtyObject); // => {name: 'Yan Fan', age: 27}
//  The function clean should accept an object as the argument and return a new object that has all of the key/value pairs of its parameter 
//except for those that begin with _.
function clean(obj) {
	let newobj = {};
	let objkeys = Object.keys(obj);
	for (let i = 0; i < objkeys.length; i++) {
		if (objkeys[i].slice(0,1) !== '_')
			newobj[objkeys[i]] = obj[objkeys[i]];
	}
	return newobj;
}
//--------------------------------------------------------------------------------------------------------
// 14.Write a function removeOddValues that takes an object as an argument and returns an object with all key/value pairs removed for which the value holds an odd number.
// You'll need to use the `typeof` operator to first check that the values are numbers. Try the below in your console:
//  typeof 'Hello'
//  typeof 3
function removeOddValues(obj) {
	let objkeys = Object.keys(obj);
	let newobj = {};
	for (let i = 0; i < objkeys.length; i++) { 
		if (typeof obj[objkeys[i]] !== 'number' || obj[objkeys[i]] % 2 === 0 )
			newobj[objkeys[i]] = obj[objkeys[i]];
	}
	return newobj;
}
//--------------------------------------------------------------------------------------------------------
// More Practice

// 1.Write a function countWords that, when given a string as an argument, returns an object where keys are the words in the string, 
//and values are the number of occurrences of that word within the string:
//  function countWords(s) {
//  }
//  countWords('hello hello');      // => {'hello': 2}
//  countWords('Hello hello');      // => {'Hello': 1, 'hello': 1}
//  countWords('The quick brown');  // => {'The': 1, 'quick': 1, 'brown': 1}
//  HINT: You will want to make use of the string method split.
//        Try 'Hello hello'.split(' ') at a console to see how it works.
//        Modify countWords to be case insensitive by using the following string method (experiment at a console with it to learn its behavior):
//        'HElLo'.toLowerCase(); // => ???
function countWords(string) {
	string = string.toLowerCase();
	let arr = string.split(" ");
	let obj = {};
	for (let i = 0; i < arr.length; i++) {
		count = 1;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] === arr[j]){
				count ++;
				arr.splice(j,1);
				j--;
				}
		}
		obj[arr[i]] = count;
	}
return obj;
}
//--------------------------------------------------------------------------------------------------------
// 2.Write a function countCharacters that, when given a string as an argument, returns an object containing counts of 
// the occurrences of each character in the string.
//  function countCharacters(s) {
//  }
//  countCharacters('hello');    // => {'h': 1, 'e': 1, 'l': 2, 'o': 1}
//  HINT: You will want to use the string method split. Try 'hello'.split('') in the console to see how it works.
function countchar(string) {
	string = string.toLowerCase();
	let arr = string.split("");
	let obj = {};
	for (let i = 0; i < arr.length; i++) {
		count = 1;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] === arr[j]){               
				arr.splice(j,1);
				j--;
				}
		}
		if(arr[i] !== ' ')				// if it's required to count spaces remove the if statment
		obj[arr[i]] = count;
	}
return obj;
}
//--------------------------------------------------------------------------------------------------------
// 3.Write a function select that accepts two arguments: an object and an array. The array should contain names of keys 
// that need to be selected from the object. The function select should return an object with the correct key/value pair.
//  function select(obj, keys) {
//  }
//  select({a: 1, b: 2, c: 3}, ['a']);           // => {a: 1}
//  select({a: 1, b: 2, c: 3}, ['a', 'c']);      // => {a: 1, c: 3}
//  select({a: 1, b: 2, c: 3}, ['a', 'c', 'd']); // => {a: 1, c: 3}
function select(obj,keys){
	let objkeys = Object.keys(obj);
	let newobj = {};
	for (let i = 0; i < keys.length; i++) {
		for (let j = 0; j < objkeys.length; j++) {
			if (keys[i] === objkeys[j])
				newobj[keys[i]] = obj[keys[i]]
		}
	}
	return newobj;
}
//--------------------------------------------------------------------------------------------------------

// 4.Write a function extends that accepts two objects as arguments, and extends all of the key/value pairs of
// the second one to the first one. In other words, your function should combine two objects into one.
//  function extend(obj1, obj2) {
//  }
//  extend({a: 1}, {b: 2});             // => {a: 1, b: 2}
//  extend({a: 1, c: 3}, {b: 2, c: 4}); // => {a: 1, b: 2, c: 4}
function extend(obj1,obj2){
	let objkeys = Object.keys(obj2);
	for (let i = 0; i < objkeys.length; i++)
		obj1[objkeys[i]] = obj2[objkeys[i]];
	return obj1;
}
// Advanced

// 1.The function Object.keys returns an array of an object's keys. Experiment with it at the console like this:
//  Object.keys({a: 1, b: 2});
//  Using this property, write versions of the above functions using repetition through function invocation 
// (i.e. recursion)

function extend(obj1,obj2){
	var objkeys = Object.keys(obj2);
	if (objkeys.length === 0)
		return obj1;
	else {
		obj1[objkeys[0]] = obj2[objkeys[0]];
		delete obj2[objkeys[0]];
		return extend(obj1,obj2)
}	
	}
//--------------------------------------------------	
function select(obj,keys){
	let objkeys = Object.keys(obj);
	
	
}
// 2.The function JSON.stringify turns JavaScript data structures (arrays and objects) into strings. Try it out in a console like this:
//  JSON.stringify({a: 1, b: 2, c: ['dog', 'cat', 'zebra'], d: true});
//  JSON.stringify([5, 7, 2, 4, 0, 20]);
//  var people = [
//        {name: {first: 'Grace', middle: 'B.', last: 'Hopper'}, age: 85},
//        {name: {first: 'Adele', last: 'Goldstine'}, age: 43},
//        {name: {first: 'Ada', last: 'Lovelace'}, age: 36},
//        {name: {first: 'Hedy', middle: 'E.', last: 'Lamarr'}, age: 85},
//        {name: {first: 'Ruchi', last: 'Sanghvi'}, age: 34}
//  ];
//  JSON.stringify(people);
//  Write a function stringify that works exactly like JSON.stringify.
//  HINT: This will be much easier to do with recursion than with iteration.
