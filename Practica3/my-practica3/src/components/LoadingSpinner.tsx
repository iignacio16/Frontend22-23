import React from 'react'
import ReactLoading from 'react-loading'

export const LoadingSpinner = () => {
    return (
      <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ReactLoading type="spin" color="#333" />
      </div>
    )
}