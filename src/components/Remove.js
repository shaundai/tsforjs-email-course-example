import React from 'react'
import SalesLoft from './util/salesloftApi'


const Remove = ({personId, cadenceId, getCadenceList}) => {

    const removeFromCadence = async () => {
        try {
            const membershipId = (await SalesLoft.getCadenceMembershipByPersonIdAndCadenceId(personId, cadenceId)).data.data[0].id
            await SalesLoft.removePersonFromCadence(membershipId)
            getCadenceList(personId)
            //alert("successfully removed from cadence")
        }
        catch(err){
          console.log(`My error code is ${err.status}.  I errored out bc ${err}`)
        }
    }

        return (
            <span style={{color: '#3C9CD2'}} onClick={() => removeFromCadence(cadenceId)}>
                remove
            </span>
        )
    
}

export default Remove