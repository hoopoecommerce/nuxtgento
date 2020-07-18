export const state = () => ({
  navigationIsOpen: false,
  cartIsOpen: false
})

export const mutations = {
  toggleNavigation(state) {
    state.navigationIsOpen = !state.navigationIsOpen
  },
  toggleCart(state) {
    state.cartIsOpen = !state.cartIsOpen
  }
}
