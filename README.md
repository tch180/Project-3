# Project-3
NetFlix of Chefs 

Imagine if you always had a chef on call, to cook for you you when ever you wanted. 
birthdays
partys
Small - Medium size catering 


V2
would including geolocation 
a total cost page, with detailed info of what was ordered
an expected arrival time for the chef. 
as little as an hour notice. 







issues-
trying to change a controlled component 
understanding react syntax and routing

Controlled Input Null Value
Specifying the value prop on a controlled component prevents the user from changing the input unless you desire so. If you’ve specified a value but the input is still editable, you may have accidentally set value to undefined or null.
The following code demonstrates this. (The input is locked at first but becomes editable after a short delay.)
ReactDOM.render(<input value="hi" />, mountNode);

setTimeout(function() {
  ReactDOM.render(<input value={null} />, mountNode);
}, 1000);
Alternatives to Controlled Components
It can sometimes be tedious to use controlled components, because you need to write an event handler for every way your data can change and pipe all of the input state through a React component. This can become particularly annoying when you are converting a preexisting codebase to React, or integrating a React application with a non-React library. In these situations, you might want to check out uncontrolled components, an alternative technique for implementing input forms.



########https://reactjs.org/docs/forms.html#############
########http://materializecss.com/grid.html#############
########https://www.lucidchart.com#####################






Github
https://github.com/tch180/Project-3

Trello
https://trello.com/b/d96hsoQo/project-3

Wireframe and ERD 
https://www.lucidchart.com/documents/view/5878d831-6434-4c66-98b1-df50bec8b7f2.  (ERD)

https://www.lucidchart.com/documents/view/ef9a0084-8f64-4885-aa2f-9cec4aeadd9e (wireframe)

Heroku 
https://second-chefs.herokuapp.com/


### cited
w3schools
reactjs.org



// edit page is not my own, was provided by jamye to try and work through issue. 