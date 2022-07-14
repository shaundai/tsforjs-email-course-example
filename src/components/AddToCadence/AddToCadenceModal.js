import React, { useState } from 'react'
import styled from 'styled-components'
import search from '../../images/search.png'

import AllCadenceList from './AllCadenceList'
import SalesLoft from '../util/mockSalesloftApi'

 const AddToCadenceModal = ({showAddToCadenceModal, cadenceList, personId, getCadenceList}) => {

    const [searchText, setSearchText] = useState('')
    const [selectedCadenceId, setSelectedCadenceId] = useState('')

    const clickAddToCadenceButton = async () => {
        try {
           await SalesLoft.addPersonToCadence(personId, selectedCadenceId)
           showAddToCadenceModal()
           getCadenceList(personId)
        }
        catch(err){
            console.log(`My error code is ${err.status}.  I errored out bc ${err}`)
          }

    }

        return (
            <ModalBackground>
                <Modal>
                    <ModalHeader><span>Add People to Cadence</span></ModalHeader>
                    <SearchBarContainer>
                        <SearchBar>
                            <img src={search} alt="search icon" style={{height: '1.4em', paddingLeft: '1.3vw', position: 'absolute'}}/>
                            <input style={{paddingLeft: '2.8em', height: '100%', width: '100%', fontFamily: 'Montserrat', fontSize: '1.1em', border: '1px solid #E5E5E5', borderRadius: '.3em'}} type="text" value={searchText} onChange={e => {setSearchText(e.target.value)}} placeholder="Search My Cadences" />
                        </SearchBar>
                        </SearchBarContainer>
                    <ModalMiddleText>
                        <AllCadenceList cadenceList={cadenceList} searchText={searchText} selectedCadenceId={selectedCadenceId} setSelectedCadenceId={setSelectedCadenceId} />
                    </ModalMiddleText>
                        <ModalButtonContainer>
                            <ModalButton style={{backgroundColor: '#E5E5E5', color: '#4F5359', marginRight: '1.0vw'}} onClick={() => showAddToCadenceModal()}>Cancel</ModalButton>
                            <ModalButton style={{backgroundColor: '#86C6E5', color: 'white', marginRight: '1.4vw'}} onClick={() => clickAddToCadenceButton()}>Add to Cadence</ModalButton>
                        </ModalButtonContainer>
                </Modal>
            </ModalBackground>
        )
}

export default AddToCadenceModal

const ModalBackground = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  z-index: 90;
  background-color: rgba(255,255,255,0.5);
  font-family: Montserrat;
  `

const ModalHeader = styled.div`
    font-size: 1.2em;
    border-bottom: 1px solid #E5E5E5;
    width: 100%;
    padding: 3vh 0vw 2.5vh 1.5vw;
    text-align: left;
`

const ModalMiddleText = styled.div`
    display: flex;
    align-items: center;
    height: 65%;
    font-size: .8em;
    overflow-wrap: break-word;
    width: 100%;
    margin: 0 auto;
`
const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
  align-items: center;
  z-index: 100;
  background-color: white;
  color: #4F5359;
  height: 85vh;
  width: 50vw;
  border-radius: .1em;
  font-family: Montserrat;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  `

  const SearchBarContainer = styled.div`
    display: flex;
    align-items: center;
    height: 10%;
    width: 100%;
    border-bottom: 1px solid #E5E5E5;
    font-size: .8em;
  `

  const SearchBar = styled.div`
    display: flex;
    align-items: center;
    height: 60%;
    width: 85%;
    margin: 0 auto;
`

  const ModalButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 10%;
    width: 100%;
    border-top: 1px solid #E5E5E5;
    padding-top: 1vh;
  `

  const ModalButton = styled.button`
  padding: .5em 1.3em;
  margin: auto 0;
  border-color: rgb(143, 198, 229);
  border-radius: .2em;
  border: none;
  font-family: Montserrat;
  font-weight: 600;
  font-size: .8em;
  `