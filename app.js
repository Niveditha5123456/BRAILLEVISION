const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const preview = document.getElementById("preview");

const startBtn = document.getElementById("startBtn");
const captureBtn = document.getElementById("captureBtn");

startBtn.addEventListener("click", async () => {

    try {

        const stream =
        await navigator.mediaDevices.getUserMedia({
            video: true
        });

        video.srcObject = stream;

    } catch(err) {

        alert("Camera access denied");

    }

});

captureBtn.addEventListener("click", () => {

    const context = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    );

    const imageData =
    canvas.toDataURL("image/png");

    preview.src = imageData;

});