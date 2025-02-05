const MakeTable = (props) => {         // <MakeTable /> 로 호출
  const { baseObject } = props;

  return baseObject.map(item => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.team}</td>
      <td>{item.value}</td>
    </tr>
  ))
}

export default MakeTable;