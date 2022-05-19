export default props => {
    if(props.teste) {
        return props.children;//renderiza
    } else {
        return false;//nao renderiza
    }
}