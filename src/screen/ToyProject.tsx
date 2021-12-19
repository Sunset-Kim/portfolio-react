import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import toyData from '../data/toyData';
import Poster from '../components/Toy/Poster';
import TabContainer from '../components/Toy/TabContainer';
import { keyword } from '../data/projectData';
import Loader from '../components/Common/Loader';

const Container = styled.div`
position: relative;
display: flex;
flex-wrap: wrap;
`;

const Dimension = styled.div`
width: calc(100% / 2);
border-color: ${props => props.theme.color.foreground};
border-right: 1px solid;
border-bottom: 1px solid;

&:nth-child(2n + 1) {
  border-left: 1px solid;
}
&:nth-child(1), &:nth-child(2) {
  border-top: 1px solid;
}

/* md */
${({theme: {media, color}}) => media.tablet`
  width: calc(100% / 3);
  &:nth-child(2n + 1) {
  border-left: none;
  }
  &:nth-child(1), &:nth-child(2) {
    border-top: none;
  }

  &:nth-child(3n + 1) {
    border-left: 1px solid;
  }
  &:nth-child(1), &:nth-child(2), &:nth-child(3) {
    border-top: 1px solid;
  }
`}
`;

const ToyProject:React.FC= ({}) => {
  const [category, setCategory] = useState('전체');
  const [loading, setLoading] = useState(false);

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
  

  const onChange = (query: string) => {
    setCategory(query);   
  } 

  useEffect(() => {
    setLoading(true);
    // ** after fetch Data
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }, [category])


  return (
    <>
    {<TabContainer onChange={onChange} />}
    {
      
      <Container>

      {
        loading ? <Loader /> :
        Data &&
        Data.length > 0 &&
        Data.map(item =>
        item &&  
        <Dimension key={item.id}>
          <Poster  {...item}/>
        </Dimension>)
      }
    </Container>
    }
    
    </>
  )
}

export default ToyProject
