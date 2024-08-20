document.addEventListener('DOMContentLoaded', function() {
    // Data for each question
    const questionsData = [
      {
        type: 'groundTruth',
        question: "Q1. What object in the living room is closest to the sofa?",
        answer: "The object in the living room that is closest to the sofa is a cushion.",
        groundTruth: "In the living room, a cushion is closest to the sofa.",
        chartData: [60, 40],
        evaluationResponse: 'Yes'
      },
      {
        type: 'answerCrossCheck',
        question: "Question 2",
        answer: "Answer 2",
        imagePath: "static/images/carousel1.jpg",
        chartData: [70, 30],
        evaluationResponse: 'No'
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
  
    // Generate HTML for each question and chart
    const container = document.getElementById('questions-container');
    questionsData.forEach((item, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('columns', 'is-vcentered');
    
        // Set emoji based on evaluation response
        const emoji = item.evaluationResponse === 'Yes' ? '✅' : '❌'; // Tick for Yes, Cross for No
    
        let additionalContent = '';
        if (item.type === 'groundTruth') {
          additionalContent = `<p><b>Ground Truth:</b> ${item.groundTruth}</p>`;
        } else if (item.type === 'answerCrossCheck') {
          additionalContent = `<p><b>Example Answer:</b> ${item.answer}</p><img src="${item.imagePath}" alt="Example Answer Image" style="height: 150px; width: auto; margin-top: 10px;">`;
        }
    
        const questionContent = `
          <div class="column is-three-quarters">
            <h3><b>${item.question} ${emoji}</b></h3>
            <p><b>Answer:</b> ${item.answer}</p>
            ${additionalContent}
            <p><b>Evaluation Response:</b> ${item.evaluationResponse}</p>
          </div>
          <div class="column is-one-quarter">
            <canvas id="pieChart${index}" width="200" height="200"></canvas>
          </div>
        `;
    
        questionDiv.innerHTML = questionContent;
        container.appendChild(questionDiv);
    
        // Create the pie chart
        const ctx = document.getElementById(`pieChart${index}`).getContext('2d');
        createPieChart(ctx, item.chartData);
    });
  });