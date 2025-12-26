

function Category({title , image}) {
  

  return (
        <div className="flex flex-col  items-center   rounded-xl shadow-lg shadow-gray-400 pl-4 pr-4 pt-2 pb-2">
            <img src={image} alt=""/>
            <p>{title}</p>
        </div>
  )
}
export default Category
