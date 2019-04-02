import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '~/assets/stylus/index.styl'

export default () => {
  Vue.use(Vuetify, {
    iconfont: 'fa',
    icons: {
      'expand': 'fal fa-angle-down'
    },
    theme: {
      primary: '#68478D',
      secondary: '#28C5AA',
      accent: '#3F3E40',
      error: '#EB5E5E',
      info: '#2894c5', 
      success: '#28c5aa',
      warning: '#f1c644',
      google: '#5a86e4',
      grey: '#888888',
      intercom: '#286efa'
    },
    breakpoint: {
      thresholds: {
        xs: 360,
        sm: 600,
        md: 960,
        lg: 1024,
        xl: 1232, 
      },
      scrollbarWidth: 0
    },
    options: {
      customProperties: true,
    }
  })
}