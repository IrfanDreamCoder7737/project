function user(props)
{
     return(
      <div>
      <span>{props.data.name}</span>
      <span>{props.data.email}</span>
      <span>{props.data.addres}</span>
      </div>
     )
}

export default user;