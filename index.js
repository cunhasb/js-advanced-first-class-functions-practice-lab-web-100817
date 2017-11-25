// Code your solution in this file!

function logDriverNames(drivers){
  return drivers.slice().forEach(function(element){
    console.log(element.name);
  })
}

function logDriversByHometown(drivers,hometown){
  return drivers.slice().forEach(function(el){
    if (el.hometown === hometown){
      console.log(el.name);
    }
  })
}

function driversByRevenue(drivers){
  return drivers.slice().sort(function(a,b){
    return (a.revenue - b.revenue);
  })
}

function driversByName(drivers){
  return drivers.slice().sort(function(a,b){
    return a.name.localeCompare(b.name);
  })
  }

  function totalRevenue(drivers){
    return drivers.slice().reduce(function(total,el){
      return total + el.revenue
    },0);
  }

  function averageRevenue(drivers){
    results =  drivers.slice().reduce(function(total,el,index){
      return (total + el.revenue);
    },0)
    return (results / drivers.length);
  }
