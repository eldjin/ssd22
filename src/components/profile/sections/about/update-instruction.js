import React from 'react'
import AppLink from '../../../others/link/link'

const UpdateInstruction = () => (
  <div className="sabout_one">
    <div class="m_n_wrapper">
      <div class="m_n">
        <ul class="m_n_ul">
          <li class="m_n_li">
            <a class="m_n_a" aria-current="false" href="/profile/benyoussef">
              <span class="m_n_text">Doctor Info</span>
            </a>
          </li>
          <li class="m_n_li">
            <a class="m_n_a" aria-current="false" href="/">
              <span class="m_n_text">Bio</span>
            </a>
          </li>
          <li class="m_n_li">
            <a class="m_n_a" aria-current="false" href="/explore">
              <span class="m_n_text">Visit My Work</span>
            </a>
          </li>
          <li class="m_n_li">
            <a class="m_n_a" aria-current="false" href="/notifications">
              <span class="m_n_text">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <img src="/images/tree.png" />

    <div className="sabout_one_info">
      <span>Update or edit you profile to make it look more attractive</span>

      <AppLink url="/" className="sec_btn" label="Update profile" />
      <AppLink url="/edit-profile" className="pri_btn" label="Edit profile" />
    </div>
  </div>
)

export default UpdateInstruction
