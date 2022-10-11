import React from 'react'
import {Card} from 'react-bootstrap'
import {CurrencyFormatter} from '../util.js'

function BudgetCard({name,amount,max}) {
  return (
    <Card>
    <Card.Body>
    <Card.Title className="d-flex justify-content-between
    align-items-baseline fw-normal mb-3">
    <div className='me-2'>{name}</div>
    <div className="d-flex align-items-baseline">{CurrencyFormatter.format(amount)} / 
    <span className='text-muted fs-6 ms-1'>
    {CurrencyFormatter.format(max)}
    </span>
    </div>
    
    </Card.Title>
    </Card.Body>
    </Card>
  )
}

export default BudgetCard