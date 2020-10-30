import data from '../Apprentice_TandemFor400_Data.json';

/* 
 * wrapper class:
 * designed for future compatibility with other trivia data APIs.
 * but for now, it is getting the data from a local file.
 */

 function QuestionsGetter() {
    const shuffle = (array) => {
        return array.sort(() => Math.random());
    }

    const shuffed = shuffle(data).slice(0, 10);

    return shuffed
 }

 export default QuestionsGetter;