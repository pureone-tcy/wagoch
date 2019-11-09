<template>
    <div class="home">
        <v-app-bar fixed>
            <v-toolbar-title><h3>wagoch</h3></v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>
        <br><br><br><br>
        <h3>Reservation function coming soon</h3>
        <br>
        <p>calendar</p>
        <v-card>
            <v-sheet height="500">
            <v-calendar
            title-position="center"
            type="month"
            :now="now"
            :events="events">
            </v-calendar>
            </v-sheet>
            <br>
            <amplify-sign-out></amplify-sign-out>
            <br>
      </v-card>
    </div>
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    now: new Date().toISOString().substr(0, 10),
    events: []
  })
}
</script>
