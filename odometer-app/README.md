# Lab 37 - React 1

## Created an Odometer web page using ReactJS.

### Challenge

- Display an odometer with 4 digits
  - Pad with zeroes as needed (e.g. 0045)
    - JavaScript has a method for this. Research as needed.
- Add buttons to increment/decrement the ones place, the tens, the hundeds place and the thousands place.
  - Roll over when odometer value exceeds 9999
  - Odometer should remain at zero when decrementing below zero.
- The root `App` component should contain `Odometer`,  `Header` and `Footer` class based components.
  - `Header` component should receive a `greeting` value via props.
  - `Footer` component should receive a `trademark` value via props.
  - `Odometer` component should store numeric value in it’s state.
    - Remember to update state in the React way.

### Components
- App - root component
- Header
- Footer
- Odometer

### Implementation Notes
- npx create-react-app odometer

### Configuration(how we start )
```
cd 
pwd 
mkdir odometer
cd odometer
poetry init -n
git init
git add .
git commit -m "first commit"
create a new repo and do two steps
git checkout -b ...
npx create-react-app (name of the app)
cd ..
npm start 
code .
```

### Estimated time to finish the lab: 2 hours 
### Actual time needed to finish the lab:1.5 hours 
### Start time: 2:00 PM 
### Finish time:3:30 PM

