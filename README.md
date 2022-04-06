## Lab1 CLI

## Run app

```
$ git clone -b lab1 https://github.com/patiskun/node_lab1.git
```

```
$ cd node_lab1
```

```
$ npm i
```

### Usage example:

CLI tool accept 4 options (short alias and full name):

1.  -a, --action: An action 1st/2nd function
2.  -i, --input: an input file
3.  -o, --output: an output file


Run 1st function with input and output files:

```
$ npm start1
```

Run 2nd function with input and output files:

```
$ npm start2
```

Run 1st function with stdin to stdout:

```
$ node index.js -a 1
```

Run 2nd function with stdin to stdout:

```
$ node index.js -a 2
```

For 1st function you have to pass two strings with string delimiter `:`<br/>
example: `eecoff:coffee` `java:vaja` `node:oden`

For 2st function you have to pass array of integers<br/>
example: `[1,2,2,3]` `[1,2,3,4,5]` `[2,3,1,3,5]`
