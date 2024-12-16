import Model, { attr } from "@ember-data/model"

export default class Task extends Model{
    @attr('string') task!: string 
    @attr('string') description!: string
    @attr('string') category!: string
    @attr('date') creationDate!: Date
    @attr('date') limitDate!: Date
}