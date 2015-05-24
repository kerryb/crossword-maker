# Crossword maker

_A web app to take the drudgery out of building crossword grids._

Normally I start by drawing the grid out by hand on an index card, which can be a bit tedious.
I wanted to have a go at building a simple web app without using any fancy frameworks, and this
seemed like a good candidate.

The app is entirely client-side and static (no frameworks; no build process; no coffeescript,
jade or sass: just plain old html, javascript and css). I did use jquery and underscore though
&ndash; there are limits!

Oh, and there aren't any tests either, which isn't so good (let's call it a spike for now).

## Current features

* Preset starter grids
* Automatic symmetry when blocking/unblocking cells
* Display of percentage blocked
* Auto-numbering of clues

## Planned (or at least imagined) features

* Display of word length distribution
* Save to local storage
* Warnings for rule violations (two-letter words, too many unchecked letters etc)
* Fill in answers
* Fill in clues
* Export to [Across](http://icrossword.com/publish/create.html) format
