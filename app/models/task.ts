import Model, { attr } from "@ember-data/model"
import { v4 as uuidv4 } from 'uuid';

export default class Task extends Model{
    @attr('string') task!: string
    @attr('string') description!: string
    @attr('string') category!: string
    @attr('date', {
      defaultValue() {
        return new Date()
      }
    }) creationDate!: string
    @attr('date') limitDate!: Date
    // @ts-ignore
    @attr('string', {
      defaultValue(): string {
        return uuidv4()
      }
    }) taskId!: string;
    @attr('boolean', {
      defaultValue: false,
    }) isCompleted!: boolean
}
