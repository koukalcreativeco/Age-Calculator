
import { DateTime } from "https://cdn.jsdelivr.net/npm/luxon@3.3.0/build/es6/luxon.min.js";




document.querySelector('.calculate-age').addEventListener('click', () => {
    const dob = document.querySelector('.date-of-birth').value;
    const dobArr = dob.split('-');
    const year = parseInt(dobArr[0]);
    const month = parseInt(dobArr[1]);
    const day = parseInt(dobArr[2]);

    let result = DateTime.now().diff(DateTime.local(year, month, day), ['years', 'months', 'days']);

    let display = document.querySelector('.result');
    display.innerHTML = `You are ${result.values.years} years, ${result.values.months} months, and ${Math.round(result.values.days)} days old.`;
   
});


