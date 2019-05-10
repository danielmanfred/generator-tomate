'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the wonderful ${chalk.red('generator-tomate')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname
      },
      {
        type: 'confirm',
        name: 'cool',
        message: 'Would you like to enable cool feature?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      this.name = props.name
      this.cool = props.cool
    });
  }

  paths() {
    this.sourceRoot()
    this.destinationRoot()
    this.destinationPath('index.js')
  }

  writing() {
    this.fs.copy(
      this.templatePath('index.js'),
      this.destinationPath('index.js')
    );
  }

  install() {
    this.installDependencies();
  }

  tomateMethod() {
    this.log('This is a tomate method')
  }

  _private_method() {
    this.log('Here is a private method')
  }
};
