<template>
  <div>
    <Header title="实时事件推送"></Header>
    <section class="section">
      <event-card v-for="event in eventList" :key="event.id" :event="event"></event-card>
    </section>
  </div>
</template>

<script>
import EventCard from '../components/EventCard.vue';
import Header from '../components/Header.vue';

export default {
  name: 'EventView',
  components: {
    EventCard,
    Header,
  },
  data() {
    return {
      event1: {
        type: {
          name: '超车',
          level: 'is-danger',
        },
        id: 'asdasdasd',
        status: undefined,
      }
    };
  },
  props: {
    //
  },
  created() {
    if (this.$store.state.eventList.length === 0)
      this.$store.dispatch('fetchEventList');
  },
  computed: {
    eventList() {
      return this.$store.state.eventList;
    },
  },
}
</script>
