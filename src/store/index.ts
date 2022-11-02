import Vue from "vue";
import Vuex from "vuex";
import { HomeStoreModule } from "@/modules/home/store/module";
import { AuthenticationStoreModule } from "@/modules/authentication/store/module";
import { CommonStoreModule } from "@/modules/common/store/module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    HomeStoreModule,
    AuthenticationStoreModule,
    CommonStoreModule,
  },
});
