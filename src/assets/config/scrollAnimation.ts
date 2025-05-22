
    const fullscreenVideo = document.querySelector<HTMLElement>(".fullsizeContainer");
    const phoneContainer = document.querySelector<HTMLElement>(".phoneContainer");
    const phoneVideo = document.getElementById("phoneVideo") as HTMLVideoElement;

    if (!fullscreenVideo || !phoneContainer || !phoneVideo) {
        throw new Error("Required elements not found in the DOM.");
    }

    const phoneScaleStart: number = 0.8;
    const phoneScaleEnd: number = 1.0;

    const handleScroll = (): void => {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;

        const startTransformPoint = viewportHeight * 0.5;
        const endTransformPoint = viewportHeight * 1.5;

        if (scrollY > startTransformPoint && scrollY < endTransformPoint) {
            const progress = (scrollY - startTransformPoint) / (endTransformPoint - startTransformPoint);
            const scale = phoneScaleStart + progress * (phoneScaleEnd - phoneScaleStart);

            fullscreenVideo.style.opacity = (1 - progress).toString();
            phoneContainer.style.opacity = progress.toString();
            phoneContainer.style.transform = `translate(-50%, -50%) scale(${scale})`;

            phoneVideo.play();
        } else if (scrollY <= startTransformPoint) {
            fullscreenVideo.style.opacity = "1";
            phoneContainer.style.opacity = "0";
            phoneContainer.style.transform = `translate(-50%, -50%) scale(${phoneScaleStart})`;

            phoneVideo.pause();
        } else if (scrollY >= endTransformPoint) {
            fullscreenVideo.style.opacity = "0";
            phoneContainer.style.opacity = "1";
            phoneContainer.style.transform = `translate(-50%, -50%) scale(${phoneScaleEnd})`;

            phoneVideo.play();
        }
    };

    window.addEventListener("scroll", handleScroll);
