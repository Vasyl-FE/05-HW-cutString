let input = prompt("Enter your message (at least 11 characters):");

if (input.length <= 10) {
    alert("Your message is too short. Please reload the page and try again.");
} else {
    alert("Thanks! See the console :-)");
    console.log(input.slice(0,5));
    console.log(input.slice(-5));
}