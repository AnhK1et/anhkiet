function choi(lua_chon_nguoi_choi) {
    var lua_chon_may = ['oan', 'tu_ti'][Math.floor(Math.random() * 2)];
    var ket_qua;
  
    if (lua_chon_nguoi_choi === lua_chon_may) {
      ket_qua = "Hòa nhau!";
    } else if (
      (lua_chon_nguoi_choi === 'oan' && lua_chon_may === 'tu_ti') ||
      (lua_chon_nguoi_choi === 'tu_ti' && lua_chon_may === 'oan')
    ) {
      ket_qua = "Bạn thắng!";
    } else {
      ket_qua = "Bạn thua!";
    }
  
    document.getElementById("ket_qua").innerText = "Kết quả: " + ket_qua;
  }
  