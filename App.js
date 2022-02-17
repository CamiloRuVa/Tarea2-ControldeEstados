/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useEffect, useState} from 'react';
 import { Text, View } from 'react-native';
 
const Style = {
  fontSize: 30,
};

const NuevoComponente = ({title}) =>{
  return <Text style={Style} >{title}</Text>
}


const App = () =>{
  const [contador, setContador] = useState(0);
  const [minutos, setMinutos] = useState(0);
  
  useEffect(() => {  
    const Intervalo = setInterval(() =>{
      setContador(contador+1);
      if(contador == 59){
        setContador(0);
        setMinutos(minutos+1);
      }
    },1000);
    return() => clearInterval(Intervalo);
  });

  let sSegundos = `${contador}`, sMinutos = `${minutos}`;

  if(contador < 10){ sSegundos = `0${contador}`; }
  if(minutos < 10){ sMinutos = `0${minutos}`; }

  const formato  = `${sMinutos}:${sSegundos}`;

  return(
    <View>
        <NuevoComponente title={formato} />
    </View>
  )
}

 export default App;