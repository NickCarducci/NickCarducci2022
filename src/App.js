import React from "react";
import ReactContactForm from "react-mail-form";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { SocialIcon } from "react-social-icons";
import "./styles.css";
import DebtToSales from "./debttosales";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openForm: false };
    this.navbar = React.createRef();
    this.invite = React.createRef();
    this.forSize = React.createRef();
  }
  //https://twitter.com/Nickcarduccii/status/1304091972496510976?s=20

  componentDidMount = () => {
    /*const t1318204966461444096 = document.createElement("t1318204966461444096");
    t1318204966461444096.type = "text/html";
    t1318204966461444096.async = true;
    t1318204966461444096.innerHTML = `<div><blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">You know what is better than a 501(c)3? One that’s owned by every living person- facts only,credit is theft, )))Christ not poems((( (@Nickcarducci) <a href="https://twitter.com/Nickcarducci/status/1318204966461444096?ref_src=twsrc%5Etfw">October 19, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div>`;

    document
      .getElementById("t1318204966461444096")
      .append(t1318204966461444096);
    document.getElementById("t1318204966461444096").style.position = "relative";
    document.getElementById("t1318204966461444096").style.width = "100%";*/
  };

  componentWillUnmount = () => {
    clearTimeout(this.resizer);
  };
  componentDidUpdate = () => {
    if (
      this.state.lastWidth !== window.innerWidth ||
      this.state.lastHeight !== window.innerHeight
    ) {
      clearTimeout(this.resizer);
      this.resizer = setTimeout(() => this.resizee(), 200);
    }
  };
  resizee = () => {
    this.setState({
      lastHeight: window.innerHeight,
      lastWidth: window.innerWidth
    });
  };
  render() {
    //var size = this.forSize.current && this.forSize.current.offsetWidth;
    //var fo = 0;
    //const { lastWidth } = this.state;
    var styleToApply = {
      width: "100%",
      display: "flex",
      maxWidth: "600px",
      flexDirection: "column",
      alignItems: "center",
      left: "0px",
      justifyContent: "center",
      border: "1px solid",
      zIndex: "9",
      color: "black",
      opacity: ".8",
      backgroundColor: "white"
    };
    return (
      <div ref={this.forSize} className="App">
        <br />
        {/*<div id="t1318204966461444096" />*/}
        You know what is better than a 501(c)3? One that’s owned by every living
        person
        <br />
        <br />
        Allowing your business partner to lend out their share for more share of
        your company should be illegal or at least moot
        <br />
        <br />
        when buy Greenland IRS
        <br />
        <h1>Saver Party</h1>
        <div
          style={{
            position: "relative"
          }}
        >
          <div
            ref={this.navbar}
            style={{
              position: "absolute",
              transform: "translate(400%,-100%)",
              color: "grey"
            }}
          >
            xyz
          </div>
        </div>
        financial policy
        <div
          ref={this.invite}
          style={{
            display: "flex",
            marginTop: "20px",
            borderTop: "1px solid black",
            maxWidth: "600px",
            padding: "20px",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          1. Taxes are slavery
          <br />
          2. Sales tax is efficient
          <br />
          a. Local police
          <br />
          b. tollless roads
          <br />
          c. supreme courts
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            maxWidth: "600px",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <div id="t1304091972496510976" />
          @nickcarduccii
          <br />
          <h2>Regulations</h2>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            borderTop: "1px solid black",
            maxWidth: "600px",
            padding: "20px",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          I. forbid investment bank "savings" label
          <br />
          II. forbid insurance pyramid schemes
          <br />
          III. forbid prosecution for non-payment after service
          <br />
          IV. forbid time-based royalty & consumer purchase investment
          <br />
          V. forbid renting more than 5 abodes & storefronts for income
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            maxWidth: "600px",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <div id="t1311661410565398528" />
          <br />
          <h2>Mantra</h2>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            borderTop: "1px solid black",
            maxWidth: "600px",
            padding: "20px",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          price elasticity is our ally
          <br />
          invoices our enemy
          <br />
          credit is youth-abuse
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            borderTop: "1px solid black",
            maxWidth: "600px",
            padding: "20px",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <h2>Candidates</h2>
          <br />
          <div
            style={{
              position: "relative",
              height: "min-content",
              border: "3px solid",
              width: "min-content"
            }}
          >
            <img
              style={{ width: "60px", height: "auto" }}
              src="https://www.dl.dropboxusercontent.com/s/eauftjactpq8rnz/me.png?dl=0"
              alt=""
            />
          </div>
          Nick Carducci
          <br />
          <div>
            nickcarducci2022.com
            <a
              style={{ textDecoration: "none" }}
              href="https://nickcarducci2022.com"
            >
              &#9998;
            </a>
          </div>
          US Senate 2022
          <br />
          <i>invoices are theft!</i>
          <i>writing "Banking is not a Business"</i>
        </div>
        <div
          style={{
            border: "1px solid black",
            width: "min-content",
            padding: "20px",
            marginBottom: "30px",
            color: "white",
            backgroundColor: "blue" //#0000FA
          }}
        >
          <div
            onClick={() => {
              this.setState({ openForm: true, alsoed: false, scrolled: true });
              this.navbar.current.scrollIntoView(false);
              //const answer = this.isInViewport();
              //if (!answer) {
              console.log(
                "go"
              ); /*
              setTimeout(
                () =>
                  this.navbar.current.scrollIntoView({
                    block: "end",
                    behavior: "smooth"
                  }),
                250
              );*/
              //}
            }}
            style={
              !this.state.openForm ? { cursor: "pointer" } : { display: "none" }
            }
          >
            <br />
            join us / contact
          </div>
        </div>
        <div
          ref={this.navbar}
          style={
            this.state.openForm
              ? {
                  display: "flex",
                  position: "relative",
                  width: "100%",
                  height: "470px"
                }
              : {
                  display: "flex",
                  position: "relative",
                  width: "100%",
                  height: "min-content"
                }
          }
        >
          <div className={this.state.openForm ? "formbkgd" : "formbkgdclsd"}>
            <div
              onClick={() => {
                this.setState({ openForm: false, scrolled: false });
                this.invite.current.scrollIntoView(false);
              }}
              style={{
                color: "white",
                position: "absolute",
                right: "33px",
                top: "18px",
                fontSize: "25px",
                cursor: "pointer"
              }}
            >
              &times;
            </div>
            <ReactContactForm
              to="nmcarducci@gmail.com"
              titlePlaceholder="Topic"
              contentsPlaceholder="Body"
              className="emailform"
            />
            <div
              style={{
                position: "relative",
                top: "70px",
                color: "rgb(200,200,250)"
              }}
            >
              nmcarducci@gmail.com
            </div>
          </div>
        </div>
        <div style={this.state.openForm ? { display: "none" } : {}}>
          <SocialIcon
            style={{
              height: "40px",
              width: "40px"
            }}
            url="https://twitter.com/saverparty"
          />
          tweet me <a href="https://twitter.com/saverparty">@saverparty</a>
        </div>
        <span
          /*
          onMouseOver={(e) => {
            var rect = e.target.getBoundingClientRect();
            var x = e.clientX - rect.left; //x position within the element.
            var percentage = x / size;
            var go = percentage * 10;
            var uh = go ? go - 5 : -5;
            fo = String(Math.round(uh));
            console.log(`${fo + "px"} 5px 5px 1px`);
          }}*/
          className={"showss"}
          style={{
            display: "inline",
            width: "max-content",
            height: "min-content",
            maxWidth: "98%",
            boxDecorationBreak: "clone",
            transition: ".25s linear 0s"
          }}
        >
          <SocialIcon
            style={{
              height: "40px",
              width: "40px"
            }}
            url="https://www.researchgate.net/project/Class-action-suit"
          />{" "}
          <a href="https://www.researchgate.net/project/Class-action-suit">
            researchgate.net/project/Class-action-suit
          </a>
          <br />
          <div
            style={{ border: "1px dotted rgba(20,20,20,.3)", padding: "2px" }}
          >
            Debt to earn back from seller?
            <br />
            Contracts made under duress and under impossible pretenses are void
            <br />
            Impossible because it requires the unrequited consent of someone
            with money
            <br />
            to be possible
          </div>
        </span>
        <div className={"showss"} style={{ width: "90%", padding: "10px 0px" }}>
          - Debt & Invoices isn't based in reality. Without numbers, you
          couldn't do it.
          <br />
          <br />
          - Any impossible contract is slavery, although voluntary.
          <br />
          <br />
          - Rothbard calls voluntary slavery an oxymoron, but it is still
          slavery since you need to call an impossible contract something.
          forced majeure will end it.
          <br />
          <br />- Microeconomics teaches this chart in terms of the government
          taxing, but x is just the same.
          <br />
          <br />x = the burden of interest, price-fixes (not quantity of
          interventionalist fixes) or unsettled trade beyond escrow or general
          accrual
        </div>
        <div style={styleToApply}>
          Lending is a conspiracy to prohibit trade
        </div>
        <br />
        <div style={styleToApply}> </div>
        <br />
        <img
          style={{ width: "90%", maxWidth: "800px" }}
          src="https://www.dl.dropboxusercontent.com/s/ohyyc9wensqjmar/interest%20dead%20weight%20%282%29.png?dl=0"
          alt="err"
        />
        <br />
        <br />
        <div style={styleToApply}>
          They have no right to encroach in the market marking prices based on
          impossible promises, or impede in the market like a monopoly, but
          neither do the other two options: fed liquidity or the irs.
        </div>
        <div style={styleToApply}>
          "Opponents of anti-scalping laws say that ticket sales should be like
          any other venture in a capitalist economy and the free market. That
          is, the market should dictate at which price tickets are sold." That's
          not capital or a product
          <br />
          Just abuse, harm and quantifiable damages
        </div>
        <div style={styleToApply}>
          Fraud is certainly paying prices at $82t debt when there is only $7t
          cash. Price fixing
        </div>
        <div style={styleToApply}>
          Amazing eligible ppp isn’t fraud printing/dilution without consent
          from other savers to businesses that are already historically getting
          revenue Claiming to be for everyone but doing that Just to save their
          bills
        </div>
        <div style={styleToApply}>
          How does $7t cash turn into $82t debt? All sellers buy bonds 11x over?
        </div>
        <DebtToSales />
        <div
          //style={{ display: "flex", flexWrap: "wrap" }}
          style={{
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid",
            top: "0px",
            left: "0px",
            width: "100vw",
            position: "relative",
            zIndex: "9998",
            display: "flex",
            flexWrap: "wrap",
            height: "max-content"
            //columnCount:1,
            //columnGap: "0"
          }}
        >
          <div style={styleToApply}>
            Wanna talk about things people r dying over? Debt is IMPOSSIBLE.
            <br />
            😤macroeconomics is a psyop;
            <br />
            😍microeconomics explains what we need to know.
            <br />
            😜Microeconomics describes intervention as a negative,
            <br />
            🤣while macroeconomics teaches intervention by I + G - C
            (interest/dollar-split, bargaining opportunity cost, & principal
            re-servitude) as additive How about calling bond account valuation
            “savings,” & treasury shares not considered in outstanding valuation
            metrics.
          </div>

          <div style={styleToApply}>
            Debt requires:
            <br />
            <br />
            1) dollar split
            <br />
            2) opportunity cost to bargain
            <br />
            3) earning principal back from the producer... plus interest from no
            where- profit outlays, interbank stoploss; share miscount Joe Biden
            is a medical professional lobbyist, trump wants to margin target. I
            want to base prices in reality
          </div>

          <div style={styleToApply}>
            No cash bail or cash bail. There is an alternative. JAIL Let me
            negotiate directly with my doctor. Ban invoices and insurance-
            credit is theft (@Nickcarduccii) Why didn’t you sell each song a la
            carte- All equity with bondage allows for hostility
          </div>

          <div style={styleToApply}>
            Should always be a royalty contract disbursed to profit upon sale or
            withdrawal of the entrepreneur/board/partner/shareholder Time-based
            royalty has nothing to do with the success of the business- Assets
            still have to be greater than debts on their account, unless you
            mean collateralized will retain value for the repossessor, but
            that’s not how price elasticity works granting the repossessor wants
            to resell it Haha, GDP is natural redistribution{" "}
          </div>

          <div style={styleToApply}>
            Growth GDP - Debt - money is changes fixed for only natural
            redistribution
          </div>

          <div style={styleToApply}>
            Velocity of money- Communism is centralization by its citation of
            events and scenarios, actually Your money is not a service it is
            intervention of however trade will naturally fall Unless we wait,
            right They have no right to encroach in the market like that, but
            neither do the other two options: fed liquidity or the irs. Sales
            tax per voluntary location geohash id on transaction for sales tax
            to pick up
          </div>

          <div style={styleToApply}>
            Royalty contracts no deadline- Is capitalism securitizing human
            capital?
          </div>
        </div>
        <br />
        <br />
        {/*<a
          style={{ fontSize: "10px" }}
          href="https://help.twitter.com/en/twitter-for-websites-ads-info-and-privacy"
        >
          https://help.twitter.com/en/twitter-for-websites-ads-info-and-privacy
        </a>*/}
        <div style={{ display: "none" }}>
          <TwitterTweetEmbed
            tweetId={"1304091972496510976"}
            options={{
              display: "flex",
              position: "relative",
              left: "-50%",
              width: `100%`,
              transform: "translateX(150%)"
            }}
          />
        </div>
      </div>
    );
  }
}
