function trackPageView(url) {
    try {
      window.gtag('config', 'UA-150124399-1', {
        page_location: url
      });
    } catch (error) {
      // silences the error in dev mode
      // and/or if gtag fails to load
    }
  }

  module.exports = {
    trackPageView
  };