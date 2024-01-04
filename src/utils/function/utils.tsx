export const scrollScreenToBottom = () => {
    setTimeout(() => {
        window.scrollTo(
            {
                top: document.body.scrollHeight,
                left: 0,
                behavior: 'smooth',
            }
        );
    }, 100);
}