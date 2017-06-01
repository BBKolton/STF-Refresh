import React from 'react'

import { Breadcrumb } from 'antd'

const Body = ({routes, children}) => (
    <div>
      {routes[1].path.length >= 2 && <Breadcrumb routes={routes} /> }
      {children}
    </div>
)
export default Body