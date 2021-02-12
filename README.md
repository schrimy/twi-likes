# Twi-Likes
 
## Contents
 
### [Overview](#overview)
### [Instructions](#instructions)
### [Resources](#resources)
 
## Overview
Twi-Likes is a reference tool that pulls in a specified Twitter user's liked tweets and displays them. Each displayed tweet incorporates any images
and links in the original body. The author's profile picture, name, and username is also displayed which is clickable in order to show their likes.
 
The tool uses the twitter developer api in order to search and pull in an object populated by the requested user's (currently 10) latest liked tweets.
Should the user not exist or an incorrect username be entered into the search form, a warning will be displayed on the page. Using AnimXYZ, a successful
search will animate in the supplied liked tweets. The search bar can also be collapsed to clean up the screen when browsing the tweets, which is enabled
using Bootstrap.
 
This tool also incorporates local storage, so if a user navigates away, or closes the page, they will have their last search saved when they come back.
However, if the user does not want this information saved to their computer an option is displayed to turn off this ability when they first use the tool.
 
As the tool uses Bootstrap, it is optimised for all major screen sizes.
 
## Instructions
* clone the files from the repo then install all dependencies with `yarn add`
* then navigate into the server folder in the terminal via `cd server` and run the server `node server`
* to open the project in dev mode run the mpn command `npm start` and the project will open up in the browser (localhost:3000)
* `npm build` will compile a production ready version of the project
 
## Resources
[Twitter Developer](https://developer.twitter.com/en) - portal for twitter's developer documentation and application.
 
[AnimXYZ](https://animxyz.com/) - framework for css based animations.
 
[Bootstrap](https://getbootstrap.com/) - component and css framework.
 
[geeksforgeeks - regex](https://www.geeksforgeeks.org/javascript-replace-multiple-strings-with-multiple-other-strings/) - running through a series of strings and matching a known url to one in the string, then removing it.
 
[stackoverflow - regex](https://stackoverflow.com/questions/4870769/removing-backslashes-from-strings-in-javascript) - small regex to remove backslashes added to a string from a previous regex.