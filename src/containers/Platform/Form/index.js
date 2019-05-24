import React, { useState } from 'react'
import { connect } from 'react-redux'
import { submitPlatform as submitPlatformCreator } from '../../../redux/platforms'
import PlatformForm from '../../../components/Platform/Form'

const defaultPlatform = {
  id: '',
  name: '',
  abbreviature: '',
  errors: {
    name: null,
    abbreviature: null
  }
}

const PlatformFormContainer = (props) => {
  const { platforms, submitPlatform, id, action } = props

  let initialPlatform = {}
  if (id !== undefined) {
    let platform = platforms.filter(p => parseInt(p.id) === parseInt(id))[0]
    platform = {
      ...platform,
      errors: {
        name: null,
        abbreviature: null
      }
    }
    initialPlatform = platform
  } else {
    initialPlatform = defaultPlatform
  }

  const [ tempPlatform, setTempPlatform ] = useState(initialPlatform)

  const updateTempPlatform = e => {
    let value = e.target.value
    setTempPlatform({
      ...tempPlatform,
      [e.target.name]: value
    })
  }

  const validateForm = e => {
    let errorsProcessed = {}
    let valid = true
    if (tempPlatform.name === '') {
      valid = false
      errorsProcessed = {
        ...errorsProcessed,
        name: 'No puede estar en blanco'
      }
    } else {
      errorsProcessed = {
        ...errorsProcessed,
        name: null
      }
    }
    if (tempPlatform.abbreviature === '') {
      valid = false
      errorsProcessed = {
        ...errorsProcessed,
        abbreviature: 'No puede estar en blanco'
      }
    } else {
      errorsProcessed = {
        ...errorsProcessed,
        abbreviature: null
      }
    }
    setTempPlatform({
      ...tempPlatform,
      errors: {
        ...tempPlatform.errors,
        ...errorsProcessed
      }
    })
    if (valid) {
      submitPlatform(tempPlatform)
      if (tempPlatform.id === '') {
        setTempPlatform(defaultPlatform)
      }
    }
  }

  return (
    <PlatformForm
      tempPlatform={tempPlatform}
      updateTempPlatform={updateTempPlatform}
      validateForm={validateForm}
      action={action}
    />
  )
}

const mapStateToProps = state => {
  const { platforms } = state.platform
  return {
    platforms
  }
}

const mapDispatchToProps = {
  submitPlatform: submitPlatformCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(PlatformFormContainer)
