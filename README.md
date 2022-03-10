![Lucy and Emmet](builders.jpg)
# Everything is Awesome

 The Builders, Lucy and Emmet are lego block enthusiasts. They maintain a webpage that keeps track of block details including block names, materials, colors, manufactured years, and example images. Recently they came into some extra cash and would like to update their app and fix a couple of bugs.

 Each of these items should be a branch that is merged into the main and then a new branch for the next item. Name your branches appropriately. 

##
 1. **Bug** Missing bio information. The headline `About the Builders` can be seen at the bottom of the page, however it is missing all the information. The Builder's provided this information to the previous developer and believe it is there somewhere, although they cannot see it. 
 1. **Bug** The `About the Builders` should display on the right side of the screen next to the list of blocks. 
 1. **New** Emmet's favorite color is now red, change the functionality of the `Show Blue Legos` button to show red Legos. Be sure to update your HTML to reflect this change.
1. **New** Lucy would like to display her favorite color of blocks too. Add a button that when clicked will display green Legos.
1. **New** Some bricks have notes. If a brick has notes, include them on the brick detail.
1. **New** Lucy and Emmet would like the brick color names to be all capital letters. Add a `helper function` and invoke it to capitalize the brick name.
 1. **Bug** The years manufactured are not displaying correct. If the value cannot be calculated based on the provided data, remove the years display. Otherwise, it should display a valid number of years in production.
1. **New** Dropdowns are all the rage. The Builders would like one added to the nav area with the functionality to show specific bricks by material.

**Brick Materials:**
Solid, Transparent, Pearl, Chrome, Metallic, Milky, Glitter, Speckle, Ink, Process, Modulex


##
### Stretch Goals
If we are able to complete the feature list within budgeted time, the Builders have a few more requests. (There are numerous ways each of these tasks could be completed.)

1. The Builders' would like a search box that will accept a `LegoId` and display only that Lego. What will you display if the `LegoId` is not valid? Being able to hit the enter key would be a nice touch too. ***Hint** Check out array methods: find, includes, or filter
1. Some bricks have incomplete information, specifically the color value or name. While the builders want to keep the data intact, these items should not be displayed in the visual list. ***Hint** Check out conditional statements or maybe array method filter.
1. The Builders' would like to add the option to sort the Legos by the manufactured year; oldest to newest and then back again. Unfortunately, some Legos in the dataset may not have a value. Where do they go? You decide. ***Hint** Check out array methods: sort


##
This exercise utilizes the following concepts:

* Debug Tool
* Functions
* Javascript Modules
* EventListeners
* Flexbox
* Array Methods: filter, find, includes, map, sort
* Conditional Statements
* Git and GitHub