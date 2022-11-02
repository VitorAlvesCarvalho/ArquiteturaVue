import { Module, VuexModule } from "vuex-module-decorators";

@Module({
  namespaced: true,
})
export class AuthenticationStoreModule extends VuexModule {
  public get textAuthentication(): string {
    return "Authentication Store";
  }
}
