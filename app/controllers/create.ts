import Controller from "@ember/controller"
import { inject as service } from "@ember/service"
import type Store from "ember-data/store"
import {z} from 'zod'
import {action} from "@ember/object";
import type Router from "to-do/router";

const taskSchema = z.object({
  task: z.string().min(3, { message: 'O nome da tarefa deve ter no mínimo 3 caracteres.' }),
  description: z.string().min(3, { message: 'A descrição deve ter no mínimo 3 caracteres.' }),
  category: z.enum(['lazer', 'casa', 'hobby', 'estudo', 'trabalho'], { message: 'Categoria inválida. Escolha uma das opções disponíveis.' }),
  limitDate: z.coerce.date()
    .refine((data) => data > new Date(), { message: 'A data limite deve ser futura.' })
});


export default class Create extends Controller{
    @service store!: Store
    @service router!: Router

    @action
    addTask(newTask: unknown){
        const result = taskSchema.safeParse(newTask)
        if(!result.success) {
          const errorMessage = result.error.issues[0]!.message
          alert(errorMessage)
          return
        }

        const {data} = result

        this.store.createRecord('task', {
          ...data
        })

        this.router.transitionTo('/')
    }
}
