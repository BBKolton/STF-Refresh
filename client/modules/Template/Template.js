import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import DevTools from '../../DevTools'

// Import Components
import Helmet from 'react-helmet'
import Headroom from 'react-headroom'
import Grid from 'react-bootstrap/lib/Grid'

import UWHeader from './components/UWHeader/UWHeader'
import STFHeader from './components/STFHeader/STFHeader'
import Footer from './components/Footer/Footer'

import styles from './Template.css'

// Import Actions
import { toggleAddPost } from './TemplateActions'

const meta = [
  { charset: 'utf-8' },
  { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1' }
]

export class Template extends React.Component {
  constructor (props) {
    super(props)
    this.state = { mounted: false }
  }
  componentDidMount () { this.setState({mounted: true}) }
  render () {
    return (
      <div className={styles['site']}>
        {this.state.mounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <div className={styles['content']}>
          <Helmet title='UW Student Tech Fee Commitee' titleTemplate='%s - Student Tech Fee' meta={meta} />
          <UWHeader />
          <Headroom pinStart={55} wrapperStyle={{height: 'inherit !important'}}>
            <STFHeader />
          </Headroom>
          {/* <div className={styles['container']}> */}
          <Grid>
            {this.props.children}
          </Grid>
          {/* </div> */}
        </div>
        <a className={styles['add-post-button']} href='#' onClick={() => this.props.dispatch(toggleAddPost())}>
          Debug Placeholder: Add a post!
        </a>
        <Footer />
      </div>
    )
  }
}

Template.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

// Retrieve data from store as props
function mapStateToProps (store) {
  return {}
}

export default connect(mapStateToProps)(Template)
