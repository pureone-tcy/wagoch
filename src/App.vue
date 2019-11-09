<template>
  <div id="app">
    <v-app>
        <v-content>
          <router-view/>
        </v-content>
        <v-footer padless>
          <v-card>
            <v-card-text>
              &copy; {{ new Date().getFullYear() }} wagoch All Rights Reserved
            </v-card-text>
          </v-card>
        </v-footer>
    </v-app>
  </div>
</template>
<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.v-content {
  margin: 0px 0px 10px 0px;
}

.v-card {
  margin: auto;
}
.v-footer p {
  margin: auto;
  font-size: 14px;
}
</style>
