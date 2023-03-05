# Quote Service - Technical Challenge

The goal of this challenge is to create a basic SpringBoot REST API that calls [DummyJson](https://dummyjson.com/) for a random quote the App will display.

**_Bonus points for also writing a unit test._**

# Guidelines

Get started by cloning this repo and creating the new Service in the `service/` directory.

Remember:

- You must share your screen.

- Use the editor and tools you are comfortable with.

- Please ask questions if you are stuck. We are here to help.

- If you panic and forget something, show us your Google-fu.

# Overview

This diagram provides a high level overview:

![diagram.png](images/diagram.png)

1. App calls the Service at `GET` http://localhost:8080/quotes/random

2. Service calls DummyJson at `GET` https://dummyjson.com/quotes/random

3. Service returns the response to the App.

To make things easier there is a common model with three properties. For example:

DummyJson response:

```java
{
    id: 1,
    author: 'Teddy Roosevelt',
    quote: 'Do what you can, where you are, with what you have.'
}
```

App interface for Service response:

```typescript
interface Quote {
  id: number;
  author: string;
  quote: string;
}
```

The App is already written and you can use it to demo your work. On launch a call to `GET` http://localhost:8080/quotes/random will occur every ten seconds. A message and console log will be displayed on error.

Example of app working:

![images/output_working.png](images/output_working.png)

Example of app error:

![images/output_error.png](images/output_error.png)

# App

### Stack

- Node 16 LTS
- Angular 14

### Launching

`cd app` : Ensure you're in the right place.

`npm i` : Install packages

`npm run start` : Launch at http://localhost:4200

# Additional Questions

# Technical Challenge

Please review the rules and choose to answer any one of the three problems below. 

## Rules

1. Use Java to build and execute solution. 

     - If you are more comfortable with another language please let us know.
     
1. Use the editor you are comfortable with.

     - We want to see how you work daily.
     
1. Communicate your ideas as you go.

     - We want to know your thought process. 
     
1. Search engines are allowed.

     - Being able to search effectively is a valued skill. 

1. You must share your screen at all times.

Additionally:

- You will have 30 minutes to review the problem, implement a solution, and review results. 

     - Another 10 minutes may be granted if you are close to finishing at the 30 minute mark. 

- Timer starts after you choose the problem you want to solve.

## Problems

### #1 Sum Checker

Write and consume a method that checks an array of numbers to determine if there is at least one pair of numbers whose sum equals the target.

Example
```java
public static void main(){
    final int[] input = { 1, 2, 3, 4 };
    final int target = 5;
    
    // This is true because the pair (1,4) sums to five.
    final Boolean matches = matchingPair(input, target); 
}

public static Boolean matchingPair(int[] input, int target) {
    ...
}
```

### #2 Fizz Buzz

Write a program that prints the numbers from 1 to 100 to the console. If the number is divisible by 3 print `Fizz`. If the number is divisible by 5 print `Buzz`. If the number is divisible by 3 and 5 print `FizzBuzz`. Otherwise print the number.

Sample Output
```java
1        // 1
2        // 2
Fizz     // 3 is divisible by itself
4        // 4
Buzz     // 5 is divisible by itself
Fizz     // 6 is divisible by 3
7        // 7
8        // 8
Fizz     // 9 is divisible by 3
Buzz     // 10 is divisible by 5
11       // 11
Fizz     // 12 is divisible by 3
13       // 13
14       // 14
FizzBuzz // 15 is divisible by 3 and 5
...      // everything else
98       // 98
Fizz     // 99
Buzz     // 100
```

### #3 Remove Duplicate Characters

Write and consume a method that accepts any string and returns it with no duplicate characters. Both the input and output should be written to the console.

Example
```java
public static void main(){
    final String input = "aabbccdd";
    final String output = removeDuplicates(input);

    System.out.println("Input: " + input);   // input is aabbccdd
    System.out.println("Output: " + output); // output is abcd
}

public static String removeDuplicates(String input) {
    ...
}
```

## Points of Discussion

- SOAP vs REST

- Where do you define properties in Spring Boot application?

- Spring Externalized Configuration

- What are Spring Profiles?

- What are actuator endpoints?

- What is spring filter?

- What is JPA? Connection pooling?

- Circuitbreaker concepts

- Batch processing

