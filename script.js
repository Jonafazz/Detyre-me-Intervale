
let intervalid;

function starti() {
    intervalid = setInterval(datatt, 400);
}
function endi() {
    clearInterval(intervalid);
}
function datatt() {
    const kohaa = new Date();
    const elementi = document.getElementById("output");
    elementi.textContent = 'Current Date' + kohaa.toLocaleString();
}

