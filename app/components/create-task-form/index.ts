import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

interface ICreateTaskProps{
  addTask: (t: unknown)=> void
}

export default class Index extends Component<ICreateTaskProps> {
  @tracked userInput = {} ;

  TASK_CATEGORIES = ['lazer', 'casa', 'hobby', 'estudo', 'trabalho'] as const

  @action 
  submitForm(event: SubmitEvent){
    event.preventDefault()
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    this.userInput = Object.fromEntries(formData.entries());
    console.log('form enviado!')
    this.args.addTask(this.userInput)
  }
}