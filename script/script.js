// set date 

const time = new Date();
const dayName = time.toLocaleDateString("en-US", {weekday: "short" });
const monthName = time.toLocaleDateString("en-US", { month: "short" });
const date = time.toLocaleDateString("en-US", { day: "2-digit" });
const year = time.toLocaleDateString("en-US", { year: "numeric" });

const dates = document.getElementById('date');
const p = document.createElement('p');
p.innerHTML = `<div style="font-size: 22px">${dayName},<br><strong>${monthName} ${date} ${year}</strong></div>`;
dates.appendChild(p);


// theme button
let colors = ['#1abc9c', '#2ecc71', '#9b59b6', '#3498db', '#34495e', '#f1c40f', '#e74c3c']

let i = 0;
document.getElementById('theme-btn').addEventListener('click', function(){
        document.body.style.backgroundColor = colors[i];
        i++;
        if(i >= colors.length){
            i = 0;
        }
})

