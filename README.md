# nomdown

Adds `nomnoml` as a highlight language type to marked, and defaults to highlight.js for the rest.

[read more about nomnoml](http://www.nomnoml.com/)

## Install 

Either via `npm` or `yarn`:
* `npm install nomdown`
* `yarn add nomdown`

## Usage

```js
const nomdown = require('nomdown');

nomdown(string, (err, content) => {
   if (err) { throw err; }
   
   content // => markdown and 
})
```

## Example:

Lets you have `nomnoml` code sections in markdown such as:

```nomnoml
#fill: #eeeeee; #ffffff
[<frame>Decorator pattern|
  [<abstract>Component||+ operation()]
  [Client] depends --> [Component]
  [Decorator|- next: Component]
  [Decorator] decorates -- [ConcreteComponent]
  [Component] <:- [Decorator]
  [Component] <:- [ConcreteComponent]
]
```

And have them nicely formated (in svg) as:

<img src="https://raw.githubusercontent.com/stefanpenner/nomdown/master/assets/example.png" height="370px" >
