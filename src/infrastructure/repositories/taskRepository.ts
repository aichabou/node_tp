import fs from 'fs';
import path from "path";
import { Task } from "../../domain/entities/Task";

export class TasksRepository {
    private tasks: Task[] = [];

    private filePath = path.join(__dirname, '..', 'data', 'tasks.json');

    constructor() {
        this.tasks = this.loadTasks();
    }

    getTaskById(id: string): Task | undefined {
        return this.tasks.find(task => task.id === id);
    }

    getAllTasks(): Task[] {
        return this.tasks;
    }

    private loadTasks(): Task[] {
        const data = fs.readFileSync(this.filePath, 'utf-8');
        return JSON.parse(data);
    }

    saveTasks(tasks: Task[]): void {
        const data = JSON.stringify(tasks);

        fs.writeFileSync(this.filePath, data);
    }

    getTaskIdByTitle(title: string): string | undefined {
        const task = this.tasks.find(task => task.title === title);
        return task?.id;
    }
}
