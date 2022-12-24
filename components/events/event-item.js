import Link from "next/link";

function EventItem(props) {
  const { title, image, date, location, id } = props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }) // convert date to human readable date
    const formattedLocation = location.replace(', ', '\n') // replace comma with new line

    const exploreLink = `/events/${id}`

  return (
    <li>
      <img src={'/' + image} alt="" /> 
      <div>
        <h2>{title}</h2>
        <div>
          <time>{humanReadableDate}</time>
        </div>
        <div>
          <address>{formattedLocation}</address>
        </div>
      </div>
      <div>
        <Link href={exploreLink}>Explore Event</Link>
      </div>
    </li>
  );
}

export default EventItem;
