<template>
  <div class="hello">
    <button @click="KeyCloakService.CallLogOut">LogOut</button>

    <div>Token: {{ KeyCloakService.instance.token }}</div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import KeyCloakService from "@/security/KeycloakService";

export default defineComponent({
  name: "KeycloakDemo",
  data() {
    return {
      KeyCloakService: KeyCloakService,
    };
  },
});
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
button {
  width: 150px;
  height: 70px;
  font-size: larger;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
