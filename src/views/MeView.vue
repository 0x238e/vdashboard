<template>
  <div>
    <Header title="我的"></Header>
    <section class="section">
      <b-collapse class="panel" :open="false">
        <div slot="trigger" slot-scope="props" class="panel-heading success" role="button">
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                保险状况评估：健康（85 / 100）
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
              </div>
            </div>
          </div>
        </div>
        <div class="panel-block">
          <b-icon class="panel-icon" icon="check" style="color: green;"></b-icon>
            <div class="container">
            <div class="level">
              <div class="level-left">
                <div class="level-item">
                  保险公司 1
                </div>
              </div>
              <div class="level-right">
                <div class="level-item">
                  优秀（95 / 100）
                </div>
                <div class="level-item">
                  <b-button type="is-danger">取消授权</b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="panel-block">
          <b-icon class="panel-icon has-text-warning" icon="exclamation" style=""></b-icon>
            <div class="container">
            <div class="level">
              <div class="level-left">
                <div class="level-item">
                  保险公司 2
                </div>
              </div>
              <div class="level-right">
                <div class="level-item">
                  一般（75 / 100）
                </div>
                <div class="level-item">
                  <b-button type="is-danger">取消授权</b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="panel-block">
          <b-icon class="panel-icon" icon="help"></b-icon>
            <div class="container">
            <div class="level">
              <div class="level-left">
                <div class="level-item">
                  保险公司 3
                </div>
              </div>
              <div class="level-right">
                <div class="level-item">
                  未授权（N / A）
                </div>
                <div class="level-item">
                  <b-button type="is-success">点击授权</b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-collapse>
    </section>
  <section class="section" style="padding-top: 0;width: 60%; margin: auto;margin-bottom: 100px;">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="https://avatars2.githubusercontent.com/u/49799403" alt="">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://avatars2.githubusercontent.com/u/49799403" alt="">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">Yiwei Yang</p>
            <p class="subtitle is-6">
              <a href="#">#{{ this.$store.state.currentAccount.publicKey }}</a>
            </p>
          </div>
        </div>
      </div>
      <div class="content" style="margin: 20px;">
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                公钥
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <a href="#">{{ this.$store.state.currentAccount.publicKey }}</a>
              </div>
            </div>
          </div>
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                私钥 / 密码
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <span v-if="!privateKeyRevealed">*************</span>
                <span v-else>{{ this.$store.state.currentAccount.privateKey }}</span>
                &nbsp;&nbsp;
                <a @click="togglePrivateKey"><b-icon :icon="privateKeyRevealed ? 'eye-off' : 'eye'"></b-icon></a>
              </div>
            </div>
          </div>
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                花销
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <b-tooltip label="点击查看详细账单" position="is-left">
                  <a href="#">996 CPC</a>
                </b-tooltip>
              </div>
            </div>
          </div>
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                累计处理事件
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                80
              </div>
            </div>
          </div>
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                偏好等级（0 -> 9）
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                5
              </div>
            </div>
          </div>
      </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item">设置</a>
  </footer>
    </div>
  </section>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
export default {
  name: 'MeView',
  props: {
    //
  },
  components: {
    Header,
  },
  data() {
    return {
      privateKeyRevealed: false,
    };
  },
  methods: {
    togglePrivateKey() {
      this.privateKeyRevealed = !this.privateKeyRevealed
    }
  }
}
</script>

<style scoped>
.section {
  height: 100%;
}
.success {
  background-color: green;
  color: white;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>

