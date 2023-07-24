import './price-list.scss'

export function PriceList({
                            cost,
                            title,
                            subtitle
                          }) {
  return (
    <>
      <div className='price-list'>
        <span className='heading-four price-list__cost'>{cost}</span>
        <div className='divider'></div>
        <h3 className='heading-three price-list__title'>{title}</h3>
        <p className='body-text price-list__subtitle'>{subtitle}</p>
      </div>
    </>
  )
}