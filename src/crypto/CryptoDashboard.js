import React, { useEffect } from 'react'

function CryptoDashboard() {

    const COINS_NAMES = {
        BTCUSDT : 'Bitcoin',
        ETHUSDT : 'Ethereum',
        SOLUSDT : 'Solana',
        ADAUSDT : 'Cardano',
        DOGEUSDT : 'DogeCoin'
    }

    const COINS = Object.keys(COINS_NAMES)

    const [cryptoData, setCryptoData] = React.useState({})

    useEffect(() => {
        console.log('running fetch')
        fetch('	https://api2.binance.com/api/v3/ticker/24hr')
         .then((res) => res.json())
         .then((data) => {
             const filteredData = data.filter((ticker) => {
                 if (COINS.includes(ticker.symbol)) {
                     return true;
                 }
             })
             setCryptoData(filteredData)
         })
    },[])


    return (
        <div className='crypto-dashboard'>
            <h2>Today's Crypto Prices</h2>
            <table>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>24h %</th>
                </tr>
                    {
                        cryptoData.map((coin,index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{COINS_NAMES[coin.symbol]}</td>
                                    <td>${Number(coin.lastPrice).toLocaleString()}</td>
                                    <td style={Number(coin.priceChangePercent) > 0 ? {color:'green'}: {color:'red'}}>
                                        {Number(coin.priceChangePercent) > 0 ? '▲' : '▼' } 
                                        {coin.priceChangePercent}%</td>
                                </tr>
                            )
                        })
                    }
                    
                
            </table>
        </div>
    )

}

export default CryptoDashboard