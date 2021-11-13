// function to filter events arrays by any arguments return an array of PAYLOADS
export function filterByArgument(arr: any[], type?: string) {
  return arr.map((el: any) => el.payload).map((el) => (type ? el[type] : el));
}

// function to filter events array by event type return an object
export function filterByEvent_types(events: any[], types: string[]) {
  var all: any = {};
  // event types
  for (let type of types) {
    var arr = events.filter((event) => event.event_type === type);
    all[type] = arr;
  }
  return all;
}

// function to filter events arrays by timestamp return an object
export function filterByTimestamp(events: any[], timestamps: string[]) {
  var all: any = {};
  for (let timestamp of timestamps) {
    var arr = events.filter((event) => event.timestamp === timestamp);
    all[timestamp] = arr;
  }
  return all;
}

// function to filter by creagiver id return an object
export function filterByCaregiver(events: any[], caregivers: string[]) {
  var all: any = {};
  for (let caregiver of caregivers) {
    var arr = events.filter((event) => event.caregiver_id === caregiver);
    all[caregiver] = arr;
  }
  return all;
}

// function to sort date objects
export function sortDateObject(datasObjects: any[]) {
  return (
    Object.keys(datasObjects)
      .sort((a: any, b: any) => new Date(a).getTime() - new Date(b).getTime())
      // eslint-disable-next-line no-sequences
      .reduce((acc: any, el: any) => ((acc[el] = datasObjects[el]), acc), {})
  );
}
