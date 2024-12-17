import Component from "@ember/component";
import { action } from "@ember/object";

interface ITaskProps{
  task: ITaskDTO
  deleteTask: (id: string) => void
  changeTaskStatus: (id: string) => void
}

export default class Task  extends Component<ITaskProps>{
}
