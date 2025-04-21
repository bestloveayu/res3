function verifyPasscode() {
    const passcode = document.getElementById("passcode").value;
    const correctPasscode = "美味";
    const message = document.getElementById("message");

    if (passcode === correctPasscode) {
        const newWindow = window.open("https://ooopenlab.cc/preview/ogZHIXBvKVUkZ7IKpGVa", "_blank");
        if (!newWindow || newWindow.closed || typeof newWindow.closed == "undefined") {
            message.textContent = "請允許彈出式視窗以查看最終頁面！";
        }
    } else {
        message.textContent = "不要亂猜!再好好整理重點吧!";
    }
}
