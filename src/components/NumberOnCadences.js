import React, { useState} from 'react'
import { useAsync } from 'react-use'

const NumberOnCadences = ({people}) => {

    const [numberOnCadences, setNumberOnCadences] = useState('')

    useAsync(async () => {
      try {
            const cadenceMembershipList = (await SalesLoft.getIdsOfCadencesByPerson(personid)).data.data
            const peopleIds = people.map((person) => {
                return person.id
            })
            [129403, 9403902, 349802903, 3040239]
            const 
            const cadenceNames = (await SalesLoft.getCadenceNameById(cadenceIdList)).data.data
            setCadenceInfo(cadenceNames)
            setShowCadenceList(showCadenceList ? false : true)
      }
      catch(err){
        console.log(`My error code is ${err.status}.  I errored out bc ${err}`)
      }
    }, [])


        return (
            <div>
                
            </div>
        )
}
