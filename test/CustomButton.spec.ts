import { createLocalVue, mount, Wrapper } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'

import CustomButton from '@/components/CustomButton.vue'

describe('CustomButton.vue', () => {
  let wrapper: Wrapper<Vue>
  let vuetify: Vuetify

  const localVue = createLocalVue()

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('should match snapshot', () => {
    wrapper = mount(CustomButton, {
      localVue,
      vuetify,
      propsData: {
        text: 'Hello',
      },
      stubs: ['v-btn']
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
