// balloon.js

const balloon = document.getElementById('balloon');
let currentSize = 200;
const colors = ['red', 'green', 'blue'];
let colorIndex = 0;

// ฟังก์ชันสำหรับอัปเดตหน้าตาของลูกโป่ง
function updateBalloon() {
    balloon.style.width = currentSize + 'px';
    balloon.style.height = currentSize + 'px';
    balloon.style.backgroundColor = colors[colorIndex];
}

// 1. เมื่อเกิดการคลิก (Click)
balloon.addEventListener('click', function() {
    currentSize += 10;
    
    // วนสีไปข้างหน้า: red -> green -> blue -> red
    colorIndex = (colorIndex + 1) % colors.length;

    // ถ้าขนาดใหญ่กว่า 420px ให้ระเบิด (กลับไปค่าเริ่มต้น)
    if (currentSize > 420) {
        currentSize = 200;
        colorIndex = 0; // กลับไปสีแดงเริ่มต้นด้วย
    }

    updateBalloon();
});

// 2. เมื่อเมาส์ออกจากลูกโป่ง (Mouse Leave)
balloon.addEventListener('mouseleave', function() {
    // ลดขนาดลง 5px แต่ห้ามต่ำกว่า 200px
    if (currentSize > 200) {
        currentSize -= 5;
    }

    // วนสีถอยหลัง: red -> blue -> green -> red
    colorIndex = (colorIndex - 1 + colors.length) % colors.length;

    updateBalloon();
});