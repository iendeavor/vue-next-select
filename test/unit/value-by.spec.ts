import { reactive } from 'vue'
import { mount } from '@vue/test-utils'
// @ts-ignore
import VueSelect from '../../'
import { clickAllDropdownItemElements } from '../dom-utils'

it('should works by default', async () => {
  const state = reactive({
    model: [],
    options: [0, 1, 2],
  })
  const app = {
    setup() {
      return {
        state,
      }
    },
    components: {
      VueSelect,
    },
    template: `
      <vue-select
        v-model="state.model"
        :options="state.options"
        multiple
      ></vue-select>
    `,
  }
  const wrapper = mount(app)
  await wrapper.trigger('focus')

  await clickAllDropdownItemElements(wrapper)
  expect(state.model).toStrictEqual([0, 1, 2])
})

it('should works with string path', async () => {
  const state = reactive({
    model: [],
    options: [
      {
        nested: {
          value: 0,
        },
      },
      {
        nested: {
          value: 1,
        },
      },
      {
        nested: {
          value: 2,
        },
      },
    ],
  })
  const app = {
    setup() {
      return {
        state,
      }
    },
    components: {
      VueSelect,
    },
    template: `
      <vue-select
        v-model="state.model"
        :options="state.options"
        multiple
        value-by="nested.value"
      ></vue-select>
    `,
  }
  const wrapper = mount(app)
  await wrapper.trigger('focus')

  await clickAllDropdownItemElements(wrapper)
  expect(state.model).toStrictEqual([0, 1, 2])
})

it('should works with function', async () => {
  const state = reactive({
    model: [],
    options: [
      {
        value: 0,
      },
      {
        value: 1,
      },
      {
        value: 2,
      },
    ],
  })
  const valueBy = (option: { label: string; value: number }) => option.value
  const app = {
    setup() {
      return {
        state,
        valueBy,
      }
    },
    components: {
      VueSelect,
    },
    template: `
      <vue-select
        v-model="state.model"
        :options="state.options"
        multiple
        :value-by="valueBy"
      ></vue-select>
    `,
  }
  const wrapper = mount(app)
  await wrapper.trigger('focus')

  await clickAllDropdownItemElements(wrapper)
  expect(state.model).toStrictEqual([0, 1, 2])
})
