import { Module, VuexModule } from "vuex-module-decorators";

@Module({
  namespaced: true,
})
export class CommonStoreModule extends VuexModule {
  public get textCommon(): string {
    return "Common Store";
  }
}
