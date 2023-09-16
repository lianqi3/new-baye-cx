import NavBar from '@/components/NavBar/NavBar'
import React from 'react'
import { NoticeList } from './styled'
import { useNavigate } from 'react-router-dom'

const Notice: React.FC = () => {
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <NavBar title='公告' url='/' />
      <NoticeList>
        <div className='box' onClick={() => navigate('/NoticeDetail')}>
          <div>
            <div className='title'>贝叶斯全新改版即将上线</div>
            <div className='time'>2023/08/25 22：15：32</div>
          </div>
          <img src={require('@/static/right.png')} />
        </div>
        <div className='box'>
          <div>
            <div className='title'>贝叶斯全新改版即将上线</div>
            <div className='time'>2023/08/25 22：15：32</div>
          </div>
          <img src={require('@/static/right.png')} />
        </div>
      </NoticeList>
    </React.Fragment>
  )
}
export default Notice
