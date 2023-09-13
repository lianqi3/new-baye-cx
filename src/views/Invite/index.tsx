import NavBar from '@/components/NavBar/NavBar'
import { Content, InviteBox, InviteInfo } from './styled'

const Invite: React.FC = () => {
  return (
    <>
      <NavBar title='邀请' />
      <Content>
        <InviteBox>
          <div className='title'>Invite Friends</div>
          <div className='info'>
            Friends pledge to buy computing powerthe boss easily get commission
          </div>
        </InviteBox>
        <InviteInfo>
          <div>
            邀请链接
            <span>https//:vip.bayess.ero/58624</span>
          </div>
          <img src={require('@/static/copy.png')} />
        </InviteInfo>
      </Content>
    </>
  )
}
export default Invite
