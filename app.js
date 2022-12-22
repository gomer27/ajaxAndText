// Http Status (http response status codeden hatalara bakabiliriz)
// 200 : OK
// 403 : Forbidden
// 404 : Not Found
// 505 : Internal Server Error

// AJAX İLE XMLHttpRequest OBJESİ
// readyState	Holds the status of the XMLHttpRequest.
// 			0: request not initialized (herhangi bir istekte bulunulmadı)
// 			1: server connection established (server bağlantısı başarılı)
// 			2: request received (request alındı statemiz)
// 			3: processing request (serverimizin burayı aldığını ve işlemeye başlıyor)
// 			4: request finished and response is ready(response hazır)

document.getElementById("btn").addEventListener("click", function () {
  // XMLHttpRequest
  const xhr = new XMLHttpRequest();

  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
      document.getElementById("ajax").textContent = this.responseText;
    }
  };

  //   xhr.onprogress = function () {
  //     console.log("process işleniyor...", this.readyState);
  //   };
  //  ESKİ BİR YÖNTEM çünkü içine bir sürü if else yazmamız gerekiyor
  //  xhr.onreadystatechange = function () {
  // console.log(this.readyState); // 1 2 3 4
  // console.log(this.status); // 0 200 200 200

  // if (this.status == 200 && this.readyState == 4) {
  //   console.log(this.responseText);
  // }
  //  };

  xhr.open("GET", "example.txt", true); // Bağlantı açık
  //(response türü{get,post,delete,put} , dosya adresi , asekron ise true sekron ise false

  xhr.send(); // Requesti gönder
  //get olduğu için boş değer gönderiyoruz post olsaydı içine string değer yazmamız gerekiyordu
});
