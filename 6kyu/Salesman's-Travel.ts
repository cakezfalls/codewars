// A traveling salesman has to visit clients. He got each client's address e.g. "432 Main Long Road St. Louisville OH 43071" as a list.

// The basic zipcode format usually consists of two capital letters followed by a white space and five digits. The list of clients to visit was given as a string of all addresses, each separated from the others by a comma, e.g. :

// "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432".

// To ease his travel he wants to group the list by zipcode.

// Task
// The function travel will take two parameters r (addresses' list of all clients' as a string) and zipcode and returns a string in the following format:

// zipcode:street and town,street and town,.../house number,house number,...

// The street numbers must be in the same order as the streets where they belong.

// If a given zipcode doesn't exist in the list of clients' addresses return "zipcode:/"

//My Solution:

export const travel = (r:string, zipcode:string): string => {
    if (!zipcode) return ":/";

  const addresses = r.split(",");
  const streets: string[] = [];
  const houseNumbers: string[] = [];

  for (const addr of addresses) {
    if (addr.endsWith(zipcode)) {
      const parts = addr.trim().split(" ");
      const houseNumber = parts[0];
      const streetAndTown = parts.slice(1, parts.length - 2).join(" ");
      streets.push(streetAndTown);
      houseNumbers.push(houseNumber);
    }
  }

  if (streets.length === 0) {
    return `${zipcode}:/`;
  }

  return `${zipcode}:${streets.join(",")}/${houseNumbers.join(",")}`;
}