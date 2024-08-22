import React from 'react';

function MainHeader() {
    return (
      <div>
        <header style={styles.header}>
         <div style={styles.headerMain}>
         <img
         src="https://dreamcoderitsolutions.com/assets/img/logo.png"alt="Logo"
         style={styles.logoImg}
         />
         <p style={styles.title}>
          DREAM<span style={styles.titleSpan}>CODER</span>
          </p>
         <div style={styles.navListmain}>
          <ul style={styles.navList}>
          <li style={styles.navItem}>
          <a href="#" style={styles.navLink}>Home</a>
           </li>
          <li style={styles.navItem}>
          <a href="#" style={styles.navLink}>About</a>
           </li>
          <li style={styles.navItem}>
          <a href="#" style={styles.navLink}>Services</a>
           </li>
          <li style={styles.navItem}>
          <a href="#" style={styles.navLink}>Portfolio</a>
           </li>
          <li style={styles.navItem}>
          <a href="#" style={styles.navLink}>Team</a>
           </li>
          <li style={styles.midle}>
          <a href="#" style={styles.navLink}>Drop Down</a>
           </li>
          <li style={styles.navItem}>
          <a href="#" style={styles.navLink}>Contact</a>
           </li>
         </ul>

         <button
           style={styles.button}
           onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
           onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
         >
            Get Started
         </button>
</div>
       
         </div>
       </header>
      </div>
    );
}

const styles = {
    header: {
        width: '100%',
        height: '70px',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        position: 'fixed',
        top: '0',
        zIndex: '1000',
    },
    headerMain: {
        width: '85%',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
    },
    logoImg: {
        width: '60px',
        height: '60px',
    },
    title: {
        color: '#cb6244',
        fontSize: '30px',
        fontWeight: 'bolder',
    },
    titleSpan: {
        color: '#4878ae',
    },
    navListmain:{
        display: 'flex',
        // backgroundColor:'red',
        //justifyContent:"flex-end",
        alignItems:"center",
    },
    navList: {
        display: 'flex',
        // padding: '0',
        listStyle: 'none',
    },
    navItem: {
        paddingLeft: '25px',
    },
    navLink: {
        textDecoration: 'none',
        color: 'rgb(255, 255, 255)',
        fontSize: '18px',
    },
    navLinkHover: {
        color: '#4878ae',
    },
    button: {
        width: '130px',
        height: '45px',
        border: '2px solid #47b2e4',
        backgroundColor: 'transparent',
        color: 'white',
        borderRadius: '25px',
        marginLeft: '30px',
        fontWeight: 'bolder',
    },
    buttonHover: {
        backgroundColor: '#47b2e4',
    },
    midle:{
       //display:'flex'
       //backgroundColor:"red",
       width:'100px',
       paddingLeft:"40px"
    }
};

export default MainHeader;
