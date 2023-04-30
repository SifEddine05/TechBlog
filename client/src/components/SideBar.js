import * as React from 'react';
import { useState } from 'react';




const SideBar = ({func , blogs , boxes}) => {

    const [FilterCategory, setFilter1] = React.useState('All');
    const [Tab1 ,setTab1] =useState(blogs)
    const handlChange1 =(e)=>{
        setFilter1(e.target.value)
        let value = e.target.value
        const fc = blogs.filter((elem)=>{
            return (elem.category === value)
        }) 
        if(value==='All') {
            func(blogs)
            setTab1(blogs)
        }
        else
        {
            func(fc)
            setTab1(fc)
        }
       
    }  
    const [FilterAuthor, setFilter2] = React.useState('');
    const handlChange2 =(e)=>{
        setFilter2(e.target.value)
        let value1 = e.target.value.toUpperCase();
        const myRegex = new RegExp(value1);

        const fc = blogs.filter((elem)=>{
            return ( myRegex.test(elem.auther.toUpperCase()))
        }) 
        if(value1==='') {
            func(blogs)
            setTab1(blogs)
        }
        else
        {
            func(fc)
            setTab1(fc)
        }

    }   
    const [search , setSearch]= useState('');
    const handelChangeText =(e)=>{
        setSearch(e.target.value)
        let value1 = e.target.value.toUpperCase();
        const myRegex = new RegExp(value1);

        const fc = blogs.filter((elem)=>{
            return ( myRegex.test(elem.description.toUpperCase()))
        }) 
        if(value1==='') {
            func(blogs)
            setTab1(blogs)
        }
        else
        {
            func(fc)
            setTab1(fc)
        }
    }
    return (
        <div className='  mr-[2%] flex  flex-row items-center  justify-around '>
                <label className="lg:text-[18px]   md:text-[14px] sm:text-[12px] text-[7px] font-medium "> Search <br/>
                    <input type="search" value={search} placeholder="search by words" maxLength='10' onInput={handelChangeText} className=" mb-[10%] bg-gray-50 border-2 shadow-lg border-gray-300 text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:p-2.5 p-1 "/>
                </label>
                <label className='lg:text-[18px] md:text-[14px] sm:text-[12px] text-[7px] font-medium text-left leading-1' >Filter By Category <br/>
                    <select value={FilterCategory} onChange={handlChange1} className="hover:cursor-pointer w-full font-medium bg-gray-50 border-2 shadow-lg border-gray-300 mb-[10%] text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block  lg:p-2.5 p-1 ">
                            <option selected value= {'All'}>All</option>
                            <option value={'web'}>Web Developpment </option>
                            <option value={'Bc'}>Block Chaine</option>
                            <option value={'mobile'}>Mobile Developpment</option>
                            <option value={'Ai'}>Artificial Intelligence </option>
                            <option value={'Cs'}>Cyper Security </option>    
                        </select>
                </label>
                <label className="lg:text-[18px]   md:text-[14px] sm:text-[12px] text-[7px] font-medium "> Filter By Author <br/>
                    <input type="search" value={FilterAuthor} placeholder="search by Author" maxLength='10' onInput={handlChange2} className=" mb-[10%] bg-gray-50 border-2 shadow-lg border-gray-300 text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:p-2.5 p-1 "/>
                </label>
        </div>

    /*<div className='w-[25%] mr-[2%] '>
        <div className='mb-[20%] '>
            <TextField value={search}  label="Search By Words" type="search" onInput={handelChangeText} />
        </div>
        <div className='mb-[20%] '>
        <FormControl  className='w-full h-full' >
            <InputLabel  id="demo-simple-select-label" className='text-[8px]'>Filter By Category</InputLabel>
            <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={FilterCategory}
          label="Filter By category"
          onChange={handlChange1}
                >
                <MenuItem value={'All'}>All</MenuItem>
                <MenuItem value={'web'}>Web Developpment </MenuItem>
                <MenuItem value={'Bc'}>Block Chaine</MenuItem>
                <MenuItem value={'mobile'}>Mobile Developpment</MenuItem>
                <MenuItem value={'Ai'}>Artificial Intelligence </MenuItem>
                <MenuItem value={'Cs'}>Cyper Security </MenuItem>
            </Select>

        </FormControl>
        </div>
        
        <div className='w-[5px]'>
        <FormControl className='w-full'  >
            <InputLabel  id="demo-simple-select-label">Filter By Author</InputLabel>
            <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={FilterAuthor}
          label="Filter By author"
          onChange={handlChange2}
                >
                <MenuItem value={'All'}>All</MenuItem>
                <MenuItem value={'Sifou'}>Sifou</MenuItem>
                <MenuItem value={'Khaled'}>Khaled</MenuItem>
                <MenuItem value={'Rami'}>Rami</MenuItem>
                <MenuItem value={'Ahmed'}>Ahmed</MenuItem>
                <MenuItem value={'Rafik'}>Rafik</MenuItem>
            </Select>

        </FormControl>
        </div>
    </div>*/
     );
}
 
export default SideBar;