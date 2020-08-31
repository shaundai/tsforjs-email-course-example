import React from 'react'
import { useAsync } from 'react-use'
import styled from 'styled-components'

import utilFunctions from './util/utilFunctions'
import { CurrentCadences } from './CurrentCadences'
import SalesLoft from './util/salesloftApi'

//images
import linkedin from '../images/linkedin.png'
import salesforce from '../images/salesforce.png'
import website from '../images/websiteicon.png'

const PeopleAtAccount = ({people, userInfo, setPeopleInCadences}) => {

  useAsync(async () => {
    try {
      const cadencesCount = Promise.all(people.map(async (person) => (await SalesLoft.getIdsOfCadencesByPerson(person.id)).data.data.length))
      const numberInCadences = (await cadencesCount).filter(count => count > 0).length
      setPeopleInCadences(numberInCadences)
    }
    catch(err){
      console.log(`My error code is ${err.status}.  I errored out bc ${err}`)
    }
  }, [])

            return (
                <div style={{width: '50vw', margin: 0, padding: 0, border: '1px solid rgb(229, 229, 229)'}}>
                    <TierTitle>Contacts ({people.length})</TierTitle>
                    <ul style={{listStyleType: 'none', margin: 0, padding: 0, height: '60vh', overflow: 'auto', backgroundColor: 'white'}}>
                    {people.map(person => (
                    <ListPeople key={person.id}>
                      <div>
                        <TextContainer>
                          <div style={{display: 'flex', flexDirection: 'column', width: '50%'}}>
                            <div style={{fontSize: '.8em'}}><b>{person.first_name} {person.last_name}</b></div>
                            <div style={{fontSize: '.6em'}}>{person.title}</div>
                            <div style={{fontSize: '.7em', marginTop: '.5vh', fontWeight: 600, color: '#3C9CD2'}}>{person.email_address}</div>

                            {person.last_contacted_at ? <div style={{fontSize: '.7em', marginTop: '1vh', fontWeight: 600}}><em>Last Contacted: {person.last_contacted_at && utilFunctions.parsedDate(person.last_contacted_at)} ago</em></div> : <div style={{fontSize: '.7em', marginTop: '1vh'}}>Never Contacted</div>}
                          </div>
                          <div style={{display: 'flex', flexDirection: 'column', paddingRight: '.5em', paddingBottom: '.5em', width: '50%'}}>
                            <div style={{width: '100%', textAlign: 'right', fontSize: '.8em'}}><b>{utilFunctions.findReadableSeniority(person.job_seniority)}</b></div>
                            <CurrentCadences personId={person.id} firstName={person.first_name} userInfo={userInfo} />
                          </div>
                        </TextContainer>

                        <SocialContainer>
                          <div style={{margin: '0 auto'}}>
                              <a href={person.crm_url}><img alt="Salesforce" src={salesforce} style={{margin: '0 .3em', height: '1.2em'}} /></a>
                              <a href={person.linkedin_url}><img alt="LinkedIn" src={linkedin} style={{margin: '0 .3em', height: '1.2em'}} /></a>
                              <a href={person.website}><img alt="Company Website"  src={website} style={{margin: '0 .3em', height: '1.2em'}}/></a>
                          </div>
                        </SocialContainer>
                        </div>
    
                    </ListPeople>
                    ))}
                    </ul>
                </div>
            )
}

export default PeopleAtAccount

const TierTitle = styled.div`
  border-bottom: 2px solid rgba(0,0,0,.1);
  background: linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)),#fff;
  text-align: center;
  font-weight: bold;
  padding: .5em 0;
`
const ListPeople = styled.li`
  border-bottom: 1px solid rgba(0,0,0,.1);
  width: 100%;
`

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: .5em;
  padding-left: .5em;
`

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5vh;
`