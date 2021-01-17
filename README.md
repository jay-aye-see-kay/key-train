# Key Train

WIP, non-functional. The idea

## Idea: build a typing training web app

### why:
- it should be quick
- it should help be get a little quicker and doing stuff with my keyboard (not typing, all the other stuff)

### v1:
- it should take a range of characters and display them at random to me
- I should be able to enter that char and see feedback
- it should measure the time taken to enter the character
- characters should be displayed in 'rounds' and at the end of a round I should get a summary (or it should be available somewhere)
- data persisted in localstorage

### future improvements:
- enter pairs or triplicates of chars
- better summaries/graphs
- login + data history

### first thoughts on implementation:
- react because why not, practice using snippets
- typescript because obvs
- all state in one useReducer

## Misc

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). `npx create-react-app key-train --template typescript`
