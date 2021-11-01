export function extractWords(tweetBody) {
    let formatted = '';
    let previous = '';
    let char

    const BAD_CHARS = ['\n'];

    for (let i = 0; i < tweetBody.length; i++) {
        let current = tweetBody[i];
        let currentASCII = tweetBody.charCodeAt(i);
        let shouldAdd = true;

        if (BAD_CHARS.includes(current)) {
            shouldAdd = false;
        } else if (currentASCII >= 33 && currentASCII <= 47) {
            current = ' ';
        } else if (currentASCII >= 58 && currentASCII <= 64) {
            current = ' ';
        } else if (currentASCII >= 91 && currentASCII <= 96) {
            current = ' ';
        } else if (currentASCII >= 123 && currentASCII <= 126) {
            current = ' ';
        } if (previous == ' ' && current == ' ') {
            shouldAdd = false;
        } 

        if (shouldAdd) {
            formatted += current;
            previous = current;
        }
    }    

    return formatted.trim().split(' ');
}