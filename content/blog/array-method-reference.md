---
path: array-methods-reference
author: Andre Clark
featuredimage: /images/orbital-bw.jpg
date: 2021-07-12T06:15:19.345Z
title: Array Methods Reference
description: 
---


## `Array.prototype.forEach()`

- called on the array
- takes a function as an argument
- simpler way to iterate over an array
- often uses arrow functions `() => {...}`
- Callbacks
  - callback is a function/method as an argument for another function
  - code within the callback is used for each iteration
  - for each iteration, `forEach` sends the value of the current element to the callback
- Second Argument
  - index position of the element in the array
  - optional
  
### `forEach()` Example

  ```js
  [1, 2, 3].forEach((number, idx) => {
    console.log(`${idx}: ${number}`);
  });
  ```

- Strings
  - use `split()` to process every character in a string with `forEach()`

  ```js
  'abcd'.split('').forEach(char => {
    console.log(char);
  });
  ```

- Objects
  - to use with `forEach` convert to array with `Object.keys`, `Object.values` and `Object.entries`

  - values
  
  ```js
  let produceValues = Object.values(produce);

  produceValues.forEach(value => {
    console.log(value);
  });
  ```

  - keys

  ```js
  let produceKeys = Object.keys(produce);
  produceKeys.forEach(key => {
    console.log(key);
  });
  ```

  - Entries / Key value pairs

  ```js
  let produceKeys = Object.keys(produce);
  produceKeys.forEach(key => {
    console.log(key);
  });
  ```

### Array Destructuring Assignment

- assign elements of the array to multiple variables
  - wrap the variable names in brackets

  ```js
  let [key, value] = keyValue`
  ```

## `Array.prototype.filter()`

- for selecting or filter elements
- `filter()` examines the return value of the callback on each Iteration.
- determines the **truthiness** of the return value
  - selects element if return value of the callback is **truthy**
  - does not select the element if return value is **falsy**
- `filter()` returns new array containing selected elements
- callback must return an explicit value or else it will return an empty array
- use `forEach` for filtering objects

### `filter()` Example

  ```js
  [1, 2, 3].filter(num => num % 2 === 1); // => [ 1, 3 ]

  oddNumbers; // => [1, 3]
  ```

### Filtering objects with `forEach`

```js
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let produceKeyValues = Object.entries(produce);
let onlyVegetables = {};

produceKeyValues.forEach(keyValue => {
  let [ key, value ] = keyValue;
  if (value === 'Vegetable') {
    onlyVegetables[key] = value;
  }
});

onlyVegetables; // => {carrot: 'Vegetable', broccoli: 'Vegetable'}
```

## `Array.prototype.map()`

- considers the return value of the callback
- performs transformation using return value of the callback
- places transformed value into new array
- avoid `[undefined,...]` by always giving callback an explicit return value

### `map()` Example

```js
[1, 2, 3].map(num => num * 2);
```

## `filter()` && `map()` with Strings

- `split()` array first
- perform selection and/or transformation
- then `join()`
- strings can be considered arrays theoretically

```js
let str = "What's up, Doc?";
str.split('')
   .filter(char => 'aeiou'.includes(char.toLowerCase()))
   .join('');
// => 'auo'
```

```js
let str = "What's up, Doc?";
str.split('')
   .filter(char => 'aeiou'.includes(char.toLowerCase()))
   .join('');
// => 'auo'
```

## `Array.prototype.some()`

- tests whether at least one element in the array passes the test
- the test is provided by the callback function from the first argument
- `some()` does not modify the orginal array
- `some()` returns boolean
  - `true` if callback returns a **truthy** value for at least one element
  - Otherwise `false`  
- To use with objects use **`Object.keys` && `Object.values`**

### `some()` Example

```js
> [1, 2, 3].some(num => num > 2)
true

> [1, 2, 3].some(num => num > 3)
false
```

### `some()` for objects

```js
let animals = { a: 'ant', b: 'bear', c: 'cat' };
Object.values(animals).some(animalName => animalName.length > 4);
// => false

Object.values(animals).some(animalName => animalName.length > 3);
// => true
```

## `Array.prototype.every()`

- returns true if the callback's return value in every iteration is truthy

### `every()` example

```js
> [1, 2, 3].every(num => num > 2)
false

> [3, 4, 5].every(num => num > 2)
true
```

### `every()` for objects

```js
let animals = { a: 'ant', b: 'bear', c: 'cat' };
Object.values(animals).every(animalName => animalName.length > 2);
//  => true
```

## `Array.prototype.find()`

- takes a callback function as argument
- returns first element which the callback returns a truthy value
- returns `undefined` if no elements return true

```js
> [2, 1, 4, 3, 5].find(num => num > 2)
4
```

## `Array.prototype.findIndex()`

- similar to `find()`
- returns index of truthy elements
- returns `-1` if no matches are found

```js
> [2, 1, 4, 3, 5].findIndex(num => num < 1)
-1
```

## `Array.prototype.reverse()`

- reverses the elements of the array
- mutates the original array
- to prevent mutation: create shallow copy with `slice()` first

```js
> [1, 2, 5, 7, 3].reverse()
[ 3, 7, 5, 2, 1 ]
```

## `Array.prototype.includes()`

- searches for element strictly equal to the argument
- doesn't work for finding objects
- can use it to determine existence of specific key in objects
- `Object.prototype.hasOWnProperty()` another method to check if a key exists

```js
> [2, 1, 3].includes(1)
true

> [2, 1, 3].includes(5)
false
```

## `Array.prototype.fill()`

- changes all elements to a static value
- from a strart index
  - default: `0`
- to an end index
  - default: `array.length`
- returns modified array
- is a mutator method
- If start is negative, it is treated as `array.length + start`.
- If end is negative, it is treated as `array.length + end`.
- If the first parameter is an object, each slot in the array will reference that object

### Syntax

```js
fill(value)
fill(value, start)
fill(value, start, end)

```

|  Method     | Action              | Considers return value of callback? | Returns new array from the method? | Length of returned array   |
| ----------- | ------------------- | ----------------------------------- | ---------------------------------- | -------------------------- |
| **forEach** | Iteration           | No                                  | No, returns undefined              | N/A                        |
| **filter**  | Selection/Filtering | Yes, truthiness                     | Yes                                | Length of original or less |
| **map**     | Transformation      | Yes                                 | Yes                                | Length of original         |