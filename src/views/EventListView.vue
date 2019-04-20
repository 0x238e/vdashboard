<template>
  <div>
    <Header title="事件列表"></Header>
    <section class="section">
      <event-card :event="event1"></event-card>
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
  }
}
</script>
