# GitHub Search

This project is simple React application which allows a user to search for a repository by name and lists the results. The application provides users with a link to the repository and also an option to quick view the repos details.

### Prerequisites

Please ensure you have the following installed;

```
Node.js v7.0.0 or higher
```
Available [here](https://nodejs.org/en/download/current/)

## Getting Started

To run the application locally, please follow the below commands.

From the command line and in a directory of your choosing;

````````
git clone https://github.com/Nick-Watson/GitHub-search.git GitHub-search

cd GitHub-search

npm install 

npm run dev

````````
Once the webpack has finsihed bundling go to [http://localhost:9090/](http://localhost:9090/) in your browser.

## Tests

The Redux reducer function was tested in order to ensure it was functioning correctly. This was done to ensure that any bugs that occur will be from a different source and speed up the development process. To view the tests please follow the instructions below.

From the GitHub-search directory in the command line;

```
npm test
```

## Built With

* [Webpack](https://webpack.js.org/) - Module Bundler
* [React](https://github.com/facebook/react) - User interface framework
* [Redux](https://github.com/reactjs/redux) - Application state manager
* [Axios](https://github.com/mzabriskie/axios) - HTTP client
* [Bootstrap](http://getbootstrap.com/) - CSS framework
* [Mocha](https://mochajs.org/) - Test framework
* [Chai](http://chaijs.com/) - Assertation library