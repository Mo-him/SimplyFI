
const tickets = [
    ['Paris', 'Skopje'],
    ['Zurich', 'Amsterdam'],
    ['Prague', 'Zurich'],
    ['Barcelona', 'Berlin'],
    ['Kiev', 'Prague'],
    ['Skopje', 'Paris'],
    ['Amsterdam', 'Barcelona'],
    ['Berlin', 'Kiev'],
    ['Berlin', 'Amsterdam'],
  ];
  
  function Route(tickets, start) {
    
    const route = [start];
    const visited = new Set([start]);
  
    while (route.length < tickets.length + 1) {

      const city = route[route.length - 1];
      const next = tickets.find(([from]) => from === city);
  
      if (!next || visited.has(next[1])) {
        break;
      }
  
      route.push(next[1]);
      visited.add(next[1]);
    }
  
    return route;
  }
  
  const startCity = 'Kiev';
  const route = Route(tickets, startCity);
  
  console.log('Route:', route.join(' -> '));
  