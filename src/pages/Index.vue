<template>
  <q-page class="row items-center justify-evenly">
    <search-component></search-component>
  </q-page>
</template>

<script lang="ts">
import SearchComponent from 'components/SearchComponent.vue'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: { SearchComponent }
})
export default class PageIndex extends Vue {

}
</script>
<style lang="sass">
.q-page
  min-height: auto !important
</style>
