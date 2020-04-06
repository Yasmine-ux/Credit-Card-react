  
import React, { useState } from 'react'
import Card from '../components/card.js';

function CreditCard () {
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')

        return (
        <div>
            <Card number={number} name={name} expiry={expiry}/>
            <form>
        <input
          type='tel'
          name='number'
          placeholder='Card Number'
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type='text'
          name='expiry'
          placeholder='MMYY'
          value={expiry}
          onChange={e => setExpiry(e.target.value)}
        />
      </form>
      </div>
        )
    
}
export default CreditCard