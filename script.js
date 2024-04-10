document.addEventListener('DOMContentLoaded', function () {
    const quoteText = "Programming is the art of translating thoughts into code, enabling computers to express our creativity.";
    const authorText = "Author: ChatGPT 3.5";

    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');

    function typeWriter(element, text, speed) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    typeWriter(quoteElement, quoteText, 20);
    setTimeout(() => typeWriter(authorElement, authorText, 20), quoteText.length * 20 + 1000);
});
