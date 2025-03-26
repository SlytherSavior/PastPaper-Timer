import data from './papers.json' with {type: 'json'};

const changePapers = (subjectName) => {
    console.log(data.hasOwnProperty(subjectName));

};

console.log(data["8021"]);
changePapers("80221")