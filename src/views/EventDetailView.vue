<template>
  <div>
    <Header :title="`事件 - ${eventId}`"></Header>
    <section class="section">
      <event-card :event="event" forceOpen hideFooter></event-card>
    </section>
  </div>
</template>

<script>
import EventCard from '../components/EventCard.vue';
import Header from '../components/Header.vue';
export default {
  name: 'EventDetailView',
  components: {
    Header,
    EventCard,
  },
  computed: {
    eventId() {
      return this.$route.params.eventId;
    },
    event() {
      return this.$store.state.eventList.filter(i => i.id === this.eventId)[0];
    },
  },
}
</script>
