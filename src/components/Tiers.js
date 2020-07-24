import React, { useState } from 'react'
import styled from 'styled-components'
import AccountList from './AccountList'
import PeopleAtAccount from './PeopleAtAccount'


const Tiers = ({list}) => {

  const [clickedAccountId, setClickedAccountId] = useState('')
  const [peopleAtAccountActive, setPeopleAtAccountActive] = useState(false)


  const TierOne = list.filter(item =>{
    return item.account_tier && item.account_tier.id === 13
  })
  const TierTwo = list.filter(item =>{
    return item.account_tier && item.account_tier.id === 14
  })
  const TierThree = list.filter(item =>{
    return item.account_tier && item.account_tier.id === 15
  })

  const showPeopleList = (id) => {
    setClickedAccountId(id)
    setPeopleAtAccountActive(true)
  }

        return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
            <TierBlock>
                <AccountList tier={1} accounts={TierOne} showPeopleList={showPeopleList} />
              </TierBlock>
            <TierBlock>
                <AccountList tier={2} accounts={TierTwo} showPeopleList={showPeopleList}/>
            </TierBlock>

            <TierBlock>
                <AccountList tier={3} accounts={TierThree} showPeopleList={showPeopleList}/>
            </TierBlock>
            <PeopleAtAccount isShowing={peopleAtAccountActive}/>
        </div>
        )
    }

export default Tiers 

const TierTitle = styled.div`
  border-bottom: 2px solid rgba(0,0,0,.1);
  background: linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)),#fff;
  text-align: center;
  font-weight: bold;
  padding: .5em 0;
`

const TierBlock = styled.div`
  border: 1px solid #e5e5e5;
  width: calc(75%/3);
  margin: 0 2em;
  border-right: 2px solid rgba(0,0,0,.1);
`
