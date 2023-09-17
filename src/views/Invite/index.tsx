import NavBar from '@/components/NavBar/NavBar'
import { Content, InviteBox, InviteInfo } from './styled'
import store from '@/store/minePool'
import { useEffect } from 'react'
import QRCode from 'qrcode.react'
import { Toast } from 'antd-mobile'
import { t } from 'i18next'

const Invite: React.FC = () => {
  const { getDataInfo, dataInfo } = store()

  const paddingStyle = {
    margin: '200px auto auto',
    padding: '8px',
    backgroundColor: '#fff',
  }

  useEffect(() => {
    getDataInfo()
  }, [])

  const handleCopyContent = () => {
    const textarea = document.createElement('textarea')
    textarea.value = dataInfo?.invite_url || ''
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    Toast.show({
      content: '复制成功',
    })
  }

  return (
    <>
      <NavBar title='邀请' />
      <Content>
        <InviteBox>
          <div className='title'>Invite Friends</div>
          <div className='info'>
            Friends pledge to buy computing powerthe boss easily get commission
          </div>
          <QRCode
            value={dataInfo?.invite_qr_code || ''}
            size={164} // 设置二维码大小，以像素为单位
            fgColor='#000' // 设置前景色（二维码颜色）
            bgColor='#fff' // 设置背景色
            level='H' // 设置纠错级别（可选值：L, M, Q, H）
            style={paddingStyle}
          />
        </InviteBox>
        <InviteInfo>
          <div>
            邀请链接 <span>{dataInfo?.invite_url}</span>
          </div>
          <img src={require('@/static/copy.png')} onClick={() => handleCopyContent()} />
        </InviteInfo>
      </Content>
    </>
  )
}
export default Invite
