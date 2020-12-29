import React from 'react';
import Currency from './Currency';

class Total extends React.Component{
    render() {
        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
        );

        return (
            <div className='summary__total'>
                <div className='summary__option__label'>Total</div>
                <div className='summary__option__value'>
                    {Currency.format(total)}
                </div>
            </div>
        );
    }
}

export default Total;