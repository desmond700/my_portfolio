import { createStore } from "vuex";


export default createStore({
    state () {
        return {
            count: 0
        }
    },
    mutations: {
        increment (state: any) {
            state.count++
        },
        TOGGLE_NAVBAR(state, show: boolean){
            state.showNav = show;
        },
        DISMISS_NAVBAR(state, dismiss: boolean){
            state.showNav = dismiss;
        }
    },
    actions: {
        toggleNavbar(context, show: Boolean){
            context.commit('TOGGLE_NAVBAR', show);
        },
        dismissNavbar(context, dismiss: Boolean){
            context.commit('DISMISS_NAVBAR', dismiss);
        }
    },
    // modules: {
    //   user: userModule,
    //   chat: chatModule,
    //   workspace: workspaceModule
    // }
  });