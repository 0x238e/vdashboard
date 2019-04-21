<template>
  <div>
    <Header title="数据记录"></Header>
    <div class="container">
      <v-chart :options="chartop"></v-chart>
    </div>
    <section class="section">
        <b-table
            :data="data"
            ref="table"
            paginated
            per-page="20"
            :opened-detailed="defaultOpenedDetails"
            detailed
            detail-key="id"
            :show-detail-icon="showDetailIcon"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page">

            <template slot-scope="props">
                <b-table-column field="id" label="ID" width="40" numeric>
                    {{ props.row.id }}
                </b-table-column>

                <b-table-column field="location.x" label="location_x" sortable>
                  {{ props.row.location.x }}
                </b-table-column>

                <b-table-column field="location.y" label="location_y" sortable>
                    {{ props.row.location.y }}
                </b-table-column>

                <b-table-column field="date" label="Date" sortable centered>
                    <span class="tag is-success">
                        {{ new Date(props.row.time).toString() }}
                    </span>
                </b-table-column>
            </template>

            <template slot="detail" slot-scope="props">
                <article class="media">
                    <figure class="media-left">
                      <b-icon icon="bullseye"></b-icon>
                    </figure>
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <strong>{{ props.row.id }}</strong>
                                <small>@{{ props.row.location }}</small>
                                <br>
                                {{ new Date(props.row.time).toString() }}
                            </p>
                        </div>
                    </div>
                </article>
            </template>
        </b-table>
    </section>
  </div>
</template>

<script>
import { graphic } from 'echarts/lib/export';
import Header from '../components/Header.vue';
export default {
  name: 'RecordView',
  components: {
    Header,
  },
  props: {
    //
  },
  data() {
    return {
      defaultOpenedDetails: [1],
      showDetailIcon: true,
    }
  },
  computed: {
    data() {
      const evl = this.$store.state.eventList.map((i) => {
        return {
          id: i.id,
          location: {
            x: i.data.gps[0],
            y: i.data.gps[1],
          },
          time: i.expire,
        };
      });
      return evl;
    },
    chartdata() {
      return this.$store.state.eventList.map((i) => {
        const d = i.data.gps;
        d.push(new Date(i.expire).toString());
        return d;
      });
    },
    chartop() {
      return {
        title: {
          text: 'location'
        },
        legend: {
          right: 10,
          data: ['location']
        },
        xAxis: {
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          },
          scale: true,
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          },
          scale: true,
        },
        series: [
          {
            name: 'location',
            data: this.chartdata,
            type: 'scatter',
            label: {
              emphasis: {
                show: true,
                formatter ({ data }) {
                  return data[2]
                },
                position: 'top'
              }
            },
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new graphic.RadialGradient(0.4, 0.3, 1, [
                  {
                    offset: 0,
                    color: 'rgb(251, 118, 123)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(204, 46, 72)'
                  }
                ])
              }
            }
          },
        ]
      }
    }
  },
  methods: {
    toggle(row) {
      this.$refs.table.toggleDetails(row)
    }
  }
}
</script>

<style>
.echarts {
  margin: auto;
}
</style>

