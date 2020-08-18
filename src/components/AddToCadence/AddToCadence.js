import React, { useState } from 'react'
import AddToCadenceModal from './AddToCadenceModal'
import SalesLoft from '../util/salesloftApi'
import { getCadenceIdsByGuid } from './getCadenceIds'

export const showAddToCadenceModal = async () => {
    try {
        const allCadencesById = (await SalesLoft.getAllCadencesByPersonGuid(isTeamCadence, userInfo.guid)).data.data
        const justCadenceIds = allCadencesById.map((cadence) => {
            return cadence.id
        })
        const cadenceInfo = (await SalesLoft.getCadenceNameById(justCadenceIds)).data.data
        setCadenceList(cadenceInfo)
        setIsModalOpen(isModalOpen ? false : true)
    }
    catch(err){
        console.log(`My error code is ${err.status}.  I errored out bc ${err}`)
      }
    }

export const AddToCadence = ({userInfo, personId, getCadenceList}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [cadenceList, setCadenceList] = useState([])
    const [isTeamCadence, setIsTeamCadence] = useState(false)



    const showAddToCadenceModal = async () => {
        try {
            const cadenceIds = await getCadenceIdsByGuid(isTeamCadence, userInfo)
            console.log(cadenceIds)
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