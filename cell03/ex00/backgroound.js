// script.js

// กำหนดรายการสีที่ต้องการสุ่ม (เขียว, แดง, ขาว)
var allowedColors = ['green', 'red', 'white'];
// หรือถ้าอยากได้เฉดสวยๆ ใช้รหัสนี้แทนได้ครับ: ['#2ecc71', '#e74c3c', '#ffffff']

function getRandomFixedColor() {
    // สุ่มตัวเลข 0, 1, หรือ 2
    var randomIndex = Math.floor(Math.random() * allowedColors.length);
    
    // คืนค่าสีตามตำแหน่งที่สุ่มได้
    return allowedColors[randomIndex];
}

document.addEventListener('DOMContentLoaded', function() {
    
    var button = document.getElementById("clickMeBtn");
    var body = document.body;

    button.addEventListener("click", function() {
        // เรียกฟังก์ชันสุ่มสี
        var newColor = getRandomFixedColor();
        
        // เปลี่ยนสีพื้นหลัง
        body.style.backgroundColor = newColor;
        
        // เช็คใน Console ว่าได้สีอะไร
        console.log("Current Color: " + newColor);
    });

});