import MainHeader from "../component/mainHeader";
function Homepage(){
    return(
        <div>
            <MainHeader/>
            <li style={styles.navItem}>
          <a href="#" style={styles.navLink}>Home</a>
           </li>
        </div>
    );
}
    const styles = {
    navItem: {
        paddingLeft: '25px',
    },
    navLink: {
        textDecoration: 'none',
        color: 'rgb(255, 255, 255)',
        fontSize: '18px',
    }
 }

 export default Homepage