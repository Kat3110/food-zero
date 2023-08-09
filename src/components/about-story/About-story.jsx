import './about-story.scss';

export function AboutStory() {
  return (
    <section className='about-story content'>
      <div className='about-story__text'>
        <h2 className='heading-one about-story__title'>Our Story</h2>
        <p className='body-text about-story__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. </p>
      </div>
      <img className='about-story__img' src='About1.png' alt=''/>
    </section>
  )
}