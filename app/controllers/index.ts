import Controller from "@ember/controller";
import type Task from "to-do/models/task";
import {convertDate} from "to-do/utils/convert-date";
import {action} from "@ember/object";
import type Store from "ember-data/store";
import { service } from "@ember/service";
import {tracked} from "@glimmer/tracking";

export default class Index extends Controller {
  model!: Task[]
  @tracked listOverview!: ITaskDTO[]
  @service store!: Store

  get list(){
    const list = this.model.map(task => task.serialize()) as ITaskDTO[]

    this.listOverview = list.map(task => {
      const creationDate = convertDate(task.creationDate)
      const limitDate = convertDate(task.limitDate)

      return {
        ...task,
        creationDate,
        limitDate
      }
    })
    return this.listOverview
  }

  @action
  async deleteTask(taskId: string){
    const tasks = this.store.peekAll('task') as Task[]

    const taskToDelete = tasks.find(task => {
      const serializedTask = task.serialize() as ITaskDTO
      return serializedTask.taskId === taskId
    })

    if(taskToDelete)
      await taskToDelete.destroyRecord()
  }

  @action
  async changeTaskStatus(taskId: string){
    console.log('mudando status!')
    const tasks = this.store.peekAll('task') as Task[]

    const taskToChange = tasks.find(task => {
      const serializedTask = task.serialize() as ITaskDTO
      return serializedTask.taskId === taskId
    })

    if(taskToChange){
      taskToChange.set('isCompleted', !taskToChange.get('isCompleted'))
      this.listOverview = this.listOverview.map((task)=> {
        if (task.taskId === taskId){
          task.isCompleted = !task.isCompleted
        }

        return task
      })

      console.log(this.listOverview)
    }
  }
}
