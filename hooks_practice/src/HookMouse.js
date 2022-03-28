import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
    console.log('mouse Event');
       setX(e.clientX)
       setY(e.clientY)
    }

    useEffect(() =>{
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('Component Unmounting Code')
            window.removeEventListener('mousemove', logMousePosition);
        }
    },[])

  return (
    <div>
   hooks x - {x} y - {y}
    </div>
  )
}

export default HookMouse