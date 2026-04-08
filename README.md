# memory-card

Visit the site at [https://memory-card-one-omega.vercel.app/](https://memory-card-one-omega.vercel.app/)

This project has been sent in as a submission for [Project: Memory Card](https://www.theodinproject.com/lessons/node-path-react-new-memory-card).

## Introduction

This is a memory game where you have to remember which cards you picked. There are 10 cards, and after you pick one, the cards will be shuffled. You have to pick all the cards without picking the same card twice: if you do, you lose.

## Implementation Details

There are 2 React components in this application: `App` and `Card`. `App` controls the entire logic of the application, and `Card` is a simple markup component with a few props. This app uses data from the [https://www.api-football.com/](football API), which has a limit of 100 API call requests per day for free users. A new visitor will need to call the API a total of six times: one for each country included in the game (Argentina, Germany, Italy, France, Spain, and England).Due to this, the maximum number of unique new visitors per day is 16. For returning visitors, league data will be stored in their browser's `localStorage`, so, unless they are using a different browser, their visiting the site will not require any new fetch calls from the API.

The game setup is as follows: a country will be chosen at random, and from the country's top football league, 10 teams will be chosen again at random.

<div align='center'>
    <img src = ./public/memorycard.png>
</div>

When a user opens the app, two things can happen, depending on whether league data is available in the `localStorage`.

### Case 1: League Data is not Available in *localStorage*

- On `App`'s mount, the application will fetch the league's data from the API, save it in the `localStorage` and update the state of a variable: a boolean which holds information about whether the data is ready.
- This will trigger a render. On this second render, the application will fetch the data from the `localStorage` and modify other state variables needed in the application.
- On the third render, everything is ready to load the application, the player will now see everything on the display and will be able to play the game.

### Case 2: League Data is Already Available in *localStorage*

This case is the same as the previous one, without the first step. The previous case's second step will become this case's first (mount), meaning that no API calls will be made this time. Only two renders are needed for the user to be able to start the game.
