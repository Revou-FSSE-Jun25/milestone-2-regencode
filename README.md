# RevoFun - Milestone 2 Software Engineering

## 1. Project Overview  
**RevoFun** is a browser-based mini-game collection built as part of a milestone project. The primary objective is to create a fun, lightweight platform where users can play simple interactive games directly from their browser without the need for installation or external dependencies.  

The application provides a central navigation menu that lists available games. Some games are already implemented, while others are marked as “Coming Soon!” for future development.  

---

## 2. Features  

### Implemented Games  
- **Number Guessing**  
  - Player tries to guess a randomly generated number.  
  - Feedback provided (too high, too low, correct).  

- **Rock, Paper, Scissors**  
  - Classic game against the computer.  
  - User selects a move, computer generates a random move.  
  - Outcome displayed (win/lose/draw).  

- **Clicker Game**  
  - User clicks a button to accumulate points.  
  - Score is tracked dynamically.  

- **Memory Cards**  
  - Flip cards to find matching pairs.  
  - Objective is to clear the board with the fewest moves possible.  

- **Avoid the Falling Objects**  
  - The player must dodge falling objects, using WASD to move.  
  - Objective is to live as long as possible.

### General Features  
- Simple and intuitive navigation between games.  
- Responsive UI for desktop and browser play.  
- “Coming Soon!” placeholders for future expansion.  

---

## 3. Technologies Used  

- **HTML5**  
  - Defines the structure of the landing page and individual game pages.  
  - Provides semantic elements for layout and navigation.  

- **CSS3**  
  - Handles visual presentation, including layout, colors, and typography.  
  - Ensures games and navigation are styled consistently.  

- **Vanilla JavaScript (ES6)**  
  - Implements game logic and interactivity.  
  - Handles DOM manipulation for dynamic updates (scores, results, card flips, etc.).  
  - Provides randomization for games like Number Guessing, Rock Paper Scissors, and Memory Card randomization.  

---

## 4. How to Run the Project  

1. Clone or download this repository.  
   ```bash
   git clone https://github.com/revou-fsse-jun25/milestone-2-regencode.git
   ```
2. Navigate to the project folder.
    ```bash
    cd milestone-2-regencode
    ```
3. Use live-server (npm install -g live-server) to run locally.


## 5. Demo link
Try the website at [Website Link](https://revou-fsse-jun25.github.io/milestone-2-regencode/)


## 6. Future Improvements  

- Complete the **Avoid the Falling Objects** game.  
- Add sound effects and animations for better user engagement.  
- Add scoring history or leaderboard features.  
- Add a global scoreboard to track performance across games.  

## 7. Deadline
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/pUNCiVii)
