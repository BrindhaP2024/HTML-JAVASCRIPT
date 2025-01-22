document.addEventListener("DOMContentLoaded", () => {
    let controller;
    const url = "Video.mp4";

    const downloadBtn = document.querySelector(".download");
    const abortBtn = document.querySelector(".abort");

    downloadBtn.addEventListener("click", fetchVideo);

    abortBtn.addEventListener("click", () => {
        if (controller) {
            controller.abort();
            console.log("Download aborted");
        }
    });

    async function fetchVideo() {
        controller = new AbortController();
        const signal = controller.signal;

        try {
            const response = await fetch(url, { signal });
            console.log("Download complete", response);
            // process response further
        } catch (err) {
            console.error(`Download error: ${err.message}`);
        }
    }
});
