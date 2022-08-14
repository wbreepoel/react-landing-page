import React from 'react' 

function CounterSection () {
    const days = ['MO','TU','WE','TH','FR','SA','SU']
    const [selectedDay, setSelectedDay] = React.useState('MO')
    const [allCounter, setAllCounters] = React.useState({})
    let [totalWorkouts, setTotalWorkouts] = React.useState(0)
     
    function addCounter() {
        const newAllCounter = {...allCounter}
        const currentDayCounter = newAllCounter[selectedDay]
        if (currentDayCounter) {
            newAllCounter[selectedDay] = currentDayCounter + '🏆'
        } else {
            newAllCounter[selectedDay] = '🏆'
        }
        setTotalWorkouts(totalWorkouts += 1)
        setAllCounters(newAllCounter)
    }

    function subtractCounter() {
        const newAllCounter = {...allCounter}
        const currentDayCounter = newAllCounter[selectedDay]
        if(currentDayCounter) {
            newAllCounter[selectedDay] = currentDayCounter.slice(0,-2)
            setTotalWorkouts(totalWorkouts - 1)
        } else {
            newAllCounter[selectedDay] = ''

        }

        setAllCounters(newAllCounter)
    }

    return (
        <div className="counter-section">
            <h1>Preview our new apps!</h1>
            <div className='counter-field'>
                <h3>Workout Counter</h3>
                <p>Click on the day and start adding your workouts with the button below</p>
                {
                days.map((day) => {
                    return (
                        <div key={day} className='day-field' 
                        onClick={()=> setSelectedDay(day)} style={day == selectedDay ? {color: 'green'} : {}}>
                            <h3>{day}</h3>  
                            <div className='day-box'>
                                {allCounter[day]}
                            </div>
                        </div>
                    )
                })
                
                }
                <p>Total Workouts Done: {totalWorkouts}</p>
                <button onClick={subtractCounter}>-</button>
                <button onClick={addCounter}>+</button>
            </div>
        </div>
    )
}

export default CounterSection