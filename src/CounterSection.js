import React from 'react' 

function CounterSection (props) {
    const days = ['MO','TU','WE','TH','FR','SA','SU']
    const [selectedDay, setSelectedDay] = React.useState('MO')
    const [allCounter, setAllCounters] = React.useState({})
     
    function addCounter() {
        const newAllCounter = {...allCounter}
        const currentDayCounter = newAllCounter[selectedDay]
        if (currentDayCounter) {
            newAllCounter[selectedDay] = currentDayCounter + '🏆'
        } else {
            newAllCounter[selectedDay] = '🏆'
        }

        setAllCounters(newAllCounter)
    }

    return (
        <div className="counter-section">
            <h1>Preview our new app!</h1>
            <div className='counter-field'>
                <h3>Workout Counter</h3>
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
                <p>{props.count <= 0 ? 'No workouts yet' : props.count}</p>
                <button>-</button>
                <button onClick={addCounter}>+</button>
            </div>
        </div>
    )
}

export default CounterSection