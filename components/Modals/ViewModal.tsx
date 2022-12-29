const EditModal = ({ id }: { id?: number }) => {
	return (
		<div
			className="modal fade"
			id="editModal"
			tabIndex={-1}
			aria-labelledby="editModalLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h2 className="modal-title fs-5" id="editModalLabel">
							Edit User: {id}
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
							Edit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditModal;
