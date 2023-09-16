import React, { memo, useEffect, useState } from 'react'
import { Content, Menu, Notice, Overview, RankList, Symbols } from './styled'
import { useTranslation } from 'react-i18next'
import NavBar from '@/components/NavBar/NavBar'
import { Link, useNavigate } from 'react-router-dom'
import { Swiper } from 'antd-mobile'
import mainStore from '@/store'

const Home: React.FC = () => {
  const {
    noticeList,
    getNoticeList,
    getCoinList,
    coinData,
    getOverviewData,
    overviewData,
    getFuelList,
    fuelList,
  } = mainStore()
  const { i18n, t } = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    getNoticeList()
    getCoinList()
    getOverviewData()
    getFuelList()
  }, [])

  return (
    <div>
      <NavBar isHome />
      <Content>
        <img className='banner' src={require('@/static/banner.png')} />
        <Notice>
          <div className='swiper-box'>
            <img src={require('@/static/notice-ico.png')} />
            <Swiper autoplay loop direction='vertical' indicator={() => null}>
              {noticeList.map((item, index) => {
                return <Swiper.Item key={index}>{item.title}</Swiper.Item>
              })}
            </Swiper>
            <img onClick={() => navigate('/Notice')} src={require('@/static/notice-list.png')} />
          </div>
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
          {coinData?.map((item, index) => {
            return (
              <div className='td' key={index}>
                <div className='box'>
                  {item.transaction_pair.split('/')[0]}
                  <span>/{item.transaction_pair.split('/')[1]}</span>
                </div>
                <div className='box'>{item.range_ability}</div>
                <div className='box'>
                  <div className='rate'>{item.exchange_rate}%</div>
                </div>
              </div>
            )
          })}
        </Symbols>
        <Overview>
          <img className='mask' src={require('@/static/mask.png')} />
          <div className='title'>全网概览</div>
          <div className='content'>
            <div className='box'>
              <img src={require('@/static/overview-box.png')} />
              <div className='box-title'>当前区块高度</div>
              <div className='box-num'>{overviewData?.data_1}</div>
            </div>
            <div className='box right'>
              <img className='scaleX' src={require('@/static/overview-box.png')} />
              <div className='box-title'>昨天全网收益(BAYE)</div>
              <div className='box-num'>{overviewData?.data_2}</div>
            </div>
            <div className='box'>
              <img className='scaleY' src={require('@/static/overview-box.png')} />
              <div className='box-title'>全网总算力(CU)</div>
              <div className='box-num'>{overviewData?.data_3}</div>
            </div>
            <div className='box right'>
              <img className='scaleXY' src={require('@/static/overview-box.png')} />
              <div className='box-title'>总量(BAYE)</div>
              <div className='box-num'>{overviewData?.data_4}</div>
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
            {fuelList?.map((item, index) => {
              return (
                <div className='td' key={index}>
                  <div>
                    <span className={`span${index}`}>{index + 1}</span>
                  </div>
                  <div>{item.suanli}</div>
                  <div>{item.address}</div>
                </div>
              )
            })}
          </div>
        </RankList>
      </Content>
    </div>
  )
}

export default memo(Home)
