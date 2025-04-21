function verifyPasscode() {
    const passcode = document.getElementById("passcode").value;
    const correctPasscode = "美味";
    const message = document.getElementById("message");

    if (passcode === correctPasscode) {
        window.location.href = "https://ooopenlab.cc/preview/ogZHIXBvKVUkZ7IKpGVa"; // 最終成功頁面
    } else {
        message.textContent = "不要亂猜!再好好整理重點吧!";
    }
}