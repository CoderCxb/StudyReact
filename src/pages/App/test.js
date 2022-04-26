const reactCDN = 'https://g.alicdn.com/code/lib/react/16.8.5/umd/react.production.min.js';
const reactDomCDN = 'https://g.alicdn.com/code/lib/react-dom/16.8.5/umd/react-dom.production.min.js';
const bizChartsCDN = 'https://g.alicdn.com/code/lib/bizcharts/4.0.14/BizCharts.js';

function loadBizChars() {
  if (window.BizCharts) return window.BizCharts;

  return new Promise((resolve, reject) => {
    console.log('引入script');
    const scriptReact = document.createElement('script');
    scriptReact.src = reactCDN;
    scriptReact.onerror = reject;

    const scriptReactDom = document.createElement('script');
    scriptReactDom.src = reactDomCDN;
    scriptReactDom.onerror = reject;

    const scriptChart = document.createElement('script');
    scriptChart.src = bizChartsCDN;
    scriptChart.onload = () => {
      resolve(window.BizCharts);
    };
    scriptChart.onerror = reject;

    document.body.appendChild(scriptReact);
    document.body.appendChild(scriptReactDom);
    document.body.appendChild(scriptChart);
    }
  )
}


export default loadBizChars;