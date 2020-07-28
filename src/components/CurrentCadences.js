import React, { useState } from 'react'
import SalesLoft from './util/salesloftApi'

const CurrentCadences = ({personId, firstName}) => {

    const [currentCadenceIdList, setCurrentCadenceIdList] = useState([])
    const [cadenceName, setCadenceName] = useState([])

    const getCadenceList = async (personid) => {
        try {
            const cadenceMembershipList = (await SalesLoft.getIdsOfCadencesByPerson(personid)).data.data
            const cadenceIdList = cadenceMembershipList.map(membership => {
                return membership.cadence.id
            })
            const cadenceNames = (await SalesLoft.getCadenceNameById(cadenceIdList)).data.data
            setCurrentCadenceIdList(cadenceIdList)
            setCadenceName(cadenceNames)
        }
        catch(err){
          console.log(`My error code is ${err.status}.  I errored out bc ${err}`)
        }
    }

//this works to get name of first cadence
    const getCadenceName = async (cadenceid) => {
        try {
            const name = (await SalesLoft.getCadenceNameById(cadenceid)).data.data
            setCadenceName(name)
        }
        catch(err){
          console.log(`My error code is ${err.status}.  I errored out bc ${err}`)
        }
    }
    

        return (
            <div>
                <div style={{fontSize: '.6em', color: 'blue'}} onClick={() => getCadenceList(personId)}>show {firstName}'s cadences</div>
        hi <div onClick={() => getCadenceName(currentCadenceIdList[0])}>button {currentCadenceIdList[0]}</div>
            </div>
        )
}

export default CurrentCadences;