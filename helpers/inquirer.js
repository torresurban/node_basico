const inquirer = require('inquirer');
require('colors');



const inquirerMenu = async () => {
    console.log('=============================')
    console.log('Seleccione una opcion'.white)
    console.log('=============================')

    const menu = [
        {
            type: 'list',
            name: 'opcion',
            message: 'Que quieres hacer?',
            choices: [
                {
                    value: 1,
                    name: `${'1-'.blue} Crear una tarea`
                },
                {
                    value: 2,
                    name: `${'2-'.blue} Listar las tareas`
                },
                {
                    value: 'x',
                    name: `${'0-'.blue} Salir`
                }
            ]
        }
    ]

    const {opcion} = await inquirer.prompt(menu)
    return opcion
}

const inquirerInput = async (message) => {
    const question = [
        {
            type:'input',
            name:'description',
            message
        }
    ]
    const {description} = await inquirer.prompt(question)
    return description
}

module.exports = {
    inquirerMenu,
    inquirerInput
}