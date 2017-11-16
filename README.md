## Functionality

React Native based Deck and Cards App from Scratch with Quiz, Scoring, Seeing Answers Support.

This mobile application is designed to allow  New Cards for Newly Created or Existing Decks. 
It also shows listing of all the Decks and you can start quiz by choosing any of the Decks.
The Correct and Incorrect buttons work to keep track of your score.
You also have the ability to go back to deck or directly restart same deck quiz once you see your score.

The Application persist data locally, so you have have all your decks and associated cards even after closing the app.

Also, if you don't run at least one quiz to completion in a given day, you will get local notification at 6:00 PM on your device to remind 
you for that day!


## Installation

Clone project and you will have a directory reactnd-mobile-flashcards:

cd reactnd-mobile-flashcards

nodenv local 8.4.0 ( This step is optional; project tested with node version 8.4.0; nodenv is at https://github.com/nodenv/nodenv)

yarn --version ( This step is optional; project tested with yarn version 1.1.0)
> 1.1.0

There is yarn.lock file included in the project.

yarn install

Expo app should be installed on your Device

yarn start 

Scan QR code from the Expo App on your Device

You should see screen saying 'No Decks Yet Created'. Uses Orange/Gray in general colors for styling. And Red/Green for Quiz Buttons.

## Device Used for Building and Testing Application

This application was built directly with the actual device using Expo App.

iPhone 5/ios 10.3.3 was used to build and test the application.

Tested with iPhone 5 only.

## Front End Additions

```
+-- src/
 |-- containers/ - This directory contains React Container Style components that do the data fetching/persisting and dispatch/state props
 set up for presentation/controlled form components. Each Screen has its own Container component - clearly stated by its name.
 So, for example ShowDeckContainer is used for Show Deck Screen for deck details.
 |-- presenters/ - This directory contains React Presentation Components to display/act on data at the UI level based on props
 received from container components. So, for example ShowDeck presentation display screen works from props from ShowDeckContainer.
 This directory also has AppRoutes based on React Navigation for Routing controls for each screen.
 |-- controlledForms/ - The directory is basically like presenters; only that they have form. Here we use local state for input text -
 react Controller style components. So, for example NewCard works with NewCreateCardsContainer props. 
 |-- reducers/ - Per redux design, updates Redux state.
 |-- actions/ - Per redux design, these actions are dispatched. These use async actions.
 |-- utils/ - Here the interesting file is api that integrates calls to AsyncStorage async actions.
```

Uses ES6/ES7 JS Style of code.
This uses Redux Store to save state for All Actions in General. 

## Copyright
Please notify if you are directly using code from here. Thanks.
Copyright © 2009-2017, Rohit Sachdeva