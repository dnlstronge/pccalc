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


