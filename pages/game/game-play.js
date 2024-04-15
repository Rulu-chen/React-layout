import Section from '@/components/layout/section'
import React from 'react'
import Image from 'next/image'
import SearchBar from '@/components/common/search-bar'
// 用在分頁的icon
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from 'react-icons/fa'

export default function GamePlay() {
  return (
    <>
      <Section>
        <div className="game-play-page">
          <div className="game-main">
            <div className="time-table">
              <div className="level">第一關</div>
              <div className="time-group">
                <div className="time-text">剩餘時間</div>
                <div className="game-seconds">01:00</div>
              </div>
              <div className="point-group">
                <div className="point-text">距離破關分數剩</div>
                <div className="game-point">1000</div>
              </div>
            </div>
            <div className="play-div ">
              <div className="balloon-play">
                <img
                  src="/images/game/ballon.png"
                  className="balloon-obj"
                  alt="..."
                />
                <img
                  src="/images/game/ballon.png"
                  className="balloon-obj"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="chara-group">
            <div className="talk"></div>
            <div className="character">
              <img
                src="/images/game/cha01.png"
                classname="character-obj"
                alt="..."
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
