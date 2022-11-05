import { Module, VuexModule, Action } from "vuex-module-decorators";
import { AuthenticationApi } from "@/modules/authentication/service";

const ApiAuthentication = new AuthenticationApi();

@Module({
  namespaced: true,
})
export class AuthenticationStoreModule extends VuexModule {
  public get textAuthentication(): string {
    return "Authentication Store";
  }

  @Action
  public async getPokemon(name: string) {
    try {
      return await ApiAuthentication.getPokemon(name);
    } catch {
      console.log("error");
    }
  }
}
