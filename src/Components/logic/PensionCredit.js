
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
             console.log(SC, GPC)
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
             console.log(SC, GPC)
           }
         }    
    } 
}
// test: calcPensionCredit(182.70, 200, false) (clear - functions on basis of truthy) 

