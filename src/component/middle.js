function Middle() {
    return(
        <div>

          <div style={styles.list}>
             <div>
             <h1 style={styles.h1}> <span style={styles.spam}>Eum ipsam laborum deleniti</span> <br />
               velit pariatur architecto aut <br /> nihil</h1>
              <p style={styles.plays}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
               tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor <br />
               in reprehenderit</p>
             <div>
              <p style={styles.hhells}><span style={styles.list2}>01</span> Non consectetur a erat nam at lectus urna duis?</p>
              <p style={styles.hhells}><span style={styles.list2}>02</span> Feugiat scelerisque varius morbi enim nunc?</p>
              <p style={styles.hhells}><span style={styles.list2}>03</span> Dolor sit amet consectetur adipiscing elit?</p>
             </div>
             </div>
              <img style={styles.img} src="https://dreamcoderitsolutions.com/assets/img/why-us.png"/>
          </div>

        </div>
    );
}

const styles = {
list: {
    backgroundColor: '#f3f5fa',
    marginTop:60,
    width: "100%",
    height: 600,
    display:'flex',
    alignItems:"center"
},
img: {
    width: 550,
    height: 400,
    marginLeft: 100,
    //margintop: '50px'
    // justyfiContent:'center',
    // display:'flex'
},
h1: {
    marginLeft: 90,
    marginTop:10,
    fontsize:'30px',
    color: "#37517e",
    fontWeight:'bold',
    textAlign:'start', /* Added text-align for centering the text */
    alignItems:'center',
    //bottom:500
    
},
spam: {
    fontfamily: 'sans-serif',
    fontWeight: '500',
    color: "#37517e"
},
plays: {
    marginLeft: 90,
    fontsize: '18px',
    color: "rgb(140, 135, 135)"
},
hhells: {
   backgroundColor: 'white',
    width: 500,
    height: 60,
    marginLeft: 90,
    display: 'flex',
    alignItems: 'center',
    fontfamily: 'sans-serif',
    fontSize:'18px',
    color: "black",
    textAlign: 'center',
    borderRadius: '4px'
    
},
list2: {
    color: "#47b2e4",
    fontWeight: '900',
    marginRight: '15px',
    marginLeft:'20px',
    fontWeight: '700',
    fontSize: '18px'
}

/* Styles for the .list1 class */
};
export default Middle