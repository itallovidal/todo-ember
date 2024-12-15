import Component from "@glimmer/component";


interface IButton{
  variant: 'light' | 'dark' | 'unstyled';
}

export default class Index extends Component<IButton>{
}
