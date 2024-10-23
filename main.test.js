const assert = require('assert');
const {
        categoryByAge,
        evenIndexedValues,
        countEvenNumbers,
        stringWithShortestLength,
        lastVowelIndex,
        findRank,
        mergeProperties
} = require('./main.js')

  // Problem 1: categoryByAge
  describe('categoryByAge', () => {
    it('should return "Child" for ages under 13', () => {
      assert.strictEqual(categoryByAge(8), 'Child');
    });

    it('should return "Teenager" for ages 13 to 17', () => {
      assert.strictEqual(categoryByAge(15), 'Teenager');
    });

    it('should return "Adult" for ages 18 to 64', () => {
      assert.strictEqual(categoryByAge(25), 'Adult');
    });

    it('should return "Senior" for ages 65 and older', () => {
      assert.strictEqual(categoryByAge(70), 'Senior');
    });
  });

  // Problem 2: evenIndexedValues
  describe('evenIndexedValues', () => {
    it('should return values at even indices', () => {
      assert.deepStrictEqual(evenIndexedValues([1, 2, 3, 4, 5, 6]), [1, 3, 5]);
    });

    it('should return the correct values for a small array', () => {
      assert.deepStrictEqual(evenIndexedValues([10, 20, 30, 40]), [10, 30]);
    });

    it('should return an empty array for an empty input array', () => {
      assert.deepStrictEqual(evenIndexedValues([]), []);
    });
  });

  // Problem 3: countEvenNumbers
  describe('countEvenNumbers', () => {
    it('should count the number of even numbers in the array', () => {
      assert.strictEqual(countEvenNumbers([1, 2, 3, 4, 5]), 2);
    });

    it('should count correctly for an array of only even numbers', () => {
      assert.strictEqual(countEvenNumbers([10, 20, 30, 40]), 4);
    });

    it('should return 0 for an empty array', () => {
      assert.strictEqual(countEvenNumbers([]), 0);
    });
  });

  // Problem 4: stringWithShortestLength
  describe('stringWithShortestLength', () => {
    it('should return the shortest string in the array', () => {
      assert.strictEqual(stringWithShortestLength(['apple', 'banana', 'kiwi']), 'kiwi');
    });

    it('should handle arrays with two strings of the same length', () => {
      assert.strictEqual(stringWithShortestLength(['dog', 'cat']), 'dog');
    });

    it('should return null for an empty array', () => {
      assert.strictEqual(stringWithShortestLength([]), null);
    });
  });

  // Problem 5: lastVowelIndex
  describe('lastVowelIndex', () => {
    it('should return the index of the last vowel in the string', () => {
      assert.strictEqual(lastVowelIndex('hello'), 4);
    });

    it('should return -1 if no vowels are found', () => {
      assert.strictEqual(lastVowelIndex('rhythm'), -1);
    });

    it('should work for strings with vowels at the beginning', () => {
      assert.strictEqual(lastVowelIndex('umbrella'), 7);
    });
  });

  // Problem 6: findRank
  describe('findRank', () => {
    it('should return the correct rank for a new high score', () => {
      assert.strictEqual(findRank([100, 90, 80], 95), '2nd place');
    });

    it('should return the correct rank for a new low score', () => {
      assert.strictEqual(findRank([100, 90, 80], 75), '4th place');
    });

    it('should return 1st place for the highest score', () => {
      assert.strictEqual(findRank([100, 90, 80], 105), '1st place');
    });
  });

  // Problem 7: mergeProperties
  describe('mergeProperties', () => {
    it('should merge new properties into the object', () => {
      const person = { name: 'Alex', age: 30 };
      assert.deepStrictEqual(mergeProperties(person, { city: 'New York' }), { name: 'Alex', age: 30, city: 'New York' });
    });

    it('should overwrite existing properties with new values', () => {
      const person = { name: 'Alex', age: 30 };
      assert.deepStrictEqual(mergeProperties(person, { age: 31 }), { name: 'Alex', age: 31 });
    });

    it('should handle merging an empty object', () => {
      const person = { name: 'Alex' };
      assert.deepStrictEqual(mergeProperties(person, {}), { name: 'Alex' });
    });
  });


