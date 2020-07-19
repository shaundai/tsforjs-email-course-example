import React from 'react'
import styled from 'styled-components'

//images
import linkedin from '../images/linkedin.png'
import salesforce from '../images/salesforce.png'
import website from '../images/websiteicon.png'

const Tiers = () => {
        return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
            <TierBlock>
                <TierTitle>Tier 1</TierTitle>
                <ListAccount>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div><b>Account</b></div>
                    <div style={{fontSize: '.7em'}}># Employees</div>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1em'}}>
                    <div style={{fontSize: '.7em'}}>Account Owner </div>
                    <div style={{fontSize: '.7em'}}>Last Contacted: </div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img alt="Salesforce" src={salesforce} style={{margin: '0 .4em', height: '1.2em'}} />
                    <img alt="LinkedIn" src={linkedin} style={{margin: '0 .4em', height: '1.2em'}} />
                    <img alt="Company Website"  src={website} style={{margin: '0 .4em', height: '1.2em'}}/>
                    </div>
                </ListAccount>
                </TierBlock>
            <TierBlock>
                <TierTitle>Tier 2</TierTitle>
            </TierBlock>
            <TierBlock>
                <TierTitle>Tier 3</TierTitle>
            </TierBlock>
        </div>
        )
    }

export default Tiers 

const TierBlock = styled.div`
  border: 1px solid #e5e5e5;
  width: calc(75%/3);
  margin: 0 2em;
  height: 60vh;
  border-right: 2px solid rgba(0,0,0,.1);
`
const TierTitle = styled.div`
  border-bottom: 2px solid rgba(0,0,0,.1);
  background: linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)),#fff;
  text-align: center;
  font-weight: bold;
  padding: .5em 0;
`
const ListAccount = styled.div`
  border-bottom: 1px solid rgba(0,0,0,.1);
  padding: .5em;
`