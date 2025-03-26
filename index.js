const data = {
    "9702": {
        "name": "Physics",
        "papers": {
            "Paper 1": {
                "duration": 0.5,
                "description": "Multiple Choice"
            },
            "Paper 2": {
                "duration": 60,
                "description": "AS Level Structured Questions"
            },
            "Paper 3": {
                "duration": 75,
                "description": "Advanced Practical Skills"
            },
            "Paper 4": {
                "duration": 120,
                "description": "A Level Structured Questions"
            },
            "Paper 5": {
                "duration": 75,
                "description": "Planning, Analysis and Evaluation"
            }
        }
    },
    "9701": {
        "name": "Chemistry",
        "papers": {
            "Paper 1": {
                "duration": 75,
                "description": "Multiple Choice"
            },
            "Paper 2": {
                "duration": 60,
                "description": "AS Level Structured Questions"
            },
            "Paper 3": {
                "duration": 75,
                "description": "Advanced Practical Skills"
            },
            "Paper 4": {
                "duration": 120,
                "description": "A Level Structured Questions"
            },
            "Paper 5": {
                "duration": 75,
                "description": "Planning, Analysis and Evaluation"
            }
        }
    },
    "9709": {
        "name": "Mathematics",
        "papers": {
            "Paper 1": {
                "duration": 75,
                "description": "Pure Mathematics 1"
            },
            "Paper 2": {
                "duration": 75,
                "description": "Pure Mathematics 2"
            },
            "Paper 3": {
                "duration": 75,
                "description": "Pure Mathematics 3"
            },
            "Paper 4": {
                "duration": 75,
                "description": "Mechanics"
            },
            "Paper 5": {
                "duration": 75,
                "description": "Probability & Statistics 1"
            },
            "Paper 6": {
                "duration": 75,
                "description": "Probability & Statistics 2"
            }
        }
    },
    "8021": {
        "name": "English General Paper",
        "papers": {
            "Paper 1": {
                "duration": 90,
                "description": "Essay"
            },
            "Paper 2": {
                "duration": 90,
                "description": "Comprehension"
            }
        }
    },
    "9618": {
        "name": "Computer Science",
        "papers": {
            "Paper 1": {
                "duration": 90,
                "description": "Theory Fundamentals"
            },
            "Paper 2": {
                "duration": 90,
                "description": "Fundamental Problem-solving and Programming Skills"
            },
            "Paper 3": {
                "duration": 90,
                "description": "Advanced Theory"
            },
            "Paper 4": {
                "duration": 90,
                "description": "Further Problem-solving and Programming Skills"
            }
        }
    }
};

const paperList = document.getElementById('paper');

function changePapers(subjectName) {
    if (subjectName !== "") {
        const subjectPaper = data[subjectName].papers;
        paperList.innerHTML = '<option value="">Choose a paper</option>';

        for (paper in subjectPaper) {
            paperList.append(
                Object.assign(document.createElement('option'), {
                    value: `${paper}`,
                    textContent: `${paper}`
                })
            )
        }
    }
    else {
        paperList.innerHTML = `<option value="">Choose a Subject</option>`
    }



};
const timerDisplay = document.getElementsByClassName("timer-display");

function selectTimer(paper, subject) {
    if (paper !== "") {
        const paperTime = data[subject].papers[paper].duration * 60;
        const hours = Math.floor(paperTime / 3600);
        const minutes = Math.floor((paperTime % 3600) / 60);
        const seconds = paperTime - (hours * 3600) - (minutes * 60);
        timerDisplay[0].textContent = buildTimerData(hours, minutes, seconds);

    }
};

function buildTimerData(hours, minutes, seconds) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer(timer) {
    timerArr = timer.split(':').map(arr => {
        return +arr;
    });
    // console.log(timerArr)
    const initialHours = timerArr[0];
    const initialMinutes = timerArr[1];
    const initialSeconds = timerArr[2];

    let remainingTime = (initialHours * 60 * 60) + (initialMinutes * 60) + initialSeconds;

    const currentDocument = document.getElementById('paper').value;
    function updateTimer() {
        if (remainingTime !== 0 && currentDocument === document.getElementById('paper').value) {
            remainingTime--;
            let hours = Math.floor(remainingTime / 3600);
            let minutes = Math.floor(Math.floor(remainingTime % 3600) / 60);
            let seconds = remainingTime - (hours * 3600) - (minutes * 60);

            timerDisplay[0].textContent = buildTimerData(hours, minutes, seconds);
        } else {
            clearInterval(intervalTimer);
            (document.getElementById('paper').value !== currentDocument) ? alert("Paper Changed") : alert("Time is Up Candidate");
            selectTimer(document.getElementById('paper').value, document.getElementById('subject').value)
        }

    };

    const intervalTimer = setInterval(updateTimer, 1000);

}

