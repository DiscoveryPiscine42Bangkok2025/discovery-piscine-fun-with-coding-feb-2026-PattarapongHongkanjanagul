#!/bin/bash

# 1. เช็กว่าไม่มีการส่ง Argument มาหรือไม่
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    # 2. วนลูปตามจำนวน Argument ที่ส่งมา
    for arg in "$@"; do
        # 3. สร้างโฟลเดอร์โดยเอา "ex" มาแปะหน้าค่าที่รับมา ($arg)
        mkdir "ex$arg"
    done
fi