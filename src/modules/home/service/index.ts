import { BaseApiConfig } from "@/service/api-config";

export class HomeApi extends BaseApiConfig {
  constructor() {
    super("https://pokeapi.co/api/v2/");
  }

  public getAllPokemon(limit = 50): Promise<any> {
    return this.get<any>("pokemon", {
      params: {
        limit,
      },
    });
  }
}
