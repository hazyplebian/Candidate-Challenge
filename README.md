![License](https://img.shields.io/badge/License-BSD-blue.svg)

## Description
Candidate Search is a web application that calls the GitHub API and renders candidate data in the browser. Employers can review potential candidates by viewing detailed profiles—including the candidate's name, username, location, avatar, email, GitHub URL, and company. The application's API for retrieving candidate data is already provided; your task is to complete the front end using TypeScript, integrate with the API, and deploy the entire application on Render.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [Deployment](#deployment)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
To install this project, clone the repository and run the following command in the terminal to install dependencies:

Before you start, download and unzip the starter code and create your own repository with these files.

Additionally, create a `.env` file in the environment folder and add your GitHub Personal Access Token to increase the API rate limit:

## Usage
Invoke the application from the command line using: npm run build, npm run dev

Complete the front end by finalizing the CandidateSearch and SavedCandidates pages, creating any necessary components, and utilizing local storage to persist accepted candidates. The application retrieves candidate data via the provided API located at `./Develop/src/api/API.tsx`.

## Screenshot
![alt text](<assets/Screenshot 2025-04-02 003453.png>)
![alt text](<assets/Screenshot 2025-04-02 003512.png>)

## Deployment
Deployment URL: https://candidate-challenge-1.onrender.com

## Contribution
Contributions are welcome! If you have suggestions or improvements, feel free to fork the repository and submit a pull request.

## Tests
You can test the application by running:
npm run dev

Verify that:
- The candidate search page loads with one candidate’s information (name, username, location, avatar, email, GitHub URL, and company).
- Clicking the "+" button saves the current candidate to the list and displays the next candidate.
- Clicking the "-" button shows the next candidate without saving the current one.
- An appropriate message is displayed when there are no more candidates to review.
- The list of accepted candidates persists across page reloads using local storage.

## License
This project is licensed under the BSD license.

## Questions
If you have any questions, please contact me at [michael.mangieri@yahoo.com](mailto:michael.mangieri@yahoo.com).

You can find more of my work at [github.com/hazyplebian](https://github.com/hazyplebian)

