

function Category({title , image}) {
  

  return (
        <div className="flex flex-col  items-center w-46 h-49 rounded-xl shadow-lg shadow-gray-400">
            <img src={image} alt=""/>
            <p>{title}</p>
        </div>
  )
}
export default Category
