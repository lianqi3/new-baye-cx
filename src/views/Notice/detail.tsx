import NavBar from '@/components/NavBar/NavBar'
import React from 'react'
import { DetailContent } from './styled'

const NoticeDetail: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar url='/Notice' title='详情' />
      <DetailContent>
        <div className='title'>贝叶斯全新改版即将上线</div>
        <div className='time'>2023/08/25 22：15：32</div>
        <div className='content'>
          贝叶斯全新改版即将上线贝叶斯全新改版即将上线贝叶
          斯全新改版即将上线贝叶斯全新改版即将上线贝叶斯全
          贝叶斯全新改版即将上线贝叶斯全新改版即将上线新改版 即将上线
        </div>
      </DetailContent>
    </React.Fragment>
  )
}

export default NoticeDetail
