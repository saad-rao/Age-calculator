
// Step 1: Prompt the user for input


const userbirthDay = parseInt(prompt("Enter your birth day (1-31):"), 10);
const userBirthMonthInput = prompt("Enter your birth month (e.g., 'Jan', 'January', or '01'):");
const userbirthYear = parseInt(prompt("Enter your birth year (e.g., 1990):"), 10);

// Step 2: Handle month input
let birthMonth;
birthMonthInputLower = userBirthMonthInput.toLowerCase();

if (birthMonthInputLower === 'january' || birthMonthInputLower === 'jan' || birthMonthInputLower === '01' || birthMonthInputLower === '1') {
    birthMonth = 0; // January
} else if (birthMonthInputLower === 'february' || birthMonthInputLower === 'feb' || birthMonthInputLower === '02' || birthMonthInputLower === '2') {
    birthMonth = 1; // February
} else if (birthMonthInputLower === 'march' || birthMonthInputLower === 'mar' || birthMonthInputLower === '03' || birthMonthInputLower === '3') {
    birthMonth = 2; // March
} else if (birthMonthInputLower === 'april' || birthMonthInputLower === 'apr' || birthMonthInputLower === '04' || birthMonthInputLower === '4') {
    birthMonth = 3; // April
} else if (birthMonthInputLower === 'may' || birthMonthInputLower === '05' || birthMonthInputLower === '5') {
    birthMonth = 4; // May
} else if (birthMonthInputLower === 'june' || birthMonthInputLower === 'jun' || birthMonthInputLower === '06' || birthMonthInputLower === '6') {
    birthMonth = 5; // June
} else if (birthMonthInputLower === 'july' || birthMonthInputLower === 'jul' || birthMonthInputLower === '07' || birthMonthInputLower === '7') {
    birthMonth = 6; // July
} else if (birthMonthInputLower === 'august' || birthMonthInputLower === 'aug' || birthMonthInputLower === '08' || birthMonthInputLower === '8') {
    birthMonth = 7; // August
} else if (birthMonthInputLower === 'september' || birthMonthInputLower === 'sep' || birthMonthInputLower === 'sept' || birthMonthInputLower === '09' || birthMonthInputLower === '9') {
    birthMonth = 8; // September
} else if (birthMonthInputLower === 'october' || birthMonthInputLower === 'oct' || birthMonthInputLower === '10') {
    birthMonth = 9; // October
} else if (birthMonthInputLower === 'november' || birthMonthInputLower === 'nov' || birthMonthInputLower === '11') {
    birthMonth = 10; // November
} else if (birthMonthInputLower === 'december' || birthMonthInputLower === 'dec' || birthMonthInputLower === '12') {
    birthMonth = 11; // December
} else {
    alert("Invalid month input");

}

// Step 3: Calculate the user's age
const today = new Date();
const userBirthDate = new Date(userbirthYear, birthMonth, userbirthDay);

// Calculate the difference in years, months, and days
let userageYears = today.getFullYear() - userBirthDate.getFullYear();
let userageMonths = today.getMonth() - userBirthDate.getMonth();
let userageDays = today.getDate() - userBirthDate.getDate();

// Adjust if the birth day hasn't occurred yet this month
if (userageDays < 0) {
    userageMonths -= 1;
    const daysInLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Days in the previous month
    userageDays += daysInLastMonth;
}

// Adjust if the birth month hasn't occurred yet this year
if (userageMonths < 0) {
    userageYears -= 1;
    userageMonths += 12;
}

// Step 4: Display the result
alert(`Your Age is ${userageYears} years, ${userageMonths} months, and ${userageDays} days!`);
