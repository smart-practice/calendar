import { DirectiveBinding } from 'vue'

// TODO: replace any
export const clickOutside = {
  mounted(el: any, binding: DirectiveBinding) {
    el.clickOutsideEvent = (event: any) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el)
      }
    }
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el: any) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
}
