// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { reduxForm } from 'redux-form';

export default function createForm(name, component) {
  return reduxForm({ form: name, fields: component.formFields })(component);
}
