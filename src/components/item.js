export const Item = (props) => {
  return (
  <div className="list-item">
    <img src={props.src} alt={ props.src || "" } />
  </div>
  )
};