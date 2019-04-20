import Vue from 'vue';
import Router from 'vue-router';

import store from '../store';

import EventListView from '../views/EventListView.vue';
import EventDetailView from '../views/EventDetailView.vue';
import RecordView from '../views/RecordView.vue';
import MeView from '../views/MeView.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'eventList',
    component: EventListView,
    beforeEnter(from, to, next) {
      store.commit('updateTab', 'event');
      next();
    },
  },
  {
    path: '/event/:eventId',
    name: 'eventDetail',
    component: EventDetailView,
    beforeEnter(from, to, next) {
      store.commit('updateTab', 'event');
      next();
    },
  },
  {
    path: '/record',
    name: 'record',
    component: RecordView,
    beforeEnter(from, to, next) {
      store.commit('updateTab', 'record');
      next();
    },
  },
  {
    path: '/me',
    name: 'me',
    component: MeView,
    beforeEnter(from, to, next) {
      store.commit('updateTab', 'me');
      next();
    },
  },
];

export default new Router({
  routes,
});