//import style.css


interface HomeProps {
  count: number;
}




export default function Home(props) { 
  

  return (
    <div>
      <h1>Hello World</h1>
      <p>Contagem: {props.count}</p>
    </div>    
  )  
}

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json()

  return {
    props: {
      count: data.count,
    }
  }
}






