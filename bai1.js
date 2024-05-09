document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('studentForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        
        var maSV = document.getElementById("maSV").value;
        var hoTen = document.getElementById("hoTen").value;
        var email = document.getElementById("email").value;
        var dienThoai = document.getElementById("dienThoai").value;
        var lop = document.getElementById("lop").value;

        var maSVPattern = /^21[0-9]{8}$/;
        var phonePattern = /^(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b$/;
        var lopPattern = /^CCQ.{5,6}[1-2]{1}$/;
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!maSVPattern.test(maSV)) {
            alert("Mã SV phải có 10 ký tự số và bắt đầu bằng 21");
            return;
        }

        if (hoTen.trim() === "") {
            alert("Họ Tên không được để trống");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Email không hợp lệ");
            return;
        }

        if (!phonePattern.test(dienThoai)) {
            alert("Số điện thoại không hợp lệ");
            return;
        }

        if (!lopPattern.test(lop)) {
            alert("Lớp không hợp lệ");
            return;
        }

        alert("Form đã được gửi thành công!");
        // Đây là nơi để gửi dữ liệu form đi nếu cần
    });
});
