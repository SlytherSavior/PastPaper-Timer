const data = {
    "9702": {
        "name": "Physics",
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


function changePapers(subjectName) {
    console.log(data.hasOwnProperty(subjectName));
};


