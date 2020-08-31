import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations';
import { AccountList } from './AccountList'
import { AccountPage } from './AccountPage'
import PeopleAtAccount from './PeopleAtAccount'

//api
import SalesLoft from './util/salesloftApi'

const Tiers = ({list, userInfo}) => {

  const [peopleAtAccountActive, setPeopleAtAccountActive] = useState(false)
  const [peopleList, setPeopleList] = useState([])
  const [accountInfo, setAccountInfo] = useState({})
  const [peopleInCadences, setPeopleInCadences] = useState()

  const TierOne = list.filter(item => {
    return item.account_tier && item.account_tier.id === 13
  })
  const TierTwo = list.filter(item => {
    return item.account_tier && item.account_tier.id === 14
  })
  const TierThree = list.filter(item => {
    return item.account_tier && item.account_tier.id === 15
  })

  const getPeopleInfo = async (accountId) => {
    try {
        const peopleData = (await SalesLoft.getPeopleAtAccounts(accountId)).data.data
        const accountData = (await SalesLoft.getSingleAccountInfo(accountId)).data.data
        setPeopleList(peopleData)
        setAccountInfo(accountData[0])
        setPeopleAtAccountActive(true)
    }
    catch(err){
      console.log(`My error code is ${err.status}.  I errored out bc ${err}`)
    }
}

        return (
        <div> 
            {peopleAtAccountActive ?
            <PeopleAndAccount>
              <BackToDashboard onClick={() => setPeopleAtAccountActive(false)}>go back to Dashboard</BackToDashboard>
              <AccountViewContainer>
                <AccountPage account={accountInfo} people={peopleList} peopleInCadences={peopleInCadences} />
                <PeopleAtAccount people={peopleList} userInfo={userInfo} setPeopleInCadences={setPeopleInCadences} />
              </AccountViewContainer>
            </PeopleAndAccount>
            : 
            <TierLists>
              <TierBlock>
                  <AccountList tier={1} accounts={TierOne} showPeopleList={getPeopleInfo} />
                </TierBlock>
              <TierBlock>
                  <AccountList tier={2} accounts={TierTwo} showPeopleList={getPeopleInfo} />
              </TierBlock>
              <TierBlock>
                  <AccountList tier={3} accounts={TierThree} showPeopleList={getPeopleInfo} />
              </TierBlock>
            </TierLists>
            }
        </div>
        )
    }

export default Tiers 

const TierBlock = styled.div`
  border: 1px solid #e5e5e5;
  width: calc(86%/3);
  margin: 0 2em;
  border-right: 2px solid rgba(0,0,0,.1);
`

const fadeInAnimation = keyframes`${fadeIn}`;

const PeopleAndAccount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: .5s ${fadeInAnimation};
`

const TierLists = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72vh;
  animation: .5s ${fadeInAnimation};
`

const BackToDashboard = styled.div`
color: #3C9CD2;
width: 97%;
text-align: right;
font-size: .8em;
cursor: pointer;
`

const AccountViewContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: 70vh;
`