import React from 'react'
import styled from 'styled-components'

 const RemoveAlertModal = ({removeFromCadence, showWarningModal, cadenceName, firstName}) => {
        return (
            <ModalBackground>
                <Modal>
                    <ModalHeader><span>Remove from Cadence</span></ModalHeader>
                    <ModalMiddleText><div>Are you sure you want to remove {firstName} from <b>{cadenceName}</b>?</div></ModalMiddleText>
                        <ModalButtonContainer>
                            <GreyButton onClick={() => showWarningModal()}>Cancel</GreyButton>
                            <BlueButton onClick={() => removeFromCadence()}>Remove from Cadence</BlueButton>
                        </ModalButtonContainer>
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

const ModalHeader = styled.div`
    font-size: 1.8em;
    border-bottom: 1px solid #E5E5E5;
    width: 100%;
    padding: 3vh 0vw 2.5vh 1.5vw;
    text-align: left;
`

const ModalMiddleText = styled.div`
    display: flex;
    align-items: center;
    height: 55%;
    font-size: 1.3em;
    overflow-wrap: break-word;
    width: 60%;
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
  height: 40vh;
  border-radius: .1em;
  font-family: Montserrat;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  `

  const ModalButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 15%;
    width: 100%;
    border-top: 1px solid #E5E5E5;
    padding-top: 1vh;
    padding-bottom: 1vh;
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

  const GreyButton = styled(ModalButton)`
  background-color: #E5E5E5;
  color: #4F5359;
  margin-right: 1.0vw;
  `

const BlueButton = styled(ModalButton)`
background-color: #86C6E5;
color: white;
margin-right: 1.4vw;
`