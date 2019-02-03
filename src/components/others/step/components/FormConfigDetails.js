import React, { Component } from 'react'
import FormClinic from './FormClinic'
import FormGuest from './FormGuest'
import FormPharmacy from './FormPharmacy'
import FormDoctor from './FormDoctor'
import FormOther from './FormOther'
export default class FormConfigDetails extends Component {
  render() {
    const ty = this.props.type

    switch (ty) {
      case 'guest':
        return <FormGuest />
      case 'other':
        return <FormOther />
      case 'doctor':
        return <FormDoctor />
      case 'clinic':
        return <FormClinic />
      case 'pharmacy':
        return <FormPharmacy />
    }
  }
}
