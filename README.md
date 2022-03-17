# portfolio

> I create the nav and headline in my portfolio project, using HTML, CSS(flexbox), Linters.

Additional description about the project and its features.

## Built With

- HTML and CSS(flexbox)
- Technologies: Git and GitHub

## Getting Started
**This is an example of how you may give instructions on setting up your project locally.**
**Modify this file to match your project, remove sections that don't apply. For example: delete the testing section if the currect project doesn't require testing.**
To get a local copy up and running follow these simple example steps.

### Prerequisites
* VS Code - A studio code editor.
* Node Package Manage: For installing and managing packages used in the project.
* Linters setup
* GitHub - For storing our codes and managing the git repo.

### Setup
* Create a Repo 
  * Go to github and create a repo
  * Copy the ssh code to clone
* Open the Commandline
  * Navigate To the right directory
  * Run ```Git Clone git@github.com:idungstanley/portfolio.git```
  * Run ```code .``` to open your VScode Editor
* Create the Github\workflows Folder
  * Create a Linters.yml file and configure

### Install

* install the first linter Webhint
  * Run ```npm install --save-dev hint@6.x```

* install Stylelint linter
  * Run ```npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x```

* install ESLint linter
  * Run ```npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x```

### Run tests

* run Webhint linter
    * Run ```npx hint```. on the root of your directory of your project.

* Run Stylelint linter
  * Run ```npx stylelint "**/*.{css,scss}"``` on the root of your directory of your project.

* Run ESLint linter
  * Run ```npx eslint```. on the root of your directory of your project.

## Authors
👤 **Author1**
- GitHub: [@githubhandle](https://github.com/idungstanley)
- Twitter: [@twitterhandle](https://twitter.com/IdungStanley)
- LinkedIn: [LinkedIn](https://linkedin.com/in/sundaystanley56)

## 📝 License
This project is [test](./test.md) licensed.