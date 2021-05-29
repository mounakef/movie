 const FilterRating = ({SearchRating}) => {
    const handelChange = (e)=>
    {
        SearchRating(e.target.value)
    }
    return (
       
        <div>
           <input onChange={e=>handelChange(e.target.value)} ></input> 
        </div>
    )
}
export default FilterRating