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
        message: 'Project name: ',
        default: 'my-project'
      }
    ]

    return this.prompt(prompts).then((props => {
      this.props = props
    }).bind(this))
  }

  writing() {
    const name = this.props.name

    this.fs.copyTpl(
      `${this.templatePath()}/**/!(_)`,
      this.destinationPath(`${name}`),
      this.props
    )

    this.fs.copy(
      this.templatePath('src/_element.controller.ts'),
      this.destinationPath(`${name}/src/${name}.controller.ts`), 
      this.props
    )

    this.fs.copy(
      this.templatePath('src/_element.module.ts'),
      this.destinationPath(`${name}/src/${name}.module.ts`), 
      this.props
    )

    this.fs.copy(
      this.templatePath('src/_element.service.ts'),
      this.destinationPath(`${name}/src/${name}.service.ts`), 
      this.props
    )
  }
  
  install() {
    this.installDependencies();
  }
};
