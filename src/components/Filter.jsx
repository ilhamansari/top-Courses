 import React from 'react'
import { filterData } from '../data'

 const Filter = (props) => {
  let filterData = props.filterData
  let category = props.category
  let setCategory = props.setCategory


  function filterHandler(title) {
    setCategory(title)
  }
  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center ">
        {
          filterData.map( (data) =>{
            return (
              <button 
              onClick={ ()=> filterHandler(data.title)}
              className={`text-large px-2 py-1 font-medium rounded-md text-white bg-black 
              hover:bg-opacity-50 transition-all duration-300
              ${category == data.title ? 
              "bg-opacity-60 border-white" : 
              "bg-opacity-40 border-transparent" }
              `}
              key={data.id}>
                {data.title}
            </button>)
        })}
    </div>
  )
}
export default Filter