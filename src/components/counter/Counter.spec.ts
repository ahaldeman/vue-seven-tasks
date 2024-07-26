import Counter from '@/components/counter/Counter.vue'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { describe, expect, it } from 'vitest'

describe('Counter', () => {
  it('renders correctly', () => {
    const wrapper = renderCounter()
    expect(wrapper.text()).toContain('Counter')
  })

  it('displays a counter variable', () => {
    const wrapper = renderCounter()
    expect(wrapper.text()).toContain('0')
  })

  it('increments the counter variable correctly when the "Count" button is clicked', async () => {
    const wrapper = renderCounter()
    expect(wrapper.text()).toContain('0')

    const counterButton = wrapper.findComponent('button')
    await counterButton.trigger('click')
    expect(wrapper.text()).toContain('1')
  })
})

const vuetify = createVuetify({
  components,
  directives,
})

const renderCounter = () => {
  setActivePinia(createPinia())
  return mount(Counter, {
    props: {},
    global: {
      components: {
        Counter,
      },
      plugins: [vuetify],
    },
  })
}
