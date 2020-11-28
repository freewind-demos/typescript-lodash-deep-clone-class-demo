import cloneDeep from 'lodash/fp/cloneDeep';

class User {
  constructor(private name: string) {
  }

  withNewName(newName: string): User {
    this.name = newName;
    return this;
  }

  hello() {
    console.log(`Hello, ${this.name}!`)
  }
}

const user = new User('lodash');
const clone = cloneDeep(user);

user.hello();
user.withNewName('aaa').hello();

clone.hello()
clone.withNewName('bbb').hello();
