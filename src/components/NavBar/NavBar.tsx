import mainStore from '@/store'
import { Popup, Toast } from 'antd-mobile'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageContent, TopNav, ButtonNav, BackNav } from './styled'
import { changeNetwork } from '@/web3'
import { DownOutline } from 'antd-mobile-icons'
import { formatStrAddress } from '@/utils'
import { useNavigate } from 'react-router-dom'

interface Props {
  isHome?: boolean
  title?: string | null
  url?: string | null
}
const NavBar: React.FC<Props> = ({ isHome = false, url, title }) => {
  const { i18n, t } = useTranslation()
  const { address } = mainStore()
  const CHAINID = Number(process.env.REACT_APP_CHAIN_ID)
  const [visible, setVisible] = useState<boolean>(false)
  const navigate = useNavigate()

  const linkWallet = () => {
    /**
     * @method 链接钱包
     */
    if (address) {
      const textarea = document.createElement('textarea')
      textarea.value = address
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      Toast.show({
        content: t('copySuccess'),
      })
    } else {
      changeNetwork(CHAINID)
    }
  }

  function changeLocal(val: string) {
    setVisible(false)
    if (i18n.language == val) return
    i18n.changeLanguage(val)
    localStorage.setItem('locale', val)
  }

  function toPage() {
    if (url) {
      navigate(url)
    } else {
      navigate(-1)
    }
  }

  return (
    <React.Fragment>
      <Popup
        closeOnMaskClick
        bodyStyle={{
          borderRadius: '18px 18px 0 0',
        }}
        visible={visible}
        onMaskClick={() => {
          setVisible(false)
        }}
        onClose={() => {
          setVisible(false)
        }}
      >
        <LanguageContent>
          <div>
            <div
              className={`language-item ${i18n.language === 'zh' ? 'active' : ''}`}
              onClick={() => changeLocal('zh')}
            >
              简体中文
            </div>
            <div
              className={`language-item ${i18n.language === 'en' ? 'active' : ''}`}
              onClick={() => changeLocal('en')}
            >
              English
            </div>
          </div>
        </LanguageContent>
      </Popup>
      <TopNav>
        {isHome ? (
          <React.Fragment>
            <ButtonNav className='left' onClick={linkWallet}>
              {address ? formatStrAddress(4, 4, address) : t('linkWallet')}
            </ButtonNav>
            <ButtonNav className='right' onClick={() => setVisible(true)}>
              {i18n.language == 'en' ? 'English' : '简体中文'}
              <DownOutline fontSize={10} color='#387857' />
            </ButtonNav>
          </React.Fragment>
        ) : (
          <BackNav>
            <div>
              <img onClick={toPage} className='backImg' src={require('@/static/back-icon.png')} />
            </div>
            <div className='title'>{title}</div>
            <div></div>
          </BackNav>
        )}
      </TopNav>
    </React.Fragment>
  )
}

export default NavBar
