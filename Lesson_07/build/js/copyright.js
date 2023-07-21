"use strict";
// Original JS-Code
// const year = document.getElementById('year');
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisyear)
// year.textContent = thisYear
// 1. Variation damit ein TS-Code in JS nutzbar wird
// let year: HTMLElement | null 
// year = document.getElementById('year');
// let thisYear: string 
// thisYear = new Date().getFullYear().toString()
// if (year) {
//     year.setAttribute("datetime", thisYear)
//     year.textContent = thisYear
// }
// 2. Variation damit ein TS-Code in JS nutzbar wird
const year = document.getElementById('year');
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
