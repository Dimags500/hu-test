
import React, { useState, useEffect , useRef } from 'react'
import { List } from '../components/List'
import {getData} from '../services/api'
import Select from 'react-select';


export const Home = () => {


    const [currData ,setCurrData] = useState([]);
    const [languages ,setlanguages] = useState([]);
    const [lectures ,setLectures] = useState([]);

    const [selectedLanguage, setSelectedLanguage] = useState({ label: "languages", value: 0 });
    const [selectedLector, setSelectedLector] = useState({ label: "lectures", value: 0 });
    const [loading ,setLoading] = useState(true);


    useEffect(() => {
      fetchData()
    }, [])
    

const fetchData = async () =>{



      const res = await getData() ;
      const {Lecturers , Languages } = {...res} ;
      setLectures(Lecturers) ;
      setlanguages(Languages) ;
      setLoading(false)
}




  const lecturesOptions = lectures.map( item => {
    return {value: item.languages , label: item.name}
  })

  const languagesOptions = languages.map( item => {
    return {value: item.id , label: item.name}
  })


  function filterLector(e){
    
    let lang = e.value ;
    const data = [] ;
    for (let i = 0; i < lang.length; i++) {
        const item= languages.filter( item => {
            if( item.id == lang[i]){
                return item
            } } ) ;

        data.push(item) ;
    }
        let temp = data.flat(Infinity) ;
        let names = temp.map(item => item.name);
      setCurrData(names) 
  }

  function filterLanguage(e){
    const id = e.value
    const langs = lectures.filter(lecture =>lecture.languages.includes(id))  ;
    const names = langs.map(item => item.name);
    setCurrData(names);

  }

  const displayOptions = () => {
    return( <div>
                <div>  <Select  defaultValue={selectedLector}  onChange={ (e)=>{ setSelectedLector(e) ; filterLector(e) } } options={lecturesOptions}/> </div>
                <div>  <Select  defaultValue={selectedLanguage}  onChange={ (e)=>{ setSelectedLanguage(e) ; filterLanguage(e) } } options={languagesOptions}/> </div>
                <List data={currData} />
        </div> )
  }

  return(<>{loading ? <p>Loading</p> : displayOptions()}</>)
  
}