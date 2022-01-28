// Write your code here.
import './index.css'

const Banner = props => {
  const {heading, details, classname} = props
  return (
    <li className={classname}>
      <div className="text-container">
        <h1 className="heading">{heading}</h1>
        <p className="para">{details}</p>
        <button className="button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default Banner
