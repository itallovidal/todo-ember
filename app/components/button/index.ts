import Component from "@glimmer/component";


interface IButton{
  variant: 'light' | 'dark' | 'unstyled';
}

export class Index extends Component<IButton>{
}
