// script.js

// 1. ตั้งเวลาแจ้งเตือน "Please, use me..." ทุกๆ 30 วินาที (30000 ms)
setInterval(function() {
    alert("Please, use me...");
}, 30000);

// 2. ฟังก์ชันหลักทำงานเมื่อกดปุ่ม
const btn = document.getElementById("submitBtn");

btn.addEventListener("click", function() {
    // ดึงค่าจาก HTML
    const leftInput = document.getElementById("leftOp").value;
    const rightInput = document.getElementById("rightOp").value;
    const operator = document.getElementById("operator").value;

    // แปลงค่าเป็นตัวเลขเพื่อใช้คำนวณ
    const l = Number(leftInput);
    const r = Number(rightInput);

    // --- ส่วนตรวจสอบความถูกต้อง (Validation) ---
    // โจทย์บอกว่าต้องเป็น Positive Integer (จำนวนเต็มบวก >= 0) เท่านั้น
    // เราใช้ regex เช็คว่าเป็นตัวเลขล้วนๆ ไม่มีจุดทศนิยม และต้องไม่เป็นค่าว่าง
    if (!isPositiveInteger(leftInput) || !isPositiveInteger(rightInput)) {
        alert("Error :(");
        return; // จบการทำงานทันที
    }

    // --- ส่วนการคำนวณ (Calculation) ---
    let result = 0;

    // เช็คกรณีหาร หรือ Modulo ด้วย 0 ก่อน (Over 9000 case)
    if ((operator === '/' || operator === '%') && r === 0) {
        logAndAlert("It's over 9000!");
        return;
    }

    // คำนวณปกติ
    switch (operator) {
        case '+':
            result = l + r;
            break;
        case '-':
            result = l - r;
            break;
        case '*':
            result = l * r;
            break;
        case '/':
            result = l / r;
            break;
        case '%':
            result = l % r;
            break;
    }

    // แสดงผลลัพธ์ทั้งใน Console และ Alert
    logAndAlert(result);
});

// ฟังก์ชันช่วยเช็คว่าเป็นจำนวนเต็มบวกหรือไม่ (ใช้ Regex)
function isPositiveInteger(str) {
    // ^\d+$ หมายถึง ต้องเป็นตัวเลข 0-9 เท่านั้น ตั้งแต่ 1 ตัวขึ้นไป (ห้ามลบ ห้ามทศนิยม ห้ามว่าง)
    const n = Number(str);
    // เช็คเพิ่มเติมว่าค่า >= 0
    if (n >= 0 && Number.isInteger(n) && str.trim() !== "") {
        return true;
    }
    return false;
}

// ฟังก์ชันช่วยแสดงผล
function logAndAlert(msg) {
    console.log(msg); // แสดงใน Console
    alert(msg);       // แสดง Alert
}