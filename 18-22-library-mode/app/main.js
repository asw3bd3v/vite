import { pluckAndLog } from "@asw3bd3v/pluck";
import { log } from "@asw3bd3v/pluck/log";

const users = [
  {
    name: 'John',
    age: 26
  },
  {
    name: 'Jane',
    age: 32
  },
  {
    name: 'Johnny',
    age: 2
  },
];

pluckAndLog(users, 'name');