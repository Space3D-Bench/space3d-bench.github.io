document.addEventListener('DOMContentLoaded', function() {
    // Data for each question for User Study 2
    const questionsData2 = [
        {
            question: "Q17. What are the similarities between the dining room and the bedroom?",
            option1: "Both have a bed",
            option2: "Both have a table",
            chartData: [3, 57],
        },
    ];

    // Function to create a pie chart
    function createPieChart(ctx, data) {
        new Chart(ctx, {
            type: 'pie',
            data: {
                datasets: [{
                    data: data,
                    backgroundColor: ['#FF6384', '#36A2EB'],
                }],
                labels: ['Option 1', 'Option 2']
            },
            options: {
                responsive: false,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right', // Position the legend to the right of the chart
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
                <div class="column is-three-quarters">
                    <h3><b>${item.question}</b></h3>
                    <p class="justified"><b>Option 1:</b> ${item.option1}</p>
                    <p class="justified"><b>Option 2:</b> ${item.option2}</p>
                </div>
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
            createPieChart(ctx, item.chartData);
        });
    }

    // Generate questions for User Study 2
    generateQuestions('questions-container-2', questionsData2);
});