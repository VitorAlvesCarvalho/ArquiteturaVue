<template>
  <div>
    <p>{{ textHome }}</p>
    <p>{{ textCommon }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { HomeApi } from "@/modules/home/service";

const HomeModule = namespace("HomeStoreModule");
const CommonModule = namespace("CommonStoreModule");
const ApiHome = new HomeApi();

@Component
export default class Home extends Vue {
  @HomeModule.Getter("textHome")
  readonly textHome!: string;

  @CommonModule.Getter("textCommon")
  readonly textCommon!: string;

  async created() {
    try {
      await ApiHome.getAllPokemon(100);
    } catch {
      console.log("error");
    }
  }
}
</script>

<style lang="scss" scoped></style>
