import { Request, Response } from 'express';
import { TaskService } from '../../../domain/services/TaskService';
import { response } from '../../../utils/response';

const taskService = new TaskService();

export const getAllTasks = (req: Request, res: Response) => {
    const tasks = taskService.getAllTasks();
    console.table(tasks);
    response(res, {
        statusCode: 200,
        message: 'OK',
        data: tasks
    });
};

export const getTaskById = (req: Request, res: Response) => {
    const taskId = req.params.id;
    const task = taskService.getTaskById(taskId);
    console.table(task);
    if (!task) {
        response(res, { statusCode: 404, message: 'Task not found' });
    } else {
        response(res, { statusCode: 200, message: 'OK', data: task });
    }
};
