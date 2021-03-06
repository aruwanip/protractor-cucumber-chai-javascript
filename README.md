# protractor-cucumber-chai-javascript
Automated UI Testing with Cucumber, Protractor, and Chai
Code has been modified from https://github.com/mlev/protractor-cucumber-example

This creates some basic cucumber tests for the Super Calculator application used in the official Protractor tutorial - http://juliemr.github.io/protractor-demo/

## Getting Started

### Clone Repository

```
git clone https://github.com/aruwanip/protractor-cucumber-chai-javascript.git
cd protractor-cucumber-chai-javascript
```

### Install Dependencies

```
npm install
```

### First time running

The first time you try running the webdriver, you must run this command. After the first time, you can skip this step.

```
npm prestart-webdriver
```

### Start Webdriver Manager (in one terminal window)

```
npm run start-webdriver
```


### Run Protractor (in another terminal window)

```
npm run protractor
```

## Troubleshooting

Possible causes of the project failing to build/run may be due to your Chrome version. This project requires version 80.
