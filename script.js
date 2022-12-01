'use strict';

// Tạo "Số Bí Mật" khi tải lại trang hoặc nhấn nút "Chơi Lại"
// ---------------------------------------------------------
let soBiMat = Math.trunc(Math.random() * 20) + 1;

let soDiem = 20;
let diemsoCaoNhat = 0;

// Tạo hàm displayMessage
// ----------------------
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Bắt sự kiện khi nhấn nút "Kiểm Tra" số vừa nhập
// -----------------------------------------------
document.querySelector('.check').addEventListener('click', function () {
  // Nhập và hiển thị số vừa nhập(số dự đoán)
  // ---------------------------------------
  const soDuDoan = Number(document.querySelector('.guess').value);

  // Nếu không nhập bất kì chữ số nào=> In ra thông báo nhập số vào
  // -------------------------------------------------------
  if (!soDuDoan) {
    displayMessage('⛔️ Hay Nhap 1 So');

    // Nếu số dự đoán đúng với số bí mật=>In ra thông báo đoán đúng và chúc mừng
    // --------------------------------------------------
  } else if (soDuDoan === soBiMat) {
    displayMessage('🎉 Chuc Mung Ban Đa Đoan Chinh Xac!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = soBiMat;
    // document.querySelector('.check').style.display = 'none';
    document.querySelector('.check').disabled = true;

    // Gán điểm số cao nhất mà người chơi đạt được
    // -------------------------------------------
    if (soDiem > diemsoCaoNhat) {
      diemsoCaoNhat = soDiem;
      document.querySelector('.highscore').textContent = diemsoCaoNhat;
    }

    // Nếu số dự đoán cao hơn số bí mật=>In ra thông báo số quá cao
    // ---------------------------------------------------------
  } else if (soDuDoan !== soBiMat) {
    if (soDiem > 1) {
      displayMessage(
        soDuDoan > soBiMat ? '📈 So Du Đoan Qua Cao' : '📉 So Du Đoan Qua Thap'
      );
      // Giảm số điểm xuống 1 khi đoán sai
      // --------------------------------
      soDiem--;

      // Gán số điểm tương ứng vào game
      // -----------------------------
      document.querySelector('.score').textContent = soDiem;
    } else {
      displayMessage(
        '❌ Ban Da Het Luot Du Doan, Hay Nhan Nut "Choi Lai" De Choi Tiep'
      );
      document.querySelector('.check').disabled = true;
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Khi nhấn vào nút "Chơi Lại"
// --------------------------
document.querySelector('.again').addEventListener('click', function () {
  soDiem = 20;
  soBiMat = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Bat dau du doan so ...');
  document.querySelector('.score').textContent = soDiem;
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.check').disabled = false;
});
