abstract class TaskManager {
    abstract addTask(task: string): void;
    abstract listTasks(): string[];
}

interface Task {
    id: string;
    description: string;
    type: 'project' | 'daily';
    createdAt: Date;
}

class Project extends TaskManager {
    private tasks: Map<string, Task> = new Map();
    private projectName: string;

    constructor(projectName: string) {
        super();
        this.projectName = projectName;
    }

    addTask(task: string): void {
        const taskId = `${this.projectName}-${task.toLowerCase().replace(/\s+/g, '-')}`;
        
        if (this.tasks.has(taskId)) {
            console.log(`Tarefa "${task}" já existe no projeto ${this.projectName}`);
            return;
        }

        const newTask: Task = {
            id: taskId,
            description: task,
            type: 'project',
            createdAt: new Date()
        };

        this.tasks.set(taskId, newTask);
    }

    listTasks(): string[] {
        return Array.from(this.tasks.values()).map(task => 
            `[PROJETO ${this.projectName}] ${task.description}`
        );
    }
}

class DailyTasks extends TaskManager {
    private tasks: Map<string, Task> = new Map();

    addTask(task: string): void {
        const taskId = `daily-${task.toLowerCase().replace(/\s+/g, '-')}`;
        
        if (this.tasks.has(taskId)) {
            console.log(`Tarefa diária "${task}" já existe`);
            return;
        }

        const newTask: Task = {
            id: taskId,
            description: task,
            type: 'daily',
            createdAt: new Date()
        };

        this.tasks.set(taskId, newTask);
    }

    listTasks(): string[] {
        return Array.from(this.tasks.values()).map(task => 
            `[DIÁRIA] ${task.description}`
        );
    }
}


const projeto = new Project("Website");
projeto.addTask("Criar layout");
projeto.addTask("Implementar backend");
projeto.addTask("Criar layout"); 

const tarefasDiarias = new DailyTasks();
tarefasDiarias.addTask("Reunião diária");
tarefasDiarias.addTask("Revisar código");
tarefasDiarias.addTask("Reunião diária"); 

console.log("Tarefas do Projeto:", projeto.listTasks());
console.log("Tarefas Diárias:", tarefasDiarias.listTasks());