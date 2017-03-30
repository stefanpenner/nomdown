# nomdown

Adds `nomnoml` as a highlight language type to marked, and defaults to highlight.js for the rest.

[read more about nomnoml](http://www.nomnoml.com/)

## Usage 
`npm install nomdown`
`yarn add nomdown`


```js
const nomdown = require('nomdown');

nomdown(string, (err, content) => {
   if (err) { throw err; }
   
   content // => markdown and 
})
```

## Example:


Lets you have `nomnoml` code sections like:

```nomnoml
#direction: down
#.box: fill=#8f8 dashed
[<box> GreenBox]


[Project Start] -> [A Start];

[A Start] added -> [A.1]
[A.1] -> [A2 Start]
[A2 Start] -> [A.2.1]
[A2 Start] -> [A.2.2]

[A.2.2] -> [A.2.3]
[A.2.3] -> [A.2 Finish]

[A.2.1] -> [A.2 Finish]
[A.2.1] omg -> [<box> B]
[A.2 Finish] -> [A Finish]
[A Finish] -> [Project Finish]
[<box> B] -> [Project Finish]
```

And have them nicely formated (in svg) as:

