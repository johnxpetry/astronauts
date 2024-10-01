
function daysSinceJune5() {
    const today = new Date();
    const year = today.getFullYear();
    const june5 = new Date(year, 5, 5); // Months are 0-indexed (June is 5)
            
    if (today < june5) {
        june5.setFullYear(year - 1);
    }
            
    const diffTime = today - june5; // Difference in milliseconds
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Convert to days
    //return diffDays
    document.write(diffDays) 
}