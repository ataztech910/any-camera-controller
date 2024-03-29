<template>
  <div class="searchComponent">
    <div class="searchLayout" v-if="checkIfObjectIsNotEmpty()">
      <div class="searchLayout__input" v-bind:class="{ noBackground: isActive }">
        <div class="searchLayout__input__logo"><img src="camera.png" alt=""></div>
        <input type="text"  v-model="searchValue" placeholder="введите название города" @input="inputHandler" />
      </div>
      <div class="searchLayout__result" v-if="getResultArrayLength > 0">
        <div v-for="result in resultCameraArray" v-bind:key="result.cityName">
          <div class="searchLayout__result__cityName">{{result.cityName}}</div>
          <div v-for="adresses in result.adressList" v-bind:key="adresses.addressName">
            <div class="searchLayout__result__addressName" v-on:click="selectAddress(adresses)">{{adresses.addressName}}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!checkIfObjectIsNotEmpty()">
      <div class="selected">
        <div class="selected__head">
          <div><a href="/"><img src="camera.png" alt="Logo"></a></div>
          <div>{{selectedAddress.addressName}}</div>
          <div class="selected__head__cancel" v-on:click="clearSelection()"><img src="cancel.svg" alt=""></div>
        </div>
        <div class="selected__content">
          <div v-for="cameras in selectedAddress.cameraList" v-bind:key="cameras.uuid">
            <div class="selected__content__camera">
              <div class="selected__content__camera__unit" :id="cameras.uuid" v-append="generateScript(cameras.uuid, cameras.description)" @appended="executeEval"></div>
              {{cameras.description}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import axios from 'axios'

const VueAppend = require('vue-append')
Vue.use(VueAppend)

@Component
export default class SearchComponent extends Vue {
  dataFileUrl = '/cameras_data.json';
  arrayOfCameraPoints: any = [];
  searchValue = '';
  resultCameraArray: any = [];
  selectedAddress: any = {};
  isActive = false;
  html = '<p>test</p>';
  playerLicence = 'PLAY2-jPNR8-J8WTA-Eabzm-4Cj6E-u7CPZ';

  inputHandler (event: any) {
    this.resultCameraArray = this.findInCityList(event.target.value?.trim());
  }

  findInCityList(value: any) {
    return value.toLowerCase() && value.length > 2 ? this.arrayOfCameraPoints.cityList.filter((point: any) => point.cityName.toLowerCase().includes(value.toLowerCase()) ) : [];
  }

  generateScript(uuid: string, description: string) {
    return `<script type="text/javascript">
              WowzaPlayer.create('${uuid}',
              { "license":"${this.playerLicence}",
              "title":"${description}",
              "description":"_",
              "sourceURL":"https://mfc-video.site/live/${uuid}/playlist.m3u8",
              "autoPlay":false,
              "volume":"75",
              "mute":false,
              "loop":false,
              "audioOnly":false,
              "uiShowQuickRewind":true,
              "uiQuickRewindSeconds":"30" } );
            <\/script>`;
  }
  executeEval() {
    setTimeout(() => {
      // console.log(window['WowzaPlayer']);
    },0);
  }

  get getResultArrayLength() {
    console.log('resultCameraArray', this.resultCameraArray.length);
    if (this.resultCameraArray.length) {
      this.removeBackground(true);
    } else {
      this.removeBackground(false);
    }
    return this.resultCameraArray.length;
  }
  removeBackground(state: any) {
    this.isActive = state;
  }

  clearSelection() {
    const windowCopy: any = window;
    this.selectedAddress.cameraList.forEach((camera: any) => {
        const dumpPlayer = windowCopy['WowzaPlayer'].get(`${camera.uuid}`);
        if (dumpPlayer != null) {
          dumpPlayer.destroy();
        }
    });
    this.selectedAddress = {};
  }

  checkIfObjectIsNotEmpty() {
    return Object.keys(this.selectedAddress).length === 0 && this.selectedAddress.constructor === Object;
  }

  selectAddress(cameraList: any) {
    this.selectedAddress = cameraList;
  }

  updateArrayOfCameras(data: any) {
    this.arrayOfCameraPoints = JSON.parse(JSON.stringify(data));
  }

  mounted () {
    axios
      .get(this.dataFileUrl , {
        headers: {'Access-Control-Allow-Origin': '*',}
      })
      .then(response => {
        this.updateArrayOfCameras(response.data)
      });
  }
}
</script>

<style lang="sass">
.noBackground
  background: none !important
.searchComponent
  width: $fullWidth
  .selected
    &__head
      display: flex
      align-items: center
      padding: $defaultHalfMargin
      background: $searchBarBackground
      font-size: $cityName
      font-weight: bold
      color: $primary_text
      box-shadow: 0px 2px 14px -2px rgba(0,0,0,0.15)
      margin-bottom: $defaultMargin
      justify-content: space-between
      a
        display: block
        max-height: 3rem
      img
        width: $logoSize
      &__cancel
        border-radius: 50%
        overflow: hidden
        width: $logoSize
        height: $logoSize
        background: $primary_text
        cursor: pointer
        box-shadow: 0px 2px 14px -2px rgba(0,0,0,0.15)
        transition: 0.5s
        &:hover
          opacity: 0.7
    &__content
      margin: 0 auto
      width: calc(#{$fullWidth} - #{$decreaseForContent})
      padding: $defaultMargin
      display: grid
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))
      grid-gap: 1rem
      &__camera
        border-radius: $defaultMargin
        background: $searchBarBackground
        padding: $defaultMargin
        grid-template-columns: repeat(4, 1fr)
        grid-template-rows: repeat(2, 300px)
        &__unit
          height: 174px

  .searchLayout
    margin: $defaultMargin
    position: relative
    &__input
      padding: $defaultHalfMargin $defaultMargin
      width: $fullWidth
      border: none
      border-radius: $defaultTwiceMargin
      outline: none
      box-shadow: 0px 2px 14px -2px rgba(0,0,0,0.15)
      position: relative
      z-index: 10
      display: flex
      background: $searchBarBackground
      input, img
        display: block
      input
        width: $fullWidth
        border: none
        outline: none
        margin-left: $defaultMargin
      img
        width: $logoSize
        height: $logoSize
        margin: 0 auto
      &__logo
        width: $logoSize
        height: $logoSize
    &__result
      background: $searchBarBackground
      border: 1px solid #E0E0E0
      position: absolute
      width: $fullWidth
      padding: $defaultMargin
      top: 0
      z-index: 0
      border-radius: $defaultTwiceMargin
      padding-top: 5rem
      &__cityName
        font-size: $cityName
      &__addressName
        padding: $defaultHalfMargin
        transition: 0.3s
        cursor: pointer
        &:hover
          background: $secondary
          color: $searchBarBackground
</style>
