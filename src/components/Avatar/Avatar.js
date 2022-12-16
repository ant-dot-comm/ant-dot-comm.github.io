import classNames from "classnames"

export function Avatar(props) {
  const {
    className,
    imageUrl,
  } = props

  const avatarClasses = classNames(className, "avatar grow")

  return (
    <img className={avatarClasses} src={imageUrl} alt="avatar"/>
  );
}
