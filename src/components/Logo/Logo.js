/** @jsx h */
const { h, Component } = require("preact");
const classnames = require("classnames");
const animate = require("@jam3/gsap-promise");

const BaseComponent = require("../../components/BaseComponent/BaseComponent");
const Icon = require("../../components/Icon/Icon");

class Logo extends BaseComponent {
  constructor() {
    super();
  }

  animateIn(opt = {}) {
    return Promise.all([
      animate.fromTo(
        this.container,
        0,
        {
          autoAlpha: 0,
        },
        {
          ...opt,
          autoAlpha: 1,
        }
      ),
    ]);
  }

  animateOut(opt = {}) {
    return Promise.all([
      animate.to(this.container, 0, {
        ...opt,
        autoAlpha: 0,
      }),
    ]);
  }

  render() {
    return (
      <a
        ref={(c) => {
          this.container = c;
        }}
        className="Logo"
        target="_blank"
      >
        <div style="color:white; font-size: 20px; font-weight: 900; opacity: 0.8">
          From Altair
        </div>
      </a>
    );
  }
}

module.exports = Logo;
