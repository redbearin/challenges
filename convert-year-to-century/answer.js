centuryFromYear = yr => yr % 100 ? 
                        +yr.toString().slice(0, 2) + 1 : 
                        +yr.toString().slice(0, 2);

const yr = 1900;

document.getElementById('ans').textContent = centuryFromYear(yr);
