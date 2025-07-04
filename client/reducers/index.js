// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import { auth } from './auth';
import { applications } from './applications';
import { clients } from './clients';
import { application } from './application';
import { status } from './status';
import { connections } from './connections';
import { groups } from './groups';
import { authorization } from './authorization';
import { updateAuthorization } from './updateAuthorization';
import { createApplication } from './createApplication';
import { updateApplication } from './updateApplication';
import { deleteApplication } from './deleteApplication';
import { moveApplication } from './moveApplication';

export default combineReducers({
  routing: routerReducer,
  applications,
  application,
  clients,
  status,
  connections,
  auth,
  groups,
  authorization,
  updateAuthorization,
  createApplication,
  updateApplication,
  deleteApplication,
  moveApplication,
  form: formReducer
});
