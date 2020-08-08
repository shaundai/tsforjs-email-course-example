import React from 'react'
import styled from 'styled-components'


const AllCadenceList = ({cadenceList, searchText, selectedCadenceId, setSelectedCadenceId}) => {
    const searchList = cadenceList.filter(cadence => (
            cadence.name.toLowerCase().includes(searchText.toLowerCase())))

        return (
            <ul style={{listStyleType: 'none', margin: 0, padding: 0, height: '100%', overflow: 'scroll', width: '100%'}}>
                {searchText ? searchList.map(cadence => (
                        <ListCadence key={cadence.id}>
                            <div style={{paddingLeft: '3vw'}}>{cadence.name}</div>
                            <div style={{paddingRight: '3vw', color: '#6baecf', cursor: 'pointer'}}>Show Steps</div>
                        </ListCadence>
                ))
                : cadenceList.map(cadence => (
                    <ListCadence key={cadence.id} className='hoverCadence' onClick={() => setSelectedCadenceId(cadence.id)}>
                        {cadence.id === selectedCadenceId ? <span style={{backgroundColor: '#86C6E5', paddingRight: '.5em'}}/> : <span style={{paddingRight: '.5em'}}/>}
                        <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', width: '100%', padding: '2.8vh 0vw'}}>
                        <div style={{paddingLeft: 'calc(3vw - .5em)'}}>{cadence.name}</div>
                        <div style={{paddingRight: '3vw', color: '#6baecf', cursor: 'pointer'}}>Show Steps</div>
                        </div>
                    </ListCadence>
                ))
                }
            </ul>
        )
}

export default AllCadenceList

const ListCadence = styled.li`
    display: flex;
    border-bottom: 1px solid rgba(0,0,0,.1);
    
    width: 100%;
    font-size: 1em;
    font-weight: 600;
`