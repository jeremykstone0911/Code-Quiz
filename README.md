# Code-Quiz

## Description

The main goal of this project was to create a quiz by updating the DOM with javascript. As the user answers the questions, the DOM is updated with the next question. The user is given 60 seconds to complete the quiz. The remaining time left after completing the quiz is the user's final score. For every incorrect answer, the user loses 10 seconds. The user is prompted to enter their name. When the user enters his or her name this along with their score is entered into a high scores list. The high scores are sorted, so the highest score is at the top of the list, and the lowest at the bottom. The values are stored in local storage, so they are not lost.

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```
