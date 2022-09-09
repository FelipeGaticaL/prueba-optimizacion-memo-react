import { useMemo } from 'react'
import { useCallback, useState } from 'react'
import Title from './components/Title'
import MyForm from './components/Forms/MyForm'
import MyList from './components/Lists/MyList'

/* Versión sin useCallback */
/* function App() {
  Arreglo vacío, Actualiza Valores
  const [valores, setValores] = useState([])
  Recibe valores
  const handleSubmit = (values) => {
    Actualiza valores, generando una copia, luego pasa valores que recibe del FORM 
    setValores([
      ...valores,
      values
    ])
  }

  return (
    <div>
      <Title>Mi título</Title>
      //Capturador de valores
      <MyForm onSubmit={handleSubmit} />
      <MyList data={valores} />
    </div>
  );
} */

/* Versión con useCallback */
function App() {
  /* Arreglo vacío, Actualiza Valores */
  const [valores, setValores] = useState([])
 /*  Recibe valores */
  const handleSubmit = useCallback((values) => {
    /* Actualiza valores, generando una copia, luego pasa valores que recibe del FORM  */
    setValores(data => ([
      ...data,
      values
    ]))
  }, [])

  /* Esta función con el hook useMemo, nos rive para saber la velocidad y optimización de nuestra app
   */

  const iterador = 50000000
  console.time('memo')
  const memoized = useMemo(()=> {
    let total = 0
    for (let i=0; i< iterador; i++){
      total = total * iterador
    }
  }, [iterador])
  console.timeEnd('memo')





  return (
    <div>
      <Title>Mi título</Title>
 {/*      Capturador de valores */}
      <MyForm onSubmit={handleSubmit} />
      <MyList data={valores} />
    </div>
  );
}


export default App;
