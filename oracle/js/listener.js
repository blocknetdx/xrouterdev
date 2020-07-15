let lastBlock = 0
let newQueries = []
setInterval(function() {
  contract.getPastEvents('allEvents', {fromBlock: lastBlock, toBlock: 'latest'},
    function(error, events){
      if(error){
        console.log(error)
      }
      if(events){
        console.log(events);
        if(events.length > 0){
            lastBlock = events[events.length - 1].blocknumber
            foreach(let e of events){
                if(e.event == "queried"){
                    newQueries.push(e)
                }
            }
        }
        //@TODO send gets newQueries
        newQueries = [];
      }
    }
  )
},10000)


