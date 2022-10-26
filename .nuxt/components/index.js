export const Action = () => import('../../components/action.vue' /* webpackChunkName: "components/action" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../../components/footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const HeaderComponentWork = () => import('../../components/header-component-work.vue' /* webpackChunkName: "components/header-component-work" */).then(c => wrapFunctional(c.default || c))
export const HeaderComponent = () => import('../../components/header-component.vue' /* webpackChunkName: "components/header-component" */).then(c => wrapFunctional(c.default || c))
export const NavComponent = () => import('../../components/nav-component.vue' /* webpackChunkName: "components/nav-component" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
