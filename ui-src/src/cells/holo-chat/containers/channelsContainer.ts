
import { connect } from 'react-redux'
import Channels, { OwnProps, StateProps, DispatchProps } from '../components/channels/channels'
import { Dispatch } from 'redux'

import {
	GetMyChannels,
	CreateCustomChannel,
  SetActiveChannel,
  SetIdentity
} from '../actions'

// import {
//   personasList
// } from '../../holo-vault/actions'

import { Channel, ChannelSpec } from '../types/model/channel'
import { IdentitySpec } from '../types/model/identity'

const mapStateToProps = (state: any): StateProps => {
  return {
    channels: state.holoChat.myChannels,
    channelSubjects: state.holoChat.channelSubjects
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
  	getMyChannels: () => dispatch(GetMyChannels.create(undefined)), // can be written as  () => { return dispatch(...) }
  	newChannel: (channelSpec: ChannelSpec) => dispatch(CreateCustomChannel.create(channelSpec)),
    setActiveChannel: (channel: Channel) => dispatch(SetActiveChannel(channel)),
    setIdentity: (identity: IdentitySpec) => dispatch(SetIdentity.create(identity))
  }
}

export default connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(Channels)
