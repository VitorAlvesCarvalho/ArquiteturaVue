import { Module, VuexModule } from "vuex-module-decorators";

@Module({
  namespaced: true,
})
export class HomeStoreModule extends VuexModule {
  public get textHome(): string {
    return "Home Store";
  }
}
