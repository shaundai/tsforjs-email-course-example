import React, { useState } from 'react'
import styled from 'styled-components'
import AccountList from './AccountList'
import AccountPage from './AccountPage'
import PeopleAtAccount from './PeopleAtAccount'

//api
import SalesLoft from './util/salesloftApi'

const Tiers = ({list}) => {

  const [peopleAtAccountActive, setPeopleAtAccountActive] = useState(false)
  const [peopleList, setPeopleList] = useState([])
  const [accountInfo, setAccountInfo] = useState({})

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
        setAccountInfo(accountData)
        setPeopleAtAccountActive(true)
    }
    catch(err){
      console.log(`My error code is ${err.status}.  I errored out bc ${err}`)
    }
}

        return (
        <div> 
            {peopleAtAccountActive ?

            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
              <AccountPage accountInfo={accountInfo}/>
              <PeopleAtAccount people={peopleList} />
            </div>
            : 
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
              <TierBlock>
                  <AccountList tier={1} accounts={TierOne} showPeopleList={getPeopleInfo} />
                </TierBlock>
              <TierBlock>
                  <AccountList tier={2} accounts={TierTwo} showPeopleList={getPeopleInfo} />
              </TierBlock>
              <TierBlock>
                  <AccountList tier={3} accounts={TierThree} showPeopleList={getPeopleInfo} />
              </TierBlock>
            </div>
            }
        </div>
        )
    }

export default Tiers 

const TierBlock = styled.div`
  border: 1px solid #e5e5e5;
  width: calc(75%/3);
  margin: 0 2em;
  border-right: 2px solid rgba(0,0,0,.1);
`
