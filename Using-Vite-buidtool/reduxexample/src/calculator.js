import {add,arrayfun,storeObjects} from "./react";
export function add(a, b) {
    return a + b;
  }

  export function arrayfun()
  {
    const course =['Java', 'SpringBoot', 'React'];
    expect(course).toContain('React');
  }

  export function storeObjects()
  {
  const user = {
    name: 'Abc',
    age: 25,
  };
}