import { connect } from "react-redux";
import Landing from "./landing";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = state => ({
  currentUserId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);