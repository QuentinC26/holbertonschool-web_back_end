export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

const student1 = {'first_name': 'Guillaume', 'last_name': 'Salva', 'year': 2020, 'location': 'San Francisco'}
const student2 = {'first_name': 'John', 'last_name': 'Doe', 'year': 2020, 'location': 'San Francisco'}
const student3 = {'first_name': 'Albert', 'last_name': 'Clinton', 'year': 2019, 'location': 'San Francisco'}
const student4 = {'first_name': 'Donald', 'last_name': 'Bush', 'year': 2019, 'location': 'San Francisco'}
const student5 = {'first_name': 'Jason', 'last_name': 'Sandler', 'year': 2019, 'location': 'San Francisco'}

export class StudentHolberton {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this.holbertonClass;
  }

  get fullStudentDescription() {
    return `${self._firstName} ${self._lastName} - ${self._holbertonClass.year} - ${self._holbertonClass.location}`;
  }
}


export const listOfStudents = [student1, student2, student3, student4, student5];
