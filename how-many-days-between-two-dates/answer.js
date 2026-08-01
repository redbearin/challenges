getDays = (date1, date2) => {
    //ms in a day
    const oneDay = 1000 * 60 * 60 * 24;

    return Math.round(Math.abs(date1 - date2)/ oneDay);
}

const date1 = new Date("December 29, 2018");
const date2 = new Date("January 1, 2019");

document.getElementById('ans').textContent = getDays(date1, date2);