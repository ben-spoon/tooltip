tooltip
=======

Simple javascript tooltip

## To Use
* Reference the tooltip javascript in the ````<HEAD>```` tag
* Add the CSS to your style sheet or reference the tooltip.css in the ````<HEAD>```` tag
* Append the class ````tooltip```` to any HTML element. 
* The ````data-title```` attribute will be the text that pops up in the tooltip. 

### Example
``` 
	<a href="#" class="tooltip" data-title="Here is an example!">Hover over me!</a>
```
Will look something like:

![](https://raw.github.com/ben-spoon/tooltip/master/example.png)

### To Do
* Make **actual** jQuery plugin. Not a script that runs on the document...
* Make prototype - so you can create an instance of a plugin (like ```var tooltip = New Tooltip('.yourElement');```` or something
