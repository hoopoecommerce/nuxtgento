export const state = () => ({
  navigationIsOpen: false
})

export const mutations = {
  toggleNavigation(state) {
    state.navigationIsOpen = !state.navigationIsOpen
  }
}
