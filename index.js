let count = 0;

document.getElementById("inc").onclick = function(){
    count+=1;
    document.getElementById("output").textContent = count;
}

document.getElementById("dec").onclick = function() {
    if (count > 0) { // Only decrement if count is greater than 0
        count -= 1;
        document.getElementById("output").textContent = count;
    }
}
document.getElementById("res").onclick = function(){
    count = 0;
    document.getElementById("output").textContent = count;
}