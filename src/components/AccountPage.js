import React from 'react'
import styled from 'styled-components'

const AccountPage = ({accountInfo}) =>  {
        return (
            <div>
                Info about this account
                {accountInfo.name}
            </div>
        )
    
}

export default AccountPage