document.addEventListener('DOMContentLoaded', function() {
    // Data for each question
    const questionsData = [
      {
        question: "Q1. What object in the living room is closest to the sofa?",
        answer: "The object in the living room that is closest to the sofa is a cushion.",
        groundTruth: "In the living room, a cushion is closest to the sofa.",
        chartData: [60, 40]
      },
      {
        question: "Question 2",
        answer: "Answer 2",
        groundTruth: "Ground Truth 2",
        chartData: [70, 30]
      },
      // Add more questions as needed
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
          labels: ['Yes', 'No']
        },
        options: {
          responsive: false,
          maintainAspectRatio: false,
          legend: {
            position: 'right' // Position the legend to the right of the chart
          }
        }
      });
    }
  
    // Generate HTML for each question and chart
    const container = document.getElementById('questions-container');
    questionsData.forEach((item, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.classList.add('columns', 'is-vcentered');
  
      const questionContent = `
        <div class="column is-three-quarters">
          <h3><b>${item.question}</b></h3>
          <p><b>Answer:</b> ${item.answer}</p>
          <p><b>Ground Truth:</b> ${item.groundTruth}</p>
        </div>
        <div class="column is-one-quarter">
          <canvas id="pieChart${index}" width="150" height="150"></canvas>
        </div>
      `;
  
      questionDiv.innerHTML = questionContent;
      container.appendChild(questionDiv);
  
      // Create the pie chart
      const ctx = document.getElementById(`pieChart${index}`).getContext('2d');
      createPieChart(ctx, item.chartData);
    });
  });