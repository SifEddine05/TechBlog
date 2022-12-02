import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
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
    <div className='w-[25%] mr-[2%] '>
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
        
        <div>
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
    </div>
     );
}
 
export default SideBar;