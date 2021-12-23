import React, { useState, useEffect } from 'react'
import Article from '../components/Project/Article'
import projectData, { keyword } from '../data/projectData';
import styled from 'styled-components';
import Callout from '../components/Callout';

const Project = () => {
  return (
    <>
    <Callout>
      재직당시 진행했던 프로젝트를 정리했습니다.
    </Callout>
      {
        projectData.sort((a, b) => b.id - a.id).map((item, index) => {
          
          return (
            <Article
              key={item.id}
              {...item}
            />
          )
        })
      }

    </>
  )
}

export default Project
