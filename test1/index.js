
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "American History",
    pages: [
        {
            questions: [
                {
                    type: "text",
                    name: "name",
                    title: "Your name:"
                },
                {
                    type: "text",
                    name: "email",
                    title: "Your e-mail"
                },
                {
                    type: "rating",
                    name: "qualification",
                    title: "How qualified are you for this position?",
                    minRateDescription: "Not Qualified",
                    maxRateDescription: "Completely Qualified"
                },
                {
                    type: "rating",
                    name: "comfort",
                    title: "How comfortable are you with computers?",
                    minRateDescription: "Not Very Comfortable",
                    maxRateDescription: "Very Comfortable"
                },
                {
                    type: "rating",
                    name: "customer",
                    title: "How important is customer satisfaction to you?",
                    minRateDescription: "Not Important",
                    maxRateDescription: "Very Important"
                }
            ]
        },  {
            questions: [
                {
                    type: "rating",
                    name: "stress",
                    title: "Rate your ability to handle stressful situations",
                    minRateDescription: "Weak",
                    maxRateDescription: "Perfect"
                },
                {
                    type : "boolean",
                    name : "bool 1",
                    title: "Question 7",
                    label: "Do you have reliable transportation?",
                    isRequired: true
                },
                {
                    type: "boolean",
                    name: "bool 2",
                    title: "Question 8",
                    label: "Do you have a valid driver’s license?",
                    isRequired : true
                },
                {
                    type: "boolean",
                    name: "bool 3",
                    title: "Question 9",
                    label: "Do you have a degree Computer Science?",
                    isRequired: true
                },
                {
                     type: "boolean",
                     name: "bool 4",
                     title: "Question 10",
                     label: "Are you willing to travel as required",
                     isRequired: true
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .location = "indexthanks.html";
    });

$("#surveyElement").Survey({ model: survey });