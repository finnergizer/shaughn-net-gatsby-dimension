import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/gun_mountain.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic01} style={{height: "300px"}} alt="" /></span>
          <p>University of Ottawa graduate awarded the Faculty of Engineering Plaque for the Single Highest Academic Standing in Computer Science. Recipient of the Governor General's Academic Bronze Medal for the student who achieves the highest average upon graduation from a secondary school. </p>
          <p>Full-stack software developer, having developed CRUD applications, data integrations with cloud services, payment and billing systems with Zuora, data encryption solutions to protect customer data, and more.</p>
          <p>I've a strong interest in machine learning and data science - research and papers on enhancing User-Based Collaborative Filtering Algorithms using Geographic Similarity leveraging Python, Sci-kit Learn, and a Last.fm Music Preference data set to validate and test.</p>
          <p>Aspiring entrepreneur excited to experiment with new frameworks and prototype new ideas - the latest venture being a tool for Instagram that businesses can use to generate leads and activity based on the user profiles of their target market.</p>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main