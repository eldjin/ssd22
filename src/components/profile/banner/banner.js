import React from 'react'
import ToolTip from 'react-tooltip'
import BannerStats from './stats/stats'
import IsOnline from './isOnline'
import BannerAvatar from './avatar'
import BannerInfo from './info'
import BannerTags from './tags/tags'
import BannerFollow from './follow'
import BannerTopOptions from './top-options/top-options'
import NciCard from '../../others/ncicard/ncicard'
const Banner = () => (
  <div className="">
    <NciCard />
    {/* <div className="pro_top">
      <BannerTopOptions />
      <BannerFollow />
    </div> */}

    {/* <BannerAvatar /> */}
    {/* <BannerInfo />
    <BannerTags /> */}

    {/* <hr />

    <IsOnline />
    <BannerStats />

    <ToolTip /> */}
  </div>
)

export default Banner
