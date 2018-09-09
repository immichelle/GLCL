let calendarHeader = () => {

    let monthsOfTheYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July',              'August', 'September', 'October', 'November', 'December'];
    let month = document.getElementById('month');
    let monthSetter = (monthName) => {month.innerHTML = monthName;};
    monthSetter("September");

    // let today = new Date();
    // let mm = today.getMonth();
    // let currentMonthName = monthsOfTheYear[mm];
    // let month = document.getElementById('month');

    
    // let monthSetter = () =>{

    //     for(let i = 0; i<monthsOfTheYear.length; i++){
    //         month.innerHTML = monthsOfTheYear[i]
    //     }
    // }
    

	let lastMonth = document.getElementById('last-month')
	lastMonth.addEventListener('click', ()=>{
    // if(totalTime > 0){
    //   totalTime -= 5;
	for(let i = 0; i<monthsOfTheYear.length; i++){
              monthsOfTheYear[i] = monthsOfTheYear[i-1]
    }	
    month.innerHTML = monthsOfTheYear[i]
	});


};

document.addEventListener('DOMContentLoaded', calendarHeader, false)