import React, { useState } from 'react'
import AddToCadenceModal from './AddToCadenceModal'
import SalesLoft from '../util/mockSalesloftApi'
import { getCadenceIdsByGuid } from './getCadenceIds'

export const AddToCadence = ({userInfo, personId, getCadenceList}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [cadenceList, setCadenceList] = useState([])
    const [isTeamCadence, setIsTeamCadence] = useState(false)

    const showAddToCadenceModal = async () => {
        try {
            const cadenceIds = await getCadenceIdsByGuid(isTeamCadence, userInfo)
            const cadenceInfo = (await SalesLoft.getCadenceNameById(cadenceIds)).data.data
            setCadenceList(cadenceInfo)
            setIsModalOpen(isModalOpen ? false : true)
        }
        catch(err){
            console.log(`My error code is ${err.status}.  I errored out bc ${err}`)
          }
    }

        return (
            <div data-testid='addToCadenceModalContainer'>
                <div style={{cursor: 'pointer', color: '#3C9CD2', fontSize: '.7em', marginLeft: '2em'}} onClick={() => showAddToCadenceModal()}>+ Add to Cadence</div>
                {isModalOpen ? <AddToCadenceModal showAddToCadenceModal={showAddToCadenceModal} cadenceList={cadenceList} personId={personId} getCadenceList={getCadenceList} setIsTeamCadence={setIsTeamCadence} /> : null}
            </div>
        )
}