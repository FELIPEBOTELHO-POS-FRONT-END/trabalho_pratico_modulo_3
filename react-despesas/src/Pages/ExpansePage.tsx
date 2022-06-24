import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import ExpanseHeader from "../Components/ExpanseHeader";
import ExpanseMain from "../Components/ExpanseMain";
import { IExpanse } from "../Interfaces/apiInterfaces";
import { getExpanses } from "../Service/apiService";

export default function ExpansePage() {
 
  const navigate = useNavigate();
  const {month} = useParams<{month: string}>();
  const [expanses, setExpanses] =useState<IExpanse[]>([]);


useEffect(()=>{
    getExpanses(month!).then(data=>{
        console.log(data);
        setExpanses(data);
    })
},[month])

function getSumExpanses(){
    if(expanses.length> 0){
        const sum = expanses.reduce((a,b)=> a + b.valor,0);
        return `R$ ${sum.toFixed(2).replace(".",",")}`
    }
    return '-'
}

function handleSelectedDate(yearSelected: number, monthSelected: number){
    debugger;
    const currentStringDate = yearSelected+'-'+ monthSelected.toString().padStart(2,'0')
    if(month !== currentStringDate){
        navigate(`/despesas/${currentStringDate}`);
    }
}

  return (
    <Box component="div">
      <ExpanseHeader firstDate={month!} onChangeCompleteDate={handleSelectedDate} somaDespesas={getSumExpanses()}/>
      <ExpanseMain expanses={expanses} />
    </Box>
  );
}
