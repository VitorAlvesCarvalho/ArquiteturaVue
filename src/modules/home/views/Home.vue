<template>
  <div>
    <p>{{ textHome }}</p>
    <p>{{ textCommon }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";

const HomeModule = namespace("HomeStoreModule");
const CommonModule = namespace("CommonStoreModule");

@Component
export default class Home extends Vue {
  @HomeModule.Getter("textHome")
  readonly textHome!: string;

  @CommonModule.Getter("textCommon")
  readonly textCommon!: string;
}
</script>

<style lang="scss" scoped></style>
