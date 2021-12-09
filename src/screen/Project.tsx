import React from 'react'
import styled from 'styled-components'
import { JQBadge, JSBadge, ReactBadge } from '../components/Badges'
import Article from '../components/Project/Article'


const Project = () => {
  return (
    <>
      <Article title="프로젝트 이름" desc="프로젝트 설명" badge={[ReactBadge, JSBadge]} img="/images/profile_img.jpg" />
      <Article title="프로젝트 이름2" desc="프로젝트 설명2" badge={[ReactBadge, JQBadge]} img="/images/profile_img.jpg" direction="left" />
    </>
  )
}

export default Project
