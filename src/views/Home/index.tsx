import React, { memo, useState } from 'react'
import { Content, Menu, Notice, Overview, RankList, Symbols } from './styled'
import { useTranslation } from 'react-i18next'
import NavBar from '@/components/NavBar/NavBar'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  const { i18n, t } = useTranslation()

  return (
    <div>
      <NavBar isHome />
      <Content>
        <img className='banner' src={require('@/static/banner.png')} />
        <Notice>
          <div>
            <img src={require('@/static/notice-ico.png')} />
            贝叶斯全新改版即将上线，敬请期待贝叶斯全新改版即将上线，敬请期待贝叶斯全新改版即将上线，敬请期待贝叶斯全新改版即将上线，敬请期待......
          </div>
          <img src={require('@/static/notice-list.png')} />
        </Notice>
        <Menu>
          <div className='box'>
            <Link to='/Mine'>
              <img src={require('@/static/menu1.png')} />
              矿机
            </Link>
          </div>
          <div className='box'>
            <Link to='/Assets'>
              <img src={require('@/static/menu2.png')} />
              资产
            </Link>
          </div>
          <div className='box'>
            <Link to='/MinePool'>
              <img src={require('@/static/menu3.png')} />
              矿池
            </Link>
          </div>
          <div className='box'>
            <Link to='/Invite'>
              <img src={require('@/static/menu4.png')} />
              邀请
            </Link>
          </div>
        </Menu>
        <Symbols>
          <div className='th'>
            <div className='box'>交易对</div>
            <div className='box'>最新价</div>
            <div className='box'>24H涨跌幅</div>
          </div>
          <div className='td'>
            <div className='box'>
              BAYE<span>/USDT</span>
            </div>
            <div className='box'>0.0700</div>
            <div className='box'>
              <div className='rate'>0.07%</div>
            </div>
          </div>
        </Symbols>
        <Overview>
          <img className='mask' src={require('@/static/mask.png')} />
          <div className='title'>全网概览</div>
          <div className='content'>
            <div className='box'>
              <img src={require('@/static/overview-box.png')} />
              <div className='box-title'>当前区块高度</div>
              <div className='box-num'>13302294</div>
            </div>
            <div className='box right'>
              <img className='scaleX' src={require('@/static/overview-box.png')} />
              <div className='box-title'>昨天全网收益(BAYE)</div>
              <div className='box-num'>1330.2294</div>
            </div>
            <div className='box'>
              <img className='scaleY' src={require('@/static/overview-box.png')} />
              <div className='box-title'>全网总算力(CU)</div>
              <div className='box-num'>13302294</div>
            </div>
            <div className='box right'>
              <img className='scaleXY' src={require('@/static/overview-box.png')} />
              <div className='box-title'>总量(BAYE)</div>
              <div className='box-num'>13302294</div>
            </div>
          </div>
        </Overview>
        <RankList>
          <div className='title'>全网算力排行</div>
          <div className='content'>
            <div className='th'>
              <div>排名</div>
              <div>算力(CU)</div>
              <div>地址</div>
            </div>
            <div className='td'>
              <div>
                <span className='span0'>1</span>
              </div>
              <div>56465</div>
              <div>0x91c2*****44bd06</div>
            </div>
            <div className='td'>
              <div>
                <span className='span1'>2</span>
              </div>
              <div>56465</div>
              <div>0x91c2*****44bd06</div>
            </div>
          </div>
        </RankList>
      </Content>
    </div>
  )
}

export default memo(Home)
