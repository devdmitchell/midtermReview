Midterms coming! utilize these problems to reinforce your abilities!

# Problem 1: categoryByAge
Write a function, categoryByAge, that takes a person's age as input and returns a category name based on the following criteria:

┌──────────┬──────────────────────────────┐
│ Age      │ Category                     │
├──────────┼──────────────────────────────┤
│ under 13 │ 'Child'                      │
│ 13 to 17 │ 'Teenager'                   │
│ 18 to 64 │ 'Adult'                      │
│ 65+      │ 'Senior'                     │
└──────────┴──────────────────────────────┘
Examples:

categoryByAge(8)  => 'Child'
categoryByAge(25) => 'Adult'
categoryByAge(70) => 'Senior'


# Problem 2: evenIndexedValues
Write a function, evenIndexedValues, that takes an array of numbers and returns an array of values at even indices (0, 2, 4, etc.).

Examples:
evenIndexedValues([1, 2, 3, 4, 5, 6]) => [1, 3, 5]
evenIndexedValues([10, 20, 30, 40])   => [10, 30]
evenIndexedValues([0, -2, -4, -6])    => [0, -4]

# Problem 3: countEvenNumbers
Write a function, countEvenNumbers, that takes in an array of numbers and returns the total count of even numbers in the array.

Examples:
countEvenNumbers([1, 2, 3, 4, 5])  => 2
countEvenNumbers([10, 15, 20, 25]) => 2
countEvenNumbers([])               => 0

# Problem 4: stringWithShortestLength
Write a function, stringWithShortestLength, that takes in an array of strings and returns the shortest string from the array.

Examples:
stringWithShortestLength(['apple', 'banana', 'kiwi']) => 'kiwi'
stringWithShortestLength(['hello', 'world'])          => 'hello'
stringWithShortestLength([])                          => null

# Problem 5: lastVowelIndex
Write a function, lastVowelIndex, that returns the index of the last vowel (a, e, i, o, u) in a given string. If no vowels are found, return -1.

Examples:
lastVowelIndex('hello')       => 4
lastVowelIndex('rhythm')      => -1
lastVowelIndex('programming') => 8

# Problem 6: findRank
Write a function, findRank, that takes in a sorted array of test scores (highest to lowest) and a new score. The function should return a string indicating the ranking the new score would get in the sorted list.

Examples:
findRank([100, 90, 80], 95)  => '2nd place'
findRank([85, 70, 60], 75)   => '2nd place'
findRank([50, 40, 30], 25)   => '4th place'

# Problem 7: mergeProperties
Write a function, mergeProperties, that takes an object and merges new key-value pairs from another object into it. If the same key exists in both objects, the value from the second object should overwrite the first.

Examples:
const person = { name: 'Alex', age: 30 };
mergeProperties(person, { age: 31, city: 'New York' }) => 
    person becomes 
{ name: 'Alex', age: 31, city: 'New York' }

# Stretch Problem: removeDuplicates
Write a function, removeDuplicates, that takes an array of numbers and returns a new array with all duplicates removed, keeping only the first occurrence of each number.

Examples:
removeDuplicates([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]
removeDuplicates([10, 20, 10, 30])      => [10, 20, 30]