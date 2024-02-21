import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";
import './index.css';

function App() {
  const [count, setCount] = useState(0)
  const [courses, setCourses] = useState(null);
  const[category, setCategory] = useState(filterData[0].title)

  async function fetchData() {
    try {
      let repsonse = await fetch(apiUrl);
      let output = await repsonse.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("Network error");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <div>
        <Navbar />
      </div>

      <div>
        <Filter 
        category = {category}
        setCategory = {setCategory}
        key={filterData.id} filterData={filterData} />
      </div>

      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]"
      >{!courses ? <Spinner /> : <Cards courses={courses} category = {category} />}</div>
    </div>
  );
}


export default App
