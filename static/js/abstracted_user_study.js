document.addEventListener('DOMContentLoaded', function() {
    // Data for each question for User Study 2
    const questionsData2 = [
        {
            question: "Q1. Imagine there are two rooms A, B with a sofa in each and three rooms C, D, E without any sofa. You are asked a question 'Which rooms have the same number of sofas?'. A system says 'A and B' without mentioning that rooms C, D, E have the same (zero) number of sofas. Would you consider the answer as a correct one?",
            chartData: [37, 23],
            labels: ['Yes', 'No']
        },
        {
            question: "Q2. If there are three rooms - a bedroom with two beds, a living room with one bed, a bathroom with no beds - and you are asked 'Which rooms have least beds?', would you choose the living room (LR) or the bathroom (B)?",
            chartData: [25, 35],
            labels: ['LR', 'B']
        },
        {
            question: "Q3. If you ask 'How many beds are there?' and you get the response 'Several', 'A few', 'Multiple', would you accept it as a correct response?",
            chartData: [14, 46],
            labels: ['Yes', 'No']
        },
        {
            question: "Q4. If you ask 'Where are chairs located?' and get the response 'There are chairs in the living room and the dining room.' (which is not false, but a study also has chairs), would you accept the answer as a correct one?",
            chartData: [16, 44],
            labels: ['Yes', 'No']
        },
        {
            question: "Q5. If there are in total 6 chairs in the room, and a system answers the question 'How many chairs are there in the room?' with 'There are 2 chairs.' (but does not use the words 'in total'), would you accept the system's response?",
            chartData: [7, 53],
            labels: ['Yes', 'No']
        },
        {
            question: "Q6. If there are in total 6 chairs in the room, and a system answers the question 'How many chairs are there in the room?' with 'There are at least 2 chairs.', would you accept the system's response?",
            chartData: [33, 27],
            labels: ['Yes', 'No']
        },
        {
            question: "Q7. If a system is supposed to describe a scene and uses the words 'to the left' or 'to the right', which are true for a specific viewpoint, but not for all, would you accept the answer?",
            chartData: [41, 19],
            labels: ['Yes', 'No']
        },
        {
            question: "Q8. If you ask a question 'How are the chair and the bed positioned with respect to each other?', and you get a correct response followed by question-irrelevant yet false description of other objects, would you accept the answer?",
            chartData: [15, 45],
            labels: ['Yes', 'No']
        },
        {
            question: "Q9. If you ask 'Which rooms are best adjusted for XYZ?' and in the answer one room is mentioned, would you accept the answer?",
            chartData: [50, 10],
            labels: ['Yes', 'No']
        },
        {
            question: "Q10. If you ask 'Which room is best adjusted for XYZ?' and in the answer a couple of rooms are mentioned (and correctly justified), would you accept the answer?",
            chartData: [53, 7],
            labels: ['Yes', 'No']
        },
    ];

    // Function to create a pie chart
    function createPieChart(ctx, data, labels) {
        new Chart(ctx, {
            type: 'pie',
            data: {
                datasets: [{
                    data: data,
                    backgroundColor: ['#79029B', '#FFDA03'], // Vivid Orange and Green
                }],
                labels: labels
            },
            options: {
                responsive: false,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top', // Position the legend to the right of the chart
                        labels: {
                            boxWidth: 10,
                            padding: 20
                        }
                    }
                }
            }
        });
    }

    // Function to generate HTML for each question and chart
    function generateQuestions(containerId, questionsData) {
        const container = document.getElementById(containerId);

        // Add a separator at the beginning
        const initialSeparator = document.createElement('div');
        initialSeparator.classList.add('separator');
        container.appendChild(initialSeparator);

        questionsData.forEach((item, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('columns', 'is-vcentered');

            const questionContent = `
                <div class="column is-three-quarters"">
                    <h3 class="justified"><b>${item.question}</b></h3>
                </div>
                <br>
                <div class="column is-one-quarter">
                    <canvas id="pieChart${containerId}${index}" width="200" height="150"></canvas>
                </div>
            `;

            questionDiv.innerHTML = questionContent;
            container.appendChild(questionDiv);

            // Add a separator
            const separator = document.createElement('div');
            separator.classList.add('separator');
            container.appendChild(separator);

            // Create the pie chart
            const ctx = document.getElementById(`pieChart${containerId}${index}`).getContext('2d');
            createPieChart(ctx, item.chartData, item.labels);
        });
    }

    // Generate questions for User Study 2
    generateQuestions('questions-container-2', questionsData2);
});