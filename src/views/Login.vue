<template>
    <div class="login">
        <v-app-bar fixed>
            <v-toolbar-title><h3>wagoch</h3></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text small @click="dialog = true">
                Log in
            </v-btn>
            <v-btn small color="primary" @click="dialog = true">
                 Sign Up
            </v-btn>
        </v-app-bar>

        <v-card class="mx-auto mt-5">
        <br>
        <v-parallax height="800" src="../assets/top-img-bg.jpg">
            <v-row align="center" justify="center">
                <v-col class="text-center" cols="12">
                    <h1 id="top-title" class="font-weight-thin mb-4">wagoch</h1>
                    <h4 id="top-message" class="subheading">Let's go for lunch!</h4>
                    <h4 id="top-message" class="subheading">いろんな人と、いろんな言葉で、いろんなランチを！
                    </h4>
                </v-col>
            </v-row>
        </v-parallax>

        <v-img id="logo" src="../assets/logo.png" placeholder></v-img>

        <v-parallax dark src="../assets/top-img-message-board.jpg">
            <v-row align="center" justify="center">
                <v-col class="text-center" cols="12">
                    <h1 id="message2" class="display-1 font-weight-thin mb-4">wagoch</h1>
                    <h3 id="message2" class="subheading">1.Schedule an event</h3>
                    <h3 id="message2" class="subheading">2.Match with someone</h3>
                    <h3 id="message2" class="subheading">3.Let's go for lunch together</h3>
                </v-col>
            </v-row>
        </v-parallax>
        <br>
        <v-btn color="primary" @click="dialog = true">
            Sign Up
        </v-btn>
        <br>
        <div></div>
        <br>
        <v-dialog v-model="dialog" scrollable max-width="40%">
          <amplify-authenticator></amplify-authenticator>
        </v-dialog>
    </v-card>
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      dialog: false
    }
  }
}
</script>

<style>
.v-card {
  width: 1000px;
}

#logo {
  width: 50%;
  margin: auto;
}

#top-title {
    font-size: 500%;
}

#top-message {
    font-size: 150%;
}

#message2 {
    color: black;
}
</style>
