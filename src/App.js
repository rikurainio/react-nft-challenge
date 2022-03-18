import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Punklist from './components/Punklist';
import { Main } from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await
          axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x717263e8ad517b4bd77a28e1d70F7Aa39EcdD6f8&order_direction=asc')

      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }

    return getMyNfts()
  }, [])

  let reverseArray = [...punkListData].reverse()

  return (
    <div className='app'>
      <Header />

      {reverseArray.length > 0 && (
        <>
          <Main punkListData={reverseArray} selectedPunk={selectedPunk}/>
          <Punklist punkListData={reverseArray} setSelectedPunk={setSelectedPunk}/>
        </>
      )}

    </div>
  )
}

export default App;
