import React, { Component } from "react";
import "./Home.css";
import RealtorLogo from "./logo_transparent.png";

export default class Home extends Component {
  render() {
    return (
      <div className="is-boxed has-animations">
        <div className="body-wrap boxed-container">
          <header className="site-header">
            <div className="container">
              <div className="site-header-inner">
                <div className="brand header-brand">
                  <h1 className="m-0">
                    <a href="#">
                      <img src={RealtorLogo} alt="" />
                    </a>
                  </h1>
                </div>
              </div>
            </div>
          </header>

          <main>
            <section className="hero">
              <div className="container">
                <div className="hero-inner">
                  <div className="hero-copy">
                    <h1 className="hero-title h2-mobile mt-0 is-revealing">
                      Welcome to RealtorLand
                    </h1>
                    <p className="hero-paragraph is-revealing">
                      RealtorLand is a website with a quest for connecting
                      Vietnam real estates Brokers with Buyers and Sellers.
                    </p>
                    <p>
                      This is the first website in Vietnam for this only
                      purpose.
                    </p>
                    <p className="hero-cta is-revealing">
                      <a
                        className="button button-primary button-shadow"
                        href="#69"
                      >
                        Pricing and plans
                      </a>
                    </p>
                  </div>
                  <div className="hero-illustration is-revealing">
                    <img
                      src="https://cdn.logojoy.com/app/generate/ill-industry.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="features section text-center">
              <div className="section-square" />
              <div className="container">
                <div className="features-inner section-inner">
                  <div className="features-wrap">
                    <div className="feature is-revealing">
                      <div className="feature-inner">
                        <div className="feature-icon">
                          <i className="fas fa-server fa-3x icon-color" />
                        </div>
                        <h4 className="feature-title h3-mobile">
                          Free website
                        </h4>
                        <p className="text-sm">
                          Each agent is provided with a profile page
                        </p>
                        <p className="text-sm">
                          Free upto 3 introduction videos
                        </p>
                        <p className="text-sm">Free upto 50 images</p>
                        <p className="text-sm">
                          Powered by a real time chat engine
                        </p>
                        <p className="text-sm">
                          Comes with an advanced sale tracking tool
                        </p>
                      </div>
                    </div>
                    <div className="feature is-revealing">
                      <div className="feature-inner">
                        <div className="feature-icon">
                          <i className="fas fa-robot fa-3x icon-color" />
                        </div>
                        <h4 className="feature-title h3-mobile">
                          AI powered matching tool
                        </h4>
                        <p className="text-sm">
                          Easily match you with the right customers which fall
                          into your expertise.
                        </p>
                        <p className="text-sm" />
                      </div>
                    </div>
                    <div className="feature is-revealing">
                      <div className="feature-inner">
                        <div className="feature-icon">
                          <i className="fas fa-users fa-3x icon-color" />
                        </div>
                        <h4 className="feature-title h3-mobile">
                          Access to a plentiful pool of buyers and sellers.
                        </h4>
                        <p className="text-sm">
                          Your profile will be shown for many potential buyers
                          and sellers.
                        </p>
                        <p className="text-sm">
                          Ability to quickly upgrade to others promotion plans.
                        </p>
                      </div>
                    </div>
                    <div className="feature is-revealing">
                      <div className="feature-inner">
                        <div className="feature-icon">
                          <i className="fas fa-dollar-sign fa-3x icon-color" />
                        </div>
                        <h4 className="feature-title h3-mobile">
                          First free business month
                        </h4>
                        <p className="text-sm">
                          Get all the premium features right after register
                          (could cancel anytime):
                        </p>
                        <p className="text-sm">A free website</p>
                        <p className="text-sm">Real time chat</p>
                        <p className="text-sm">Sale tracking tool</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="pricing section">
              <div className="section-square" />
              <div className="container">
                <div className="pricing-inner section-inner has-top-divider">
                  <h2 id="#69" className="section-title mt-0 text-center">
                    Pricing
                  </h2>
                  <div className="pricing-tables-wrap">
                    <div className="pricing-table">
                      <div className="pricing-table-inner">
                        <div className="pricing-table-main">
                          <div className="pricing-table-header is-revealing">
                            <div className="pricing-table-title mt-12 mb-8">
                              Starter
                            </div>
                            <div className="pricing-table-price mb-32 pb-24">
                              <span className="pricing-table-price-currency h4">
                                $
                              </span>
                              <span className="pricing-table-price-amount h2">
                                27
                              </span>
                              /mo
                            </div>
                          </div>
                          <ul className="pricing-table-features list-reset text-xs mt-24 mb-56">
                            <li className="is-revealing">
                              <span className="list-icon">
                                <svg
                                  width="16"
                                  height="16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill="#5FFAD0"
                                    fillRule="nonzero"
                                    d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"
                                  />
                                </svg>
                              </span>
                              <span>Free website</span>
                            </li>
                            <li className="is-revealing">
                              <span className="list-icon">
                                <svg
                                  width="16"
                                  height="16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill="#5FFAD0"
                                    fillRule="nonzero"
                                    d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"
                                  />
                                </svg>
                              </span>
                              <span>Matching tool</span>
                            </li>
                            <li className="is-revealing">
                              <span className="list-icon">
                                <svg
                                  width="16"
                                  height="16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill="#5FFAD0"
                                    fillRule="nonzero"
                                    d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"
                                  />
                                </svg>
                              </span>
                              <span>Video introduction</span>
                            </li>
                            <li className="is-revealing">
                              <span className="list-icon">
                                <svg
                                  width="16"
                                  height="16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill="#5FFAD0"
                                    fillRule="nonzero"
                                    d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"
                                  />
                                </svg>
                              </span>
                              <span>50 free images hosting</span>
                            </li>
                          </ul>
                        </div>
                        <div className="pricing-table-cta is-revealing">
                          <a
                            className="button button-primary button-shadow button-block"
                            href="#"
                          >
                            Get early access
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="pricing-table">
                      <div className="pricing-table-inner">
                        <div className="pricing-table-main">
                          <div className="pricing-table-header is-revealing">
                            <div className="pricing-table-title mt-12 mb-8">
                              Professional
                            </div>
                            <div className="pricing-table-price mb-32 pb-24">
                              <span className="pricing-table-price-currency h4">
                                $
                              </span>
                              <span className="pricing-table-price-amount h2">
                                97
                              </span>
                              /mo
                            </div>
                          </div>
                          <ul className="pricing-table-features list-reset text-xs mt-24 mb-56">
                            <li className="is-revealing">
                              <span className="list-icon">
                                <svg
                                  width="16"
                                  height="16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill="#5FFAD0"
                                    fillRule="nonzero"
                                    d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"
                                  />
                                </svg>
                              </span>
                              <span>Free website</span>
                            </li>
                            <li className="is-revealing">
                              <span className="list-icon">
                                <svg
                                  width="16"
                                  height="16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill="#5FFAD0"
                                    fillRule="nonzero"
                                    d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"
                                  />
                                </svg>
                              </span>
                              <span>Matching tool</span>
                            </li>
                            <li className="is-revealing">
                              <span className="list-icon">
                                <svg
                                  width="16"
                                  height="16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill="#5FFAD0"
                                    fillRule="nonzero"
                                    d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"
                                  />
                                </svg>
                              </span>
                              <span>Video introduction</span>
                            </li>
                            <li className="is-revealing">
                              <span className="list-icon">
                                <svg
                                  width="16"
                                  height="16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill="#5FFAD0"
                                    fillRule="nonzero"
                                    d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"
                                  />
                                </svg>
                              </span>
                              <span>50 free images hosting</span>
                            </li>
                            <li className="is-revealing">
                              <span className="list-icon">
                                <svg
                                  width="16"
                                  height="16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill="#5FFAD0"
                                    fillRule="nonzero"
                                    d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"
                                  />
                                </svg>
                              </span>
                              <span>Real time chat</span>
                            </li>
                            <li className="is-revealing">
                              <span className="list-icon">
                                <svg
                                  width="16"
                                  height="16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill="#5FFAD0"
                                    fillRule="nonzero"
                                    d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"
                                  />
                                </svg>
                              </span>
                              <span>Sale tracking tool</span>
                            </li>
                          </ul>
                        </div>
                        <div className="pricing-table-cta is-revealing">
                          <a
                            className="button button-primary button-shadow button-block"
                            href="#"
                          >
                            Get early access
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          {/* <div classNameName="container text-center">
          <h1>hey this is home page :)</h1>
          {this.props.username ? (
            <>
              <h3>you are: {this.props.username}</h3>
              {this.props.is_broker ? (
                <h3 classNameName="text-danger">You are a: broker</h3>
              ) : (
                <h3 classNameName="text-success">You are a: normal user</h3>
              )}
            </>
          ) : (
            <h3>you are not logged in</h3>
          )}
        </div> */}
        </div>
      </div>
    );
  }
}
