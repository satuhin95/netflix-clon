import React, { useId } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesByGenre } from '../store/store';
export default function SelectGenre({genres,type}) {
  const dispatch = useDispatch();
  

  return (
    <Select onChange={(e)=>dispatch(fetchMoviesByGenre({genre: e.target.value,type}))}>
      {genres.map((genre)=>{
        return(
            <option value={genre.id} key={genre.id}>{genre.name}</option>
        )
      })}
    </Select>
  )
}
const Select = styled.select`
  margin-left:5rem;
  cursor:pointer;
  font-size:1.4rem;
  color:#ffffff;
  background-color:rgba(0,0,0,0.4);
`;