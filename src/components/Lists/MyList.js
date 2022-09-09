import {isEqual} from 'lodash'
import {memo} from 'react'

/*  Primera versión, con memo*/
/* const Li = memo(({ fullname }) => {
  console.log(`renderizando ${fullname}`)
  return (
    <li>
      {fullname}
    </li>
  )
})



const MyList = ({ data }) => {
  console.log('renderizando lista')
  return (
    <ul>
      {data.map(x =>
        <Li
          key={x.name + x.lastname}
          fullname={`${x.name} ${x.lastname}`}
        />
      )}
    </ul>
  )
} */

/* Segunda veresión: traspasando elemento children
children no traspasa los elementos como si estos fueran únicos.

*/
/* Revisando método memo con el segundo parametro permitido, en el cuál se puede visualizar lo que ya se había computado anterioremente */
/* const Li = memo(({ children }) => {
  console.log(`renderizando ${children}`)
  return (
    <li>
      {children}
    </li>
  )
}, (prev, post) =>{
  console.log(prev, post)
}
) */

/* utilizando isEqual, se encarga de comparar elementos anteriores y nuevos*/

const Li = memo(( {children} ) => {

  console.log(`renderizando ${children}`)
  return (
    <li>
      {children}
    </li>
  )
}, isEqual)


const MyList = ({ data }) => {
  console.log(data)
  console.log('renderizando lista')
  return (
    <ul>
      {data.map(x =>
        <Li key={x.name + x.lastname}>
        {x.name} ${x.lastname} </Li>
      )}
    </ul>
  )
}

export default memo(MyList)
