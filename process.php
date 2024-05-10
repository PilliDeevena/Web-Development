<?php
// Assuming you have a MySQL database named 'your_database' with a table named 'users'
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve data from the form
$regUsername = $_POST['regUsername'];
$regPassword = $_POST['regPassword'];

// Perform SQL query to insert data into the 'users' table
$sql = "INSERT INTO users (username, password) VALUES ('$regUsername', '$regPassword')";

if ($conn->query($sql) === TRUE) {
    echo "Registration successful!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?>