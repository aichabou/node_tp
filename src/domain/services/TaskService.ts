import { Task } from "../entities/Task";
import { TasksRepository } from "../../infrastructure/repositories/taskRepository";
import { v4 as uuidv4 } from 'uuid';

export class TaskService {
    private tasksRepository: TasksRepository;

    constructor() {
        this.tasksRepository = new TasksRepository();
    }

    getTaskById(id: string): Task | undefined {
        return this.tasksRepository.getTaskById(id);
    }

    getAllTasks(): Task[] {
        return this.tasksRepository.getAllTasks();
    }

    addTask(task: Task) {
        const tasks = this.tasksRepository.getAllTasks();

        tasks.push({
            id: uuidv4(),
            ...task,
        });

        this.tasksRepository.saveTasks(tasks);
    }

    getTaskIdByTitle(title: string): string | undefined {
        return this.tasksRepository.getTaskIdByTitle(title);
    }
}
