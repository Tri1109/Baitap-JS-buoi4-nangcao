/*---------------------Bài 1-------------------*/
// function isLeapYear(year) {
//     return (year % 4 === 0);
// }

// function isValidDate(day, month, year) {
//     // Kiểm tra xem ngày có hợp lệ không dựa trên tháng và năm
//     var daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     return (day > 0 && day <= daysInMonth[month - 1]);
// }

// function getNextDate(day, month, year) {
//     // Kiểm tra xem ngày có hợp lệ không
//     if (!isValidDate(day, month, year)) {
//         return "Ngày không hợp lệ!";
//     }

//     // Nếu ngày cuối cùng của tháng
//     if (day === 31 && month === 12) {
//         return `1/1/${year + 1}`;
//     }

//     // Nếu ngày cuối cùng của tháng
//     if (day === daysInMonth[month - 1]) {
//         return `1/${month + 1}/${year}`;
//     }

//     // Ngày tiếp theo trong cùng tháng
//     return `${day + 1}/${month}/${year}`;
// }

// function getPreviousDate(day, month, year) {
//     // Kiểm tra xem ngày có hợp lệ không
//     if (!isValidDate(day, month, year)) {
//         return "Ngày không hợp lệ!";
//     }

//     // Nếu là ngày đầu tiên của tháng
//     if (day === 1 && month === 1) {
//         return `31/12/${year - 1}`;
//     }

//     // Nếu là ngày đầu tiên của tháng
//     if (day === 1) {
//         return `${daysInMonth[month - 2]}/${month - 1}/${year}`;
//     }

//     // Ngày trước đó trong cùng tháng
//     return `${day - 1}/${month}/${year}`;
// }

// // Ví dụ sử dụng hàm
// function handleDate() {
// let day = +parseInt(document.getElementById("ngay").value);
// let month = +parseInt(document.getElementById("thang").value);
// let year = +parseInt(document.getElementById("nam").value);
// var daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// document.getElementById("result1").innerHTML = `Ngày tiếp theo là: ${getNextDate(day, month, year)} <br> Ngày trước đó là: ${getPreviousDate(day, month, year)}`;
// console.log(`Ngày tiếp theo là: ${getNextDate(day, month, year)}`);
// console.log(`Ngày trước đó là: ${getPreviousDate(day, month, year)}`);
// }

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getDaysInMonth(month, year) {
    var daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return daysInMonth[month - 1];
}

function getNextDate(day, month, year) {
    // Tính toán ngày tiếp theo
    let nextDay = day + 1;
    let nextMonth = month;
    let nextYear = year;

    // Nếu là ngày cuối cùng của tháng
    if (nextDay > getDaysInMonth(month, year)) {
        nextDay = 1;
        nextMonth++;

        // Nếu là tháng cuối cùng của năm
        if (nextMonth > 12) {
            nextMonth = 1;
            nextYear++;
        }
    }

    return { day: nextDay, month: nextMonth, year: nextYear };
}

function getPreviousDate(day, month, year) {
    // Tính toán ngày trước đó
    let previousDay = day - 1;
    let previousMonth = month;
    let previousYear = year;

    // Nếu là ngày đầu tiên của tháng
    if (previousDay < 1) {
        previousMonth--;

        // Nếu là tháng đầu tiên của năm
        if (previousMonth < 1) {
            previousMonth = 12;
            previousYear--;
        }

        previousDay = getDaysInMonth(previousMonth, previousYear);
    }

    return { day: previousDay, month: previousMonth, year: previousYear };
}



// Ví dụ sử dụng hàm
function handleDate() {
let day = parseInt(document.getElementById("ngay").value);
let month = parseInt(document.getElementById("thang").value);
let year = parseInt(document.getElementById("nam").value);

let nextDate = getNextDate(day, month, year);
let previousDate = getPreviousDate(day, month, year);



if (day > 0 && day < 32 && month >= 1 && month <= 12 && year > 0) {
    document.getElementById("result1").innerHTML = `Ngày tiếp theo là: ${nextDate.day}/${nextDate.month}/${nextDate.year} <br> Ngày trước đó là: ${previousDate.day}/${previousDate.month}/${previousDate.year}`;
} else {
    document.getElementById("result1").innerHTML = "Ngày hoặc tháng hoặc năm bạn nhập không hợp lệ. Vui lòng nhập lại.";
}

}



/*---------------------Bài 2-------------------*/
function namNhuan(year) {
    return (year % 4 === 0 );
}

function soNgayTrongThang(month, year) {
    var thang31 = [1, 3, 5, 7, 8, 10, 12];
    var thang30 = [4, 6, 9, 11];

    if (thang31.includes(month)) {
        return 31;
    } else if (thang30.includes(month)) {
        return 30;
    } else {
        if (namNhuan(year)) {
            return 29;
        } else {
            return 28;
        }
    }
}

function handleDate2() {
    var month = +parseInt(document.getElementById("month2").value);
    var year = +parseInt(document.getElementById("year2").value);

    if (month >= 1 && month <= 12 && year >= 0) {
        var soNgay = soNgayTrongThang(month, year);
        document.getElementById("result2").innerHTML = `Tháng ${month} năm ${year} có ${soNgay} ngày.`;
    } else {
        document.getElementById("result2").innerHTML = "Tháng hoặc năm bạn nhập không hợp lệ. Vui lòng nhập lại.";
    }
}

/*---------------------Bài 3-------------------*/
function docHangTram(num) {
    var hangDonVi = ['', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];
    return hangDonVi[num];
}

function docHangChuc(num) {
    var hangChuc = ['', 'mười', 'hai mươi', 'ba mươi', 'bốn mươi', 'năm mươi', 'sáu mươi', 'bảy mươi', 'tám mươi', 'chín mươi'];
    return hangChuc[num];
}

function docHangDonVi(num) {
    var hangDonVi = ['', 'mốt', 'hai', 'ba', 'bốn', 'lăm', 'sáu', 'bảy', 'tám', 'chín'];
    return hangDonVi[num];
}

function docSoNguyen(num) {
    var hangTram = Math.floor(num / 100);
    var hangChuc = Math.floor((num % 100) / 10);
    var hangDonVi = num % 10;

    var result = '';

    if (hangTram > 0) {
        result += docHangTram(hangTram) + ' trăm ';
    }

    if (hangChuc > 1) {
        result += docHangChuc(hangChuc) + ' ';
        if (hangDonVi === 1) {
            result += 'mốt';
        } else if (hangDonVi > 1) {
            result += docHangDonVi(hangDonVi);
        }
    } else if (hangChuc === 1) {
        result += 'mười ';
        if (hangDonVi === 5) {
            result += 'lăm';
        } else if (hangDonVi > 0) {
            result += docHangDonVi(hangDonVi);
        }
    } else {
        if (hangDonVi > 0) {
            result += ' lẻ ' + docHangDonVi(hangDonVi);
        }
    }

    return result;
}

function handleNumber() {
    var num = +document.getElementById("number").value;
    num = parseInt(num);
    
    if (num >= 100 && num <= 999) {
        var chuyenSoThanhChu = docSoNguyen(num);
        document.getElementById("result3").innerHTML = `Cách đọc của số ${num} là: ${chuyenSoThanhChu}`;
    } else {
        document.getElementById("result3").innerHTML = "Số bạn nhập không hợp lệ. Vui lòng nhập lại.";
    }
}


/*---------------------Bài 4-------------------*/
function tinhToaDo() {
// Tọa độ của điểm D
var xD = document.getElementById("xD").value;
var yD = document.getElementById("yD").value;
// Tọa độ của các điểm A, B, C
var xA = document.getElementById("xA").value;
var yA = document.getElementById("yA").value;

var xB = document.getElementById("xB").value;
var yB = document.getElementById("yB").value;

var xC = document.getElementById("xC").value;
var yC = document.getElementById("yC").value;

// Tính khoảng cách giữa hai điểm 
var distanceAD = Math.sqrt(Math.pow(xD - xA, 2) + Math.pow(yD - yA, 2));
console.log("AD", distanceAD);
var distanceBD = Math.sqrt(Math.pow(xD - xB, 2) + Math.pow(yD - yB, 2));
console.log("BD", distanceBD);
var distanceCD = Math.sqrt(Math.pow(xD - xC, 2) + Math.pow(yD - yC, 2)); 
console.log("CD", distanceCD);

// Tìm ra điểm có giá trị lớn nhất
function findMax(numbers) {
    // Gán giá trị đầu tiên trong mảng là số nhỏ nhất
    let max = numbers[0];

    // Duyệt qua từng phần tử trong mảng để so sánh với số nhỏ nhất hiện tại
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            // Nếu phần tử hiện tại nhỏ hơn số nhỏ nhất,
            // gán giá trị mới cho số nhỏ nhất
            max = numbers[i];
        }
    }

    return max;
}

let numbers = [distanceAD, distanceBD, distanceCD];
let maxValue = findMax(numbers);
console.log("Số lớn nhất trong mảng là:", maxValue);
// In ra điểm xa nhất
if ( maxValue === distanceAD ) {
    document.getElementById("result4").innerHTML = "Người xa trường nhất là sinh viên A";
} else if ( maxValue === distanceBD ) {
    document.getElementById("result4").innerHTML = "Người xa trường nhất là sinh viên B";
} else {
    document.getElementById("result4").innerHTML = "Người xa trường nhất là sinh viên C";
}
}