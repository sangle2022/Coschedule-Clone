import { Image } from '@chakra-ui/react'
import React from 'react'

const CompanyImage = () => {
  return (
    <div>
        <Image width="100%" height="718px" zIndex="-1"
         src='https://app.coschedule.com/img/company-details-capture/company-details-background-afce3f353ce8f5a9cc3f29f113e183fc.jpg'/>

         <Image marginTop="-670px" marginLeft="200px" zIndex="1" src='https://app.coschedule.com/img/company-details-capture/company-details-quote-b78b40f2537508deee8ae7e2ed1e1f51.png' />

    </div>
  )
}

export default CompanyImage