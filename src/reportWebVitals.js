
const reportWebVitals = onPerfEntry => {
  //  onPerfEntry is provided 
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import the web-vitals library
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Call each metric function and pass the onPerfEntry callback


      getCLS(onPerfEntry);   //  Cumulative Layout Shift
      getFID(onPerfEntry);   //  First Input Delay
      getFCP(onPerfEntry);   //  First Contentful Paint
      getLCP(onPerfEntry);   // Largest Contentful Paint
      getTTFB(onPerfEntry);  //  Time to First Byte
    });
  }
};

export default reportWebVitals;
