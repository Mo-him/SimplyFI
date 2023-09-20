
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
  
  function findRoute(tickets, start) {
    const route = [start];
    const visited = new Set([start]);
  
    while (route.length < tickets.length + 1) {
      const city = route[route.length - 1];
      const nextTicket = tickets.find(([from]) => from === city);
  
      if (!nextTicket || visited.has(nextTicket[1])) {
        break;
      }
  
      route.push(nextTicket[1]);
      visited.add(nextTicket[1]);
    }
  
    return route;
  }
  
  const startingCity = 'Kiev';
  const route = findRoute(tickets, startingCity);
  
  console.log('Route:', route.join(' -> '));
  