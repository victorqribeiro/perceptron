# Perceptron

The simplest [Perceptron](https://en.wikipedia.org/wiki/Perceptron) you'll ever see.

## How to use

Let's suppose you have the following data set:

0 - adult
1 - child

height (cm), weight (kg), class (0-1)
180, 80, 0
175, 67, 0
100, 30, 1
120, 32, 1

You need to process the table to this format:

```
const x = [
	[180, 80],
	[175, 67],
	[100, 30],
	[120, 32]
];

const y = [0,0,1,1];
```

Then just create a new Perceptron passing the size of the data, the learning rate and the number of iterations

```
const p = new Perceptrion( x.length );
```

Call the fit function

```
p.fit();
```

And you're all set to make predictions

```
p.predict([178, 70])
```

Super simple.
