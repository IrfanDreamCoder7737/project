function Intro() {
    return(
        <div>
           <div style={styles.apps3}>
            <ul style={styles.apps3Ul}>
              <li style={styles.apps3Li}><img src="https://dreamcoderitsolutions.com/assets/img/clients/ionic.png"/></li>
              <li style={styles.apps3Li}><img src="https://dreamcoderitsolutions.com/assets/img/clients/nodejs.png"/></li>
              <li style={styles.apps3Li}><img src="https://dreamcoderitsolutions.com/assets/img/clients/nextjs.png"/></li>
              <li style={styles.apps3Li}><img src="https://dreamcoderitsolutions.com/assets/img/clients/vuenative.png"/></li>
              <li style={styles.apps3Li}><img src="https://dreamcoderitsolutions.com/assets/img/clients/reactjs.png"/></li>
              <li style={styles.apps3Li}><img src="https://dreamcoderitsolutions.com/assets/img/clients/angular.png"/></li>
            </ul>
         </div>
        </div>
    );
}
const styles = {
    apps3: {
        width: '100%',
        height: '170px',
        backgroundColor: '#f3f5fa',
    },
    apps3Ul: {
        display: 'flex',
    },
    apps3Li: {
        display: 'flex',
        width: '100px',
        height: '100px',
        paddingLeft: '85px',
        marginTop: '35px',
    }
}
export default Intro;