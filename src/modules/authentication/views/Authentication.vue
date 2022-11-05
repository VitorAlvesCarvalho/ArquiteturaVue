<template>
  <div>
    <p>{{ textAuthentication }}</p>
    <p>{{ textCommon }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";

const AuthenticationModule = namespace("AuthenticationStoreModule");
const CommonModule = namespace("CommonStoreModule");

@Component
export default class Authentication extends Vue {
  @AuthenticationModule.Getter("textAuthentication")
  readonly textAuthentication!: string;

  @AuthenticationModule.Action("getPokemon")
  public getPokemon!: Function;

  @CommonModule.Getter("textCommon")
  readonly textCommon!: string;

  async created() {
    await this.getPokemon("ditto");
  }
}
</script>

<style lang="scss" scoped></style>
