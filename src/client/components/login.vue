
 /* eslint-disable */
<template>
<div>
  <mu-raised-button label="左边弹出" @click="open('left')"/>
  <mu-popup position="left" popupClass="demo-popup-left" :open="leftPopup" @close="close('left')">
            <form  action="http://localhost:6737/signin" method="post">
            <p>Name: <input v-model="name" name="name" value=""/></p>
          <p>Password: <input v-model="pw" name="password" type="password"/></p>
          <p><button @click="submitForm($event)">submit</button></p>
      </form>
  </mu-popup>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      bottomPopup: false,
      topPopup: false,
      leftPopup: false,
      rightPopup: false,
      name:'',
      pw:''
    }
  },
  methods: {
    open (position) {
      this[position + 'Popup'] = true
    },
    close (position) {
      this[position + 'Popup'] = false
    },
    submitForm(event){
      event.preventDefault()
      axios.post('/api/login', {
        params: {
          name: this.name,
          password:this.pw
        }
      })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    }
  },
  watch: {
    topPopup (val) {
      if (val) {
        setTimeout(() => {
          this.topPopup = false
        }, 2000)
      }
    }
  }
}
</script>

<style lang="css">
.demo-popup-top {
  width: 100%;
  opacity: .8;
  height: 48px;
  line-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 375px;
}

.demo-popup-left {
  display: flex;
  width: 85%;
  max-width: 375px;
  height: 100%;
  align-items: center;
  padding: 24px;
}

.demo-popup-right {
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 375px;
  align-items: center;
  padding: 24px;
}

.demo-popup-bottom {
  width: 100%;
  max-width: 375px;
}
</style>