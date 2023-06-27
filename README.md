## Task manager frontend app 0.0.1

## React App - Task Manager

This is a frontend application built using React that provides a user-friendly interface for managing tasks. The app fulfills the following requirements:

## Login and Registration

- Upon visiting the site, users are automatically redirected to the registration or login page.
- User authentication is implemented using JSON Web Tokens (JWT) stored in the local storage.
- After successful registration or login, users are redirected to the task manager.

## Component Libraries

The app utilizes Material UI, Yup, and Formik libraries for building components, providing a sleek and intuitive user interface.

## Categories

- Once authenticated and redirected to the categories page, users can create categories for organizing their tasks.
- Clicking the "More" button allows users to view a list of tasks within a specific category.
- The "Actions" button provides options to delete a category, mark it as complete, or edit its name.
- Users can create a new category by clicking the "Add Category" button and providing a name. The timestamp is automatically recorded in the database.

## Tasks

- Clicking the "Add Task" button redirects users to the task creation page.
- Upon entering all the required fields (name being mandatory), users are redirected to the task list, where the updated list displays the newly created task at the top.
- Clicking the "Delete" button prompts users with a popup to confirm the deletion of a task or cancel the operation.
- Clicking the "Edit Task" button redirects users to the task editing page. After making the necessary changes, users are redirected back to the task list.

These requirements have been successfully implemented in the React app, providing users with a seamless experience for managing tasks and categories.


## P.S.
To run the project locally, please use the .env.example file. It contains the necessary environment variable data required for project execution.

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
