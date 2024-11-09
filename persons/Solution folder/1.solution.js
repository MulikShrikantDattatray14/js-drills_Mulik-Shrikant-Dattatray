
// 1.   Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.

function getEmailAddresses(people) {
  return people
    .filter(person => person.email) // Ensure person has an email field
    .map(person => person.email);
}

export default getEmailAddresses;