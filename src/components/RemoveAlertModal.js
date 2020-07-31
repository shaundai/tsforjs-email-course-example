import React from 'react'
import styled from 'styled-components'

 const RemoveAlertModal = ({removeFromCadence, showWarningModal}) => {
        return (
            <ModalBackground>
                <Modal>
                    <div style={{fontSize: '2.2em', borderBottom: '1px solid #E5E5E5', width: '100%', padding: '3vh 0vw 2.5vh 1.5vw', textAlign: 'left'}}><span>Remove from Cadence</span></div>
                        <div style={{display: 'flex', alignItems: 'center', height: '55%', fontSize: '1.7em', overflowWrap: 'break-word', width: '60%', margin: '0 auto'}}><div>Are you sure you want to remove this person from this cadence?</div></div>
                        <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '15%', width: '100%', borderTop: '1px solid #E5E5E5', paddingTop: '1vh'}}>
                            <ModalButton style={{backgroundColor: '#E5E5E5', color: '4F5359', marginRight: '1.0vw'}} onClick={() => showWarningModal()}>Cancel</ModalButton>
                            <ModalButton style={{backgroundColor: '#86C6E5', color: 'white', marginRight: '1.4vw'}} onClick={() => removeFromCadence()}>Remove from Cadence</ModalButton>
                        </div>
                </Modal>
            </ModalBackground>
        )
}

export default RemoveAlertModal

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
  height: 40vh;
  border-radius: .1em;
  font-family: Montserrat;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  `
  const ModalButton = styled.button`
  padding: .5em 1.3em;
  margin: auto 0;
  border-color: rgb(143, 198, 229);
  border-radius: .2em;
  border: none;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 1.3em;
  `