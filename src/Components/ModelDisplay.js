import React, { useContext } from 'react'
import ModelViewer from './ModelViewer'
import { DataContext } from './Context/DataContext';
import { useParams } from 'react-router-dom';

const ModelDisplay = () => {

  const { GLBData } = useContext(DataContext) 
  const { id } = useParams()
  console.log(id)
  const Model = GLBData.filter((mod)=>mod._id === id);
  const modelPath = Model[0].file3d
  console.log(modelPath)
  return (
    <div style={{height:"100vh"}}>
      <ModelViewer scale="10" modelPath={modelPath} />
    </div>
        
  )
}

export default ModelDisplay