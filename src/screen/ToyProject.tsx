import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import toyData from '../data/toyData';
import Poster from '../components/Toy/Poster';
import TabContainer from '../components/TabContainer';
import { keyword, project } from '../data/projectData';

const Container = styled.div`
display: flex;
flex-wrap: wrap;
`;

const Dimension = styled.div`
width: calc(100% / 3);
border: 1px solid black;
`;


const ToyProject = () => {
  const [category, setCategory] = useState('')
  const onChange = (query: string) => {
    setCategory(query);
  }

  const Data = toyData.map(data => {
    const query = category.toLowerCase();
    if(query === '전체') {
      return data
    }  else {
      const result = data.keywords.includes(query as keyword)
      if(result) return data 
    }
  })
  .filter(item => item !== undefined);
  console.log(Data)

  
  useEffect(() => {
    
  }, [Data])



  return (
    <Container>
      {<TabContainer onChange={onChange} />}
      {
        Data &&
        Data.length > 0 &&
        Data.map(item =>
        item &&  
        <Dimension>
          <Poster key={item.id} {...item}/>
        </Dimension>)
      }
    
    </Container>
  )
}

export default ToyProject
