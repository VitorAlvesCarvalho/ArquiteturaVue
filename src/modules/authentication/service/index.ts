import { BaseApiConfig } from "@/service/api-config";

export class AuthenticationApi extends BaseApiConfig {
  constructor() {
    super("https://pokeapi.co/api/v2/");
  }

  public getPokemon(name: string): Promise<any> {
    return this.get<any>(`pokemon/${name}`);
  }
}
