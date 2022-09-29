
const FilterCard = (props) => {
  return (
    <div className="relative bg-green-700 w-11/12 m-auto min-h-min rounded-md flex  flex-wrap justify-items-start space-x-2 py-9 px-4">{props.children}</div>
  )
}

export default FilterCard