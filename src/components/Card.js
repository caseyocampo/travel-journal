import icon from '../assets/images/location.svg'

function Card(props) {
  return (
    <div className='cards'>
      <div>
        <img
          src={require(`../assets/images/${props.imageUrl}`)}
          alt='location'
          className='card--img'
        />
      </div>
      <div className='card--info'>
        <p className='card--location'>
          <img src={icon} className='location--icon' alt='location pin icon' />
          {props.location}
        </p>
        <a
          href={props.googleMapsUrl}
          target='_blank'
          rel='noopener'
          className='card--google'
        >
          View on Google Maps
        </a>
        <h1 className='card--heading'>{props.title}</h1>
        <p className='card--dates'>
          {props.startDate} - {props.endDate}
        </p>
        <p className='card--description'>{props.description}</p>
      </div>
    </div>
  )
}

export default Card
