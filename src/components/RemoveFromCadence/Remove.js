import React, { useState } from 'react'
import RemoveAlertModal from './RemoveAlertModal'
import SalesLoft from '../util/salesloftApi'


const Remove = ({personId, cadenceId, getCadenceList, cadenceName, firstName}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const showWarningModal = () => {
        setIsModalOpen(isModalOpen ? false : true)
    }

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
            <span style={{color: '#3C9CD2', cursor: 'pointer'}} onClick={() => showWarningModal()}>
                remove {isModalOpen ? <RemoveAlertModal removeFromCadence={removeFromCadence} showWarningModal={showWarningModal} cadenceId={cadenceId} cadenceName={cadenceName} firstName={firstName}/> : null}
            </span>
        )
    
}

//onClick={() => removeFromCadence(cadenceId)}

export default Remove