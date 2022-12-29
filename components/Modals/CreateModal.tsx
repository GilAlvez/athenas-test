const CreateModal = () => {
	return (
		<div
			className="modal fade"
			id="createModal"
			tabIndex={-1}
			aria-labelledby="createModalLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h2 className="modal-title fs-5" id="createModalLabel">
							Create New User
						</h2>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body">...</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
							Close
						</button>
						<button type="button" className="btn btn-primary">
							Create User
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateModal;
