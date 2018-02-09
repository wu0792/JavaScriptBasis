import React from 'react'

const Button = ({ children, color }) => (<button style={{ color: color }}>{children}</button>)

const DangerButton = ({ children }) => <Button color='red'>{children}</Button>

export const Middle = () => (
  <div>
    <p>Are you sure?</p>
    <DangerButton>YES</DangerButton>
    <Button>CANCEL</Button>
  </div>
);

// export const Middle = () => {
//     return (
//         <div>
//             <DangerButton>i'm the danger button</DangerButton>
//         </div>)
// }