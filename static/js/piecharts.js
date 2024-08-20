document.addEventListener('DOMContentLoaded', function() {
    // Data for each question
    const questionsData1 = [
      {
        type: 'groundTruth',
        question: "Q1. What object in the living room is closest to the sofa?",
        answer: "The object in the living room that is closest to the sofa is a cushion.",
        groundTruth: "In the living room, a cushion is closest to the sofa.",
        chartData: [57, 3],
        evaluationResponse: 'Correct',
        agreement: "yes"
      },
      {
        type: 'groundTruth',
        question: "Q2. What object in the bedroom is closest to the bed?",
        answer: "The object in the bedroom that is closest to the bed is a cushion.",
        groundTruth: "In the bedroom, a cushion is closest to the bed.",
        chartData: [57, 3],
        evaluationResponse: 'Correct',
        agreement: "yes"
      },
      {
        type: 'groundTruth',
        question: "Q3. What object in the study is closest to the desk?",
        answer: "The object in the study that is closest to the desk is a rug.",
        groundTruth: "In the study, a rug is closest to the desk.",
        chartData: [56, 4],
        evaluationResponse: 'Correct',
        agreement: "yes"
      },
      {
        type: 'groundTruth',
        question: "Q4. Which room has the most paintings?",
        answer: "All rooms have an equal number of paintings, which is 2.",
        groundTruth: "All rooms apart from the corridor.",
        chartData: [22, 38],
        evaluationResponse: 'Incorrect',
        agreement: "yes"
      },
      {
        type: 'groundTruth',
        question: "Q5. Which room has the most sofas?",
        answer: "The living room has the most sofas with a total of 1 sofa.",
        groundTruth: "The living room.",
        chartData: [54, 6],
        evaluationResponse: 'Correct',
        agreement: "yes"
      },
      {
        type: 'groundTruth',
        question: "Q6. Which room has the most chairs?",
        answer: "The dining room has the most chairs with a total of 5 chairs.",
        groundTruth: "The dining room.",
        chartData: [57, 3],
        evaluationResponse: 'Correct',
        agreement: "yes"
      },
      {
        type: 'groundTruth',
        question: "Q7. Are there any plants in the dining room?",
        answer: "No, there are not any plants in the dining room.",
        groundTruth: "No, there aren't.",
        chartData: [58, 2],
        evaluationResponse: 'Correct',
        agreement: "yes"
      },
      {
        type: 'groundTruth',
        question: "Q8. Are there any plants in the corridor?",
        answer: "No, there are no plants in the corridor.",
        groundTruth: "No, there aren't.",
        chartData: [57, 2],
        evaluationResponse: 'Correct',
        agreement: "yes"
      },
      {
        type: 'groundTruth',
        question: "Q9. Are there any chairs in the apartment?",
        answer: "Yes, there are 9 chairs in the apartment.",
        groundTruth: "Yes, there are.",
        chartData: [57,3],
        evaluationResponse: 'Correct',
        agreement: "yes"
      },
      {
        type: 'groundTruth',
        question: "Q10. Are there any armchairs in the dining room?",
        answer: "Yes, there are armchairs in the dining room.",
        groundTruth: "No, there aren't.",
        chartData: [5,55],
        evaluationResponse: 'Incorrect',
        agreement: "yes"
      },
      {
        type: 'groundTruth',
        question: "Q11. What distance would you have to walk to get from the dining room to the living room?",
        answer: "The distance you would have to walk to get from the dining room to the living room is approximately 7.87 meters. The distance is calculated between (4.625, 6.83, -0.28) and (4.625, 3.555, -0.28).",
        groundTruth: "From the dining room at (4.625, 6.83, -0.28) to the living room at (4.625, 3.555, -0.28) the navigable distance is 7.903 meters.",
        chartData: [50, 10],
        evaluationResponse: 'Correct',
        agreement: "yes"
      },
      {
        type: 'groundTruth',
        question: "Q12. What is the distance between the mirror in bedroom and the desk in the study (considering the obstacles)?",
        answer: "The distance between the mirror in the bedroom and the desk in the study, considering the obstacles, is approximately 4.41 meters. The distance is calculated between (0.767, 0.006, -0.624) and (-0.787, 0.059, -1.227).",
        groundTruth: "From object with id=5 at (0.767, 0.006, -0.624) to object with id=72 at (-0.787, 0.059, -1.227) the navigable distance is 4.414 meters.",
        chartData: [58,2],
        evaluationResponse: 'Correct',
        agreement: "yes"
      }, 
      {
        type: 'groundTruth',
        question: "Q13. What is the distance between the sofa in the living room and the table in the dining area (considering the obstacles)?",
        answer: "The distance between the sofa in the living room and the table in the dining area, considering obstacles, is approximately 8.12 meters. The distance is calculated between (4.72, 2.382, -1.223) and (4.598, 6.825, -1.195).",
        groundTruth: "From object with id=23 at (4.72, 2.382, -1.223) to object with id=8 at (4.598, 6.825, -1.195) the navigable distance is 8.011 meters.",
        chartData: [48,12],
        evaluationResponse: 'Correct',
        agreement: "yes"
      }, 
      {
        type: 'groundTruth',
        question: "Q14. What is the distance between the desk in the study and the bed in the bedroom (considering the obstacles)?",
        answer: "The distance between the desk in the study and the bed in the bedroom, considering obstacles, is approximately 2.37 meters. The distance is calculated between (0.79, 0.06, -1.23) and (4.22, 0.77, -0.87).",
        groundTruth: "From object with id=72 at (-0.787, 0.059, -1.227) to object with id=198 at (4.217, 0.766, -0.87) the navigable distance is 4.842 meters.",
        chartData: [4, 56],
        evaluationResponse: 'Incorrect',
        agreement: "yes"
      }, 
      {
        type: 'groundTruth',
        question: "Q15. What distance would you have to walk to get from the dining room to the study?",
        answer: "The distance you would have to walk to get from the dining room to the study is approximately 11.09 meters. The distance is calculated between (4.625, 6.83, -0.28) and (-0.875, 0.135, -0.28 ).",
        groundTruth: "From the dining room at (4.625, 6.83, -0.28) to the study at (-0.875, 0.135, -0.28) the navigable distance is 11.088 meters.",
        chartData: [58,2],
        evaluationResponse: 'Correct',
        agreement: "yes"
      }, 
      {
        type: 'groundTruth',
        question: "Q16. What is the distance in straight line between the desk in the study and the bed in the bedroom?",
        answer: "The straight-line distance between the desk in the study and the bed in the bedroom is approximately 5.07 meters. The distance is calculated between (-0.79, 0.06, -1.23) and (4.22, 0.77, -0.87).",
        groundTruth: "Straight line distance from object with id=72 at (-0.787, 0.059, -1.227) to object with id=198 at (4.217, 0.766, -0.87) is 5.066 meters.",
        chartData: [59, 1],
        evaluationResponse: 'Correct',
        agreement: "yes"
      }, 
      {
        type: 'answerCrossCheck',
        question: "Q17. What are the similarities between the dining room and the bedroom?",
        answer: "I'm sorry, but I was unable to find the similarities between the dining room and the bedroom because the information about the dining room is not available.",
        example: "Both have artworks on the walls, windows with blinds, large-area rug.",
        imagePath: "static/images/user_study/q17.png",
        chartData: [3, 57],
        evaluationResponse: 'Incorrect',
        agreement: "yes"
      },
      {
        type: 'groundTruth',
        question: "Q18. Which rooms have a sauna?",
        answer: "There are no rooms with a sauna.",
        groundTruth: "No room has a sauna.",
        chartData: [59,1],
        evaluationResponse: 'Correct',
        agreement: "yes"
      }, 
      {
        type: 'answerCrossCheck',
        question: "Q19. What can a person sitting in an armchair in the bedroom see in front of them?",
        answer: "From the perspective of a person sitting in the armchair in the bedroom, they would be facing a wall with two framed pictures hanging above a small table or shelf, which has a decorative vase or plant on it. The wall appears to be the foot of the room, and the floor is covered with a large area rug. The edge of a bed can be seen to one side, suggesting that the armchair is positioned near the corner of the bedroom. The overall color scheme is neutral, with light walls and furnishings, creating a calm and minimalist atmosphere.",
        example: "You can see a bed with cushions on it, a window, two nightstands with lamps on the opposite sides of the bed, rug on the floor, open door leading to another room.",
        imagePath: "static/images/user_study/q19.png",
        chartData: [16,44],
        evaluationResponse: 'Incorrect',
        agreement: "yes"
      },
      {
        type: 'answerCrossCheck',
        question: "Q20. What can a person sitting on the sofa see in front of them?",
        answer: "In the image, the sofa is positioned between two lamps that are placed on identical side tables. Directly above the sofa, there is a large framed artwork hanging on the wall. To the side of the sofa, there is a window with blinds partially drawn, allowing some natural light into the room. In front of the sofa, there is a small round coffee table with a few items on it, which appears to be closer to the viewer than the sofa. The room has a neutral color scheme with white walls and a light-colored floor, creating a bright and airy atmosphere.",
        example: "You can see a coffee table with books, a plant and a decorative item right in front of you. On the opposite wall you can see a hanged painting, and a table with vases, boxes and white flowers beneath the it. To the right you could see a basket on the floow, to the left an open door leading to another room.",
        imagePath: "static/images/user_study/q20.png",
        chartData: [13,47],
        evaluationResponse: 'Incorrect',
        agreement: "yes"
      },
      {
        type: 'groundTruth',
        question: "Q21. Which rooms do not contain a sauna?",
        answer: "All rooms in the apartment, which are the bedroom, corridor, dining room, living room, and study, do not contain a sauna.",
        groundTruth: "Corridor, living room, dining room, study, bedroom do not contain a sauna.",
        chartData: [54,6],
        evaluationResponse: 'Correct',
        agreement: "yes"
      }, 
      {
        type: 'groundTruth',
        question: "Q22. Which rooms do not contain a bed?",
        answer: "The rooms that do not contain a bed are the corridor, dining room, living room, and study.",
        groundTruth: "Corridor, living room, dining room, study do not contain a bed.",
        chartData: [57,3],
        evaluationResponse: 'Correct',
        agreement: "yes"
      }, 
      {
        type: 'groundTruth',
        question: "Q23. Which rooms have no paintings?",
        answer: "I'm sorry, but I couldn't find specific information about which rooms contain paintings. Therefore, I can't accurately determine which rooms don't have paintings.",
        groundTruth: "Corridor has no paintings.",
        chartData: [8,52],
        evaluationResponse: 'Incorrect',
        agreement: "yes"
      }, 
      {
        type: 'groundTruth',
        question: "Q24. How many people could comfortably sleep in the bedroom's bed?",
        answer: "The bed in the bedroom can comfortably accommodate 2 people.",
        groundTruth: "The bed is king-sized.",
        chartData: [56,4],
        evaluationResponse: 'Correct',
        agreement: "yes"
      }, 
      {
        type: 'groundTruth',
        question: "Q25. How many people could comfortably work on a project in the study?",
        answer: "One person can comfortably work in the study.",
        groundTruth: "There is one desk and one chair.",
        chartData: [58,2],
        evaluationResponse: 'Correct',
        agreement: "yes"
      }, 
      {
        type: 'groundTruth',
        question: "Q26. In which room could most people sit together?",
        answer: "The living room could accommodate the most people, as it has 9 seating objects.",
        groundTruth: "The dining room has 5 chairs. The living room has two chairs and a small sofa.",
        chartData: [44,16],
        evaluationResponse: 'Incorrect',
        agreement: "yes"
      }, 
      {
        type: 'groundTruth',
        question: "Q27. List all the rooms with the corresponding number of chairs in them.",
        answer: "The bedroom has 1 chair, the dining room has 5 chairs, the living room has 2 chairs, and the study has 1 chair.",
        groundTruth: "bedroom: 1, living room: 2, dining room: 5, study: 1, corridor: 0",
        chartData: [49, 11],
        evaluationResponse: 'Incorrect',
        agreement: "no"
      }, 
      {
        type: 'answerCrossCheck',
        question: "Q28. How is the couch in the living room placed with respect to the surrounding objects?",
        answer: "The couch in the living room is centrally positioned against a wall, beneath a large framed artwork. Directly in front of the couch is a small, round coffee table. Flanking the couch on both sides are matching table lamps, each placed on a small table or stand. There is a window with blinds to one side of the couch, providing natural light to the space. The overall arrangement creates a symmetrical and balanced setup in the room.",
        example: "The couch has small tables with lamps on both its sides, its back against the wall, under a painting. The couch is facing a coffee table with a book, vase and a plant, and in the further side of the room a table with decorative items on it. It is flanked by armchairs on both its sides, and it holds some cushions.",
        imagePath: "static/images/user_study/q28.png",
        chartData: [57,3],
        evaluationResponse: 'Correct',
        agreement: "yes"
      },
      {
        type: 'answerCrossCheck',
        question: "Q29. How is the sofa in the living room placed with respect to the surrounding objects?",
        answer: "The sofa is centrally placed within the room, facing towards a large artwork that hangs on the wall. There is a coffee table positioned directly in front of the sofa, with a small decorative item on top. Flanking the sofa are two matching table lamps, each placed on a surface that appears to be either a side table or a console, which are not fully visible in the image. Behind the sofa, there is a window with blinds partially drawn, allowing some natural light into the room. The overall arrangement suggests a conversational or lounge area designed for relaxation or socializing.",
        example: "The sofa has small tables with lamps on both its sides, its back against the wall, under a painting. The sofa is facing a coffee table with a book, vase and a plant, and in the further side of the room a table with decorative items on it. It is flanked by armchairs on both its sides, and it holds some cushions.",
        imagePath: "static/images/user_study/q29.png",
        chartData: [36, 24],
        evaluationResponse: 'Correct',
        agreement: "yes"
      },
      {
        type: 'answerCrossCheck',
        question: "Q30. What is placed on top of the table in the dining room?",
        answer: "A delicate, tiered centerpiece featuring what seems to be a pair of ornamental dishes or shallow bowls, possibly made of glass or ceramic, with a design that complements the minimalist aesthetic of the room is placed on top of the table in the dining room.",
        example: "There is a tiered serving tray.",
        imagePath: "static/images/user_study/q30.png",
        chartData: [50, 10],
        evaluationResponse: 'Correct',
        agreement: "yes"
      },
      {
        type: 'answerCrossCheck',
        question: "Q31. What objects are there on the desk in the study?",
        answer: "There is a small potted plant on the desk in the study.",
        example: "There is a lamp and a potted plant. (Assume that the object on the left on the desk is a desk lamp)",
        imagePath: "static/images/user_study/q31.png",
        chartData: [16, 44],
        evaluationResponse: 'Incorrect',
        agreement: "yes"
      },
      {
        type: 'groundTruth',
        question: "Q32. Which rooms are best adjusted for a casual conversation with two friends?",
        answer: "The dining room and the living room are the rooms best adjusted for a casual conversation with two friends. However, the dining room, with its 5 seats, might be more comfortable for such a gathering. The living room, despite its comfortable ambiance, might be a bit cramped as it only has 2 seats. The study and the bedroom, while having a comfortable ambiance, lack the necessary seating arrangements. The corridor, despite being spacious, does not provide a suitable ambiance for a casual conversation.",
        groundTruth: "The living room has two armchairs and a sofa. The dining room has 5 chairs next to a table. The corridor has no furniture. The study has a desk and a chair. The bedroom has a bed and an armchair.",
        chartData: [34, 26],
        evaluationResponse: 'Correct',
        agreement: "yes"
      }, 
      {
        type: 'answerCrossCheck',
        question: "Q33. In the dining room, how are the chairs positioned with respect to each other?",
        answer: "In the dining room, there is a round dining table with chairs positioned around it. The chairs are evenly spaced, encircling the table, and all are oriented to face towards the center of the table. There is no clear head of the table due to its round shape, which suggests a more collaborative or egalitarian seating arrangement. The chairs are close enough to the table to be used for dining but also have enough space to be pulled out for sitting. A decorative centerpiece is placed in the middle of the table, and the chairs appear to be upholstered, suggesting a comfortable seating arrangement.",
        example: "The chairs surround the central round table from all sides.",
        imagePath: "static/images/user_study/q33.png",
        chartData: [52, 8],
        evaluationResponse: 'Correct',
        agreement: "yes"
      },
      {
        type: 'groundTruth',
        question: "Q34. How many artworks are there in the apartment?",
        answer: "There are 12 artworks in the apartment.",
        groundTruth: "There are 8 paintings, 1 sculpture and 3 vases.",
        chartData: [53,7],
        evaluationResponse: 'Correct',
        agreement: "yes"
      }, 
      {
        type: 'groundTruth',
        question: "Q35. How many chairs are there in the apartment?",
        answer: "There are 9 chairs in the apartment.",
        groundTruth: "9",
        chartData: [57,3],
        evaluationResponse: 'Correct',
        agreement: "yes"
      }, 
      {
        type: 'groundTruth',
        question: "Q36. Which rooms are directly accessible from the study?",
        answer: "The rooms directly accessible from the study are a waiting or sitting area, an office or meeting room, and a relaxation or informal meeting space.",
        groundTruth: "The corridor.",
        chartData: [2,58],
        evaluationResponse: 'Incorrect',
        agreement: "yes"
      }, 
      {
        type: 'answerCrossCheck',
        question: "Q37. What kind of activities is the largest room best suited for?",
        answer: "The largest room in the apartment is the corridor. It contains a lamp and a vent. The corridor has a modern and functional aesthetic with a neutral color palette and clean lines. Given its size and the objects present, the corridor is best suited for movement and transit within the apartment. It may also serve as a good place for standing conversations, quick catch-ups, or even as a space for pets to roam, if any. However, it might not be suitable for activities that require furniture or specific equipment, such as dining, working, or entertainment.",
        example: "The corridor is the largest room. In there, you could do any indoor activity that requires empty space e.g. yoga, dancing.",
        imagePath: "static/images/user_study/q37.png",
        chartData: [48, 12],
        evaluationResponse: 'Correct',
        agreement: "yes"
      },
      {
        type: 'groundTruth',
        question: "Q38. Which rooms have a bed?",
        answer: "The room that has a bed is the bedroom.",
        groundTruth: "Only the bedroom has a bed.",
        chartData: [57,3],
        evaluationResponse: 'Correct',
        agreement: "yes"
      }, 
      {
        type: 'groundTruth',
        question: "Q39. Which room would be best for having a meal for 3 people?",
        answer: "The best room for having a meal for 3 people is the dining room. It features a round dining table with high-back chairs, a delicate centerpiece, and a large white area rug. The room is bright and airy, with a minimalist and sophisticated aesthetic.",
        groundTruth: "The dining room has a table and 5 chairs. The living room has two armchairs and a sofa, but no dining table. The bedroom has a bed and an armchair, but no dining table. The study has one chair and one desk. The corridor has no furniture.",
        chartData: [57,3],
        evaluationResponse: 'Correct',
        agreement: "yes"
      }, 
      {
        type: 'groundTruth',
        question: "Q40. Which rooms would be best for having a casual meeting for 3 people?",
        answer: "The best rooms for having a casual meeting for 3 people would be the dining room and the living room.",
        groundTruth: "The dining room has a table and 5 chairs. The living room has two armchairs and a sofa. The bedroom has a bed and an armchair, but no table. The study has one chair and one desk. The corridor has no furniture.",
        chartData: [56,4],
        evaluationResponse: 'Correct',
        agreement: "yes"
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
          labels: ['Correct', 'Incorrect']
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
  
    function generateQuestions(containerId, questionsData) {
        const container = document.getElementById(containerId);

        // Add a separator at the beginning
        const initialSeparator = document.createElement('div');
        initialSeparator.classList.add('separator');
        container.appendChild(initialSeparator);

        questionsData.forEach((item, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('columns', 'is-vcentered');

            // Set emoji based on evaluation response
            const emoji = item.agreement === 'yes' ? '✅' : '❌'; // Tick for Yes, Cross for No

            let additionalContent = '';
            if (item.type === 'groundTruth') {
                additionalContent = `<p class="justified"><b>Ground Truth:</b> ${item.groundTruth}</p><p><b>Automatic Assessment Decision:</b> ${item.evaluationResponse}</p>`;
            } else if (item.type === 'answerCrossCheck') {
                additionalContent = `<p class="justified"><b>Example Answer:</b> ${item.example}</p><p><b>Automatic Assessment Decision:</b> ${item.evaluationResponse}</p><img class="centered-image" src="${item.imagePath}" alt="Example Answer Image" style="height: 200px; width: auto; margin-top: 10px;">`;
            }

            const questionContent = `
                <div class="column is-three-quarters">
                    <h3><b>${emoji} ${item.question}</b></h3>
                    <p class="justified"><b>System's Answer:</b> ${item.answer}</p>
                    ${additionalContent}
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

    // Generate questions for User Study 1
    generateQuestions('questions-container', questionsData1);
  });