function Text(){
    return(
        <div>
           <div style={styles.apps4}>

<h1 style={styles.js}>ABOUT US</h1>

 <p style={styles.apps5}>Lorem ipsum dolor sit amet, 
   consectetur adipiscing elit, sed do eiusmod <br />
   tempor incididunt ut labore et dolore magna aliqua. <br /><br />
   Ullamco laboris nisi ut aliquip ex ea commodo consequat <br /><br />
   Duis aute irure dolor in reprehenderit in voluptate velit <br /><br />
   Ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

 <p style={styles.page3}>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure <br />
   dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <br />
   pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa <br />
   qui officia deserunt mollit anim id est laborum.</p>

 <div style={styles.page4}>
 <button style={styles.page5}>Learn More</button>
 </div>

</div>
</div>
);
}

const styles = {
apps4: {
width: '100%',
height: '330px',
},
js: {
textAlign: 'center',
marginTop: '55px',
color: '#37517e',
},
apps5: {
marginTop: '70px',
marginLeft: '95px',
fontSize: '15px',
fontFamily: 'Verdana, sans-serif', // Added fallback font
color: 'rgb(92, 92, 92)',
},
page3: {
fontsize: 15,
color: "gray",
marginLeft: 670,
marginTop:-164
},
page4: {
textAlign: 'center',
marginLeft: 240,
marginTop: 20
},
page5: {
width: 150,
height: 42,
fontsize: 15,
fontfamily: 'inherit',
fontweight: 600,
backgroundColor: 'white',
borderWidth:2,
borderColor:"#47b2e4",
color:" #31a7dd",
borderRadius: 5
}

}
export default Text