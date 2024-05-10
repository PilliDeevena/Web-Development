
<script>
// Example of an array
var fruits = ["Apple", "Banana", "Orange", "Mango"];

// Accessing elements of the array
console.log("Fruits:", fruits);
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);

// Modifying elements of the array
fruits[1] = "Grapes";
console.log("Updated fruits:", fruits);

// Adding elements to the array
fruits.push("Pineapple");
console.log("Fruits after adding Pineapple:", fruits);

// Example of a string
var message = "Hello, World!";

// Accessing characters of the string
console.log("Message:", message);
console.log("First character:", message[0]);
console.log("Second character:", message[1]);

// Modifying characters of the string (strings are immutable, so we need to create a new string)
var updatedMessage = message.replace("World", "JavaScript");
console.log("Updated message:", updatedMessage);

// Combining arrays and strings
var combinedArray = fruits.concat(["Kiwi", "Cherry"]);
console.log("Combined array:", combinedArray);

var combinedString = message + " Have a great day!";
console.log("Combined string:", combinedString);
</script>

</body>
</html>
