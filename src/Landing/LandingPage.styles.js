import LandingImage from '../assets/img/783289.jpg'

const styles = theme => ({
    landing: {
      backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${LandingImage})`,
      height: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPositionX: 'center',
    },
    titleContainer: {
      color: '#40403F',
      width: '100vw',
      height: '100vh',
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      color: '#fb8319',
      fontSize: '3.5rem',
      marginBottom: '30px',
      marginTop: '100px',
    },
    button: {
      color: 'white',
      margin: '0 5px',
      borderColor: 'white',
    }
});

export default styles;