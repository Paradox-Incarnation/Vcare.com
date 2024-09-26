const questions = [
    {
        question: "How can you protect your data from Cybercrime?",
        optionA: "By creating strong passwords",
        optionB: "By clicking on spam links ",
        optionC: "By giving your personal information",
        optionD: "By avoiding anti - virus software",
        correctOption: "optionA"
    },

    {
        question: "How can you identify fake news?",
        optionA: "Without checking it's related facts",
        optionB: "By believing the news without checking it's source",
        optionC: "By misreading it in a hurry",
        optionD: "By taking a closer and clever look!",
        correctOption: "optionD"
    },

    {
        question: "What will you do if you find a news to be fake?",
        optionA: "Forward it to everyone",
        optionB: "Spread that fake news",
        optionC: "Try to aware people",
        optionD: "Believe it to be true",
        correctOption: "optionC"
    },

    {
        question: "Is it safe to open spam links or messages",
        optionA: "Yes",
        optionB: "No",
        optionC: "Undetermined",
        optionD: "None Of These",
        correctOption: "optionB"
    },

    {
        question: "What will you do after cyber attack?",
        optionA: "Inform the cyber cell",
        optionB: "Keep surfing",
        optionC: "Start panicking",
        optionD: "Play games",
        correctOption: "optionA"
    },

    {
        question: "We must create strong passwords to be protected from cyber crime.",
        optionA: "True ",
        optionB: "False",
        optionC: "Undetermined",
        optionD: "None Of These",
        correctOption: "optionA"
    },

    {
        question: "Usage of Anti - Virus software is safe or not?",
        optionA: "No",
        optionB: "Yes",
        optionC: "Undetermined",
        optionD: "None Of These",
        correctOption: "optionB"
    },

    {
        question: "Which of the following is false?",
        optionA: "Trust only the trusted sites",
        optionB: "Never open attachments in spam mails",
        optionC: "Cybercrime is not a threat",
        optionD: "Do not trust spam messages",
        correctOption: "optionC"
    },

    {
        question: "It is one's responsibilty to create media carefully.",
        optionA: "True ",
        optionB: "False",
        optionC: "Undetermined",
        optionD: "None Of These",
        correctOption: "optionA"
    },

    {
        question: "We should be aware regarding :",
        optionA: "Cybercrime",
        optionB: "Spam mails",
        optionC: "Media Literacy ",
        optionD: "All of the above",
        correctOption: "optionD"
    },

    {
        question: "How can you protect your data from Cybercrime?",
        optionA: "By creating strong passwords",
        optionB: "By clicking on spam links ",
        optionC: "By giving your personal information",
        optionD: "By avoiding anti - virus software",
        correctOption: "optionA"
    },

    {
        question: "How can you identify fake news?",
        optionA: "Without checking it's related facts",
        optionB: "By believing the news without checking it's source",
        optionC: "By misreading it in a hurry",
        optionD: "By taking a closer and clever look!",
        correctOption: "optionD"
    },

    {
        question: "What will you do if you find a news to be fake?",
        optionA: "Forward it to everyone",
        optionB: "Spread that fake news",
        optionC: "Try to aware people",
        optionD: "Believe it to be true",
        correctOption: "optionC"
    },

    {
        question: "Is it safe to open spam links or messages",
        optionA: "Yes",
        optionB: "No",
        optionC: "Undetermined",
        optionD: "None Of These",
        correctOption: "optionB"
    },

    {
        question: "What will you do after cyber attack?",
        optionA: "Inform the cyber cell",
        optionB: "Keep surfing",
        optionC: "Start panicking",
        optionD: "Play games",
        correctOption: "optionA"
    },

    {
        question: "We must create strong passwords to be protected from cyber crime.",
        optionA: "True ",
        optionB: "False",
        optionC: "Undetermined",
        optionD: "None Of These",
        correctOption: "optionA"
    },

    {
        question: "Usage of Anti - Virus software is safe or not?",
        optionA: "No",
        optionB: "Yes",
        optionC: "Undetermined",
        optionD: "None Of These",
        correctOption: "optionB"
    },

    {
        question: "Which of the following is false?",
        optionA: "Trust only the trusted sites",
        optionB: "Never open attachments in spam mails",
        optionC: "Cybercrime is not a threat",
        optionD: "Do not trust spam messages",
        correctOption: "optionC"
    },

    {
        question: "It is one's responsibilty to create media carefully.",
        optionA: "True ",
        optionB: "False",
        optionC: "Undetermined",
        optionD: "None Of These",
        correctOption: "optionA"
    },

    {
        question: "We should be aware regarding :",
        optionA: "Cybercrime",
        optionB: "Spam mails",
        optionC: "Media Literacy ",
        optionD: "All of the above",
        correctOption: "optionD"
    }

]


let shuffledQuestions = []

function handleQuestions() {

    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0
let wrongAttempt = 0
let indexNumber = 0


function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber]
    const currentQuestionAnswer = currentQuestion.correctOption
    const options = document.getElementsByName("option");
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            ``
            correctOption = option.labels[0].id
        }
    })


    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }


    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++

            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++

            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}




function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()

    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

function handleEndGame() {
    let remark = null
    let remarkColor = null

    if (playerScore <= 3) {
        remark = "Media Literacy Level : Average"
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Media Literacy Level : Good"
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Media Literacy Level : Excellent"
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
    window.history.back();
}

function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
