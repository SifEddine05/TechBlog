import * as React from 'react';
import { useState } from 'react';




const SideBar = () => {

    const [FilterCategory, setFilter1] = React.useState('All');
    const handlChange1 =(e)=>{
        setFilter1(e.target.value)
        console.log(e.target.value);
    }  
    const [FilterAuthor, setFilter2] = React.useState('All');
    const handlChange2 =(e)=>{
        setFilter2(e.target.value)
    }   
    const [search , setSearch]= useState('');
    const handelChangeText =(e)=>{
        setSearch(e.target.value)
        console.log(e.target.value);
    }
    return (
        <div className='  mr-[2%] '>
                <label className="lg:text-[18px]   md:text-[14px] sm:text-[12px] text-[7px] font-medium "> Search <br/>
                    <input type="search" value={search} placeholder="search by words" maxLength='10' onInput={handelChangeText} className=" mb-[10%] bg-gray-50 border-2 shadow-lg border-gray-300 text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:p-2.5 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </label>
                <label className='lg:text-[18px] md:text-[14px] sm:text-[12px] text-[7px] font-medium text-left leading-1' >Filter By Category <br/>
                    <select value={FilterCategory} onChange={handlChange1} className="hover:cursor-pointer w-full font-medium bg-gray-50 border-2 shadow-lg border-gray-300 mb-[10%] text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block  lg:p-2.5 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected value= {'All'}>All</option>
                            <option value={'web'}>Web Developpment </option>
                            <option value={'Bc'}>Block Chaine</option>
                            <option value={'mobile'}>Mobile Developpment</option>
                            <option value={'Ai'}>Artificial Intelligence </option>
                            <option value={'Cs'}>Cyper Security </option>    
                        </select>
                </label>
                <label className='lg:text-[18px] md:text-[14px] sm:text-[12px] text-[7px] font-medium text-left leading-1' >Filter By Author<br/>
                    <select  value={FilterAuthor} onChange={handlChange2}  className=" w-full hover:cursor-pointer font-medium bg-gray-50 border-2 shadow-lg border-gray-300 text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block  lg:p-2.5 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected value={'All'}>All</option>
                            <option value={'Sifou'}>Sifou </option>
                            <option value={'Khaled'}>Khaled</option>
                            <option value={'Rami'}>Rami</option>
                            <option value={'Ahmed'}>Ahmed </option>
                            <option value={'Rafik'}>Rafik </option>    
                        </select>
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