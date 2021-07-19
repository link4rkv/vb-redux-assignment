import { useSelector } from "react-redux"

const ShowList = () => {
  const lists = useSelector(state => state.lists);

  return (
    <ul>
      {lists.map(list => <li>{list}</li>)}
    </ul>
  )
}

export default ShowList