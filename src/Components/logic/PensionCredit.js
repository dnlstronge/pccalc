
/*===========Penion Credit Logic & calculation==============*/

const thresholdSingle = 158.47
const thresholdCouple = 251.70

/* Args to be passed as state below*/

const stateOBJ = {
    applicableAmount: "0",
    income: "0",
    stateCouple: false
  }

const CalcPensionCredit = (applicableAmount, income, stateCOUPLE) => {
  
  // determines GPC 
    let a = applicableAmount
    let b = income
    let c = stateCOUPLE
    let GPC = 0
    if ( a - b > 0) { GPC = a - b }
  // determine SC
    if ( b < 
  
    }
