// Vuex-actions
export default {
    saveUserName(context,username){
        context.commit('saveUserName',username);//触发commit
    },
    saveCartCount(context,count){
        context.commit('saveCartCount',count);//触发commit
    }
}