
interface ITaskDTO {
  creationDate: string
  limitDate: string
  task: string
  description: string,
  category: 'lazer'| 'casa'| 'hobby'| 'estudo'| 'trabalho',
  taskId: string
  isCompleted: boolean
}
