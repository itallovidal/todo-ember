import Controller from "@ember/controller"
import { inject as service } from "@ember/service"
import type Store from "ember-data/store"
import {z} from 'zod'

const taskSchema = z.object({
    task: z.string(),
    description: z.string(),
    category: z.enum(['lazer', 'casa', 'hobby', 'estudo', 'trabalho']),
    creationDate: z.coerce.date(),
    limitDate: z.coerce.date()
})


export default class Create extends Controller{
    @service store!: Store 

    addTask(newTask: unknown){
        console.log('no controller!')
        console.log(newTask)

        const result = taskSchema.safeParse(newTask)

        if(!result.success) alert(JSON.stringify(result.error))

        const {data} = result 

        console.log(this.store)

        this.store.createRecord('task', {})
        console.log('sucesso!')
    }
}