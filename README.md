# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

**Assignment Requirement**

Create a Single Page Application with ReactJS, create-react-app, and ReactRouter. 

Your application should have a navigation bar with four links: Home, TODO, Contact and About.  Clicking on each link should bring up a “different page” of content (i.e. the body of the page should change, but the navigation bar should remain the same).  In the case of the Home, Contact and About pages, the content can be whatever you like so long as it is unique for each page (e.g. “this is the home page”).  The URL should change to reflect which “page” the user is viewing.  The navigation link in the navigation bar should highlight the currently selected page via a CSS change (either the colour of the link, or the background colour of the link, etc.). 

The TODO page should present the user with a “to do” list.  The to do list can either be a list (ordered or unordered) or a table format, or even some other format, so long as it is a vertical list of items.  The to do list should initially have a few items present that you have hardcoded into your solution (“walk the dog”, “pick up laundry”).  

Above the to do list you should have a form with an input text box and a submit button with the text “add”.  When the user enters a new item into the input text box and clicks on add, the new item should be inserted into the to do list, and the input text box should be set to blank.   

Each item in the to do list should have a delete link either to the left or the right of the item (maybe the text “D” or a delete icon, it’s up to you).  When the user clicks on the delete link, the item should be removed from the to do list. 

Each item in the to do list should have an edit link either to the left or the right of the item (maybe the text “E” or an edit icon, it’s up to you).  When the user clicks on the edit link, the item text should be put into the input text box and the form button text should become “edit”.  The user should be able to modify the text in the input text box and click on the “edit” button.  After clicking the “edit” button, the item in the list should be updated to reflect the modified text in the input text box, and the form should return to contain a blank input text box and an “add” button.  

 
