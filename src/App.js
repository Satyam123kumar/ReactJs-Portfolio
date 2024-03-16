import './App.css';
import Accordian from './Components/Accordian';
import Counter from './Components/Hooks-learn';
import RandomColor from './Components/random-color';
import Rating from './Components/star-rating';
import InputIndex from './Components/Hooks-learn/inputIndex';
import CounterText from './Components/Hooks-learn/counterText';
import ImageSlider from './Components/image-slider';
import QrCodeGen from './Components/qr-code-generator';
import LoadMoreData from './Components/load-more-data';
import TreeView from './Components/tree-view';
import dataList from './Components/tree-view/data';
import ScrollIndicator from './Components/scroll-indicator';
import TabTest from './Components/custom-tabs/tab-test';


function App() {
  return (
    <div className="App">

      {/* Enable multiselection and single selection to display data */}
      {/* <Accordian/> */}

      {/* it generate random color in HEX and rgb */}
      {/* <RandomColor/> */}

      {/* It is star rating used to rate product and show color whenever we hover on it */}
      {/* <Rating/> */}

      {/* This is use case of useState hook */}
      {/* <Counter/> */}
      {/* <InputIndex/> */}
      {/* <CounterText/> */}

      {/* Image slider app using api calls */}
      {/* <ImageSlider url = {"https://picsum.photos/v2/list"} page={'1'} limit={"10"}/> */}

      {/* Generate QR code using 3rd party library */}
      {/* <QrCodeGen/> */}

      {/* Load more products using API calls */}
      {/* <LoadMoreData/> */}


      {/* <TreeView dtaLst={dataList}/> */}

      {/* <ScrollIndicator url = {'https://dummyjson.com/products?limit=100'}/> */}

      <TabTest/>
    </div>
  );
}

export default App;
