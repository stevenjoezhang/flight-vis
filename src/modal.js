import { Component } from "react";

class Modal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modal fade" tabIndex="-1" id={this.props.id} ref={this.props.modalRef}>
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{this.props.title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                        {this.props.footer && <div className="modal-footer">
                            {this.props.footer}
                        </div>}
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
