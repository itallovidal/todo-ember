import Component from "@ember/component";
import type Task from "to-do/models/task";

interface IListProps{
  list: Task[]
}

export default class List extends Component<IListProps>{
}
