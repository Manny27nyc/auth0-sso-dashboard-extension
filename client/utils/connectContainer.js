// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { connect } from 'react-redux';

const defaultMapStateToProps = (state) => state;
const defaultMapActionsToProps = { };

export default function connectContainer(container) {
  return connect(container.stateToProps || defaultMapStateToProps, container.actionsToProps || defaultMapActionsToProps)(container);
}
