import React, { useState } from 'react'
import { useAsync } from 'react-use';

import SalesLoft from './util/salesloftApi'


const NumberOfCadences = ({firstName, personId, setIsCurrentlyOnCadence}) => {

    const [numberOfCadences, setNumberOfCadences] = useState('')

    useAsync(async () => {
      try {
          const cadenceMembershipNumber = (await SalesLoft.getIdsOfCadencesByPerson(personId)).data.data.length
          setNumberOfCadences(cadenceMembershipNumber)
          cadenceMembershipNumber > 0 ? setIsCurrentlyOnCadence(true) : setIsCurrentlyOnCadence(false)
      }
      catch(err){
        console.log(`My error code is ${err.status}.  I errored out bc ${err}`)
      }
    }, [])

        return (
            <span>
                show {firstName}'s cadences    <span style={{marginLeft: '.2vw', color: '#4F5359'}}>({numberOfCadences >= 0 ? numberOfCadences : <span><span class="one">.</span><span class="two">.</span><span class="three">.</span></span>})</span>
            </span>
        )
     }

export default NumberOfCadences 