const colors = require('colors')
const {inquirerMenu, inquirerInput} = require('./helpers/inquirer')
const TaskRepository = require('./repositorio/task.repositorio')


const main = async () => {
    console.log('Hola Mundo'.magenta)

    const taskRepository = new TaskRepository()
    let option = ''

    

    do {
        option = await inquirerMenu()

        switch (option) {
            case 1:
                //TODO: hacer que el usuario pueda ingresar el titulo de la tarea
                console.log('El usuario ingreso la opcion crear tareas'.yellow)
    
                const description = await inquirerInput('Ingrese la descripcion de la tarea')
    
                taskRepository.createTask(description)
    
                //console.log(`La descripcion es: ${description}`.green)
                break;
            case 2:
                //TODO: mostrar la lista de tareas de la base de datos
                const allTasks = taskRepository.getAllTasks()
                console.log(allTasks)
                break;
        
            default:
                break;
        }


    } while (option !== 'x');
    

    
}

main()