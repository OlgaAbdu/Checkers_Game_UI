﻿# Cypress Checkers Game UI Tests

## About the Project
This project uses Cypress to automate UI testing for a Checkers game. The focus is on ensuring the game's user interface works correctly and provides a smooth experience for users.

This project uses [Cypress](https://www.cypress.io/) to automate UI testing for a [Checkers game](https://www.gamesforthebrain.com/game/checkers/). The focus is on ensuring the game's user interface works correctly and provides a smooth experience for users.

**How to start working in our project?**

1. Clone repository to your machine.

2. Navigate to project root folder.

3. Run command ```npm ci``` in terminal VScode.

4. After, execute ```npx cypress open```  to run tests.

5. Execute ```npm run runE2E``` to run test headless.

## Continuous Integration

This project is configured with a CI pipeline using GitHub Actions. Every push and pull request to the `main` branch triggers a CI run that executes all Cypress tests in headless mode on an Ubuntu-latest runner with Node.js version 16.x.

## Reports

Test run results are beautifully formatted using the `cypress-mochawesome-reporter`. These reports provide detailed insights and are essential for understanding test outcomes.


## Documentation

For more detailed documentation, check out our [Trello board](https://trello.com/b/5ROY8M5D/assessmentjscypressapi).


🎬 Here's a quick video for Checkers Game Test Run Video

https://github.com/OlgaAbdu/Checkers_Game_UI/assets/103216584/5986adc3-a91e-4aac-a88a-0a7853b8a139

📸 MochaAwesome Report Screenshot 

![imageCheckers](https://github.com/OlgaAbdu/Checkers_Game_UI/assets/103216584/3de88abf-9819-43be-a5bc-620c9b079a29)

