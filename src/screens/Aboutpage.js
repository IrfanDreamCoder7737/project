import MainHeader from "../component/mainHeader"
function Aboutpage(){
    return(
        <div>
           <MainHeader/>
           <li style={styles.seen}>
           <a href="#" style={styles.sent}>About</a>
           </li>
        </div>
    )
}
const styles = {
    seen: {
        paddingLeft: '25px',
    },
    sent: {
        textDecoration: 'none',
        color: 'rgb(255, 255, 255)',
        fontSize: '18px',
    },
    sentHover: {
        color: '#4878ae',
    }
}

export default Aboutpage