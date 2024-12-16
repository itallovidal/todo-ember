import Component from "@ember/component";

interface ISelectProps{
    options: string[]
}

export default class Index extends Component<ISelectProps>{
    
    get Options(){
        return this.options
    }
}