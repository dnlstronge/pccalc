=======UPDATE 28/02/2023========

[x] - create logic for determining pension credit. The function branches into two sections which apply logic depending on a state boolean for wether the claim 
is for a couple or not. The function takes two other parameters from state which are the applicable amount (based on the claimants circumstances) & qualifying income.

[x] - basic structure of template & inputs completed
[x] - handlers and reducer added
[x] - i've hooked most of this up and currently have the state values in a panel I've added which displays the state so I can see how the reducer is working
      everything seems to be getting dispatched propertly and by viewing the RT results I ruled out a few edge cases/combos I hadn't initially thought of. 
 
 TODO: 
 
[ ] - Needs a bit of styling as it looks like a spreadsheets nightmare, everything is modular so what serves one component may serve another:)

[ ] - App is small enough and I don't envisage drilling more than 1 parent to child as to whether is context is needed. 

[ ] - get useEffect hooked up with the function paramters as deps, may need to call within useEffect, will work on this


logic: 

I was quite pleased with the logic I wrote for PC, in the same function it can return 0 for both GPC and SC, a value for GPC and 0, a combination of the two or savings credit only, I might tinker further in terms of implementing this but the logic is sound :  

    /*===========Penion Credit Logic & calculation==============*/
 const thresholdSingle = 158.47
 const thresholdCouple = 251.70
 const maxSC1 = 14.48 
 const maxSC2 = 16.20

 /* Args to be passed as state below*/

 const stateOBJ = {
     applicableAmount: "0",
     income: "0",
     stateCouple: false
   }


 /* Branch the function into two routes, single couple - apply the same logic with different thresholds 
 maybe use helper function? */

 const calcPensionCredit = (applicableAmount, income, stateCOUPLE) => {

     let a = applicableAmount
     let b = income
     let c = stateCOUPLE
     let GPC = 0
     let SC = 0
     let maxSC = 0

     // SINGLE:
     if (!c) {
         // finds GPC
         if(a - b > 0) { GPC = a - b}

         // finds SC
         if((b - thresholdSingle) * 0.6 < maxSC1) 
          { maxSC = ((b - thresholdSingle) * 0.6)
          } else {
            maxSC = maxSC1
            if(maxSC > 0) {
              SC = maxSC - ( (b - a) * 0.4 )
              if(SC <= 0) {
                SC = 0
              }
              if(SC > maxSC1) {
                SC = maxSC1
              }
            } 
          }    
     } 

     // COUPLE: 

       if (c) {
         // finds GPC
         if(a - b > 0) { GPC = a - b}

         // finds SC
         if((b - thresholdCouple) * 0.6 < maxSC2) 
          { maxSC = ((b - thresholdCouple) * 0.6)
          } else {
            maxSC = maxSC2
            if(maxSC > 0) {
              SC = maxSC - ( (b - a) * 0.4 )
              if(SC <= 0) {
                SC = 0
              }
              if(SC > maxSC2) {
                SC = maxSC2
              }
            }
          }    
     } 

     console.log(`GPC: ${GPC.toFixed(2)} SC: ${SC.toFixed(2)}`)
     return GPC.toFixed(2), SC.toFixed(2)

     //update date local state in return statement via reducer or usestate
 }




 // test: calcPensionCredit(182.60, 200, false) (clear - functions on basis of truthy) (expected OP  = GPC: 0.00 SC: 7.52)
 // test: calcPensionCredit(182.60, 147, false) (clear - functions on basis of truthy) (expected OP  = GPC: 35.60 SC: 0.00)
 // test: calcPensionCredit(182.60, 280, false) (clear - functions on basis of truthy) (expected OP  = GPC: 0.00 SC: 0.00)

 // test: calcPensionCredit(278.70, 280, true) (clear - functions on basis of truthy) (expected OP  = GPC: 0.00 SC: 15.68)
 // test: calcPensionCredit(278.70, 237.50, true) (clear - functions on basis of truthy) (expected OP  = GPC: 41.20 SC: 0.00)
 // test: calcPensionCredit(417.50, 410, true) (clear - functions on basis of truthy) (expected OP  = GPC: 7.50 SC: 16.20)
















# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
