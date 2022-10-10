const styles = theme => ({
    root: {
      '&& path':{
        pointerEvents: 'all',
      },
      '&& path:hover':{
        fill: 'white',
        opacity: 1,
        cursor: 'pointer',
      },
    },
  });
  
  export default styles;