


var invoice = {
      "customer": "BigCo",
      "performances": [
        {
          "playID": "hamlet",
          "audience": 55
        },
        {
          "playID": "as-like",
          "audience": 35
        },
        {
          "playID": "othello",
          "audience": 40
        }
      ]
    }


var player = { 
    "hamlet": {
        "name": "Hamlet", 
        "type": "tragedy"
           },
    "as-like": {
        "name": "As You Like It",
         "type": "comedy"
        },
    "othello": {
        "name": "Othello", 
        "type": "tragedy"
    }
}



function statement(invoice,plays){
    let totalAmount = 0
    let volumeCredits = 0
    let resutl = `Statement for ${invoice.customer}\n`
    const format = new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format;
    for(let perf of invoice.performances){
        const play = plays[perf.playID]
        let thisAmount = 0
        switch(play.type){
            case "tragedy":
                thisAmount = 40000
                if(perf.audience > 30){
                    thisAmount += 1000 * (perf.audience - 30)
                }
                break
            case "comedy":
                thisAmount = 30000
                if(perf.audience > 20){
                    thisAmount += 10000 + 500 * (perf.audience - 20)
                }
                thisAmount += 300 * perf.audience
                break
            default:
                throw new Error(`unkown type ${play.type}`)

        }
        volumeCredits += Math.max(perf.audience - 30 , 0)
        if ("comedy" == plays.type) volumeCredits += Math.floor(perf.audience / 5) 
        resutl += `${play.name}:${format(thisAmount/100)} (${perf.audience} seats)\n`
        totalAmount += thisAmount
    }
    resutl += `Amount owed is ${format(totalAmount/100)}\n`
    resutl += `You earned ${volumeCredits} credits`
    return resutl
}

const result = statement(invoice,player)
console.log(result)
