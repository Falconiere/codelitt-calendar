# Getting Started with Codelitt Calendar

This projects is a exercise from [Codelitt](https://www.codelitt.com/). The project was bootstrapped with [Create React App](https://create-react-app.dev/). 

The project is a simple calendar that allows the user to create reminders for a specific day and time. The user can also edit and delete the reminders. No library was used to create the calendar component, the ui and logic was mostly built from scratch. 
## Quick overview
<video
  controls
  src="./assets/quick-demo.mp4"
  type="video/mp4" />
## How to run the project locally
To run the project you need to have [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/) installed on your machine. After that, you can run the following commands:


### `yarn install`

To run the project in development mode.

### `yarn start`

To run the project in development mode.

## How to run the tests

To run the tests you need to run the following command:

### `yarn coverage`

## About the folder structure

I tried to use a folder structure that is easy to understand and to navigate. The main folders are:
- `src`: The main folder of the project.
- `src/assets`: The folder that contains all the assets of the project. Ex: images, fonts, icons, etc.
- `src/components`: The folder that contains all the components of the project that are globally shared.
- `src/constants`: The folder that contains all the constants of the project that are shared between components.
- `src/domains`: The folder that contains all the files related to specific domain. Ex: Calendar, EditReminder, etc.
- `src/hooks`: The folder that contains all the custom hooks of the project that are not related to a specific domain.
- `src/providers`: The folder that contains all the providers of the project.
- `src/router`: The folder that contains all the files related to the router of the project.
- `src/screens`: The folder that contains all the screens of the project.
- `src/store`: The folder that contains all the files related to the global state of the project.
- `src/utils`: The folder that contains all the utils that are not related to a specific domain.

it's important to mention that the `src/domains` folder is organized in a way that each domain has its own folder and inside of it there are the following folders:
- `components`: The folder that contains all the components of the domain.
- `containers`: The folder that contains all the containers of the domain.
- `hooks`: The folder that contains all the hooks of the domain.
- `utils`: The folder that contains all the utils of the domain.

With the domain folder structure, it's easy to understand what is related to each domain and to navigate between the files. It's easy to find the components, containers, hooks and utils, making the code more maintainable.


## About the libraries
Only a few libraries were used in the project. The main libraries are:
- [React](https://reactjs.org/): The main library of the project.
- [React Router](https://reactrouter.com/): The library used to handle the routes of the project.
- [Tailwind CSS](https://tailwindcss.com/): The library used to style the project.
- [React hook form](https://react-hook-form.com/): The library used to handle the forms of the project.
- [Date-fns](https://date-fns.org/): The library used to handle the dates of the project, ex: format
- [zustand](https://docs.pmnd.rs/zustand/getting-started/introduction): The library used to handle the global state of the project.
- [use-mask-input](https://github.com/eduardoborges/use-mask-input): The library used to handle the mask of the inputs.

## CTA
I had a lot of fun building this project. I tried to use the best practices and to follow the SOLID principles. I also tried to use the best patterns to make the code more maintainable. I also tried to use the best libraries to make the project more performatic.I hope you enjoy the project. If you have any question, please let me know. I will be happy to answer it.

