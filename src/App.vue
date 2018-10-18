<template>
  <div id="app">
    <Header/>,
    <LiveBoard/>,
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html {
  box-sizing: border-box;
  font-size: 16px;
 }

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol, ul {
  list-style: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 }

 .container{
   width: 100%;
   display: grid;
   grid-template-columns: 15% 70% 15%;
 }
 .container div{
   background: gray;
 }
</style>
