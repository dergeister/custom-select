# custom-select

## README Versão em Português
Para a versão em português do README.md acessar [README.md](https://github.com/dergeister/custom-select).

## Description
This project is inspired bu the video [The Perfect Project For Your Portfolio](https://www.youtube.com/watch?v=Fc-oyl31mRI) from the channel [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified) where the objective is to create a custom select.

The video shows how to create a custom select in javascript with keyboard interactions to choose an options with the arrow keys and select an option when typing. Beyond that, I decided to do the following:
- Create a React component in Typescript insted of utilizing raw javascript.
- Get Brazilian states from the IBGE API (IBGE is the main provider of geographic and statistical information on Brazil).
- Make some visual improvements on the component.
- Filter options based on what was typed.

### React and Typescript
I wanted to practice React and Typescript and it looked like a good opportunity to do the **custom-select** with it.

### IBGE API
I utilized Axios to do the IBGE API requests for the brazilian states. 

### CSS
Default selects are very limited when it comes of customization and there were some things I wanted to customize visually, so I used the opportunity to round the borders, include some shadow, a custom scroll bar and switch the select arrow based on when the options are shown or not.

## Improvements
Possible improvements to the project:
- Block interaction while doing the request to the IBGE API. 