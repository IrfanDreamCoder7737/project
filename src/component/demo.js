import React from "react";



function Demo() {
    return (
        <div>
            <div style={styles.divs}>
                <div>
                    <p style={styles.div1}>DreamCoder It <br /> Solutions</p>
                    <p style={styles.div2}>Masterful Software <br />
                        Artisans For Custom Web <br />
                        & Mobile App <br />
                        Development
                    </p>
                </div>
                <div style={styles.page2}>
                    <img
                        src="https://dreamcoderitsolutions.com/assets/img/hero-img.png"
                        alt=""
                        style={styles.page2Img}
                    />
                </div>
            </div>

            <div style={styles.apps}>
                <div style={styles.appsDiv}>
                    <div style={styles.list}>
                        <button
                        style={styles.apps1}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.appsButtonHover.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#47b2e4'}>
                        Get Started
                        </button>
                    </div>
                    <a
                        target='_blank'
                        href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                        className="fa-regular fa-circle-play"
                        style={styles.appsLink}
                        onMouseOver={(e) => e.currentTarget.style.color = styles.appsLinkHover.color}
                        onMouseOut={(e) => e.currentTarget.style.color = '#fff'}
                    >
                        <span style={styles.apps2}> Watch Video</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

const styles = {
    divs: {
        width: '100%',
        height: '650px',
        backgroundColor: 'black',
        alignItems: 'center',
        display: 'flex',
        /* padding: '60px' */
    },
    div1: {
        color: '#cb6244',
        fontSize: '53px',
        marginLeft: '100px',
        /* marginBottom: '300px' */
        /* display: 'flex' */
        lineHeight: '50px',
        fontWeight: 'bold',
        marginTop:-50
    },
    div2: {
        color: '#4878ae',
        fontSize: '43px',
        marginTop: '-45px',
        marginLeft: '100px',
        fontWeight: '700',
        lineHeight: '55px',
    },
    page2: {
        width: '45%',
    },
    page2Img: {
        width: '520px',
        height: '440px',
        marginTop: '10px',
        marginLeft: '35px',
        animation: 'up-down 2s infinite', 
    },
    apps: {
        marginTop: '-140px',
        marginLeft: '100px',
    },
    appsDiv: {
        display: 'flex',
        // alignItems: 'center',
    },
    apps1: {
        width: '130px',
        height: '40px',
        borderRadius: '25px',
        border: '2px solid #47b2e4',
        backgroundColor: '#47b2e4',
        color: 'white',
        letterSpacing: '1px',
        fontWeight: '600',
        fontSize: '14px',
        fontFamily: '"Jost", sans-serif',
    },
    apps2: {
        color: 'white',
        marginLeft: '5px',
        fontSize: '16px',
        /* display: 'flex' */
        fontFamily: 'sans-serif',
    },
    appsIcon: {
        color: 'white',
        fontSize: '33px',
        marginLeft: '25px',
    },
    appsLink: {
        lineHeight: '0',
        color: '#fff',
        fontSize: '33px',
        transition: '0.3s',
        textDecoration: 'none',
        display: 'flex',
        marginLeft: '25px',
        marginTop:'20px'
    },
    appsButtonHover: {
        backgroundColor: '#3da1d0',
    },
    appsLinkHover: {
        color: '#3da1d0',
    },
    appsSpanHover: {
        color: '#3da1d0',
    },
    list:{
        marginBottom:'27px'
    }
};

export default Demo;
