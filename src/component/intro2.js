function Intro2(){
    return(
        <div>
            <div style={styles.list3}>
                <div style={styles.box0}>
                   <img style={styles.box3} src="https://dreamcoderitsolutions.com/assets/img/skills.png"/>
                </div>
                <div style={styles.box1}>
                    <h1 style={styles.boxs}>Voluptatem dignissimos <br /> provident quasi corporis <br />
                        voluptates</h1>
                     <p style={styles.box2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
                      tempor incididunt ut labore et dolore magna aliqua.</p>
                <div>
                     <p style={styles.html}>HTML <span style={styles.box4}>100%</span></p>
                     <h2 style={styles.box5}></h2>
                     <p style={styles.box6}>CSS <span style={styles.box7}>90%</span></p>
                     <h2 style={styles.box8}></h2>
                     <p style={styles.box9}>JAVASCRIPT<span style={styles.box10}>75%</span></p>
                     <h2 style={styles.box11}></h2>
                     <p style={styles.box12}>PHOTOSHOP <span style={styles.box13}>55%</span></p>
                     <h2 style={styles.box14}></h2>
                     </div>
                     
                </div>
             </div>
        </div>
    )
}
const styles = {
list3: {
   width:"100%",
   height:500,
   display:'flex',
   //border:"1px solid black"
},
box0:{
    width:"50%",
    height:500,
    //border:"1px solid black"
},
box1:{
    width:"50%",
    height:500,
    //border:"1px solid black"
    marginBottom:50
},
box2:{
    fontFamily:' revert;',
    color:"gray"
},
box3:{
width:500,
height:300,
justyfyContent:'center',
margin:90
},
boxs:{
    color:'#37517e',
    fontSize:'32px',
    marginTop:50
 },
 html:{
    color:"#37517e",
    fontweight: 800,
    fontSize:'14px'
 },
 box4:{
    float:'right',
    marginRight:'75px'
 },
 box5:{
    backgroundColor:'#37517e',
    width:'550px',
    height:'10px'
 },
 box6:{
    color:"#37517e",
    fontweight: 800,
    fontSize:'14px'
 },
 box7:{
    float:'right',
    marginRight:'75px'
 },
 box8:{
    backgroundColor:'#37517e',
    width:'480px',
    height:'10px'
 },
 box9:{
   color:"#37517e",
    fontweight: 800,
    fontSize:'14px'
 },
 box10:{
   float:'right',
    marginRight:'75px'
 },
 box11:{
   backgroundColor:'#37517e',
   width:'390px',
   height:'10px'
 },
 box12:{
   color:"#37517e",
   fontweight: 800,
   fontSize:'14px'
 },
 box13:{
   float:'right',
    marginRight:'75px'
 },
 box14:{
   backgroundColor:'#37517e',
    width:'290px',
    height:'10px'
 }
};

export default Intro2