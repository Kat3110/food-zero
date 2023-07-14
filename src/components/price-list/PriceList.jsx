import './price-list.css'

export function PriceList({
                            cost,
                            title,
                            subtitle
                          }) {
  return (
    <>
      <div className='price-list'>
        <span className='heading-four price-list__cost'>{cost}</span>
        <h1 className='heading-three price-list__title'>{title}</h1>
        <p className='body price-list__subtitle'>{subtitle}</p>
      </div>
    </>
  )
}