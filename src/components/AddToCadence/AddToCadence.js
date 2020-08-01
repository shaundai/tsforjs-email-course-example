import React, { useState } from 'react'
import AddToCadenceModal from './AddToCadenceModal'

const AddToCadence = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const showAddToCadenceModal = () => {
        setIsModalOpen(isModalOpen ? false : true)
    }

        return (
            <div>
                <div style={{cursor: 'pointer', color: 'blue'}} onClick={() => showAddToCadenceModal()}>Add to Cadence</div>
                {isModalOpen ? <AddToCadenceModal /> : null}
            </div>
        )
}

export default AddToCadence