import React, { Component } from 'react'
import ProfileNavLink from '../profile-navlink'

class NciCard extends Component {
  render() {
    return (
      <div className="recomm">
        <div class="twPc-div">
          <a class="twPc-bg twPc-block" />

          <div>
            <div class="twPc-button">
              <a
                href="https://twitter.com/mertskaplan"
                class="twitter-follow-button"
                data-show-count="false"
                data-size="large"
                data-show-screen-name="false"
                data-dnt="true"
              >
                ncr sp @Spetaialist doctor
              </a>
            </div>

            <a
              title="Mert S. Kaplan"
              href="https://twitter.com/mertskaplan"
              class="twPc-avatarLink"
            >
              <img
                alt="Mert S. Kaplan"
                src="https://mertskaplan.com/wp-content/plugins/msk-twprofilecard/img/mertskaplan.jpg"
                class="twPc-avatarImg"
              />
            </a>

            <div class="twPc-divUser">
              <div class="twPc-divName">
                <a href="https://twitter.com/mertskaplan">000</a>
                <a href="https://twitter.com/mertskaplan">000</a>
                <a href="https://twitter.com/mertskaplan">000</a>
                <a href="https://twitter.com/mertskaplan">000</a>
              </div>
              <span>
                <a href="https://twitter.com/mertskaplan">
                  @<span>mertskaplan</span>
                </a>
              </span>
            </div>

            <div class="twPc-divStats">
              <ul class="twPc-Arrange">
                <li class="twPc-ArrangeSizeFit">
                  <a href="https://twitter.com/mertskaplan" title="9.840 Tweet">
                    <span class="twPc-StatLabel twPc-block">Lighting</span>
                    <span class="twPc-StatValue">9.840</span>
                  </a>
                </li>
                <li class="twPc-ArrangeSizeFit">
                  <a
                    href="https://twitter.com/mertskaplan/following"
                    title="885 Following"
                  >
                    <span class="twPc-StatLabel twPc-block">Following</span>
                    <span class="twPc-StatValue">885</span>
                  </a>
                </li>
                <li class="twPc-ArrangeSizeFit">
                  <a
                    href="https://twitter.com/mertskaplan/followers"
                    title="1.810 Followers"
                  >
                    <span class="twPc-StatLabel twPc-block">Followers</span>
                    <span class="twPc-StatValue">1.810</span>
                  </a>
                </li>
                <hr />
                <li class="twPc-ArrangeSizeFit">
                  <a
                    href="https://twitter.com/mertskaplan/followers"
                    title="1.810 Followers"
                  >
                    <span class="twPc-StatLabel twPc-block">Patiant</span>
                    <span class="twPc-StatValue">1.810</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NciCard
