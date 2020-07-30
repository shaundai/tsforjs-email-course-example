import React from 'react'
import SalesLoft from './util/salesloftApi'


const Remove = ({cadenceMembershipId}) => {

    const removeFromCadence = async (membershipId) => {
        try {
            await SalesLoft.removePersonFromCadence(membershipId)
            alert("successfully removed from cadence")
        }
        catch(err){
          console.log(`My error code is ${err.status}.  I errored out bc ${err}`)
        }
    }

        return (
            <span style={{color: '#3C9CD2'}} onClick={() => removeFromCadence(cadenceMembershipId)}>
                remove
            </span>
        )
    
}

export default Remove