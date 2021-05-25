export default {
    inserted(el, bindings, vNode) {
        let btn = bindings.value
        let boolean = vNode.context.$store.state.btnPermission[btn]
        if(!boolean) {
            console.log(el.parentNode.removeChild(el));
        }
    }
}