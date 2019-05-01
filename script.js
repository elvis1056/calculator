let operator = '';
let first_operand = 0;
let last_operand = 0;

// 當頁面加載完成後，執行後續動作
document.addEventListener('DOMContentLoaded', function(){
    // 添加點擊事件給每一個按鈕
    document.querySelector('.all_row').addEventListener('click', (e)=>{
        let result = document.querySelector('.result')
        
        // 假設點擊為數字的話，那就顯示在 result 中
        if(e.target.className === 'number'){
            // 假設點擊 . 的話，則繼續判斷
            if(e.target.innerText === '.'){
                if(!result.innerText.includes('.')){
                    result.innerText += e.target.innerText;
                }
            } else {
                if(result.innerText.length<9){
                    console.log(result.innerText.length)
                    result.innerText += e.target.innerText;
                } else {
                    alert('位數超過上限');
                    result.innerText = '';
                }
            }
        }

        // 假設點擊為運算符號，那就先把結果記下來，將顯示區清空，記下運算符號
        if(e.target.className === 'operator'){
            operator = e.target.innerText;
            first_operand = result.innerText;
            result.innerText = '';
        }

        // 假設點擊等於符號，將結果紀錄下來
        if(e.target.className === 'equal'){
            if(operator === '+'){
                result.innerText = parseFloat(first_operand) + parseFloat(result.innerText);
                checkdigits(result.innerText);
            }
            if(operator === '-'){
                result.innerText = parseFloat(first_operand) - parseFloat(result.innerText);
                checkdigits(result.innerText);
            }
            if(operator === '*'){
                result.innerText = parseFloat(first_operand) * parseFloat(result.innerText);
                checkdigits(result.innerText);
            }
            if(operator === '/'){
                result.innerText = parseFloat(first_operand) / parseFloat(result.innerText);
                checkdigits(result.innerText);
            }
        }

        // 假設點擊 AC，就將數值歸 0，並清空暫存
        if(e.target.className === 'AC'){
            result.innerText = '';
            operator = "";
            first_operand = 0;
        }

        // 檢查位數上限
        function checkdigits(num){
            if(num>999999999){
                alert('位數超過上限，無法進行計算');
                result.innerText = '';
            }
        }
    })
})