// This is only jest
import { add,arrayfun,storeObjects } from './calculator';
describe('Im testing all js functions only', () => {
    

test('adds two numbers', () => {
  expect(add(2, 3)).toBe(5);
});

test('array contains a value', () => {
    const course = ['Java', 'SpringBoot', 'React'];
    expect(course).toContain('React');
  });

});


describe('Im  js objects data only', () => {
    

    test('object matches expected structure', () => {
        const user = {
          name: 'Abc',
          age: 25,
        };
      
        expect(user).toEqual({ name: 'Abc', age: 25 });
      });
    
      test('object contains a specific property', () => {
        const user = {
          name: 'Xyz',
          age: 30,
          isAdmin: false,
        };
      
        expect(user).toMatchObject({ age: 30 });
      });
    });