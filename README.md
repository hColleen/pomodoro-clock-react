This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Pomodoro Clock
This is a rebuild of a pomodoro clock in React to help learn how to pass state through the application. JS/jQuery version [here](https://codepen.io/hColleen/full/dmeyVq). Live version of this one [here](https:hcolleen.github.io/pomodor-clock-react/).

## Getting Started
To use and/or develop this project on your own system:
### Pre requisites
1. Node/npm installed
2. React
3. Internet connection (the rest/alarm is an online YouTube video and Bootstrap is from CDN)
### Installing
1. Download files into the same folder
2. Using Terminal, navigate to the folder
3. Run `npm install`
4. Run `npm start`
5. Project should open in browser at `http://localhost:3000/`

### Deploying in GitHub Pages
1. Update `homepage` in `package.json`
2. In Terminal, run `npm install --save-dev gh-pages`
3. Add `"predeploy": "npm run build", "deploy": "gh-pages -d build"` to the `scripts` in `package.json`
4. In Terminal, run `npm run build`
5. In Terminal, run `npm run deploy`

## TODO
1. Replace video with `Rest` timer
2. Fix `popper.js` error when running with Bootstrap package