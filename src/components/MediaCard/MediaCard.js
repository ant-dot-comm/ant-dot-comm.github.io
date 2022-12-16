import classNames from "classnames"

export function MediaCard(props) {
  const {
    className,
    children,
    image,
    title,
    url,
  } = props

  const mediaCardClasses = classNames(
    className, 
    "media-card"
  )

  return (
      <a className={mediaCardClasses} href={url} target="_blank" rel='noreferrer'>
        <div className="media-card-image"  style={{backgroundImage: `url("${image}")`}} />
        <div className="media-card-content">
          <h3 className="heading-3 mb">{title}</h3>
          {children}
        </div>
      </a>
  );
}