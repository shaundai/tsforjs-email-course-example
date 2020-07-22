import React from 'react'
import styled from 'styled-components'
import AccountList from './AccountList'
import AccountList2 from './accountlist2'


const Tiers = ({list}) => {

  const TierOne = list.filter(item =>{
    return item.account_tier && item.account_tier.id === 13
  })
  const TierTwo = list.filter(item =>{
    return item.account_tier && item.account_tier.id === 14
  })
  const TierThree = list.filter(item =>{
    return item.account_tier && item.account_tier.id === 15
  })

        return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
            <TierBlock>
                <AccountList tier={1} accounts={TierOne}/>
              </TierBlock>

            <TierBlock>
                <AccountList tier={2} accounts={TierTwo}/>
            </TierBlock>

            <TierBlock>
                <AccountList2 tier={3} accounts={TierThree}/>
            </TierBlock>
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
  height: 60vh;
  border-right: 2px solid rgba(0,0,0,.1);
`
