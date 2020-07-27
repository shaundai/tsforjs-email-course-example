import React, { useState } from 'react'
import SalesLoft from './util/salesloftApi'

const CurrentCadences = ({personId, firstName}) => {

    const [currentCadenceIdList, setCurrentCadenceIdList] = useState([])

    const getCadenceList = async (personid) => {
        try {
            const cadenceIdList = (await SalesLoft.getIdsOfCadencesByPerson(personid)).data.data
            setCurrentCadenceIdList(cadenceIdList)
        }
        catch(err){
          console.log(`My error code is ${err.status}.  I errored out bc ${err}`)
        }
    }
        return (
            <div>
                <div style={{fontSize: '.6em', color: 'blue'}} onClick={() => getCadenceList(personId)}>show {firstName}'s cadences</div>
                {currentCadenceIdList && currentCadenceIdList.map(id => (
                    <div> {id.id} </div>
                )
                )}
            </div>
        )
}

export default CurrentCadences;