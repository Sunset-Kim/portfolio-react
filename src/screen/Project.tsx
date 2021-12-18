import React, { useState, useEffect } from 'react'
import Article from '../components/Project/Article'
import projectData, { keyword } from '../data/projectData';


const Project = () => {
  return (
    <>
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
