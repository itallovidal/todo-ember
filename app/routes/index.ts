import Route from "@ember/routing/route";
import {service} from "@ember/service";
import type Store from "ember-data/store";
import type Task from "to-do/models/task";

export default class IndexRoute extends Route {
  @service store!: Store

  async model() {
    return this.store.peekAll("task")
  }
}
