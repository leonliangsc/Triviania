import data from '../data/Apprentice_TandemFor400_Data.json';

/* 
 * wrapper class:
 * designed for future compatibility with other trivia data APIs.
 * but for now, it is getting the data from a local file.
 */

function shuffleArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

 function QuestionsGetter() {
    const shuffed = shuffleArray(data).slice(0, 10);

    return shuffed
 }

 export default QuestionsGetter;