<template>
  <b-collapse class="card" :open="!event.status">
    <div
      slot="trigger" 
      slot-scope="props"
      class="card-header"
      role="button">
      <p class="card-header-title">
        <b-icon
          :icon="eventStatusIcon"
          :style="{ color: eventStatusIconColor }"></b-icon>
        &nbsp;
        <b-tag :type='event.type.level'>{{ event.type.name }}</b-tag>
        &nbsp;
        <router-link :to="{ name: 'eventDetail', params: { eventId: event.id }}">#{{ event.id }}</router-link>
      </p>
      <a class="card-header-icon">
        <b-icon
          :icon="props.open ? 'menu-down' : 'menu-up'">
        </b-icon>
      </a>
    </div>
    <div class="card-content" @click="goToDetail">
      <div class="content">
        
      </div>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item" style="color: red;">拒绝</a>
      <a class="card-footer-item" style="color: green;">同意</a>
      <router-link :to="{ name: 'eventDetail', params: { eventId: event.id }}" class="card-footer-item">
        <b-icon icon="dots-horizontal"></b-icon>
      </router-link>
    </footer>
  </b-collapse>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    event: Object,
  },
  computed: {
    eventStatusIcon() {
      if (this.event.status === 'accept') {
        return 'check';
      }
      if (this.event.status === 'reject') {
        return 'close';
      }
      return 'checkbox-blank-outline';
    },
    eventStatusIconColor() {
      if (this.event.status === 'accept') {
        return 'green';
      }
      if (this.event.status === 'reject') {
        return 'red';
      }
      return '';
    },
  },
  methods: {
    goToDetail() {
      this.$router.push({ name: 'eventDetail', params: { eventId: this.event.id }});
    }
  }
}
</script>

<style scoped>
.card-content {
  cursor: pointer;
}
</style>
