async function getMicrophone() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        console.log("Microphone access granted.");

        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const source = audioContext.createMediaStreamSource(stream);
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        source.connect(analyser);

        function checkVolume() {
            analyser.getByteFrequencyData(dataArray);

            // Tính toán mức âm lượng trung bình
            let sum = 0;
            for (let i = 0; i < dataArray.length; i++) {
                sum += dataArray[i];
            }
            const averageVolume = sum / dataArray.length;

            if (averageVolume > 50) {
                console.log("Loud sound detected! Volume level:", averageVolume);
            }

            requestAnimationFrame(checkVolume);
        }
        checkVolume();
    } catch (error) {
        console.error("Microphone access denied or error occurred:", error);
    }
}

getMicrophone();
