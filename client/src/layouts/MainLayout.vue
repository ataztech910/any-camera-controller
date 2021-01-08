<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: { EssentialLink }
})
export default class MainLayout extends Vue {}
</script>
