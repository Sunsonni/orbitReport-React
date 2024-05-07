import { useState } from 'react';

import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import satData from "./components/satData";

function App() {
  //uses state to allow re-render of satellite data
  const [sat, setSat] = useState(satData);
  //copys data from satData
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  ///filters data by type by filtering satData by passed in type
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
      //returns filter content as long as orbitStyle is equal to selected currentType
      return newSatDisplay.orbitType === currentType;
    });
    //sets re-rendered variable Sat equal to the values in displaySats
    setSat(displaySats);
  }

  return (
    <div>
      <Banner />
      <Buttons 
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
        />
      <Table sat={sat} />
    </div>
  );
}

export default App;