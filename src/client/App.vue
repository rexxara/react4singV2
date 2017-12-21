<template>
  <div>
    <router-view class='view'></router-view>
  <mu-paper style="max-width: 1334px;">
    <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
      <mu-bottom-nav-item value="movies" title="Movies" icon="ondemand_video"/>
      <mu-bottom-nav-item value="music" title="Music" icon="music_note"/>
      <mu-bottom-nav-item value="books" title="Books" icon="books"/>
      <mu-bottom-nav-item value="pictures" title="Pictures" icon="photo"/>
    </mu-bottom-nav>
  </mu-paper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'movies',
      bottomNavColor: 'movies'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
      console.log(val)
      if(val==='movies'){
        this.$router.push('/')
      }
      if(val==='music'){
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
overflow: hidden;
}
.view{
  width: 1334px;
  height: 611px;
}
</style>