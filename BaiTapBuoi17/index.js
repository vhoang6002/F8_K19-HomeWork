// Bài 1: Viết một hàm isEvenNumber(number) nhận vào một số number.

function isEvenNumber(number){
    return number % 2 === 0;
}
// test case
console.log(isEvenNumber(10)); // Kết quả mong đợi: true
console.log(isEvenNumber(7));  // Kết quả mong đợi: false

/*
Bài 2: Tính tiền điện bậc thang

Yêu cầu: Viết hàm getElectricityBill(kwh) nhận vào số điện tiêu thụ trong tháng 
và trả về tổng số tiền cần trả.

Bậc Số điện tiêu thụ Giá tiền
1 0 - 50 kWh 1.678 đ/kWh
2 51 - 100 kWh 1.734 đ/kWh
3 101 - 200 kWh 2.014 đ/kWh
4 201 - 300 kWh 2.536 đ/kWh
5 301 - 400 kWh 2.834 đ/kWh
6 Trên 400 kWh 2.927 đ/kWh
*/

function getElectricityBill(kwh) {
    if(kwh <= 0) return 0;
    if(kwh <= 50) return kwh *  1678;
    if(kwh <= 100) return 50 *  1678 + (kwh - 50) * 1734;
    if(kwh <= 200) return 50 *  1678 + 50 * 1734 + (kwh - 100) * 2014;
    if(kwh <= 300) return 50 *  1678 + 50 * 1734 + 100 * 2014 + (kwh - 200) * 2536;
    if(kwh <= 400) return 50 *  1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + (kwh - 300) * 2834;
    return 50 *  1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + 100 * 2834 + (kwh - 400) * 2927;
}

// test case
console.log(getElectricityBill(70)); 
// Mong đợi: (50 * 1678) + (20 * 1734) = 118580

console.log(getElectricityBill(120)); 
// Mong đợi: (50 * 1678) + (50 * 1734) + (20 * 2014) = 210880

// Bài 3: Dọn dẹp dữ liệu tên người dùng (String)

function cleanName (name, keyword) {
    const standardizedName = name.trim().toLowerCase();
    const standardizedKeyword = keyword.toLowerCase();
    return standardizedName.includes(standardizedKeyword);
}
// test case
console.log(cleanName('   NGUYEN Van An   ', 'an')); // Mong đợi: true (vì 'nguyen van an' có chứa 'an')
console.log(cleanName('   Tran Thi B ', 'hoang'));   // Mong đợi: false
