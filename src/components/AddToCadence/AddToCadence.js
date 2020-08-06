import React, { useState } from 'react'
import AddToCadenceModal from './AddToCadenceModal'
import SalesLoft from '../util/salesloftApi'

const AddToCadence = ({userInfo}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [cadenceList, setCadenceList] = useState([])

    const showAddToCadenceModal = async () => {
        try {
            const allCadencesById = (await SalesLoft.getAllCadencesByPersonGuid(false, userInfo.guid)).data.data
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

        return (
            <div>
                <div style={{cursor: 'pointer', color: 'blue'}} onClick={() => showAddToCadenceModal()}>Add to Cadence</div>
                {isModalOpen ? <AddToCadenceModal showAddToCadenceModal={showAddToCadenceModal} cadenceList={cadenceList} /> : null}
            </div>
        )
}

export default AddToCadence