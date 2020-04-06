import React from 'react';

function Card (props){
    const renderCardNumber = number => {
        number = number.toString()
        let resultStr = ''
        for(let i =0; i < number.length; i += 4) {
          resultStr += number.slice(i, i + 4) + ' '
        }
        return (resultStr.trim()).slice(0,19)
      }
      const renderValidThru = number => {
        number = number.toString()
        return number.slice(0, 2) + '/' + number.slice(2)
      }
      const rendercardname = name => {
          name = name.toString()
          return name.slice(0,20)
      }
    return (
        <div className='credit-card'>
            <div className='credit-card__logo'>
            <img alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/a/ac/Old_Visa_Logo.svg' width='60' height='60'/> 
            </div>
            <div className='credit-card__number'>{renderCardNumber(props.number)}</div>
            <div className='credit-card__info'>
                <div className='credit-card__info_name'>
                    <div className='credit-card__info_label'>CARDHOLDER'S NAME</div>
                    <div>{rendercardname(props.name.toUpperCase())}</div>
                </div>
                <div className='credit-card__info_expiry'>
                    <div className='credit-card__info_label'>VALID UP TO</div>
                    <div>{renderValidThru(props.expiry)}</div>
                </div>
            </div>

        </div>
    )
}
export default Card